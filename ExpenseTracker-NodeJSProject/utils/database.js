const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense-tracker-nodeJS", "root", "Naimisha@1999", {
    dialect : 'mysql',
    host : "localhost"
});


module.exports = sequelize;