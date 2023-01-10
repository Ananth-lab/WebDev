const subBtn = document.querySelector("#login-btn");

subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const details = {
        email: email,
        password: password
    }
    axios.post("http://localhost:3000/user/login", details)
        .then(() => {
            alert("User login sucessful")
        })
        .catch(error => {
            const errors = document.querySelector("#error");
            errors.innerHTML = `${error.response.data.error}`;
        })
})