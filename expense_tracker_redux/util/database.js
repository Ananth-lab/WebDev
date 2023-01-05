const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense-tracker", "root", "Naimisha@1999", {
    dialect : "mysql",
    host : "localhost"
})

module.exports = sequelize;