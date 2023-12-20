var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

const Country = require('../models/countries');
const { checkBody } = require('../modules/checkBody');



router.post("/", async (req, res) => {
  try {
    const countriesResponse = await fetch('https://countriesnow.space/api/v0.1/countries');
    const countriesData = await countriesResponse.json();

    for (let i = 62; i < countriesData.data.length; i++) {
      const allCities = [];
      const countryImgResponse = await fetch(`https://api.pexels.com/v1/search?query=${countriesData.data[i].country}&per_page=1`, {
        headers: {
          'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ'
        }
      });


      const countryImgData = await countryImgResponse.json();


      let cities = countriesData.data[i].cities;


      for (let j = 0; j < cities.length; j++) {

        if (popularCities.some((element => element.city === cities[j]))) {

          const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
          console.log(`city ${j} exists`)

          const cityImgResponse = await fetch(`https://api.pexels.com/v1/search?query=${cities[j]}&per_page=1`, {
            headers: {
              'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ'
            }
          });

          const cityImgData = await cityImgResponse.json();

          await delay(1000);

          if (cityImgData.photos && cityImgData.photos[0] && cityImgData.photos[0].length !== 0) {

            const cityObj = {
              name: cities[j],
              cityImg: cityImgData.photos[0].src.original
            };

            allCities.push(cityObj);
          } else {
            const cityObj = {
              name: cities[j],
              cityImg: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
            allCities.push(cityObj);
          }
        } else {
          console.log(`city ${j} doesn exists`)
          const cityObj = {
            name: cities[j],
            cityImg: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          allCities.push(cityObj)

        }
      }
      const newCountry = new Country({
        country: countriesData.data[i].country,
        cities: allCities,
        image: countryImgData.photos[0].src.original
      });

      await newCountry.save();
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ result: false, error: 'Internal Server Error' });
  }

  res.json({ result: true });
});

router.get("/Allcountries", async (req, res) => {
  const countries = await Country.find().lean()
  let activTypes = [];
  let activities = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < countries[i].cities.length; j++) {
      console.log('country', countries[i]);
      console.log('cities', countries[i].cities[j])
      for (let e = 0; e < countries[i].cities[j].activitiesTypes.length; e++) {
        console.log('activity type', countries[i].cities[j].activitiesTypes[e].type)
        const exists = activTypes.find((element) => element.type === countries[i].cities[j].activitiesTypes[e].type);
        console.log('exists', !exists)
        if (!exists) {
          const activityTypes = {
            type: countries[i].cities[j].activitiesTypes[e].type,
            key: e
          }
          activTypes.push(activityTypes)
          console.log('activity tipes array', activTypes)
          for (let index = 0; index < countries[i].cities[j].activitiesTypes[e].activity.length; index++) {
            const exists = activities.some((element) => element.name === countries[i].cities[j].activitiesTypes[e].activity[index].name)
            if (!exists) {
              const activity = {
                name: countries[i].cities[j].activitiesTypes[e].activity[index].name,
                key: index
              }
              activities.push(activity)
            }
          }
        }
      }
    }
  }
  res.json({ result: true, activTypes, activities });
});


router.post("/cities", async (req, res) => {
  Country.findOne({ country: req.body.country })
    .then(data => {
      res.json({ result: true, cities: data.cities });
    });
});



router.post("/city", async (req, res) => {
  Country.findOne({ country: req.body.country })
    .then(data => {

      const city = data.cities.find((element) => element.name === req.body.city)
      if (city) {
        res.json({ result: true, city });
      } else {
        res.json({ result: false, err: 'city doesnt exists' });
      }

    });
});





module.exports = router;
