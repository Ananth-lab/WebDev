const express = require('express');


const routes = express.Router()


routes.get('/',(req,res, next) => {
    res.send("<h1>Hello from Node JS</h1>")
})


module.exports = routes;