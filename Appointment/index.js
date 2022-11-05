const submit = document.querySelector("#Submit");

submit.addEventListener("click", save)


function showUserOnScreen(user) {
    let ul = document.querySelector("ul")
    let li = document.createElement("li");
    let edt = document.createElement("button")
    let dlt = document.createElement("button")
    li.appendChild(document.createTextNode(`${user.username}  `));
    li.appendChild(document.createTextNode(`  ${user.useremail}`));
    edt.className = "edit";
    dlt.className = "delete";
    edt.appendChild(document.createTextNode("Edit"));
    dlt.appendChild(document.createTextNode("Delete"))
    li.appendChild(edt)
    li.appendChild(dlt)
    ul.appendChild(li)
    dlt.addEventListener("click", (e) => {
        e.preventDefault();
        parent = dlt.parentElement;
        //
        let url = `https://crudcrud.com/api/cc832c3f5cea4bdba758a8fa9eb2c648/appointmentData/${user._id}`
        axios.delete(url).then(parent.remove()).catch(error => console.log(error))
    })

    edt.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Please enter the correct deails and click on Submit")
        parent = dlt.parentElement;
        parent.remove()
    })
}


document.addEventListener("DOMContentLoaded", () => {
    // const localStorageObj = localStorage;
    // const localStorageKeys = Object.keys(localStorageObj)
    // for(let i = 0; i < localStorageKeys.length; i++){
    //     const key = localStorageKeys[i];
    //     const userDetailsSting = localStorageObj[key];
    //     const userDetailsObj = JSON.parse(userDetailsSting);
    //     showUserOnScreen(userDetailsObj)
    // }

    axios.get("https://crudcrud.com/api/cc832c3f5cea4bdba758a8fa9eb2c648/appointmentData")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                showUserOnScreen(response.data[i])
            }
        })
})
function save(e) {
    e.preventDefault();
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");

    if (name.value == "" || email.value == "") {
        alert("Please provide the details");
    }
    else {
        let userDetails = {
            username: name.value,
            useremail: email.value
        }

        addUserToScreen();
        addUserToLocalStorage();

        function addUserToScreen() {
            let ul = document.querySelector("ul")
            let li = document.createElement("li");
            let edt = document.createElement("button")
            let dlt = document.createElement("button")
            li.appendChild(document.createTextNode(`${userDetails.username}  `));
            li.appendChild(document.createTextNode(`  ${userDetails.useremail}`));
            edt.className = "edit";
            dlt.className = "delete";
            edt.appendChild(document.createTextNode("Edit"));
            dlt.appendChild(document.createTextNode("Delete"))
            li.appendChild(edt)
            li.appendChild(dlt)
            ul.appendChild(li)



            dlt.addEventListener("click", (e) => {
                e.preventDefault();
                parent = dlt.parentElement;
                // parent.remove()
                let url = `https://crudcrud.com/api/cc832c3f5cea4bdba758a8fa9eb2c648/appointmentData/${id}`
                axios.delete(url).then(
                    parent.remove()
                )
                    .catch(error => console.log(error))
            })

            edt.addEventListener("click", (e) => {
                e.preventDefault();
                alert("Please enter the correct deails and click on Submit")
                parent = dlt.parentElement;
                parent.remove()
            })
        }

        function addUserToLocalStorage() {
            let userDetailsString = JSON.stringify(userDetails)
            localStorage.setItem(`${userDetails.username}`, userDetailsString)
            axios.post("https://crudcrud.com/api/cc832c3f5cea4bdba758a8fa9eb2c648/appointmentData", userDetails)
                .then(response => {
                    id = response.data._id;
                })
                .catch(error => console.log(error))
        }
    }
}