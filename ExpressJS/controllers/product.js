const rootDir = require("../util/path");
const path = require('path')
exports.addProduct = (req,res, next) =>  {
    res.sendFile(path.join(rootDir, "views",'add-product.html'))
}

exports.postProduct = (req,res, next) => {
    console.log(JSON.stringify(req.body));
    res.redirect("/shop")
}
