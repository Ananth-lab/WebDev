const Expense = require("../models/expense");

const sequelize = require("sequelize");

const User = require("../models/user");

exports.getLeaderBoard = async (req, res, next)=> {
    const cart = [];
    const users = await User.findAll({include : ['expenses']})
    users.forEach(user => {
        let total_amount = 0;
        user.expenses.forEach(row => {
           total_amount += row.amount
        });
        cart.push({name : user.username, total_amount : total_amount})
    });
    cart.sort((a, b) => b.total_amount - a.total_amount);
    res.status(201).json({leaderList : cart})
}