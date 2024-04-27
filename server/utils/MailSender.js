
const nodemailer = require("nodemailer");
// const dotenv = require("dotenv").config;

const mailSender = async (email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
                host:smtp.gmail.com,
                auth:{
                    user: process.env.EMAIL_USERNAME,
                    pass: "reyvkzsmnhpgvzsz",
                }
            })


            let info = await transporter.sendMail({
                from: 'StudyNotion || CodeHelp - by Babbar',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;