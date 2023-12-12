var express = require('express');
var router = express.Router();

const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');

router.put('/create', async (req, res) => {
    if (!checkBody(req.body, ['birthday', 'gender', 'country'])) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return;
    }
    const foodList = req.body.favFood.split(' ');
    const hobbiesList = req.body.hobbies.split(' ');
    const favDestList = req.body.favDest.split(' ');
    if ((foodList.length < 1 || hobbiesList.length < 1 || favDestList.length < 1)) {
        res.json({ result: false, error: 'At least one type of food and hobbies is required' });
        return;
    }
    
    const { birthday, gender, country, token } = req.body;
    const user = await User.findOne({ token: token });
    if (user) {
        User.updateOne({ token: token }, {
            birthday: birthday,
            gender: gender,
            country: country,
            favoriteDestinations: favDestList,
            favoriteFoods: foodList,
            hobbies: hobbiesList,
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
