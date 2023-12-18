const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    name: String,
    cityImg: String,
})

const countriesSchema = mongoose.Schema({
    country: String,
    cities: [citySchema],
    image:String
});


const Country = mongoose.model('countries', countriesSchema);

module.exports = Country