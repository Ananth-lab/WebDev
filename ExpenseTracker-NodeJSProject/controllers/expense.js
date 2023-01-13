const Expense = require("../models/expense");

exports.addExpense = async (req, res, next) => {
    try{
        const expense = await Expense.create({
            amount : req.body.amount,
            description : req.body.description,
            category : req.body.category
        });
        res.status(201).json({expense : expense})
    }
    catch(error) {
        console.log(error)
    }
};


exports.getExpense = async (req, res, next) => {
    try{
        const expenses = await Expense.findAll();
        res.status(201).json({expenseList : expenses})
    }
    catch(error){
        console.log(error)
    }
}


exports.deleteExpense = async (req, res, next) => {
    try{
        const expense = await Expense.findByPk(req.params.id);
        if(expense){
            expense.destroy();
            return res.status(201).json({message : "expense removed"})
        }
        else{
            return res.status(404).json({message : "expense not found"})
        }
    }
    catch(error){
        console.log(error)
    }
}