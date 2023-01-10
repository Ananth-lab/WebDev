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
                return res.status(404).json({error : "User Not Found"});
            }
            else{
                return res.status(401).json({error : "User is Not authorized"})
            }
        }
        if(user[0]){
            return res.status(200).json({user : user[0]});
        }
        else {
            return res.status(404).json({error : "User Not Found"});
        }
    }
    catch(error) {
        res.status(500).json({error : error.message})
    }
}