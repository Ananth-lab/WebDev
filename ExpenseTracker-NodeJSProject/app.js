const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser")

const routes = require("./routes/routes");

const sequelize = require("./utils/database")

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/user", routes);

sequelize.sync()
.then(() => {
   app.listen(3000);
})
