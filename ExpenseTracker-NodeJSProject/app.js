const express = require("express");

const cors = require("cors");

const devenv = require('dotenv');

const bodyParser = require("body-parser");

const loginRoutes = require("./routes/login-signup");

const expenseRoutes = require("./routes/expense");

const purchaseRoutes = require("./routes/purchase");

const premiumRoutes = require("./routes/premium");

const sequelize = require("./utils/database");

const User = require("./models/user");

const Expense = require("./models/expense");

const Order = require("./models/order");

const app = express();

devenv.config();

app.use(bodyParser.json());

app.use(cors());

app.use("/user", loginRoutes);

app.use("/password", loginRoutes);

app.use("/expense", expenseRoutes);

app.use("/get-premium", purchaseRoutes);

app.use("/premium", premiumRoutes);

User.hasMany(Expense, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});


Expense.belongsTo(User, {
  foreignKey: 'userId'
});


User.hasMany(Order, {
  foreignKey: "userId"
});

Order.belongsTo(User, {
  foreignKey: "userId"
});



sequelize.sync()
  .then(() => {
    app.listen(3000);
  });
