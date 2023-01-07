const express = require("express");

const routes = express.Router();

const controller = require("../controllers/controllers");

routes.use("/signup", controller.SignInController);

module.exports = routes;