const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.authenticate = async (req,res,next) => {
    try{
        const token = req.header("Authorization");
        const user =  jwt.verify(token, "urbf67q34bnasdbj4373qniasdjnv473dkf584");
        // console.log("user", user)
        User.findOne({where : {id : user.userid}})
        .then(user => {
            req.user = user;
            next();
        })
         .catch(error =>  {throw new Error(error)})
    }
    catch(error){
        console.log("error");
        return res.status(401).json({success : false})
    }
}

