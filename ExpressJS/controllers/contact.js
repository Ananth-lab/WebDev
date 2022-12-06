const path = require("path");
const rootDir = require("../util/path");

exports.getContactsus = (req,res,next) => {
    res.sendFile(path.join(rootDir,"views","contact.html" ));
}

exports.getSuccess = (req,res,next) => {
    res.send(`<h1>Form successfuly filled</h1>`)
}