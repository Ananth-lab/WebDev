const express = require('express');

const fs = require('fs')

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/login', (req, res, next) => {
    res.send(`<body>
    <form action = "/" method ="GET" >
    <input type = "text" id = "name" name = "message">

    <button type = "submit" id="buttons">Submit</button>
    </form>
    <script>
            let btn = document.querySelector("#buttons");
            let uname = document.querySelector('#name');
            btn.addEventListener("click", () => localStorage.setItem('username', uname.value))
    </script>`)
})



app.get('/', (req, res, next) => {
    fs.readFile('massage.txt', (err, data) => {
        if (err) {
            console.log(err);
            data = "No chat exist !";
        }
        res.send(`<br>
        ${data}
        <form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="text" name="massage" id="massage" placeholder="type massage...">
        <input type="hidden" name="username" id="username">
        <button type="submit">send</button>
        </form>
        <h1>This is a chat app !</h1>`);
    })
})

app.post('/', (req, res, next) => {
    fs.appendFile('massage.txt', `${req.body.username} : ${req.body.massage} `,  (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

app.listen(4000)