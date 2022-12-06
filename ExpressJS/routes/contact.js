const express = require('express');
const routes = express.Router();
const getContactController = require('../controllers/contact')

routes.use("/contactus",getContactController.getContactsus)

routes.use("/success",getContactController.getSuccess)
module.exports = routes;