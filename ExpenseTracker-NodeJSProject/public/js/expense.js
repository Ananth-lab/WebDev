const subBtn = document.querySelector("#submit-btn");
const token = localStorage.getItem("token");
const premiumBtn = document.querySelector("#premium-btn");
const premium = document.querySelector("#premium");
const leaderBoardDiv = document.querySelector(".leader-board");
const leaderBoardBtn = document.querySelector(".leader-board-btn");
const leaderBoardUl = document.querySelector(".leader-board-ul");
const downloadReport = document.querySelector(".report-download");
const fileAudit = document.querySelector(".file-audit");

window.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/expense/getExpense", { headers: { "authorization": token } })
        .then(res => {
            if (res.data.ispremiumuser == true) {
                premiumBtn.style.visibility = "hidden";
                localStorage.setItem("premiumuser", res.data.ispremiumuser);
                premium.append(document.createTextNode("PREMIUM"))
                premiumBtn.style.visibility = "hidden";
                leaderBoardDiv.style.display = "block"
            }
            for (let i = 0; i < res.data.expenseList.length; i++) {
                expenseDisplay(res.data.expenseList[i]);
            }
        })
        .catch(err => console.log(err))
});

function expenseDisplay(expense) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.className = "expense-list"
    li.appendChild(document.createTextNode(` ${expense.amount} --`));
    li.appendChild(document.createTextNode(` ${expense.description} --`));
    li.appendChild(document.createTextNode(` ${expense.category} `));
    const dltBtn = document.createElement("button");
    dltBtn.className = "delete-btn";
    dltBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dltBtn)
    ul.appendChild(li);
    dltBtn.addEventListener("click", (e) => {
        e.preventDefault();
        deleteExpense(expense.id, dltBtn)
    })
}

function deleteExpense(id, dltBtn) {
    if (confirm(`This action cannot to undone. are you sure?`)) {
        axios.delete(`http://localhost:3000/expense/deleteExpense/${id}`, { headers: { "authorization": token } })
            .then(() => {
                const element = dltBtn.parentElement;
                element.remove();
            })
            .catch(err => console.log(err))
    }

}

subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const amount = document.querySelector("#amount").value;
    const description = document.querySelector("#description").value;
    const category = document.querySelector("#category").value;

    const expense = {
        amount: amount,
        description: description,
        category: category
    };

    axios.post("http://localhost:3000/expense/addExpense", expense, { headers: { "authorization": token } })
        .then(res => {
            document.querySelector("#amount").value = "";
            document.querySelector("#description").value = "";
            document.querySelector("#category").value = "";
            expense.id = res.data.expense.id;
            expenseDisplay(expense)
        })
        .catch(err => console.log(err))
})

premiumBtn.addEventListener("click", async (e) => {
    const response = await axios.get("http://localhost:3000/get-premium/purchase-premium", { headers: { "authorization": token } });
    var options = {
        "key": response.data.key_id,
        "order_id": response.data.order.id,
        "handler": async function (response) {
            const result = await axios.post("http://localhost:3000/get-premium/update-transaction-status", {
                order_id: options.order_id, payment_id: response.razorpay_payment_id
            }, { headers: { "authorization": token } })
            alert("You are now a premium user");
            localStorage.setItem("token", result.data.token)
            premium.append(document.createTextNode("PREMIUM"));
            axios.post("")
        }
    }
    const rzrp1 = new Razorpay(options);
    rzrp1.open();
    e.preventDefault();
    rzrp1.on("payment.failed", () => {
        axios.post("http://localhost:3000/get-premium/update-transaction-status", { order_id: response.data.order.id }, { headers: { "authorization": token } })
        alert("something went wrong");
        rzrp1.close()
    })
})

let leaderboardDisplayed = false;
let leaderboardElements = [];

axios.get("http://localhost:3000/premium/show-leaderboard", { headers: { "authorization": token } })
    .then(res => {
        for (let i = 0; i < res.data.length; i++) {
            const li = document.createElement("li");
            li.className = "leader-board-list"
            li.appendChild(document.createTextNode(` Name : ${res.data[i].username} ,`));
            li.appendChild(document.createTextNode(`Total Expense : ${res.data[i].total_amount|| 0}`));
            leaderboardElements.push(li);
        }
    })
    .catch(err => {
        console.log(err)
    })

leaderBoardBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (leaderboardDisplayed) {
        leaderBoardBtn.innerHTML = 'Show Leaderboard';
        document.querySelector('.leader-board-ul').style.display = 'none';
        leaderboardDisplayed = false;
    } else {
        leaderBoardBtn.innerHTML = 'Hide Leaderboard';
        const ul = document.querySelector(".leader-board-ul");
        ul.style.display = 'block';
        leaderboardElements.forEach(element => {
            ul.append(element)
        });
        leaderboardDisplayed = true;
    }
});


downloadReport.addEventListener("click", (e) => {
    e.preventDefault();
    axios.get("http://localhost:3000/user/download-report", { headers: { "authorization": token } })
    .then((res) => {
        console.log(res.status)
        if(res.status == 200){
            var a = document.createElement("a");
            a.href = res.data.fileURL;
            a.download = 'myexpenses.csv';
            a.click();
        }
        else{
            throw new Error({message : res.data.message})
        }
    })
    .catch(err => console.log(err))
})


let fileauditdisplayed = false;
let fileauditElements = [];

axios.get("http://localhost:3000/premium/show-file-audit", { headers: { "authorization": token } })
    .then(res => {
        for (let i = 0; i < res.data.FileAudit.length; i++) {
            const li = document.createElement("li");
            li.className = "file-audit-list"
            li.appendChild(document.createTextNode(` Date : ${res.data.FileAudit[i].createdAt} ,`));
            li.appendChild(document.createTextNode(`FileURL : ${res.data.FileAudit[i].url}`));
            fileauditElements.push(li);
        }
    })
    .catch(err => {
        console.log(err)
    })

fileAudit.addEventListener("click", (e) => {
    e.preventDefault();
    if (fileauditdisplayed) {
        fileAudit.innerHTML = 'Show Downloads';
        document.querySelector('.file-audit-ul').style.display = 'none';
        fileauditdisplayed = false;
    } else {
        fileAudit.innerHTML = 'Hide Downloads';
        const ul = document.querySelector(".file-audit-ul");
        ul.style.display = 'block';
        fileauditElements.forEach(element => {
            ul.append(element)
        });
        fileauditdisplayed = true;
    }
});