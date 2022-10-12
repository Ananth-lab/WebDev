let form = document.querySelector(".form")
form.addEventListener("click", save)

function save(e){
    e.preventDefault();
    if(e.target.classList.contains("submit")){
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let ul = document.querySelector(".members")
    let li = document.createElement("li");
    let dltBtn = document.createElement("button");
    let edtBtn = document.createElement("button");
    dltBtn.className = "delete"
    edtBtn.className = "edit";
    dltBtn.appendChild(document.createTextNode("Delete"));
    edtBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(document.createTextNode(username.value));
    li.appendChild(document.createTextNode(" "))
    li.appendChild(document.createTextNode(password.value));
    li.appendChild(edtBtn)
    li.appendChild(dltBtn)
    ul.appendChild(li)
    dltBtn.addEventListener("click", del)
    edtBtn.addEventListener("click", edt)
    let creds = {
        name : username.value,
        pass : password.value
    }
    let creds_serialised = JSON.stringify(creds)
    localStorage.setItem(`User details ${creds.name}`, creds_serialised )
    let creds_deserialised = JSON.parse(localStorage.getItem("details"));
    function del(e){
        e.preventDefault();
        let parents = dltBtn.parentElement;
        localStorage.removeItem(`User details ${creds.name}`)
        parents.remove();
    }
    function edt(e){
        e.preventDefault();
        let parents = dltBtn.parentElement;
        parents.remove();  
    }
}
}