const subBtn = document.querySelector("#submit-btn");

subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const uname = document.querySelector("#uname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const details = {
        username: uname,
        email: email,
        password: password
    }
    axios.post("http://localhost:3000/user/signUp", details)
})