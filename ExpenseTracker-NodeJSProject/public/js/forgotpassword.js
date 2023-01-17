const forgotPasswordSubmit = document.querySelector("#forgot-password-submit-btn");


forgotPasswordSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    axios.post("http://localhost:3000/password/forgotpassword", email)
    .then(res => {
        console.log(res)
    })
    .catch(err =>{
        console.log(err)
    })
})