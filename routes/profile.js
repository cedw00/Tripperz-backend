var express = require('express');
var router = express.Router();

const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');

router.put('/update', async (req, res) => {
    if (!checkBody(req.body, ['birthday', 'gender', 'country'])) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }

    if ((req.body.favFood.length < 1 || req.body.hobbies.length < 1 || req.body.favDest.length < 1)) {
        res.json({ result: false, error: 'At least one type of food and hobbies is required' });
        return;
    }
    
    const { birthday, gender, country, favFood, favDest, hobbies, token } = req.body;
    const user = await User.findOne({ token: token });
    if (user) {
        User.updateOne({ token: token }, {
            birthday: birthday,
            gender: gender,
            country: country,
            favoriteDestinations: favDest,
            favoriteFoods: favFood,
            hobbies: hobbies,
        }).then(updatedData => {
            if (updatedData.modifiedCount > 0) {
                User.findOne({ token: token }).then(data => {
                    res.json({ result: true, user: data });
                })
            } else {
                res.json({ result: false, error: 'Failed to create profile' })
            }
        })
    } else {
        res.json({ result: false, error: 'Invalid token' });
    }
});

module.exports = router;
