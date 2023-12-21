const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
 startDate: String,
 endDate: String,
 duration: Number,
 dayDuration: [],
 countryDest: String,
 cityDest: String,
 tripImage: String,
 activitiesList: [],
 allSizes: [],
 usersList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
});

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;