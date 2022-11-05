let amount = document.querySelector("#amount");
let description = document.querySelector("#description");
let selected = document.querySelector("#category");
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
    li.appendChild(document.createTextNode(` ${details.selected} `))
    li.appendChild(remove)
    li.appendChild(edit);
    ul.appendChild(li);

    remove.addEventListener("click", (e) => {
        e.preventDefault();
        parent = remove.parentElement;
        let url = `https://crudcrud.com/api/251f909ffbcf4673b96dd64544588380/expenseTracker/${details._id}`
        axios.delete(url).then(parent.remove()).catch(error => console.log(error))
    })


    edit.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Please enter the correct deails and click on Submit")
        parent = remove.parentElement;
        parent.remove()
    })
}
document.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/251f909ffbcf4673b96dd64544588380/expenseTracker")
        .then(response => {
            for (let i = 0; i < response.data.length; i++) {
                showOnScreen(response.data[i])
            }
        })
        .catch(error => console.log(error))
})
function save(e) {
    e.preventDefault();
    let details = {
        amount: amount.value,
        description: description.value,
        selected: selected.value
    }
    storeIt(details)
    function storeIt(details) {
        let detailsString = JSON.stringify(details);
        localStorage.setItem(`${++count}`, detailsString)
        axios.post("https://crudcrud.com/api/251f909ffbcf4673b96dd64544588380/expenseTracker", details)
            .then(response => {
                let id = response.data._id;
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
                    li.appendChild(document.createTextNode(` ${details.selected} `))
                    li.appendChild(remove)
                    li.appendChild(edit);
                    ul.appendChild(li);

                    remove.addEventListener("click", (e) => {
                        e.preventDefault();
                        parent = remove.parentElement;
                        let url = `https://crudcrud.com/api/251f909ffbcf4673b96dd64544588380/expenseTracker/${id}`
                        axios.delete(url).then(parent.remove()).catch(error => console.log(error))
                    })

                    edit.addEventListener("click", (e) => {
                        e.preventDefault();
                        alert("Please enter the correct deails and click on Submit")
                        parent = remove.parentElement;
                        parent.remove()
                    })
                }
            })
    }
}