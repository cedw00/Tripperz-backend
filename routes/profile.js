var express = require('express');
var router = express.Router();

const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');

router.put('/update', async (req, res) => {
    // Verify if one or more fields are empty
    if (!checkBody(req.body, ['birthday', 'gender', 'country'])) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }

    // Verify if user selected enough values in profile
    if ((req.body.favFood.length < 1 || req.body.hobbies.length < 3 || req.body.favDest.length < 1)) {
        res.json({ result: false, error: 'At least one type of favorite food and five hobbies are required' });
        return;
    }
    
    const { birthday, gender, country, favFood, favDest, favTypes, hobbies, token } = req.body;
    // Find the current user
    const user = await User.findOne({ token: token });
    if (user) {
        // Modify the profile of the user
        User.updateOne({ token: token }, {
            birthday: birthday,
            gender: gender,
            country: country,
            favoriteDestinations: favDest,
            favoriteFoods: favFood,
            favoriteTypes: favTypes,
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
