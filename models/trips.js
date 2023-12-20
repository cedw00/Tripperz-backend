const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
    name: String,
    type: String,
    address: String
});

const tripSchema = mongoose.Schema({
 startDate: String,
 endDate: String,
 countryDest: String,
 cityDest: String,
 tripImage: String,
 activitiesList: [activitySchema],
 usersList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
});

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;