const express = require("express");

const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const cors = require("cors")


const app = express()

app.use(cors())
// app.use(express.static('public'));

app.use(bodyParser.json());
  
const routes = require("../Appointment/routes/routes")

app.use(routes)

sequelize.sync()
.then(() => {
    app.listen(3000)
})
