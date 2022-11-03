const submit = document.querySelector("#Submit");

submit.addEventListener("click", save)

document.addEventListener("DOMContentLoaded", () => {
    for (const [key, value] of Object.entries(localStorage)) {
        let ul = document.querySelector("ul")
        let li = document.createElement("li");
        let edt = document.createElement("button")
        let dlt = document.createElement("button")
        li.appendChild(document.createTextNode(`${key}  `));
        li.appendChild(document.createTextNode(`  ${value}`));
        edt.className = "edit";
        dlt.className = "delete";
        edt.appendChild(document.createTextNode("Edit"));
        dlt.appendChild(document.createTextNode("Delete"))
        li.appendChild(edt)
        li.appendChild(dlt)
        ul.appendChild(li)

        dlt.addEventListener("click", (e) =>{
            e.preventDefault();
            parent = dlt.parentElement;
            parent.remove()
        })

        edt.addEventListener("click", (e) =>{
            e.preventDefault();
            parent = dlt.parentElement;
            parent.remove()
        })
     }
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



            dlt.addEventListener("click", (e) =>{
                e.preventDefault();
                parent = dlt.parentElement;
                parent.remove()
            })

            edt.addEventListener("click", (e) =>{
                e.preventDefault();
                parent = dlt.parentElement;
                parent.remove()
            })
        }

        function addUserToLocalStorage() {
            localStorage.setItem(JSON.stringify(userDetails.username), JSON.stringify (userDetails.useremail))
            axios.post("https://crudcrud.com/api/877a14ad6fe44f1f9dde829c3fed0a97/appointmentData", userDetails)
        }
    }
}