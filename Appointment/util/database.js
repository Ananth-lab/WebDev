const Sequelize = require('sequelize');

const sequelize = new Sequelize("booking-appointment", 'root', 'Naimisha@1999', {
    dialect: 'mysql',
    host: 'localhost'
});


module.exports = sequelize;