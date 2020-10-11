const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../schemes/User');
const keys = require('../config/keys');
const validateRestoreInput = require('../validator/restore');
// auth middleware
const sendEmail = require('../mail/mail');


router.post('/passwordRecovery', (req, res) => {
    // console.log(req.body.email)
    User.find({email: req.body.email})     
        .then(info => {

            if(info.length === 0) {

                res.json({msg:"Email doesn\'t exist"})

            } else {

                const payload = {
                    email: req.body.email
                }

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 86400 
                    },
                    (err, token) => {
                        
                        sendEmail({
                            email: req.body.email,
                            resetLink: token
                        });

                        res.json({
                            success: true,
                            token: token
                        })
                    })
            }
        })
        .catch(err => {
            res.json({err})
  });
});

// reset route
router.post('/passwordRecovery/:id', (req, res) => {

    // checking validation inputs
    const {errors, isValid} = validateRestoreInput(req.body);
    // checking for validators
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const restorePassword = req.body.password;
    const decoded = jwt.verify(req.params.id.trim(), keys.secretOrKey);

    if (Math.floor(Date.now() / 1000) <= decoded.exp ) {

        User.findOne({email: decoded.email})
            .then(data => {
                // hashing password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(restorePassword, salt, (err, hash) => {
                        if (err) throw new err;
                        data.password = hash;
                        data
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });

            })
            .catch(error => res.json(error));

      } else {

        res.json({msg: 'Restore token has been expired try to resend it to email'});

      }
});

module.exports = router;