const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
    name: String,
    apiName: String,
    image: String,
})

const typeSchema = mongoose.Schema({
    name: String,
    activities: [activitySchema]
})

const citySchema = mongoose.Schema({
    name: String,
    cityImg: String,
    activitiesTypes: [typeSchema]
})

const countriesSchema = mongoose.Schema({
    country: String,
    cities: [citySchema],
    image:String
});


const Country = mongoose.model('countries', countriesSchema);

module.exports = Country