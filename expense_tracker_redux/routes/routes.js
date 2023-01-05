const express = require("express");

const controller = require("../controllers/controller")
const routes = express.Router();

routes.get("/get-expense", controller.getExpense);

routes.post("/post-expense", controller.addExpense);

routes.delete("/remove-expense/:id", controller.removeExpense);

routes.put("/edit-expense/:id", controller.editExpense);

module.exports = routes;