var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// let countries = [];
// let countriesImg = [];
// let cities = [];
// let citiesImg = [];

// router.get('/', (req, res) => {
//   fetch('https://countriesnow.space/api/v0.1/countries')
//     .then(response => response.json())
//     .then(data => {

//   for (let i = 0; i < data.data.length; i++) {

//     countries.push(data.data[i].country)
//     cities.push(data.data[i].cities)
//   }
//   countries = countries;
//   cities = cities
//   res.json({ result: true });
// });
// });

// router.get('/countryImg', (req, res) => {
//   for (let i = 0; i < 5; i++) {
//     console.log(countries[i])
//     fetch(`https://api.unsplash.com/search/photos?query=${countries[i]}&page=1&per_page=1&client_id=${process.env.API_KEY}`)
//       .then(response => response.json())
//       .then(data => {
//         countriesImg.push(data.results[0].urls.regular)
//       });

//   }
//   countriesImg = countriesImg
//   console.log('countries img',countriesImg)
//   res.json({ result: true });
// });

// router.get('/country', async (req, res) => {
//   let count = 0;
//   const test = []
//   const response = await fetch('https://countriesnow.space/api/v0.1/countries');
//   const data = await response.json();
//   const countries = data.data;
//   if (countries.length === 0) {
//     res.json({ result: false, error: "Cannot fetch countries" });
//     return;
//   }
//   for (let i = 0; i < 5; i++) {
//     const obj = new Object;
//     const countryKey = 'country';
//     const imgKey = 'image';
//     const citiesKey = 'cities';
//     const cities = []
//     obj[countryKey] = countries[i].country;
//     const response = await fetch(`https://api.unsplash.com/search/photos?query=${countries[i]}&page=1&per_page=1&client_id=${process.env.API_KEY}`)
//     const data = await response.json();
//     obj[imgKey] = data.results[0].urls.raw
//     for (const city of countries[i].cities) {
//       const obj = new Object;
//       const nameKey = 'name';
//       const imgKey = 'image';
//       const response = await fetch(`https://api.unsplash.com/search/photos?query=${city}&page=1&per_page=1&client_id=${process.env.API_KEY}`)
//       const data = await response.json();
//       count++;
//       obj[nameKey] = city;
//       data.results.length > 0 ? obj[imgKey] = data.results[0].urls.raw : obj[imgKey] = null;
//       cities.push(obj)
//     }
//     obj[citiesKey] = cities;
//     test.push(obj)
//   }
//   res.json({ result: true, data: test })
// })

module.exports = router;
