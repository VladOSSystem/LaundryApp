const express = require('express');
const router = express.Router();
const Message = require('../schemes/Messege');
const User = require('../schemes/User');
// auth middleware
const auth = require('../middleware/Auth');

router.get('/listMessages', auth, async (req, res) => {
    const messages = await Message.find({messageFrom: req.user.id}).select("messageTo")

    const seen = new Set();
    const arrayOfId = []
    const filteredArr = messages.filter(el => {
    const duplicate = seen.has(el.messageTo);
    seen.add(el.messageTo);
    return !duplicate;
    });
    
    filteredArr.map(a => {
        arrayOfId.push(a.messageTo)
    })
    let data = await User.find(
        {'_id': { $in: arrayOfId}}
      ).select("name surname profileImage")              

    res.json(data)             

})
router.get('/message', auth, async (req, res) => {
    const messageSender = req.user.id
    const messageAdreserer = req.body.id
    
    const messages = await Message.find({messageFrom: messageSender, messageTo: messageAdreserer})
          .sort('date')

    const output = {
        messageSender,
        messageAdreserer
    }
    res.json({messages})       
})
router.post('/message', auth, async (req, res) => {
    const timezone = Math.floor(Date.now() / 1000);
    const message = req.body.message;
    const messageTo = req.body.idTo;
    const messageFrom = req.user.id;

    try {

    const newMessage = new Message({
        timezone,
        message,
        messageTo,
        messageFrom
    }); 

    await newMessage.save()

    res.json({msg:"Massage has been sent"})

    } catch(e) {
        res.json(e)
    }

})

module.exports = router;