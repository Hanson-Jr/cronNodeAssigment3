const cron = require('node-cron');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
// const User = require('./models/User');
const User = require ("./models/users")
require('dotenv').config();

const sendBirthdayEmails = async () => {
  
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();

    const users = await User.find({
        $expr: {
            $and: [
                { $eq: [{ $month: '$dateOfBirth' }, month + 1] },
                { $eq: [{ $dayOfMonth: '$dateOfBirth' }, day] }
            ]
        }
    });

    if (users.length > 0) {
        let transporter = nodemailer.createTransport({
          Host: process.env.EMAIL_HOST,
          port: process.env.EMAIL_PORT,
           
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        users.forEach(user => {
            let mailOptions = {
                from: 'EDIDIONG Hanson <oliverub2014@gmail.com>',
                to: user.email,
                subject: 'Happy Birthday!',
                text: `Dear ${user.username},\n\nWishing you a very happy birthday!\n\nBest wishes,\nBirthday Wisher`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error occurred: ' + error.message);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });
    }

    mongoose.connection.close();
};

module.exports = () => {
    cron.schedule('* 7 * * *', () => {
     
        sendBirthdayEmails();
        
    });
};
