const submit = document.querySelector(".btn");

submit.addEventListener("click", save)

function showUserOnScreen(user) {
    let ul = document.querySelector("ul")
    let li = document.createElement("li");
    let edt = document.createElement("button")
    let dlt = document.createElement("button")
    li.appendChild(document.createTextNode(`${user.uname}  `));
    li.appendChild(document.createTextNode(`  ${user.email}`));
    li.appendChild(document.createTextNode(`  ${user.phone}`));
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
        let url = `http://localhost:3000/delete-user/${user.id}`
        axios.delete(url).then(parent.remove()).catch(error => console.log(error))
    })

    edt.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Please enter the correct deails and click on Submit")
        parent = dlt.parentElement;
        let url = `http://localhost:3000/delete-user/${user.id}`
        axios.delete(url).then(parent.remove()).catch(error => console.log(error))
    })
}


document.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/get-user")
        .then((response) => {
            for (let i = 0; i < response.data.userslist.length; i++) {
                showUserOnScreen(response.data.userslist[i])
            }
        })
})
function save(e) {
    e.preventDefault();
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#number");

    if (name.value == "" || email.value == "" || phone.value == "") {
        alert("Please provide the details");
    }
    else {
        let userDetails = {
            username: name.value,
            useremail: email.value,
            userphone: phone.value
        }
        addUserToScreen(userDetails);
        addUserToLocalStorage(userDetails);

        function addUserToScreen() {
            let ul = document.querySelector("ul")
            let li = document.createElement("li");
            let edt = document.createElement("button")
            let dlt = document.createElement("button")
            li.appendChild(document.createTextNode(`${userDetails.username}  `));
            li.appendChild(document.createTextNode(`  ${userDetails.useremail}`));
            li.appendChild(document.createTextNode(`  ${userDetails.userphone}`));
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
                let url = `http://localhost:3000/delete-user/${id}`
                axios.delete(url).then(parent.remove()).catch(error => console.log(error))
            })

            edt.addEventListener("click", (e) => {
                e.preventDefault();
                parent = dlt.parentElement;
                alert("Please enter the correct deails and click on Submit")
                let url = `http://localhost:3000/delete-user/${id}`
                axios.delete(url).then(parent.remove()).catch(error => console.log(error))
            })
        }

        function addUserToLocalStorage(userDetails) {
            axios.post("http://localhost:3000/add-user", userDetails)
                .then(response => {
                    id = response.data.newUserDetail.id;
                })
                .catch(error => console.log(error))
        }
    }
}