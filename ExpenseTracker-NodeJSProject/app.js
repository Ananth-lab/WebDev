const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser")

const loginRoutes = require("./routes/login-signup");

const expenseRoutes = require("./routes/expense")

const sequelize = require("./utils/database")

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/user", loginRoutes);

app.use("/expense", expenseRoutes);

sequelize.sync()
.then(() => {
   app.listen(3000);
})
