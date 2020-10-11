const nodemailer = require('nodemailer');
const keys = require('../config/keys')

const sendEmail = ({name, surname, email, action, resetLink}) => {
    let mailOptions;
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:"ckzlaundry@gmail.com",
            pass:"zaq1@WSX"
        }
    });
    if (action === 'register'){
        mailOptions = {
            from: 'ckzlaundry@gmail.com',
            to: `${email}`,
            subject: 'Witamy w applikacji CKZ_Pralnia',
            text: `Wtamy ${name} ${surname} w naszej aplikacji do rezerwacji prania.`
            }
    } else {
        mailOptions = {
            from: 'ckzlaundry@gmail.com',
            to: `${email}`,
            subject: 'Zresetowanie hasła w aplikacji CKZ_Pralnia',
            text: `Przejdz za tym linkiem  ${keys.headerUrl}/passwordRecovery/${resetLink} w naszej aplikacji do rezerwacji prania.`
            }
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent' + info.response);
        }
    });
    }

module.exports = sendEmail;