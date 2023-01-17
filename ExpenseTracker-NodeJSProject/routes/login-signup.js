const express = require("express");

const routes = express.Router();

const logInController = require("../controllers/login");

const signUpController = require("../controllers/signin");

routes.use("/signup", signUpController.SignUpController);

routes.use("/login", logInController.logInController);

routes.use("/forgotpassword", logInController.forgotPassword);

module.exports = routes;