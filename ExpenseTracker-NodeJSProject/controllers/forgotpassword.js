const sgMail = require('@sendgrid/mail');

const bcrypt = require("bcrypt");

const uuid = require("uuid");

const Forgotpassword = require("../models/forgotpassword");

const User = require("../models/user");

exports.forgotPassword = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (user) {
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            const id = uuid.v4();
            user.createForgotpassword({
                id,
                active: true
            })
                .catch(err => {
                    throw new Error(err);
                })
            const msg = {
                to: user.email, 
                from: 'anantharajabk@gmail.com', 
                subject: 'Sending with SendGrid is Fun',
                text: 'and easy to do anywhere, even with Node.js',
                html: `<a href="http://localhost:3000/password/resetpassword/${id}">Reset password</a>`
            }
            sgMail
                .send(msg)
                .then((response) => {
                    return res.status(response[0].statusCode).json({ message: 'Link to reset password sent to your mail ', sucess: true })
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.resetPassword = async (req,res,next) => {
    try{

    }
    catch(error){
        console.log(error)
    }
}

