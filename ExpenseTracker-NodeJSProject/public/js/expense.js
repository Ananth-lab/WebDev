const subBtn = document.querySelector("#submit-btn");

document.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/expense/getExpense")
        .then(res => {
            for (let i = 0; i < res.data.expenseList.length; i++) {
                expenseDisplay(res.data.expenseList[i]);
            }
        })
        .catch(err => console.log(err))
});

function expenseDisplay(expense){
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

function deleteExpense(id, dltBtn){
    axios.delete(`http://localhost:3000/expense/deleteExpense/${id}`)
    .then(() => {
        const element = dltBtn.parentElement;
        element.remove();
    })
    .catch(err => console.log(err))
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

    axios.post("http://localhost:3000/expense/addExpense", expense)
        .then(res => {
            document.querySelector("#amount").value = "";
            document.querySelector("#description").value = "";
            document.querySelector("#category").value = "";
            expense.id = res.data.expense.id;
            expenseDisplay(expense)
        })
        .catch(err => console.log(err))
})