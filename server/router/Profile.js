const express = require('express');
const router = express.Router();
const User = require('../schemes/User');
const Laundry = require('../schemes/Laundry');  
// auth middleware
const auth = require('../middleware/Auth');
const axios = require('axios');


router.get('/me', auth, (req, res) => {

    User.findById(req.user.id)
    .then(user => res.json(user))
    .catch(err => {
        res.json(err);
    });

});

// Img insertion with profile 
router.post('/profileSync/:instagramNick', auth, async (req, res) => {
    try {
        const response = await axios.get(`https://www.instagram.com/${req.params.instagramNick.trim()}/?__a=1`);

        User.findOne({_id: req.user.id})
            .then(info => {
                const img = response.data.graphql.user.profile_pic_url_hd;
                info.profileImage = img;
                info
                    .save()
                    .catch(err => console.log(err));

            });
        res.json(response.data);
    } catch(e) {

        res.json({e});
        
    }
});

router.get('/myLaundry', auth, (req, res) => {
  
    Laundry.find({userId: req.user.id})
        .select('-userId')
        .then(laundry => res.json(laundry))
        .catch(err => {
            res.json(err);
  });
});

module.exports = router;