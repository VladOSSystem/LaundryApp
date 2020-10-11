const express = require('express');
const router = express.Router();

const Laundry = require('../schemes/Laundry');
const auth = require('../middleware/Auth');

    
router.post('/setLaundry', auth, (req, res) => {
    const newLaundry = new Laundry({
        endTime: req.body.endTime,
        countOfMachines: req.body.countOfMachines,
        userId: req.user.id
    })
    newLaundry
        .save()
        .then(laundry => res.json(laundry))
        .catch(err => console.log(err))
 });

module.exports = router;