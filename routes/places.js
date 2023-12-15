var express = require('express');
var router = express.Router();

const Country = require('../models/trips');

router.get('/:country/:city/:activity', async (req, res) => {
    const country = await Country.findOne({ name: req.params.country });
    const city = country.cities.find(city => city === req.params.city);
    if (city === null) {
        res.json({ result: false, error: "City doesn't exist" });
        return;
    }
    const response = await fetch(``);
    const data = await response.json();
    res.json({ result: true, data: data });
});

module.exports = router;