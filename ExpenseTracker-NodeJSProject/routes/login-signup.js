const express = require("express");

const userAuthentication = require("../middlewares/auth");

const routes = express.Router();

const logInController = require("../controllers/login");

const premiumController = require("../controllers/premium");

const signUpController = require("../controllers/signin");

routes.use("/signup", signUpController.SignUpController);

routes.use("/login", logInController.logInController);

routes.use("/download-report",userAuthentication.authenticate, premiumController.downloadReport);

module.exports = routes;