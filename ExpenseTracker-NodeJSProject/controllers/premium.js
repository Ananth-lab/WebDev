const Expense = require("../models/expense");

const sequelize = require("sequelize");

const User = require("../models/user");

exports.getLeaderBoard = async (req, res, next) => {
    try{
        const leaderBoard = await User.findAll({
            attributes : ["id", "username", [sequelize.fn("sum", sequelize.col("expenses.amount")), "total_amount"]],
            include : [
                {
                    model : Expense,
                    attributes : []
                }
            ],
            group : ['user.id'],
            order : [['total_amount', 'DESC']]
        })
        res.status(200).json(leaderBoard)
    }
    catch(error){

    }
}