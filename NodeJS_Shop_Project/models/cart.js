const fs = require('fs');
const path = require('path')
const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
  );

module.exports = class cart {
    static addProduct(id, productPrice) {
        fs.readFile(p,(err,fileContent) => {
            const cart = {products : [], totalPrice : 0}
            if(!err){
                cart = JSON.parse(fileContent)
            }
            const existngProductIndex = cart.products.findIndex(prod => prodid == id);
            const existngProduct = cart.products[existngProductIndex]
            let updatedProduct;
            if(existngProduct){
                updatedProduct = {...existngProduct};
                updatedProduct.qty = updatedProduct.qty + 1; 
                cart.products = [...cart.products];
                cart.products[existngProductIndex] = updatedProduct;
            }else{
                updatedProduct = {id:id, qty : 1};
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err)
            })
        });
    }
}