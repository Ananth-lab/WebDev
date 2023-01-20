const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense-tracker-nodeJS", "root" , "Naimisha@1999", {
    dialect : 'mysql',
    host : process.env.DATABASE_HOST
});


module.exports = sequelize;