const subBtn = document.querySelector("#login-btn");

subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if(email == "" || password == ""){
        return alert("Please enter the values")
    }
    const details = {
        email: email,
        password: password
    }
    axios.post("http://localhost:3000/user/login", details)
        .then((res) => {
            alert(res.data.message)
        })
        .catch(error => {
            const errors = document.querySelector("#error");
            errors.innerHTML = `${error.response.data.error}`;
        })
})