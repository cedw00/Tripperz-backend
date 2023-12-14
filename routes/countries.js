var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

const Country = require('../models/countries');
const { checkBody } = require('../modules/checkBody');



router.post("/", async (req, res) => {
  try {
    const countriesResponse = await fetch('https://countriesnow.space/api/v0.1/countries');
    const countriesData = await countriesResponse.json();
    const allCountries = [];


    for (let i = 10; i < 20; i++) {

      console.log('countries', countriesData.data[i].country);
      const countryImgResponse = await fetch(`https://api.pexels.com/v1/search?query=${countriesData.data[i].country}&per_page=1`, {
        headers: {
          'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ'
        }
      });

      const countryImgData = await countryImgResponse.json();
      if (countryImgData.photos && countryImgData.photos[0] && countryImgData.photos[0].length !== 0) {
        console.log('country img', countryImgData.photos[0].src.original)
      }


      let cities = countriesData.data[i].cities;
      console.log('cities', cities)
      const allCities = [];

      const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      for (let j = 0; j < cities.length; j++) {


        cities = countriesData.data[i].cities;
        const cityImgResponse = await fetch(`https://api.pexels.com/v1/search?query=${cities[j]}&per_page=1`, {
          headers: {
            'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ'
          }
        });

        const cityImgData = await cityImgResponse.json();

        await delay(1000);

        if (cityImgData.photos && cityImgData.photos[0] && cityImgData.photos[0].length !== 0) {
          console.log(`city img ${j}`, cityImgData.photos[0].src.original)

          const cityObj = {
            name: cities[j],
            cityImg: cityImgData.photos[0].src.original
          };
          console.log('city obj', cityObj);
          allCities.push(cityObj);
        } else {
          const cityObj = {
            name: cities[j],
            cityImg: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          };
          allCities.push(cityObj)
          console.log('data undefined');
        }

      }

      console.log('all cities', allCities);

      const newCountry = new Country({
        country: countriesData.data[i].country,
        cities: allCities,
        image: countryImgData.photos[0].src.original
      });

      await newCountry.save();
      allCountries.push(newCountry);
    }

    res.json({ result: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ result: false, error: 'Internal Server Error' });
  }
});



// router.get('/', (req, res) => {
//   fetch('https://api.pexels.com/v1/search?query=france&per_page=1', {
//     headers: {
//       'Authorization': 'UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ'
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log('data', data.photos[0].src.original);
//       res.json({ result: true })
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     });
// });





// let countryList = [];
// let cityList = [];
// const countriesFunction = (countries, cities) => {
//   countryList = countries;
//   cityList = cities;
// };

// let countriesImg = [];
// const countriesImgs = (img) => {
//   countriesImg = img;
// }


// // let cities = [];
// // let citiesImg = [];

// router.get('/', (req, res) => {
//   fetch('https://countriesnow.space/api/v0.1/countries')
//     .then(response => response.json())
//     .then(data => {
//       const countries = [];
//       const cities = [];
//       for (let i = 0; i < data.data.length; i++) {
//         countries.push(data.data[i].country);
//         cities.push(data.data[i].cities);
//       }
//       countriesFunction(countries, cities)
//       res.json({ result: true, countries: countries, cities: cities });
//     }).then(() => {
//       console.log('country list', cityList)
//     })
// });


// router.get('/countryImg', (req, res) => {
//   let countryImg = [];
//   for (let i = 0; i < 5; i++) {
//     console.log('country de i', countryList[i])
//     fetch(`https://api.unsplash.com/search/photos?query=${countryList[i]}&page=1&per_page=1&client_id=${process.env.API_KEY}`)
//       .then(response => response.json())
//       .then(data => {
//         countryImg.push(data.results[0].urls.regular)
//       }
//       )

//     countriesImgs(countryImg)
//     res.json({ result: true, countryList, countryImg,countriesImg })


//   }});

// router.get('/cityImg', (req, res) => {
//   const cityPromises = cities.slice(0, 5).map(city => {
//     return fetch(`https://api.unsplash.com/search/photos?query=${city}&page=1&per_page=1&client_id=${process.env.API_KEY}`)
//       .then(response => response.json())
//       .then(data => data.results[0].urls.regular);
//   });

//   Promise.all(cityPromises)
//     .then(cityImages => {
//       citiesImg = cityImages;
//       console.log(citiesImg);
//       res.json({ result: true, citiesImg });
//     })
//     .catch(error => {
//       console.error('Error fetching city images:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     });
// });


// router.get('/cityImg', (req, res) => {
//   for (let i = 0; i < 5; i++) {
//     console.log(cities[i])
//     fetch(`https://api.unsplash.com/search/photos?query=${cities[i]}&page=1&per_page=1&client_id=${process.env.API_KEY}`)
//       .then(response => response.json())
//       .then(data => {
//         citiesImg.push(data.results[0].urls.regular)
//         console.log(citiesImg)

//       });

//   }
//   res.json({ result: true });
// });

module.exports = router;
