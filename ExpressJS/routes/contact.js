const express = require('express');
const routes = express.Router();
const path = require("path");
const rootDir = require("../util/path")

routes.use("/contactus",(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","contact.html" ));
})

routes.use("/success",(req,res,next) => {
    res.send(`<h1>Form successfuly filled</h1>`)
})
module.exports = routes;