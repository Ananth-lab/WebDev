const path = require("path");
const User = require("../models/user")

exports.getUserDetails = async (req, res, next) => {
    
    try {
        const users = await User.findAll();
        res.status(200).json({userslist : users})
    }
    catch(err) {
        res.status(500).json({userslist : users})
    }
}

exports.postUserDetails = async (req, res, next) => {
    try {
        const name = req.body.username;
        const phone = req.body.userphone;
        const email = req.body.useremail;

        const data = await User.create({
            uname: name,
            email: email,
            phone: phone
        })

        res.status(201).json({ newUserDetail: data });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}

exports.deleteUserDetails = async (req,res,next) => {
    try{
        const id = req.params.id;
        const user = await User.findByPk(id)
        if(!user){
            console.log('This user does not exist.');
            return res.sendStatus(400);
        }
        await user.destroy();
    }
    catch(err){
        console.log(err)
    }
}