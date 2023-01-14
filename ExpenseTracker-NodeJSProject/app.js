const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser")

const loginRoutes = require("./routes/login-signup");

const expenseRoutes = require("./routes/expense")

const sequelize = require("./utils/database");

const User = require("./models/user");

const Expense = require("./models/expense");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/user", loginRoutes);

app.use("/expense", expenseRoutes);

User.hasMany(Expense, {
   foreignKey: 'userId',
   onDelete: 'CASCADE',
 });
 
 Expense.belongsTo(User, {
   foreignKey: 'userId',
 });

sequelize.sync()
.then(() => {
   app.listen(3000);
})
