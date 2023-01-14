const User = require("../models/user");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

function generateAccessToken(id){
    return jwt.sign({userid : id}, "urbf67q34bnasdbj4373qniasdjnv473dkf584")
}
exports.logInController = async (req, res, next) => {
    try {
        const user = await User.findAll({ where: { email: req.body.email } });
        if (user.length > 0) {
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (result == true) {
                    res.status(201).json({ message: "User login successful" , token : generateAccessToken(user[0].id)});
                }
                else {
                    res.status(401).json({ error: "User is not authorized" })
                }
            })
        }
        
        else {
            res.status(404).json({ error: "User not found" })
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}