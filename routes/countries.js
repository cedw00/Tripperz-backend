var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

const Country = require('../models/countries');
const { checkBody } = require('../modules/checkBody');

const { citiesActivities } = require('../modules/countriesAct');

router.post('/', async (req, res) => {
  try {
    for (let i = 0; i < citiesActivities.length; i++) {
      const countryData = await Country.findOne({ country: citiesActivities[i].country });
      let allCities = [];
      if (countryData) {
        allCities = countryData.cities;
        for (const city of citiesActivities[i].cities) {
          const current = city;
          const actualCity = countryData.cities.find(currentCity => currentCity.name === city.name);
          if (actualCity !== undefined && actualCity !== null) {
            
          } else {
            const cityResponse = await fetch(`https://api.pexels.com/v1/search?query=${current.name}&per_page=1`, {
              headers: { 'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ' }
            });
            const cityImg = await cityResponse.json();
            const allTypes = [];
            for (const type of current.activTypes) {
              const allActivities = [];
              for (const activity of type.activities) {
                let activImg = "";
                const activityResponse = await fetch(`https://api.pexels.com/v1/search?query=${activity.name}&per_page=1`, {
                  headers: { 'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ' }
                });
                const activityImg = await activityResponse.json();
                if (activityImg.photos && activityImg.photos[0] && activityImg.photos[0].length !== 0) {
                  activImg = activityImg.photos[0].src.original;
                } else {
                  activImg = ''
                }
                const obj = { name: activity.name, apiName: activity.api_name[0], image: activImg };
                allActivities.push(obj);
              }
              const obj = { name: type.name, activities: allActivities }
              allTypes.push(obj);
            }
            let city = {};
            if (cityImg.photos && cityImg.photos[0] && cityImg.photos[0].length !== 0) {
              city = { name: current.name, cityImg: cityImg.photos[0].src.original, activitiesTypes: allTypes }
            } else {
              city = {
                name: current.name,
                cityImg: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                activitiesTypes: allTypes
              }
            }
            allCities.push(city);
            await Country.updateOne({ country: citiesActivities[i].country }, { cities: allCities });
          }
        }
      } else {
        const countryResponse = await fetch(`https://api.pexels.com/v1/search?query=${citiesActivities[i].country}&per_page=1`, {
          headers: { 'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ' }
        });
        const countryImg = await countryResponse.json();
        let image = "";
        if (countryImg.photos && countryImg.photos[0] && countryImg.photos[0].length !== 0) {
          image = countryImg.photos[0].src.original;
        } else {
          image = 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        }
        const cities = [];
        for (const actualCity of citiesActivities[i].cities) {
          const current = actualCity;
          const cityResponse = await fetch(`https://api.pexels.com/v1/search?query=${current.name}&per_page=1`, {
              headers: { 'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ' }
            });
          const cityImg = await cityResponse.json();
          const allTypes = [];
          for (const type of current.activTypes) {
            const allActivities = [];
            for (const activity of type.activities) {
              let activImg = "";
              const activityResponse = await fetch(`https://api.pexels.com/v1/search?query=${activity.name}&per_page=1`, {
                headers: { 'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ' }
              });
              const activityImg = await activityResponse.json();
              if (activityImg.photos && activityImg.photos[0] && activityImg.photos[0].length !== 0) {
                activImg = activityImg.photos[0].src.original;
              } else {
                activImg = ''
              }
              const obj = { name: activity.name, apiName: activity.api_name[0], image: activImg };
              allActivities.push(obj);
            }
            const obj = { name: type.name, activities: allActivities }
            allTypes.push(obj);
          }
          let city = {};
          if (cityImg.photos && cityImg.photos[0] && cityImg.photos[0].length !== 0) {
            city = { name: current.name, cityImg: cityImg.photos[0].src.original, activitiesTypes: allTypes
            }
          } else {
            city = {
              name: current.name,
              cityImg: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              activitiesTypes: allTypes
            }
          }
          cities.push(city);
        }
        const newCountry = new Country({
          country: citiesActivities[i].country,
          image: image,
          cities: cities,
        });

      await newCountry.save();
      }
    }
  } catch {
    res.status(500).json({ result: false, error: 'Internal Server Error' });
    return
  }
    res.json({ result: true });
});




router.get("/Allcountries", async (req, res) => {
  const countries = await Country.find().lean()
  let activTypes = [];
  let activities = [];
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < countries[i].cities.length; j++) {

      for (let e = 0; e < countries[i].cities[j].activitiesTypes.length; e++) {

        const exists = activTypes.find((element) => element.name === countries[i].cities[j].activitiesTypes[e].name);

        if (!exists) {
          const activityTypes = {
            key: e,
            value: countries[i].cities[j].activitiesTypes[e].name

          }
          activTypes.push(activityTypes)

          for (let index = 0; index < countries[i].cities[j].activitiesTypes[e].activities.length; index++) {
            const exists = activities.some((element) => element.name === countries[i].cities[j].activitiesTypes[e].activities[index].name)
            if (!exists) {
              const activity = {
                key: index,
                Type: countries[i].cities[j].activitiesTypes[e].name,
                value: countries[i].cities[j].activitiesTypes[e].activities[index].name

              }
              activities.push(activity)
            }
          }
        }
      }
    }
  }

  res.json({ result: true, activTypes, activities })

});




router.post("/cities", async (req, res) => {
  Country.findOne({ country: req.body.country })
    .then(data => {
      const countries = Country.find().lean()

      res.json({ result: true, cities: data });
    })

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

    })

});

router.post("/activitiesTypes", async (req, res) => {
  try {

    const countries = await Country.find({ "cities.activitiesTypes.name": req.body.activityType }).lean(true)

    let foundCities = [];

    for (let i = 0; i < countries.length; i++) {

      for (let j = 0; j < countries[i].cities.length; j++) {

        const city = countries[i].cities[j];

        const foundActivity = city.activitiesTypes.some((activity) => activity.name === req.body.activityType)

        if (foundActivity) {
          const foundCity = {
            country: countries[i].country,
            city: city.name
          }

          foundCities.push(foundCity)
        }
      }
    }
    console.log('found cities', foundCities)
    res.json({ result: true, foundCities });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ result: false, error: 'Internal server error' });
  }
});



router.post("/activity", async (req, res) => {
  try {
    const countries = await Country.find({ "cities.activitiesTypes.activities.name": req.body.activity }).lean(true)

    let foundCities = [];

    for (let i = 0; i < 1; i++) {

      for (let j = 0; j < 1; j++) {

        const city = countries[i].cities[j];

        const foundActivityType = city.activitiesTypes.filter((activityType) => {
          return activityType.name === req.body.activityType})
        console.log('found act type',foundActivityType)
             if (foundActivityType) {
              const foundActivity = foundActivityType[0].activities.filter((activity) => activity.name === req.body.activity )
              if (foundActivity){
                console.log('found activ',foundActivity)
                const foundCity = {
                        country: countries[i].country,
                        city: city.name,
                        activityApi: foundActivity[0].apiName
                      }
                      foundCities.push(foundCity)
              }
            

      
        }
      }
    }
    console.log('found cities', foundCities)
    res.json({ result: true, foundCities });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ result: false, error: 'Internal server error' });
  }
});



module.exports = router;
