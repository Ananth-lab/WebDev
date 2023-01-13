const express = require("express");

const routes = express.Router();

const expenseRouters = require("../controllers/expense");

routes.post("/addExpense",expenseRouters.addExpense);

routes.get("/getExpense",expenseRouters.getExpense );

routes.use("/deleteExpense/:id",expenseRouters.deleteExpense );

module.exports = routes;