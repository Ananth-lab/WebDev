const express = require('express');
const routes = express.Router();
const ProductController = require('../controllers/product')

routes.get('/add-product',ProductController.addProduct)

routes.post('/add-product',ProductController.postProduct)


module.exports = routes;