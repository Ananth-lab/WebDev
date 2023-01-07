const User = require("../models/user")

exports.SignInController = async (req, res, next) => {
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