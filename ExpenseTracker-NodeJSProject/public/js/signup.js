const subBtn = document.querySelector("#signUp-btn");

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
        .then(() => {
            console.log("signin successful")
        })
        .catch(error => {
            const errors = document.querySelector("#error");
            errors.innerHTML = `${error.message}`;
        })
})