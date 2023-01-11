const User = require("../models/user");

const bcrypt = require("bcrypt");
const e = require("cors");

exports.SignUpController = async (req, res, next) => {
    try {
        const cycles = 10;
        bcrypt.hash(req.body.password, cycles, async (err, hash) => {
            try {
                const user = await User.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: hash
                })
                res.status(200).json({ newuser: user });
            }
            catch (error) {
                res.status(504).json({error : error.name})
            }
        })
    }
    catch (error) {
        res.status(504).json({ error: error })
    }
}

exports.logInController = async (req, res, next) => {
    try {
        const user = await User.findAll({ where: { email: req.body.email } });
        if (user.length > 0) {
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (result == true) {
                    res.status(201).json({ message: "User login successful" });
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

