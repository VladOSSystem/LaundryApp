const express = require('express');
const router = express.Router();
const User = require('../schemes/User');
const Laundry = require('../schemes/Laundry');
// auth middleware


router.get('/allLaundry', (req, res) => {
    Laundry.find({})
    .select('userId endTime countOfMachines')
    .populate(
        "userId",
        "name surname email"
    )
    .exec()
    .then(function(dbProducts) {
      res.json(dbProducts);
    })
    .catch(function(err) {
      res.json(err);
  });
});


router.get('/', (req, res) => {
  
    User.find({}, (err, result) => {

        if(err) {
            console.log(err); 
        } else {
            res.json(result)
        }
  });
});


router.get('/:id', (req, res) => { 
    User.findOne({_id: req.params.id}, (err, info) =>{
        try{
            res.json(info)
        } catch {
            res.json(err) 
        }
    });
});


module.exports = router;
