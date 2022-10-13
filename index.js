let form = document.querySelector(".form")
form.addEventListener("click", save)

function save(e){
    e.preventDefault();
    if(e.target.classList.contains("submit")){
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let creds = {
        name : username.value,
        mail : email.value
    }
    if(JSON.parse(localStorage.getItem(`User details ${creds.name}`))){
        removeUser(creds.name);
    }     
    addUser(username.value,email.value)
    let creds_serialised = JSON.stringify(creds)
    localStorage.setItem(`User details ${creds.name}`, creds_serialised )
    let creds_deserialised = JSON.parse(localStorage.getItem("details"));

    function removeUser(usrname){
        let parent = document.querySelector("li");
        if(parent.textContent.includes(`${usrname}`)){
                parent.remove()
         }
    }
    function addUser(username, email){
        let ul = document.querySelector(".members");
        let li = document.createElement("li");
        let dltBtn = document.createElement("button");
        let edtBtn = document.createElement("button");
        dltBtn.className = "delete"
        edtBtn.className = "edit";
        dltBtn.appendChild(document.createTextNode("Delete"));
        edtBtn.appendChild(document.createTextNode("Edit"));
        li.appendChild(document.createTextNode(username));
        li.appendChild(document.createTextNode(" "))
        li.appendChild(document.createTextNode(email));
        li.appendChild(edtBtn)
        li.appendChild(dltBtn)
        ul.appendChild(li)
        dltBtn.addEventListener("click", del)
        edtBtn.addEventListener("click", edt)


        function del(e){
            e.preventDefault();
            let parents = dltBtn.parentElement;
            parents.remove();
        }
        function edt(e){
            e.preventDefault();
            let parents = dltBtn.parentElement;
            parents.remove();  
        }
    }
}
}

