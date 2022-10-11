let form = document.querySelector("#addForm");
let items = document.querySelector("#items")

form.addEventListener("submit", addItem);


function addItem(e){
    e.preventDefault();
    let li = document.createElement("li");
    let input = document.getElementById("item").value;
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(input))
    items.append(li)

    let dltBtn = document.createElement("button");
    dltBtn.className = "btn btn-danger btn-sm float-right delete";
    dltBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dltBtn)
}

items.addEventListener("click", delet);

function delet(e){
    e.preventDefault();
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure?")){
            let del = e.target.parentElement;
            del.remove()
        }
    }
}