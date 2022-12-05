const express = require('express');
const routes = express.Router();
const path = require("path");
const rootDir = require("../util/path")

routes.get('/add-product',(req,res, next) => {
    res.sendFile(path.join(rootDir, "views",'add-product.html'))
})

routes.post('/add-product',(req,res, next) => {
    console.log(JSON.stringify(req.body));
    res.redirect("/shop")
})


module.exports = routes;