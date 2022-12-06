const express = require('express');


const routes = express.Router()
const getProductController = require('../controllers/shop')

routes.get('/',getProductController.getProducts)


module.exports = routes;