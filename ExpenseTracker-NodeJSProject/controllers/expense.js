const Expense = require("../models/expense");

exports.addExpense = async (req, res, next) => {
    try{
        const expense = await Expense.create({
            amount : req.body.amount,
            description : req.body.description,
            category : req.body.category,
            userId : req.user.id
        });
        res.status(201).json({expense : expense})
    }
    catch(error) {
        console.log(error)
    }
};


exports.getExpense = async (req, res, next) => {
    try{
        const expenses = await Expense.findAll({where:{userId : req.user.id}}); // req.user.getExpense().then().catch()
        res.status(201).json({expenseList : expenses, success : true, ispremiumuser : req.user.ispremiumuser})
    }
    catch(error){
        console.log(error)
    }
}


exports.deleteExpense = async (req, res, next) => {
    try{
        const expense = await Expense.findOne({where : {id : req.params.id, userId : req.user.id}});
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