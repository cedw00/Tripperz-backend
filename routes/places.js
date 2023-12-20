var express = require('express');
var router = express.Router();

const Country = require('../models/countries');

router.get('/:country/:city/:activity', async (req, res) => {
    const country = await Country.findOne({ country: req.params.country });
    if (country === null) {
        res.json({ result: false, error: "Country doesn't exist" });
        return;
    } else {
        const city = country.cities.find(city => city.name === req.params.city);
        if (city === null) {
            res.json({ result: false, error: "City doesn't exist" });
            return;
        } else {
            const data = {
                country: req.params.country,
                city: city.name,
                activity: req.params.activity,
            };
            res.json({ result: true, data: data });
        }
    }
});

module.exports = router;