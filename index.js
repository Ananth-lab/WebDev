let form = document.querySelector(".form")
form.addEventListener("click", save)


function save(e){
    if(e.target.classList.contains("submit")){
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let creds = {
        name : username.value,
        pass : password.value
    }
    let creds_serialised = JSON.stringify(creds)
    localStorage.setItem("details", creds_serialised )
    let creds_deserialised = JSON.parse(localStorage.getItem("details"));
    console.log(creds_deserialised)
}
}