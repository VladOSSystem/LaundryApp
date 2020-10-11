const config = require('../config/keys');
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    const token = req.header('x-auth-token');
    // check for token
    if(!token) res.status(401).json({msg: 'No token, authorized denied'});

    try {
        // verify token
        const decoded = jwt.verify(token, config.secretOrKey);
        // add user from payload
        req.user = decoded;
        next(); 

    } catch(e) {
        res.status(400).json({msg: 'Token is not valid'})
    }
}

module.exports = auth; 