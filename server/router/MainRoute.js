const express = require('express');
const router = express.Router();
const User = require('../schemes/User');
const Laundry = require('../schemes/Laundry');
// auth middleware
const auth = require('../middleware/Auth');

router.get('/lastUserKey', auth, (req, res) => {

    Laundry.find({
        createdAt: {
            $gt:new Date(Date.now() - 24*60*60 * 1000)
          }})
    .sort({createdAt: 'desc'})
    .populate(
        "userId"
    )
    
    .then(laundry => res.json(laundry))
    .catch(err => {
        res.json(err);
});
})
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
