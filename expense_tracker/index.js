let amount = document.querySelector("#amount");
let description = document.querySelector("#description");
let selected = document.querySelector("#category");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
let error = document.querySelector(".error")
button.addEventListener("click", action);
let count = 0;



function action(e){
    e.preventDefault();
    let li = document.createElement("li")
    let remove = document.createElement("button");
    remove.className = "remove"
    let edit = document.createElement("button");
    edit.className = "edit"
    remove.textContent = "Delete";
    edit.textContent = "Edit";
    li.className = "list-items";
    li.appendChild(document.createTextNode(++count))
    li.appendChild(document.createTextNode(". "))
    li.appendChild(document.createTextNode(amount.value))
    li.appendChild(document.createTextNode(" - "))
    li.appendChild(document.createTextNode(description.value))
    li.appendChild(document.createTextNode(" - "))
    li.appendChild(document.createTextNode(selected.value))
    li.appendChild(remove)
    li.appendChild(edit)
    localStorage.setItem(`Expense ${count}`,`${amount.value} ${description.value} ${selected.value}`)
    if(amount.value == "" || description.value == ""){
        let msg = document.createElement("p");
        msg.appendChild(document.createTextNode("* Please provide the inputs"));
        error.appendChild(msg)
    }
    else{
        if(error){
            error.style.display = "none";
        }
        ul.appendChild(li)
    }

    remove.addEventListener("click", removeUser);
    edit.addEventListener("click", editit);


   function removeUser(e){
        e.preventDefault();
        remove.parentElement.remove();
        localStorage.removeItem(`Expense ${remove.parentElement.textContent[0]}`);
        count--;
    }


    function editit(e){
        e.preventDefault();
        alert("Hope you have edited the above section which you want to edit")
        localStorage.setItem(`Expense ${edit.parentElement.textContent[0]}`,`${amount.value} ${description.value} ${selected.value}` )
    }
    
    
}