const express = require('express');
const routes = express.Router();


routes.get('/add-product',(req,res, next) => {
    res.send(`<form action = "/admin/add-product" method = "POST"><input type = "text" name = "title"> <input type = "number" name = "size"><button type = "submit">Add product</button></input></form>`)
})

routes.post('/add-product',(req,res, next) => {
    console.log(JSON.stringify(req.body));
    res.redirect("/shop")
})


module.exports = routes;