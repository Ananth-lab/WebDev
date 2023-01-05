let amount = document.querySelector("#amount");
let description = document.querySelector("#description");
let category = document.querySelector("#category");
let button = document.querySelector("#submit");
let ul = document.querySelector("ul");
button.addEventListener("click", save);
var count = 0;

function showOnScreen(details) {
    let li = document.createElement("li")
    let remove = document.createElement("button");
    let edit = document.createElement("button");
    remove.textContent = "Delete";
    edit.textContent = "Edit";
    li.className = "list-items";
    li.appendChild(document.createTextNode(`${details.amount} `))
    li.appendChild(document.createTextNode(` ${details.description} `))
    li.appendChild(document.createTextNode(` ${details.category} `))
    li.appendChild(remove)
    li.appendChild(edit);
    ul.appendChild(li);

    remove.addEventListener("click", (e) => {
        e.preventDefault();
        parent = remove.parentElement;
        let url = `http://localhost:3000/remove-expense/${details.id}`
        axios.delete(url).then(parent.remove()).catch(error => console.log(error))
    })


    edit.addEventListener("click", (e) => {
        e.preventDefault();
        parent = remove.parentElement;
        let amount = document.querySelector("#amount");
        let description = document.querySelector("#description");
        let category = document.querySelector("#category");
        let newDetails = {
            amount: amount.value,
            description: description.value,
            category: category.value
        }
        let url = `http://localhost:3000/edit-expense/${details.id}`
        axios.put(url, newDetails)
            .then(() => {
                parent.remove();
            })
            .catch(error => console.log(error))
    })
}
document.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/get-expense")
        .then(response => {
            for (let i = 0; i < response.data.expense_list.length; i++) {
                showOnScreen(response.data.expense_list[i])
            }
        })
        .catch(error => console.log(error))
})
function save(e) {
    e.preventDefault();
    let details = {
        amount: amount.value,
        description: description.value,
        category: category.value
    }
    if (amount.value = "" || description.value == "") {
        alert("Please provide all the information")
    }
    else {


        storeIt(details)
        function storeIt(details) {
            axios.post("http://localhost:3000/post-expense", details)
                .then(response => {
                    let id = response.data.expense.id;
                    showDetails(details)
                    function showDetails(details) {
                        let li = document.createElement("li")
                        let remove = document.createElement("button");
                        let edit = document.createElement("button");
                        remove.textContent = "Delete";
                        edit.textContent = "Edit";
                        li.className = "list-items";
                        li.appendChild(document.createTextNode(`${details.amount} `))
                        li.appendChild(document.createTextNode(` ${details.description} `))
                        li.appendChild(document.createTextNode(` ${details.category} `))
                        li.appendChild(remove)
                        li.appendChild(edit);
                        ul.appendChild(li);

                        remove.addEventListener("click", (e) => {
                            e.preventDefault();
                            parent = remove.parentElement;
                            let url = `http://localhost:3000/remove-expense/${id}`
                            axios.delete(url).then(parent.remove()).catch(error => console.log(error))
                        })

                        edit.addEventListener("click", (e) => {
                            e.preventDefault();
                            parent = remove.parentElement;
                            let amount = document.querySelector("#amount");
                            let description = document.querySelector("#description");
                            let category = document.querySelector("#category");
                            let newDetails = {
                                amount: amount.value,
                                description: description.value,
                                category: category.value
                            }
                            let url = `http://localhost:3000/edit-expense/${id}`
                            axios.put(url, newDetails)
                                .then(() => {
                                    parent.remove();
                                })
                                .catch(error => console.log(error))
                        })
                    }
                })
        }
    }
}