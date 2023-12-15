var express = require('express');
var router = express.Router();

const User = require('../models/users');
const Trip = require('../models/trips');
const { checkBody } = require('../modules/checkBody');

router.get('/:token', async (req, res) => {
    const user = await User.findOne({ token: req.params.token });
    if (user) {
        Trip.find({ usersList: user._id }).then(data => {
            if (data.length > 0) {
                res.json({ result: true, trips: data })
            } else {
                res.json({ result: false, error: "You don't have any trips planned" });
            }
        })
    } else {
        res.json({ result: false, error: "Invalid token" });
    }
});

router.post('/', async (req, res) => {
    if (!checkBody(req.body, ['start', 'end', 'countryDest', 'cityDest'])) {
        res.json({ result: false, error: "Missing or empty fields" });
        return;
    }
    if (req.body.activitiesList.length < 1) {
        res.json({ result: false, error: "Not enough activities in list" });
        return;
    }

    const { token, start, end, countryDest, cityDest, activitiesList } = req.body;
    const user = await User.findOne({ token: token });
    if (user) {
        const users = [];
        users.push(user._id)
        const newTrip = new Trip({
            startDate: start,
            endDate: end,
            countryDest: countryDest,
            cityDest: cityDest,
            activitiesList: activitiesList,
            usersList: users
        });

        newTrip.save();
        const trips = user.tripsList;
        trips.push(newTrip._id);
        User.updateOne({ token: token }, { tripsList: trips }).then(updatedUser => {
            if (updatedUser.modifiedCount < 1) {
                res.json({ result: false, error: "Failed to update user" });
            }
        })
        res.json({ result: true, trip: newTrip });
    } else {
        res.json({ result: false, error: "Invalid token" });
    }
});

router.put('/invite', async (req, res) => {
    const { users } = req.body;
    // const allUsers = users.split(' ');
    const trip = await Trip.findOne({ _id: req.body.id });
    if (trip) {
        for (const email of allUsers) {
            User.findOne({ email: { $regex: new RegExp(email, 'i') } }).then(user => {
                if (user) {
                    const trips = user.tripsList;
                    const users = trip.usersList;
                    users.push(user._id);
                    trips.push(trip._id);
                    Trip.updateOne({ _id: trip._id }, { usersList: users }).then();
                    User.updateOne({ email: { $regex: new RegExp(email, 'i') } }, { tripsList: trips }).then();
                } else {
                    res.json({ result: false, error: 'User not found' });
                }
            })
            User.findOne({ email: { $regex: new RegExp(email, 'i') } }).populate('tripsList').then();
        }
        Trip.findOne({ _id: trip._id }).populate('usersList').then(updatedTrip => {
            if (updatedTrip) {
                res.json({ result: true, trip: updatedTrip,  });
            }
        });
    } else {
        res.json({ result: false, error: 'Trip not found' });
    }
});

module.exports = router;
