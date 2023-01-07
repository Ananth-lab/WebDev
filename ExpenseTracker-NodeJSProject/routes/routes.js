const express = require("express");

const routes = express.Router();

const controller = require("../controllers/controllers");

routes.use("/signup", controller.SignUpController);

routes.use("/login", controller.logInController);

module.exports = routes;