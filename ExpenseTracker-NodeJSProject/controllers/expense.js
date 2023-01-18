const Expense = require("../models/expense");

const AWS = require("aws-sdk");

function uploadToS3(data, filename) {
    const BUCKET_NAME = process.env.BUCKET_NAME;
    const IAM_USER_KEY = process.env.IAM_USER_KEY;
    const IAM_USER_SECRET = process.env.IAM_USER_SECRET;

    let s3bucket = new AWS.S3({
        accessKeyId : IAM_USER_KEY,
        secretAccessKey : IAM_USER_SECRET
    });
        var params = {
            Bucket : BUCKET_NAME,
            Key : filename,
            Body : data,
            ACL : "public-read"
        };
        return new Promise((resolve, reject) => {
            s3bucket.upload(params, (err, s3response) => {
                if(err){
                    console.log("Something went wrong", err)
                    reject(err)
                }
                else {
                    resolve(s3response.Location);
                }
            })
        })
}

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
        //const expenses = await Expense.findAll({where:{userId : req.user.id}}); 
        const expenses =await  req.user.getExpenses();
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


exports.downloadReport = async (req, res, next) => {
    try{
        const expenses = await req.user.getExpenses();
        const stringifiedExpense = JSON.stringify(expenses);
        const userId = req.user.id;
        const filename = `Expense.txt${userId}${new Date()}`;
        const fileURL =  await uploadToS3(stringifiedExpense, filename);
        res.status(200).json({fileURL, success : true})
    }
    catch(error){
        console.log(error)
    }
}