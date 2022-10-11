let form = document.querySelector("#addForm");
let items = document.querySelector("#items")
let filter = document.getElementById("filter")
filter.addEventListener("keyup", filterItems)
form.addEventListener("submit", addItem);

function filterItems(e){
    let text = e.target.value.toLowerCase()
    let item = items.getElementsByTagName("li")
   // console.log(item)
    //console.log(item)
    Array.from(item).forEach(function(itm){
        var itmName = itm.textContent;
        console.log(itmName)
        if(itmName.toLowerCase().indexOf(text) != -1){
            itm.style.display = "block"
        }
        else{
            itm.style.display = "none"
        }
    })
}

function addItem(e){
    e.preventDefault();
    let li = document.createElement("li");
    let input = document.getElementById("item").value;
    let desc = document.getElementById("description").value;
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(input))
    li.appendChild(document.createTextNode(" "))
    li.appendChild(document.createTextNode(desc))
    items.append(li)

    let dltBtn = document.createElement("button");
    dltBtn.className = "btn btn-danger btn-sm float-right delete";
    dltBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dltBtn)

    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-danger btn-sm float-right delete";
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn)
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