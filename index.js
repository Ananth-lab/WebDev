let form = document.querySelector(".form")
form.addEventListener("click", save)


function save(e){
    if(e.target.classList.contains("submit")){
    let username = document.getElementById("username");
    let password = document.getElementById("password")
    localStorage.setItem(username.value, password.value)
    console.log(username, password)
}
}