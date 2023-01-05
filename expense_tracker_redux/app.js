const express = require("express");

const bodyParser = require('body-parser');

const routes = require("../expense_tracker_redux/routes/routes")

const sequelize = require("../expense_tracker_redux/util/database")

const cors = require("cors")

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(routes);

sequelize.sync()
.then(() => {
    app.listen(3000)
})

