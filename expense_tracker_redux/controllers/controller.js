const Expense = require("../models/expense")
exports.getExpense = async (req,res,next) => {
    try{
        const expenses = await Expense.findAll();
        res.status(200).json({expense_list : expenses})
    }
    catch(error){
        res.status(501).json({error:error})
    }
}


exports.addExpense = async (req,res,next) => {
   try {
    const expense = await Expense.create({
        amount : req.body.amount,
        description : req.body.description,
        category : req.body.category
    })
    res.status(201).json({expense : expense})
   }
   catch(error) {
    console.log(error)
   }
}

exports.removeExpense = async (req, res, next) => {
    try {
        const id = req.params.id;
        const expense = await Expense.findByPk(id);
        await expense.destroy();
    }
    catch(err) {
        console.log(err)
    }
}

exports.editExpense = async (req,res,next) => {
    try {
        await Expense.update({
            amount :req.body.amount,
            description:req.body.description,
            category:req.body.category
        },{
            where : {
                id : req.params.id
            }
        });
        const updatedExpense = await Expense.findByPk(req.params.id)
        res.status(201).json({updatedExpense : updatedExpense})
    }
    catch(err) {
        console.log(err)
    }
}