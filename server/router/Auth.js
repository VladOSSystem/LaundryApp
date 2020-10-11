const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../schemes/User');
const keys = require('../config/keys');
const validateRegisterInput = require('../validator/register');
const validateLoginInput = require('../validator/login');
// auth middleware
const sendEmail = require('../mail/mail');

router.route('/login').post((req, res) => {

    const {errors, isValid} = validateLoginInput(req.body);

    // checking for validators
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // finding user by email 

    User.findOne({email}).then(user => {
        // checking if user exists
        if(!user){
            return res.status(400).json({emailnotfound: 'Email not found'});
        }
        
        // check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch) {
            // creating JWT payloading
            const payload = {
                id: user.id,
                name: user.name
            };

            // sign token 
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 604800 
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: token
                    })
                }
             );
            } else {
                return res
                    .status(400)
                    .json({passwordincorrect: 'Password incorect'});
            }
        });
    });
});


router.route('/register').post((req, res) => {
    
    const {errors, isValid} = validateRegisterInput(req.body);
    console.log(req.body)
    // checking for validators
    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email}).then(user => {
        if(user) {
            return res.status(400).json({email: "Email already exists"});
        } else {
            const newUser = new User({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email, 
                password: req.body.password 
            });
            sendEmail({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                action: 'register'
            });
            // hashing password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw new err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
 });

 module.exports = router;