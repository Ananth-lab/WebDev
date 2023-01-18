const express = require("express");

const routes = express.Router();

const forgotPasswordController = require("../controllers/forgotpassword")

routes.use("/forgotpassword", forgotPasswordController.forgotPassword);

routes.use("/resetpassword/:id", forgotPasswordController.resetPassword);

module.exports = routes;