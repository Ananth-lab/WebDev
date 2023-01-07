const User = require("../models/user")

exports.SignUpController = async (req, res, next) => {
    try{
        const user = await User.create({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        })
        res.status(200).json({newuser : user})
    }
    catch(error) {
        res.status(504).json({error: error})
    }
}

exports.logInController = async (req, res, next) => {
    try{
        const user = await User.findAll({where : {email : req.body.email , password : req.body.password}});
        if(!user[0]){
            const useremail = await User.findAll({where : {email : req.body.email}});
            if(!useremail[0]){
                throw new Error("Username and Password does not match")
            }
            else{
                throw new Error("Password is Invalid")
            }
        }
        if(user[0]){
            return res.status(200).json({user : user[0]});
        }
        else {
            throw new Error('User not found');
        }
    }
    catch(error) {
        res.status(505).json({error : error.message})
    }
}