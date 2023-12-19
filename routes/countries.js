var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const Country = require("../models/countries");
const { checkBody } = require("../modules/checkBody");

const citiesActivities = [
  {
    country: "France",
    cities: [
      {
        name: "Paris",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: ["restaurant", "food"] },
              { name: "Cooking classes", image: "http", api_name: ["cooking_school", 'food'] },
              { name: "Wine tasting", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Amusement parks and theme parks", image: "http", api_name: ["amusement_park"] },
              { name: "Shows and concerts", image: "http", api_name: ["movie_theater", 'event'] },
              { name: "Theatre", image: "http", api_name: ["movie_theater", 'event'] },
            ],
          },
        ],
      },
      {
        name: "Calenzana",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Trekking", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Chamonix",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Climbing", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Hiking", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Hossegor",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
            ],
          },
        ],
      },
      {
        name: "Gruissan",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
            ],
          },
        ],
      },
      {
        name: "Lyon",
        activTypes: [
          {
            name: "Culinary experiences",
            activities: [
              { name: "Cooking classes", image: "http", api_name: ["cooking_school", 'food'] },
            ],
          },
        ],
      },
      {
        name: "Bordeaux",
        activTypes: [
          {
            name: "Culinary experiences",
            activities: [
              { name: "Wine tasting", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
        ],
      },
      {
        name: "Cannes",
        activTypes: [
          {
            name: "Entertainment",
            activities: [
              { name: "Festivals", image: "http", api_name: ["festival"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "United States",
    cities: [
      {
        name: "New York City",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Shows and concerts", image: "http", api_name: ["movie_theater", 'event'] },
              { name: "Theatre", image: "http", api_name: ["movie_theater", 'event'] },
            ],
          },
        ],
      },
      {
        name: "Washington D.C.",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
            ],
          },
        ],
      },
      {
        name: "Los Angeles",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Water Activities",
            activities: [
              { name: "Pool Clubs", image: "http", api_name: ["resort", 'swimming pool'] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Shows and concerts", image: "http", api_name: ["movie_theater", 'event'] },
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Shopping Malls", image: "http", api_name: ["shopping_mall"] },
            ],
          },
        ],
      },
      {
        name: "San Francisco",
        activTypes: [
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Boat excursions", image: "http", api_name: ['point_of_interest', "tourist_attraction", "boating"] },
            ],
          },
        ],
      },
      {
        name: "Chicago",
        activTypes: [
          {
            name: "Guided Tours",
            activities: [
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Boat excursions", image: "http", api_name: ['point_of_interest', "tourist_attraction", "boating"] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Theatre", image: "http", api_name: ["movie_theater", 'event'] },
            ],
          },
        ],
      },
      {
        name: "Miami",
        activTypes: [
          {
            name: "Guided Tours",
            activities: [
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Boat excursions", image: "http", api_name: ['point_of_interest', "tourist_attraction", "boating"] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Theatre", image: "http", api_name: ["movie_theater", 'event'] },
            ],
          },
          {
            name: "Water Activities",
            activities: [
              { name: "Pool Clubs", image: "http", api_name: ["resort", 'swimming pool'] },
              { name: "Jet Ski", image: "http", api_name: ["jet_ski_rental"] },
            ],
          },
          {
            name: "Sport Activities",
            activities: [
              { name: "Water sports", image: "http", api_name: ["water_sports", "water_activities", "aquatic_sports"] },
            ],
          },
        ],
      },
      {
        name: "Honolulu",
        activTypes: [
          {
            name: "Guided Tours",
            activities: [
              { name: "Boat excursions", image: "http", api_name: ['point_of_interest', "tourist_attraction", "boating"] },
            ],
          },
          {
            name: "Water Activities",
            activities: [
              { name: "Snorkeling", image: "http", api_name: ["snorkeling", "snorkeling_spot", "snorkeling_center"] },
              { name: "Surfing", image: "http", api_name: ["surfing"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
          {
            name: "Sport Activities",
            activities: [
              { name: "Water sports", image: "http", api_name: ["water_sports", "water_activities", "aquatic_sports"] },
            ],
          },
        ],
      },
      {
        name: "Mariposa",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Climbing", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Stanton",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Climbing", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Joshua Tree",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Climbing", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "El Portal",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Hiking", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Moab",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Cycling", image: "http", api_name: ["bicycle_rental"] },
            ],
          },
        ],
      },
      {
        name: "Boulder",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Cycling", image: "http", api_name: ["bicycle_rental"] },
            ],
          },
        ],
      },
      {
        name: "Jackson",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Safari", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
      {
        name: "Santa Cruz",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
        ],
      },
      {
        name: "Maui",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Snorkeling", image: "http", api_name: ["snorkeling", "snorkeling_spot", "snorkeling_center"] },
              { name: "Surfing", image: "http", api_name: ["surfing"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
          {
            name: "Sport Activities",
            activities: [
              { name: "Water sports", image: "http", api_name: ["water_sports", "water_activities", "aquatic_sports"] },
            ],
          },
        ],
      },
      {
        name: "Hood River",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
        ],
      },
      {
        name: "Las Vegas",
        activTypes: [
          {
            name: "Entertainment",
            activities: [
              { name: "Shows and concerts", image: "http", api_name: ["event"] },
              { name: "Casino", image: "http", api_name: ["casino"] },
            ],
          },
          {
            name: "Water Activities",
            activities: [
              { name: "Pool Clubs", image: "http", api_name: ["resort", 'swimming pool'] },
            ],
          },
        ],
      },
      {
        name: "Everglades City",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Safari", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
          {
            name: "Water Activities",
            activities: [
              { name: "Kayaking", image: "http", api_name: ["kayaking", 'kayak_rental'] },
            ],
          },
        ],
      },
      {
        name: "Page",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Kayaking", image: "http", api_name: ["kayaking", 'kayak_rental'] },
            ],
          },
        ],
      },
      {
        name: "Napa Valley",
        activTypes: [
          {
            name: "Culinary experiences",
            activities: [
              { name: "Wine tasting", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
        ],
      },
      {
        name: "Orlando",
        activTypes: [
          {
            name: "Entertainment",
            activities: [
              { name: "Amusement parks and theme parks", image: "http", api_name: ["amusement_park"] },
            ],
          },
        ],
      },
      {
        name: "Anaheim",
        activTypes: [
          {
            name: "Entertainment",
            activities: [
              { name: "Amusement parks and theme parks", image: "http", api_name: ["amusement_park"] },
            ],
          },
        ],
      },
      {
        name: "Universal City",
        activTypes: [
          {
            name: "Entertainment",
            activities: [
              { name: "Amusement parks and theme parks", image: "http", api_name: ["amusement_park"] },
            ],
          },
        ],
      },
      {
        name: "Nashville",
        activTypes: [
          {
            name: "Entertainment",
            activities: [
              { name: "Shows and concerts", image: "http", api_name: ["event"] },
            ],
          },
        ],
      },
      {
        name: "New Orleans",
        activTypes: [
          {
            name: "Entertainment",
            activities: [
              { name: "Festivals", image: "http", api_name: ["festival"] },
            ],
          },
        ],
      },
      {
        name: "Coachella Valley",
        activTypes: [
          {
            name: "Entertainment",
            activities: [
              { name: "Festivals", image: "http", api_name: ["festival"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "United Kingdom",
    cities: [
      {
        name: "London",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Shows and concerts", image: "http", api_name: ["movie_theater", 'event'] },
              { name: "Theatre", image: "http", api_name: ["movie_theater", 'event'] },
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Markets", image: "http", api_name: ["shopping_mall", 'market'] },
            ],
          },
        ],
      },
      {
        name: "Stonehenge",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Lake District",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Hiking", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Glastonbury",
        activTypes: [
          {
            name: "Entertainment",
            activities: [
              { name: "Festivals", image: "http", api_name: ["festivals"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Italy",
    cities: [
      {
        name: "Rome",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: ["restaurant", "food"] },
              { name: "Cooking classes", image: "http", api_name: ["cooking_school", 'food'] },
              { name: "Wine tasting", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
        ],
      },
      {
        name: "Florence",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Venice",
        activTypes: [
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Boat excursions", image: "http", api_name: ["point_of_interest", "tourist_attraction", 'boating'] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Milan",
        activTypes: [
          {
            name: "Shopping",
            activities: [
              { name: "Shopping malls", image: "http", api_name: ["shopping_mall"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Russia",
    cities: [
      {
        name: "Saint Petersburg",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Moscow",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Spain",
    cities: [
      {
        name: "Madrid",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Barcelona",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: ["restaurant", "food"] },
              { name: "Cooking classes", image: "http", api_name: ["cooking_school", 'food'] },
              { name: "Markets", image: "http", api_name: ["market", 'food'] },
              { name: "Wine tasting", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Festivals", image: "http", api_name: ["festival"] },
            ],
          },
          {
            name: "Water activities",
            activities: [
              { name: "Beach", image: "http", api_name: ["beach"] },
              { name: "Pool Clubs", image: "http", api_name: ["resort", 'swimming pool'] },
            ],
          },
        ],
      },
      {
        name: "Fuerteventura",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
        ],
      },
      {
        name: "Tarifa",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
        ],
      },
      {
        name: "Ibiza",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Jet Ski", image: "http", api_name: ["jet_ski_rental"] },
              { name: "Pool Clubs", image: "http", api_name: ["resort", 'swimming pool'] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
          {
            name: "Sport Activities",
            activities: [
              { name: "Yoga and Wellness retreats", image: "http", api_name: ["yoga", "wellness", "retreat"] },
            ],
          },
        ],
      },
      {
        name: "Marbella",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Jet Ski", image: "http", api_name: ["jet_ski_rental"] },
              { name: "Pool Clubs", image: "http", api_name: ["resort", 'swimming pool'] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Japan",
    cities: [
      {
        name: "Tokyo",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: ["restaurant", "food"] },
              { name: "Cooking classes", image: "http", api_name: ["cooking_school", 'food'] },
              { name: "Visiting market", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Amusement parks and theme parks", image: "http", api_name: ["amusement_park"] },
              { name: "Theatre", image: "http", api_name: ["movie_theater", 'event'] },
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Shopping Malls", image: "http", api_name: ["shopping_mall"] },
              { name: "Market", image: "http", api_name: ["shopping_mall", 'market'] },
            ],
          },
        ],
      },
      {
        name: "Kyoto",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Outdoor activities",
            activities: [
              { name: "Cycling", image: "http", api_name: ["bicycle_rental"] },
            ],
          },
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: ["restaurant", "food"] },
              { name: "Cooking classes", image: "http", api_name: ["cooking_school", 'food'] },
              { name: "Visiting markets", image: "http", api_name: ["market", 'food'] },
            ],
          },
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Spa and Massages", image: "http", api_name: ["spa"] },
            ],
          },
        ],
      },
      {
        name: "Niseko",
        activTypes: [
          {
            name: "Sport Activities",
            activities: [
              { name: "Skiing and Snowboarding", image: "http", api_name: ["ski_resort"] },
            ],
          },
        ],
      },
      {
        name: "Beppu",
        activTypes: [
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Hot springs", image: "http", api_name: ["spa"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Netherlands",
    cities: [
      {
        name: "Amsterdam",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Boat excursions", image: "http", api_name: ["point_of_interest", "tourist_attraction", 'boating'] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Outdoor activities",
            activities: [
              { name: "Cycling", image: "http", api_name: ["bicycle_rental"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Mexico",
    cities: [
      {
        name: "Mexico City",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: "museum" },
              { name: "Art Galleries", image: "http", api_name: "art_gallery" },
              { name: "Historical sites and monuments", image: "http", api_name: "" }, // Ajoutez le nom de l'API pertinent
              // ... autres activités
            ],
          },
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: "" }, // Ajoutez le nom de l'API pertinent
              { name: "Cooking classes", image: "http", api_name: "" }, // Ajoutez le nom de l'API pertinent
              // ... autres activités
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Shows and concerts", image: "http", api_name: "" }, // Ajoutez le nom de l'API pertinent
              { name: "Amusement parks and theme parks", image: "http", api_name: "" }, // Ajoutez le nom de l'API pertinent
              // ... autres activités
            ],
          },
          // ... autres types d'activités
        ],
      },
      {
        name: "Cancún",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Snorkeling", image: "http", api_name: "snorkeling" },
              { name: "Surfing", image: "http", api_name: "surfing" },
              { name: "Beach", image: "http", api_name: "beach" },
              { name: "Pool clubs", image: "http", api_name: "night_club" },
              { name: "Jet Skiing", image: "http", api_name: "jet_skiing" },
              // Ajoutez d'autres activités spécifiques à Cancún ici
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Local Boutiques and Artisanal Products", image: "http", api_name: "shopping_mall" },
              { name: "Markets", image: "http", api_name: "shopping_mall" },
              // Ajoutez d'autres activités de shopping spécifiques à Cancún ici
            ],
          },
          // Ajoutez d'autres types d'activités pour Cancún au besoin
        ],
      },
      {
        name: "Cabo San Lucas",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Snorkeling", image: "http", api_name: "snorkeling" },
              { name: "Surfing", image: "http", api_name: "surfing" },
              { name: "Beach", image: "http", api_name: "beach" },
              { name: "Pool clubs", image: "http", api_name: "night_club" },
              { name: "Jet Skiing", image: "http", api_name: "jet_skiing" },
              // Ajoutez d'autres activités spécifiques à Cabo San Lucas ici
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Local Boutiques and Artisanal Products", image: "http", api_name: "shopping_mall" },
              { name: "Markets", image: "http", api_name: "shopping_mall" },
              // Ajoutez d'autres activités de shopping spécifiques à Cabo San Lucas ici
            ],
          },
          // Ajoutez d'autres types d'activités pour Cabo San Lucas au besoin
        ],
      },
      {
        name: "La Paz",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Snorkeling", image: "http", api_name: "snorkeling" },
              { name: "Surfing", image: "http", api_name: "surfing" },
              { name: "Beach", image: "http", api_name: "beach" },
              { name: "Pool clubs", image: "http", api_name: "night_club" },
              { name: "Jet Skiing", image: "http", api_name: "jet_skiing" },
              // Ajoutez d'autres activités spécifiques à La Paz ici
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Local Boutiques and Artisanal Products", image: "http", api_name: "shopping_mall" },
              { name: "Markets", image: "http", api_name: "shopping_mall" },
              // Ajoutez d'autres activités de shopping spécifiques à La Paz ici
            ],
          },
          // Ajoutez d'autres types d'activités pour La Paz au besoin
        ],
      },
    ],
  },
  {
    country: "Turkey",
    cities: [
      {
        name: "Istanbul",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Boat excursions", image: "http", api_name: ["point_of_interest", "tourist_attraction", 'boating'] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: ["restaurant", "food"] },
              { name: "Visiting markets", image: "http", api_name: ["market", 'food'] },
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Markets", image: "http", api_name: ["shopping_mall", 'market'] },
              { name: "Local boutiques and artisanal products", image: "http", api_name: ["shopping_mall", 'market'] },
            ],
          },
        ],
      },
      {
        name: "Cappadocia",
        activTypes: [
          {
            name: "Sport Activities",
            activities: [
              { name: "Adventure sports", image: "http", api_name: ["sports", "adventure", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Pamukkale",
        activTypes: [
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Hot springs", image: "http", api_name: ["spa"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "South Africa",
    cities: [
      {
        name: "Cape Town",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Boat excursions", image: "http", api_name: ["point_of_interest", "tourist_attraction", 'boating'] },
            ],
          },
          {
            name: "Culinary experiences",
            activities: [
              { name: "Wine tasting", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
          {
            name: "Sport Activities",
            activities: [
              { name: "Golf", image: "http", api_name: ["golf"] },
              { name: "Water sports", image: "http", api_name: ["water_sports", "water_activities", "aquatic_sports"] },
            ],
          },
        ],
      },
      {
        name: "Nelspruit",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
            ],
          },
          {
            name: "Outdoor activities",
            activities: [
              { name: "Safari", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Egypt",
    cities: [
      {
        name: "Cairo",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Markets", image: "http", api_name: ["shopping_mall", 'market'] },
              { name: "Local boutiques and artisanal products", image: "http", api_name: ["shopping_mall", 'market'] },
            ],
          },
        ],
      },
      {
        name: "Dahab",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
            ],
          },
        ],
      },
      {
        name: "Hurghada",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Snorkeling", image: "http", api_name: ["snorkeling", "snorkeling_spot", "snorkeling_center"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
        ],
      },
      {
        name: "Siwa Oasis",
        activTypes: [
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Hot springs", image: "http", api_name: ["spa"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Greece",
    cities: [
      {
        name: "Athens",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: ["restaurant", "food"] },
              { name: "Visiting markets", image: "http", api_name: ["market", 'food'] },
            ],
          },
        ],
      },
      {
        name: "Santorini",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Pool Clubs", image: "http", api_name: ["resort", 'swimming pool'] },
            ],
          },
          {
            name: "Sport Activities",
            activities: [
              { name: "Yoga and Wellness retreats", image: "http", api_name: ["yoga", "wellness", "retreat"] },
            ],
          },
        ],
      },
      {
        name: "Kalymnos",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Climbing", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Hiking", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Mykonos",
        activTypes: [
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Hot springs", image: "http", api_name: ["spa"] },
            ],
          },
          {
            name: "Water Activities",
            activities: [
              { name: "Pool Clubs", image: "http", api_name: ["resort", 'swimming pool'] },
              { name: "Snorkeling", image: "http", api_name: "snorkeling" },
              { name: "Surfing", image: "http", api_name: "surfing" },
              { name: "Beach", image: "http", api_name: "beach" },
              { name: "Pool clubs", image: "http", api_name: "night_club" },
              { name: "Jet Skiing", image: "http", api_name: "jet_skiing" },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Jordan",
    cities: [
      {
        name: "Petra",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Ma'in Hot Springs",
        activTypes: [
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Hot springs", image: "http", api_name: ["spa"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Cambodia",
    cities: [
      {
        name: "Angkor",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Peru",
    cities: [
      {
        name: "Machu Picchu",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Aguas Calientes",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Trekking", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Lima",
        activTypes: [
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: ["restaurant", "food"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Croatia",
    cities: [
      {
        name: "Dubrovnik",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Split",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Czech Republic",
    cities: [
      {
        name: "Prague",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "China",
    cities: [
      {
        name: "Beijing",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Historical sites and monuments", image: "http", api_name: ["tourist_attraction"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Outdoor activities",
            activities: [
              { name: "Trekking", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Hong Kong",
        activTypes: [
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Boat excursions", image: "http", api_name: ['point_of_interest', "tourist_attraction", "boating"] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Amusement parks and theme parks", image: "http", api_name: ["amusement_park"] },
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Markets", image: "http", api_name: ["shopping_mall", 'market'] },
            ],
          },
        ],
      },
      {
        name: "Shanghai",
        activTypes: [
          {
            name: "Entertainment",
            activities: [
              { name: "Amusement parks and theme parks", image: "http", api_name: ["amusement_park"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "India",
    cities: [
      {
        name: "Mumbai",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Outdoor activities",
            activities: [
              { name: "Safari", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: ["restaurant", "food"] },
            ],
          },
        ],
      },
      {
        name: "Sawai Madhopur",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Safari", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
      {
        name: "Rishikesh",
        activTypes: [
          {
            name: "Sport Activities",
            activities: [
              { name: "Yoga and Wellness retreats", image: "http", api_name: ["yoga", "wellness", "retreat"] },
            ],
          },
        ],
      },
      {
        name: "Jaipur",
        activTypes: [
          {
            name: "Shopping",
            activities: [
              { name: "Local Boutiques and Artisanal Products", image: "http", api_name: "shopping_mall" },
              { name: "Markets", image: "http", api_name: "shopping_mall" },
              // Ajoutez d'autres activités de shopping spécifiques à Cancún ici
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Australia",
    cities: [
      {
        name: "Sydney",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Boat excursions", image: "http", api_name: ['point_of_interest', "tourist_attraction", "boating"] },
            ],
          },
          {
            name: "Water Activities",
            activities: [
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Shows and concerts", image: "http", api_name: ["movie_theater", 'event'] },
              { name: "Theatre", image: "http", api_name: ["movie_theater", 'event'] },
            ],
          },
          {
            name: "Sport Activities",
            activities: [
              { name: "Water sports", image: "http", api_name: ["water_sports", "water_activities", "aquatic_sports"] },
            ],
          },
        ],
      },
      {
        name: "Cairns",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Snorkeling", image: "http", api_name: ["snorkeling", "snorkeling_spot", "snorkeling_center"] },
              { name: "Surfing", image: "http", api_name: ["surfing"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
          {
            name: "Outdoor activities",
            activities: [
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
      {
        name: "Melbourne",
        activTypes: [
          {
            name: "Sport Activities",
            activities: [
              { name: "Golf", image: "http", api_name: ["golf"] },
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Shopping Malls", image: "http", api_name: ["shopping_mall"] },
            ],
          },
        ],
      },
      {
        name: "Byron Bay",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
            ],
          },
          {
            name: "Sport Activities",
            activities: [
              { name: "Yoga and Wellness retreats", image: "http", api_name: ["yoga", "wellness", "retreat"] },
            ],
          },
        ],
      },
      {
        name: "Gold Coast",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Jet Ski", image: "http", api_name: ["jet_ski_rental"] },
            ],
          },
        ],
      },
      {
        name: "Barossa Valley",
        activTypes: [
          {
            name: "Culinary experiences",
            activities: [
              { name: "Wine tasting", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Brazil",
    cities: [
      {
        name: "São Paulo",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
            ],
          },
        ],
      },
      {
        name: "Rio de Janeiro",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Boat excursions", image: "http", api_name: ['point_of_interest', "tourist_attraction", "boating"] },
            ],
          },
          {
            name: "Water Activities",
            activities: [
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Festivals", image: "http", api_name: ["festival"] },
            ],
          },
          {
            name: "Sport Activities",
            activities: [
              { name: "Water sports", image: "http", api_name: ["water_sports", "water_activities", "aquatic_sports"] },
            ],
          },
        ],
      },
      {
        name: "Cuiabá",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Safari", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
      {
        name: "Manaus",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Safari", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
      {
        name: "Jericoacoara",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Argentina",
    cities: [
      {
        name: "Buenos Aires",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Mendoza",
        activTypes: [
          {
            name: "Culinary experiences",
            activities: [
              { name: "Wine tasting", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
        ],
      },
      {
        name: "Patagonia",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "United Arab Emirates",
    cities: [
      {
        name: "Dubai",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Boat excursions", image: "http", api_name: ['point_of_interest', "tourist_attraction", "boating"] },
            ],
          },
          {
            name: "Water activities",
            activities: [
              { name: "Pool Clubs", image: "http", api_name: ["resort", 'swimming pool'] },
              { name: "Jet Ski", image: "http", api_name: ["jet_ski_rental"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
          {
            name: "Sport Activities",
            activities: [
              { name: "Golf", image: "http", api_name: ["golf"] },
              { name: "Water sports", image: "http", api_name: ["water_sports", "water_activities", "aquatic_sports"] },
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Shopping Malls", image: "http", api_name: ["shopping_mall"] },
            ],
          },
          {
            name: "Outdoor activities",
            activities: [
              { name: "Safari", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
      {
        name: "Abu Dhabi",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Boat excursions", image: "http", api_name: ['point_of_interest', "tourist_attraction", "boating"] },
            ],
          },
          {
            name: "Water activities",
            activities: [
              { name: "Pool Clubs", image: "http", api_name: ["resort", 'swimming pool'] },
              { name: "Jet Ski", image: "http", api_name: ["jet_ski_rental"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
          {
            name: "Sport Activities",
            activities: [
              { name: "Golf", image: "http", api_name: ["golf"] },
              { name: "Water sports", image: "http", api_name: ["water_sports", "water_activities", "aquatic_sports"] },
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Shopping Malls", image: "http", api_name: ["shopping_mall"] },
            ],
          },
          {
            name: "Outdoor activities",
            activities: [
              { name: "Safari", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Germany",
    cities: [
      {
        name: "Berlin",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Museum", image: "http", api_name: ["museum"] },
              { name: "Art Galleries", image: "http", api_name: ["art_gallery"] },
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Shows and concerts", image: "http", api_name: ["movie_theater", 'event'] },
            ],
          },
        ],
      },
      {
        name: "Nuremberg",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Climbing", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Munich",
        activTypes: [
          {
            name: "Entertainment",
            activities: [
              { name: "Festivals", image: "http", api_name: ["festival"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Canada",
    cities: [
      {
        name: "Vancouver",
        activTypes: [
          {
            name: "Guided Tours",
            activities: [
              { name: "Boat excursions", image: "http", api_name: ['point_of_interest', "tourist_attraction", "boating"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Outdoor activities",
            activities: [
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
      {
        name: "Banff",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Hiking", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Sport Activities",
            activities: [
              { name: "Skiing and Snowboarding", image: "http", api_name: ["ski_resort"] },
            ],
          },
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Hot springs", image: "http", api_name: ["spa"] },
            ],
          },
        ],
      },
      {
        name: "Toronto",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
      {
        name: "Churchill",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
      {
        name: "Victoria",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Kayaking", image: "http", api_name: ["kayaking", 'kayak_rental'] },
            ],
          },
        ],
      },
      {
        name: "Whistler",
        activTypes: [
          {
            name: "Sport Activities",
            activities: [
              { name: "Skiing and Snowboarding", image: "http", api_name: ["ski_resort"] },
            ],
          },
        ],
      },
      {
        name: "Montreal",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Guided Tours",
            activities: [
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Entertainment",
            activities: [
              { name: "Festivals", image: "http", api_name: ["festival"] },
            ],
          },
        ],
      },
      {
        name: "Edmonton",
        activTypes: [
           {
            name: "Shopping",
            activities: [
              { name: "Shopping Malls", image: "http", api_name: ["shopping_mall"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Sweden",
    cities: [
      {
        name: "Stockholm",
        activTypes: [
          {
            name: "Guided Tours",
            activities: [
              { name: "Boat excursions", image: "http", api_name: ['point_of_interest', "tourist_attraction", "boating"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Maldives",
    cities: [
      {
        name: "Ari",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Snorkeling", image: "http", api_name: ["snorkeling", "snorkeling_spot", "snorkeling_center"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "French Polynesia",
    cities: [
      {
        name: "Bora Bora",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Snorkeling", image: "http", api_name: ["snorkeling", "snorkeling_spot", "snorkeling_center"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Indonesia",
    cities: [
      {
        name: "Raja Ampat",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Snorkeling", image: "http", api_name: ["snorkeling", "snorkeling_spot", "snorkeling_center"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
        ],
      },
      {
        name: "Bali",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
              { name: "Snorkeling", image: "http", api_name: ["snorkeling", "snorkeling_spot", "snorkeling_center"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
          {
            name: "Sport Activities",
            activities: [
              { name: "Water sports", image: "http", api_name: ["water_sports", "water_activities", "aquatic_sports"] },
            ],
          },
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Spa and Massages", image: "http", api_name: ["spa"] },
              { name: "Yoga and Wellness retreats", image: "http", api_name: ["yoga", "wellness", "retreat"] },
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Local Boutiques and Artisanal Products", image: "http", api_name: "shopping_mall" },
              { name: "Markets", image: "http", api_name: "shopping_mall" },
              // Ajoutez d'autres activités de shopping spécifiques à Cancún ici
            ],
          },
        ],
      },
      {
        name: "Jakarta",
        activTypes: [
          {
            name: "Cultural Tourism",
            activities: [
              { name: "Iconic architecture", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Thailand",
    cities: [
      {
        name: "Phi Phi Islands",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Snorkeling", image: "http", api_name: ["snorkeling", "snorkeling_spot", "snorkeling_center"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Spa and Massages", image: "http", api_name: ["spa"] },
            ],
          },
        ],
      },
      {
        name: "Phuket",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Pool Clubs", image: "http", api_name: ["resort", 'swimming pool'] },
              { name: "Jet Ski", image: "http", api_name: ["jet_ski_rental"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Local Boutiques and Artisanal Products", image: "http", api_name: "shopping_mall" },
              { name: "Markets", image: "http", api_name: "shopping_mall" },
            ],
          },
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Spa and Massages", image: "http", api_name: ["spa"] },
            ],
          },
        ],
      },
      {
        name: "Bangkok",
        activTypes: [
           {
            name: "Guided Tours",
            activities: [
              { name: "Walking tours", image: "http", api_name: ['point_of_interest', "tourist_attraction"] },
              { name: "Boat excursions", image: "http", api_name: ['point_of_interest', "tourist_attraction", "boating"] },
              { name: "Bus tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
              { name: "Thematic tours", image: "http", api_name: ["point_of_interest", "tourist_attraction"] },
            ],
          },
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: ["restaurant", "food"] },
              { name: "Visiting market", image: "http", api_name: ["liquor_store", 'bar'] },
              { name: "Cooking classes", image: "http", api_name: ["cooking_school", 'food'] },
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Local Boutiques and Artisanal Products", image: "http", api_name: "shopping_mall" },
              { name: "Markets", image: "http", api_name: "shopping_mall" },
              { name: "Shopping Malls", image: "http", api_name: ["shopping_mall"] },
            ],
          },
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Spa and Massages", image: "http", api_name: ["spa"] },
            ],
          },
        ],
      },
      {
        name: "Chiang Mai",
        activTypes: [
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Spa and Massages", image: "http", api_name: ["spa"] },
            ],
          },
        ],
      },
      {
        name: "Koh Samui",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Pool Clubs", image: "http", api_name: ["resort", 'swimming pool'] },
              { name: "Jet Ski", image: "http", api_name: ["jet_ski_rental"] },
              { name: "Beach", image: "http", api_name: ["beach"] },
            ],
          },
          {
            name: "Shopping",
            activities: [
              { name: "Local Boutiques and Artisanal Products", image: "http", api_name: "shopping_mall" },
              { name: "Markets", image: "http", api_name: "shopping_mall" },
            ],
          },
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Spa and Massages", image: "http", api_name: ["spa"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Costa Rica",
    cities: [
      {
        name: "Tamarindo",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
            ],
          },
        ],
      },
      {
        name: "San Jose",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Vietnam",
    cities: [
      {
        name: "Hanoi",
        activTypes: [
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: ["restaurant", "food"] },
              { name: "Cooking classes", image: "http", api_name: ["cooking_school", 'food'] },
              { name: "Visiting market", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
        ],
      },
      {
        name: "Ho Chi Minh City",
        activTypes: [
          {
            name: "Culinary experiences",
            activities: [
              { name: "Visiting market", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
        ],
      },
      {
        name: "Ha Long",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Kayaking", image: "http", api_name: ["kayaking", 'kayak_rental'] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Norway",
    cities: [
      {
        name: "Bergen",
        activTypes: [
          {
            name: "Water Activities",
            activities: [
              { name: "Kayaking", image: "http", api_name: ["kayaking", 'kayak_rental'] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Poland",
    cities: [
      {
        name: "Bialowieza (Białowieża)",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Madagascar",
    cities: [
      {
        name: "Ranomafana",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
      {
        name: "Antananarivo",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Denmark",
    cities: [
      {
        name: "Copenhagen",
        activTypes: [
          {
            name: "Outdoor activities",
            activities: [
              { name: "Cycling", image: "http", api_name: ["bicycle_rental"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Iceland",
    cities: [
      {
        name: "Reykjavik",
        activTypes: [
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Hot springs", image: "http", api_name: ["spa"] },
            ],
          },
        ],
      },
    ],
  },
  {
    country: "Morocco",
    cities: [
      {
        name: "Agadir",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
            ],
          },
        ],
      },
      {
        name: "Dakhla",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
            ],
          },
          {
            name: "Outdoor activities",
            activities: [
              { name: "Safari", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Wildlife observation", image: "http", api_name: ["zoo", 'natural_feature'] },
              { name: "Visiting nature reserves", image: "http", api_name: ["zoo", 'natural_feature'] },
            ],
          },
        ],
      },
      {
        name: "Marrakech",
        activTypes: [
          {
            name: "Water activities",
            activities: [
              { name: "Surfing", image: "http", api_name: ["surfing"] },
            ],
          },
          {
            name: "Culinary experiences",
            activities: [
              { name: "Local food tasting", image: "http", api_name: ["restaurant", "food"] },
              { name: "Cooking classes", image: "http", api_name: ["cooking_school", 'food'] },
              { name: "Visiting market", image: "http", api_name: ["liquor_store", 'bar'] },
            ],
          },
          {
            name: "Relaxation and Well-Being",
            activities: [
              { name: "Spa and Massages", image: "http", api_name: ["spa"] },
            ],
          },
        ],
      },
      {
        name: "Fes",
        activTypes: [
          {
            name: "Shopping",
            activities: [
              { name: "Local Boutiques and Artisanal Products", image: "http", api_name: "shopping_mall" },
              { name: "Markets", image: "http", api_name: "shopping_mall" },
            ],
          },
        ],
      },
    ],
  },
];

const popularCities = [
  { country: "United States", city: "New York City" },
  { country: "United States", city: "Los Angeles" },
  { country: "Mexico", city: "Mexico City" },
  { country: "Canada", city: "Toronto" },
  { country: "Canada", city: "Vancouver" },
  { country: "United States", city: "Chicago" },
  { country: "United States", city: "Miami" },
  { country: "United States", city: "San Francisco" },
  { country: "Canada", city: "Montreal" },
  { country: "United States", city: "Washington D.C." },
  { country: "United States", city: "Atlanta" },
  { country: "United States", city: "Houston" },
  { country: "Argentina", city: "Buenos Aires" },
  { country: "Brazil", city: "Rio de Janeiro" },
  { country: "Brazil", city: "São Paulo" },
  { country: "Colombia", city: "Bogotá" },
  { country: "Peru", city: "Lima" },
  { country: "Chile", city: "Santiago" },
  { country: "Venezuela", city: "Caracas" },
  { country: "Cuba", city: "Havana" },
  { country: "Mexico", city: "Mexico City" },
  { country: "Guatemala", city: "Guatemala City" },
  { country: "El Salvador", city: "San Salvador" },
  { country: "Panama", city: "Panama City" },
  { country: "Costa Rica", city: "San Jose" },
  { country: "Nicaragua", city: "Managua" },
  { country: "Honduras", city: "Tegucigalpa" },
  { country: "Puerto Rico", city: "San Juan" },
  { country: "Dominican Republic", city: "Santo Domingo" },
  { country: "Haiti", city: "Port-au-Prince" },
  { country: "Bolivia", city: "La Paz" },
  { country: "Ecuador", city: "Quito" },
  { country: "Uruguay", city: "Montevideo" },
  { country: "Paraguay", city: "Asunción" },
  { country: "Bahamas", city: "Nassau" },
  { country: "Guyana", city: "Georgetown" },
  { country: "Suriname", city: "Paramaribo" },
  { country: "Belize", city: "Belmopan" },
  { country: "Canada", city: "Ottawa" },
  { country: "Brazil", city: "Brasília" },
  { country: "Bolivia", city: "La Paz" },
  { country: "Paraguay", city: "Asunción" },
  { country: "Ecuador", city: "Quito" },
  { country: "Costa Rica", city: "San Jose" },
  { country: "Panama", city: "Panama City" },
  { country: "Nicaragua", city: "Managua" },
  { country: "Honduras", city: "Tegucigalpa" },
  { country: "El Salvador", city: "San Salvador" },
  { country: "Guatemala", city: "Guatemala City" },
  { country: "Cuba", city: "Havana" },
  { country: "France", city: "Paris" },
  { country: "Royaume-Uni", city: "Londres" },
  { country: "Italie", city: "Rome" },
  { country: "Espagne", city: "Barcelone" },
  { country: "Allemagne", city: "Berlin" },
  { country: "Pays-Bas", city: "Amsterdam" },
  { country: "République tchèque", city: "Prague" },
  { country: "Autriche", city: "Vienne" },
  { country: "Hongrie", city: "Budapest" },
  { country: "Espagne", city: "Madrid" },
  { country: "Portugal", city: "Lisbonne" },
  { country: "Grèce", city: "Athènes" },
  { country: "Italie", city: "Florence" },
  { country: "Royaume-Uni", city: "Édimbourg" },
  { country: "Suède", city: "Stockholm" },
  { country: "Allemagne", city: "Munich" },
  { country: "Belgique", city: "Bruxelles" },
  { country: "Croatie", city: "Dubrovnik" },
  { country: "Danemark", city: "Copenhague" },
  { country: "Suisse", city: "Zurich" },
  { country: "Norvège", city: "Oslo" },
  { country: "Finlande", city: "Helsinki" },
  { country: "Pologne", city: "Cracovie" },
  { country: "Islande", city: "Reykjavik" },
  { country: "France", city: "Nice" },
  { country: "France", city: "Marseille" },
  { country: "France", city: "Lyon" },
  { country: "Espagne", city: "Valence" },
  { country: "Portugal", city: "Porto" },
  { country: "Norvège", city: "Bergen" },
  { country: "Irlande", city: "Dublin" },
  { country: "Royaume-Uni", city: "Glasgow" },
  { country: "Pologne", city: "Varsovie" },
  { country: "Slovaquie", city: "Bratislava" },
  { country: "Bosnie-Herzégovine", city: "Sarajevo" },
  { country: "Lituanie", city: "Vilnius" },
  { country: "Lettonie", city: "Riga" },
  { country: "Estonie", city: "Tallinn" },
  { country: "Slovénie", city: "Ljubljana" },
  { country: "Serbie", city: "Belgrade" },
  { country: "Bulgarie", city: "Sofia" },
  { country: "Roumanie", city: "Bucarest" },
  { country: "République tchèque", city: "Prague" },
  { country: "Ukraine", city: "Kiev" },
  { country: "Turquie", city: "Istanbul (partiellement en Europe)" },
  { country: "Russie", city: "Saint-Pétersbourg" },
  { country: "Pologne", city: "Cracovie" },
  { country: "Royaume-Uni", city: "Edimbourg" },
  { country: "Espagne", city: "Séville" },
  { country: "Suisse", city: "Genève" },
  { country: "Croatie", city: "Dubrovnik" },
  { country: "Croatie", city: "Split" },
  { country: "Bosnie-Herzégovine", city: "Sarajevo" },
  { country: "Croatie", city: "Zagreb" },
  { country: "Serbie", city: "Belgrade" },
  { country: "Bulgarie", city: "Sofia" },
  { country: "Roumanie", city: "Bucarest" },
  { country: "Slovaquie", city: "Bratislava" },
  { country: "République tchèque", city: "Prague" },
  { country: "Hongrie", city: "Budapest" },
  { country: "République tchèque", city: "Brno" },
  { country: "Autriche", city: "Graz" },
  { country: "Autriche", city: "Salzbourg" },
  { country: "Autriche", city: "Innsbruck" },
  { country: "Espagne", city: "Bilbao" },
  { country: "Espagne", city: "Valence" },
  { country: "Espagne", city: "Saragosse" },
  { country: "Espagne", city: "Séville" },
  { country: "Espagne", city: "Malaga" },
  { country: "Espagne", city: "Murcie" },
  { country: "Espagne", city: "Palma de Majorque" },
  { country: "Espagne", city: "Alicante" },
  { country: "Portugal", city: "Porto" },
  { country: "Portugal", city: "Braga" },
  { country: "Portugal", city: "Coimbra" },
  { country: "Portugal", city: "Faro" },
  { country: "Danemark", city: "Odense" },
  { country: "Danemark", city: "Aarhus" },
  { country: "Suède", city: "Malmö" },
  { country: "Suède", city: "Gothenburg" },
  { country: "Suède", city: "Uppsala" },
  { country: "Finlande", city: "Turku" },
  { country: "Finlande", city: "Tampere" },
  { country: "Finlande", city: "Oulu" },
  { country: "Finlande", city: "Lahti" },
  { country: "Lettonie", city: "Riga" },
  { country: "Lettonie", city: "Daugavpils" },
  { country: "Estonie", city: "Tartu" },
  { country: "Estonie", city: "Pärnu" },
  { country: "Lituanie", city: "Vilnius" },
  { country: "Lituanie", city: "Kaunas" },
  { country: "Lituanie", city: "Klaipeda" },
  { country: "Pologne", city: "Lublin" },
  { country: "Pologne", city: "Katowice" },
  { country: "Pologne", city: "Gdansk" },
  { country: "Pologne", city: "Poznan" },
  { country: "Pologne", city: "Wroclaw" },
  { country: "Roumanie", city: "Cluj-Napoca" },
  { country: "Roumanie", city: "Timisoara" },
  { country: "Roumanie", city: "Constanta" },
  { country: "Égypte", city: "Le Caire" },
  { country: "Afrique du Sud", city: "Johannesburg" },
  { country: "Afrique du Sud", city: "Le Cap" },
  { country: "Kenya", city: "Nairobi" },
  { country: "Maroc", city: "Casablanca" },
  { country: "Maroc", city: "Marrakech" },
  { country: "Nigeria", city: "Lagos" },
  { country: "Ghana", city: "Accra" },
  { country: "Éthiopie", city: "Addis-Abeba" },
  { country: "Tanzanie", city: "Dar es Salaam" },
  { country: "Tunisie", city: "Tunis" },
  { country: "Algérie", city: "Alger" },
  { country: "Nigeria", city: "Abuja" },
  { country: "Afrique du Sud", city: "Pretoria" },
  { country: "Maroc", city: "Rabat" },
  { country: "Afrique du Sud", city: "Durban" },
  { country: "Égypte", city: "Alexandrie" },
  { country: "Ouganda", city: "Kampala" },
  { country: "Rwanda", city: "Kigali" },
  { country: "Cameroun", city: "Douala" },
  { country: "Côte d'Ivoire", city: "Abidjan" },
  { country: "Zambie", city: "Lusaka" },
  { country: "Zimbabwe", city: "Harare" },
  { country: "Mozambique", city: "Maputo" },
  { country: "Namibie", city: "Windhoek" },
  { country: "Ghana", city: "Accra" },
  { country: "Libye", city: "Tripoli" },
  { country: "Mali", city: "Bamako" },
  { country: "Burkina Faso", city: "Ouagadougou" },
  { country: "Guinée", city: "Conakry" },
  { country: "Sierra Leone", city: "Freetown" },
  { country: "Libéria", city: "Monrovia" },
  { country: "Tchad", city: "N'Djamena" },
  { country: "République du Congo", city: "Brazzaville" },
  { country: "République démocratique du Congo", city: "Kinshasa" },
  { country: "Gabon", city: "Libreville" },
  { country: "Niger", city: "Niamey" },
  { country: "Mauritanie", city: "Nouakchott" },
  { country: "Soudan", city: "Khartoum" },
  { country: "Somalie", city: "Mogadiscio" },
  { country: "Gambie", city: "Banjul" },
  { country: "Botswana", city: "Gaborone" },
  { country: "Eswatini (Swaziland)", city: "Mbabane" },
  { country: "Madagascar", city: "Antananarivo" },
  { country: "Malawi", city: "Lilongwe" },
  { country: "Seychelles", city: "Victoria" },
  { country: "Maurice", city: "Port Louis" },
  { country: "Érythrée", city: "Asmara" },
  { country: "Tanzanie", city: "Dodoma" },
  { country: "Comores", city: "Moroni" },
  { country: "Algérie", city: "Oran" },
  { country: "Algérie", city: "Constantine" },
  { country: "Algérie", city: "Tlemcen" },
  { country: "Algérie", city: "Sétif" },
  { country: "Algérie", city: "Batna" },
  { country: "Algérie", city: "Annaba" },
  { country: "Algérie", city: "Tébessa" },
  { country: "Algérie", city: "El Oued" },
  { country: "Algérie", city: "Bejaia" },
  { country: "Algérie", city: "Blida" },
  { country: "Algérie", city: "Skikda" },
  { country: "Algérie", city: "Biskra" },
  { country: "Algérie", city: "Tizi Ouzou" },
  { country: "Maroc", city: "Marrakech" },
  { country: "Maroc", city: "Fès" },
  { country: "Maroc", city: "Tanger" },
  { country: "Maroc", city: "Agadir" },
  { country: "Maroc", city: "Oujda" },
  { country: "Maroc", city: "Kenitra" },
  { country: "Maroc", city: "Tetouan" },
  { country: "Tunisie", city: "Sfax" },
  { country: "Tunisie", city: "Gabès" },
  { country: "Tunisie", city: "Kairouan" },
  { country: "Tunisie", city: "Bizerte" },
  { country: "Tunisie", city: "Gafsa" },
  { country: "Égypte", city: "Louxor (Luxor)" },
  { country: "Égypte", city: "Assouan (Aswan)" },
  { country: "Égypte", city: "Ismaïlia" },
  { country: "Égypte", city: "Tanta" },
  { country: "Égypte", city: "Mansoura" },
  { country: "Japon", city: "Tokyo" },
  { country: "Chine", city: "Pékin (Beijing)" },
  { country: "Chine", city: "Shanghai" },
  { country: "Thaïlande", city: "Bangkok" },
  { country: "Inde", city: "New Delhi" },
  { country: "Corée du Sud", city: "Séoul" },
  { country: "Inde", city: "Mumbai (Bombay)" },
  { country: "Singapour", city: "Singapour" },
  { country: "Indonésie", city: "Jakarta" },
  { country: "Malaisie", city: "Kuala Lumpur" },
  { country: "Japon", city: "Osaka" },
  { country: "Philippines", city: "Manille" },
  { country: "Vietnam", city: "Hanoï" },
  { country: "Vietnam", city: "Ho Chi Minh Ville" },
  { country: "Taïwan", city: "Taipei" },
  { country: "Bangladesh", city: "Dhaka" },
  { country: "Pakistan", city: "Lahore" },
  { country: "Inde", city: "Chennai (Madras)" },
  { country: "Inde", city: "Kolkata (Calcutta)" },
  { country: "Pakistan", city: "Islamabad" },
  { country: "Inde", city: "Hyderabad" },
  { country: "Myanmar (Birmanie)", city: "Yangon" },
  { country: "Inde", city: "Bangalore" },
  { country: "Iran", city: "Téhéran" },
  { country: "Sri Lanka", city: "Colombo" },
  { country: "Émirats arabes unis", city: "Abu Dhabi" },
  { country: "Émirats arabes unis", city: "Dubaï" },
  { country: "Qatar", city: "Doha" },
  { country: "Arabie saoudite", city: "Riyadh" },
  { country: "Arabie saoudite", city: "Jeddah" },
  { country: "Turquie", city: "Ankara" },
  { country: "Turquie", city: "Istanbul" },
  { country: "Jordanie", city: "Amman" },
  { country: "Irak", city: "Bagdad" },
  { country: "Cambodge", city: "Phnom Penh" },
  { country: "Oman", city: "Muscat" },
  { country: "Syrie", city: "Damas" },
  { country: "Yémen", city: "Sanaa" },
  { country: "Népal", city: "Katmandou" },
  { country: "Ouzbékistan", city: "Tachkent" },
  { country: "Kazakhstan", city: "Astana" },
  { country: "Kirghizistan", city: "Bichkek" },
  { country: "Géorgie", city: "Tbilissi" },
  { country: "Arménie", city: "Yerevan" },
  { country: "Pakistan", city: "Islamabad" },
  { country: "Pakistan", city: "Karachi" },
  { country: "Pakistan", city: "Lahore" },
  { country: "Myanmar (Birmanie)", city: "Yangon" },
  { country: "Bangladesh", city: "Chittagong" },
  { country: "Bangladesh", city: "Khulna" },
  { country: "Myanmar (Birmanie)", city: "Mandalay" },
  { country: "Inde", city: "Patna" },
  { country: "Indonésie", city: "Surabaya" },
  { country: "Indonésie", city: "Medan" },
  { country: "Indonésie", city: "Bandung" },
  { country: "Indonésie", city: "Semarang" },
  { country: "Indonésie", city: "Palembang" },
  { country: "Pakistan", city: "Faisalabad" },
  { country: "Pakistan", city: "Rawalpindi" },
  { country: "Pakistan", city: "Peshawar" },
  { country: "Népal", city: "Kathmandu" },
  { country: "Népal", city: "Pokhara" },
  { country: "Myanmar (Birmanie)", city: "Yangon" },
  { country: "Myanmar (Birmanie)", city: "Mandalay" },
  { country: "Myanmar (Birmanie)", city: "Naypyidaw" },
  { country: "Myanmar (Birmanie)", city: "Taunggyi" },
  { country: "Vietnam", city: "Da Nang" },
  { country: "Vietnam", city: "Quy Nhon" },
  { country: "Vietnam", city: "Can Tho" },
  { country: "Vietnam", city: "Haiphong" },
  { country: "Vietnam", city: "Bac Ninh" },
  { country: "Vietnam", city: "Hue" },
  { country: "Vietnam", city: "Vinh" },
  { country: "Vietnam", city: "Lạng Sơn" },
  { country: "Vietnam", city: "My Tho" },
  { country: "Vietnam", city: "Hoi An" },
  { country: "Laos", city: "Vientiane" },
  { country: "Laos", city: "Luang Prabang" },
  { country: "Laos", city: "Savannakhet" },
  { country: "Laos", city: "Pakse" },
  { country: "Laos", city: "Champasak" },
  { country: "Kazakhstan", city: "Kyzylorda" },
  { country: "Kazakhstan", city: "Oskemen (Ust-Kamenogorsk)" },
  { country: "Kazakhstan", city: "Pavlodar" },
  { country: "Kazakhstan", city: "Aktobe" },
  { country: "Kazakhstan", city: "Taraz" },
  { country: "Kazakhstan", city: "Karaganda" },
  { country: "Kazakhstan", city: "Shymkent" },
  { country: "Kazakhstan", city: "Atyrau" },
  { country: "Kazakhstan", city: "Aktau" },
  { country: "Kazakhstan", city: "Oral (Uralsk)" },
  { country: "Kazakhstan", city: "Ekibastuz" },
  { country: "Kazakhstan", city: "Kokshetau" },
  { country: "Kazakhstan", city: "Semey (Semipalatinsk)" },
  { country: "Kazakhstan", city: "Petropavl" },
  { country: "Kazakhstan", city: "Rudny" },
  { country: "Kazakhstan", city: "Temirtau" },
  { country: "Kazakhstan", city: "Zhezkazgan" },
  { country: "Kazakhstan", city: "Balkhash" },
  { country: "Kazakhstan", city: "Kapchagay" },
  { country: "Émirats arabes unis", city: "Ras Al Khaimah" },
  { country: "Émirats arabes unis", city: "Al Ain" },
  { country: "Émirats arabes unis", city: "Ajman" },
  { country: "Émirats arabes unis", city: "Fujairah" },
  { country: "Émirats arabes unis", city: "Umm Al Quwain" },
  { country: "Arabie saoudite", city: "Al Hofuf" },
  { country: "Arabie saoudite", city: "Dammam" },
  { country: "Arabie saoudite", city: "Jubail" },
  { country: "Arabie saoudite", city: "Al Khobar" },
  { country: "Arabie saoudite", city: "Yanbu" },
  { country: "Arabie saoudite", city: "Medina" },
  { country: "Arabie saoudite", city: "Tabuk" },
  { country: "Arabie saoudite", city: "Hail" },
  { country: "Arabie saoudite", city: "Al Qatif" },
  { country: "Arabie saoudite", city: "Jeddah" },
  { country: "Bahreïn", city: "Manama" },
  { country: "Bahreïn", city: "Riffa" },
  { country: "Bahreïn", city: "Muharraq" },
  { country: "Bahreïn", city: "Hamad Town" },
  { country: "Bahreïn", city: "Sitra" },
  { country: "Bahreïn", city: "Isa Town" },
  { country: "Yémen", city: "Aden" },
  { country: "Yémen", city: "Taëz" },
  { country: "Yémen", city: "Mukalla" },
  { country: "Yémen", city: "Ibb" },
  { country: "Yémen", city: "Al Hudaydah" },
  { country: "Yémen", city: "Sanaa" },
  { country: "Jordanie", city: "Amman" },
  { country: "Jordanie", city: "Zarqa" },
  { country: "Jordanie", city: "Irbid" },
  { country: "Jordanie", city: "Russeifa" },
  { country: "Jordanie", city: "Wadi Al Seer" },
  { country: "Jordanie", city: "Tafila" },
  { country: "Jordanie", city: "Ma'an" },
  { country: "Jordanie", city: "Ajloun" },
  { country: "Jordanie", city: "Salt" },
  { country: "Jordanie", city: "Kerak" },
  { country: "Jordanie", city: "Aqaba" },
  { country: "Australie", city: "Sydney" },
  { country: "Australie", city: "Melbourne" },
  { country: "Australie", city: "Brisbane" },
  { country: "Australie", city: "Perth" },
  { country: "Australie", city: "Adélaïde" },
  { country: "Australie", city: "Gold Coast" },
  { country: "Australie", city: "Canberra" },
  { country: "Nouvelle-Zélande", city: "Auckland" },
  { country: "Nouvelle-Zélande", city: "Wellington" },
  { country: "Nouvelle-Zélande", city: "Christchurch" },
  { country: "Nouvelle-Zélande", city: "Hamilton" },
  { country: "Nouvelle-Zélande", city: "Tauranga" },
  { country: "Nouvelle-Zélande", city: "Dunedin" },
  { country: "Nouvelle-Zélande", city: "Lower Hutt" },
  { country: "Nouvelle-Zélande", city: "Palmerston North" },
  { country: "Nouvelle-Zélande", city: "Napier" },
  { country: "Nouvelle-Zélande", city: "Porirua" },
  { country: "Nouvelle-Zélande", city: "Rotorua" },
  { country: "Nouvelle-Zélande", city: "Whangarei" },
  { country: "Australie", city: "Adelaide River" },
  { country: "Australie", city: "Cairns" },
  { country: "Australie", city: "Darwin" },
  { country: "Australie", city: "Hobart" },
  { country: "Australie", city: "Launceston" },
  { country: "Australie", city: "Newcastle" },
  { country: "Australie", city: "Wollongong" },
  { country: "Australie", city: "Albury" },
  { country: "Australie", city: "Wagga Wagga" },
  { country: "Australie", city: "Geelong" },
  { country: "Australie", city: "Townsville" },
  { country: "Australie", city: "Ballarat" },
  { country: "Australie", city: "Bendigo" },
  { country: "Australie", city: "Mackay" },
  { country: "Australie", city: "Mandurah" },
  { country: "Australie", city: "Bunbury" },
  { country: "Australie", city: "Rockingham" },
  { country: "Australie", city: "Bundaberg" },
  { country: "Australie", city: "Coffs Harbour" },
  { country: "Australie", city: "Wagga Wagga" },
  { country: "Australie", city: "Shepparton" },
  { country: "Australie", city: "Hervey Bay" },
  { country: "Australie", city: "Mildura" },
  { country: "Australie", city: "Tamworth" },
  { country: "Australie", city: "Port Macquarie" },
  { country: "Australie", city: "Orange" },
  { country: "Australie", city: "Dubbo" },
  { country: "Australie", city: "Geraldton" },
  { country: "Australie", city: "Nowra" },
  { country: "Australie", city: "Bathurst" },
  { country: "Australie", city: "Lismore" },
];

router.post("/", async (req, res) => {
  try {
    // const countriesResponse = await fetch('https://countriesnow.space/api/v0.1/countries');
    // const countriesData = await countriesResponse.json();

    for (let i = 0; i < popularCities[i].country.length; i++) {
      const allCities = [];
      const countryImgResponse = await fetch(
        `https://api.pexels.com/v1/search?query=${popularCities[i].country}&per_page=1`,
        {
          headers: {
            Authorization:
              "UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ",
          },
        }
      );
      console.log("country:", popularCities[i].country);

      const countryImgData = await countryImgResponse.json();

      let cities = countriesData.data[i].cities;

      for (let j = 0; j < cities.length; j++) {
        if (popularCities.some((element) => element.city === cities[j])) {
          const delay = (ms) =>
            new Promise((resolve) => setTimeout(resolve, ms));
          console.log(`city ${j} exists`);

          const cityImgResponse = await fetch(
            `https://api.pexels.com/v1/search?query=${cities[j]}&per_page=1`,
            {
              headers: {
                Authorization:
                  "UU1bXYdwOwbaZQAkPKmKlLTwS5nHwvbkKRhAPMbQdYdRpZYB0gjVKaUQ",
              },
            }
          );

          const cityImgData = await cityImgResponse.json();

          await delay(1000);

          if (
            cityImgData.photos &&
            cityImgData.photos[0] &&
            cityImgData.photos[0].length !== 0
          ) {
            const cityObj = {
              name: cities[j],
              cityImg: cityImgData.photos[0].src.original,
            };

            allCities.push(cityObj);
          } else {
            const cityObj = {
              name: cities[j],
              cityImg:
                "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            };
            allCities.push(cityObj);
          }
        } else {
          console.log(`city ${j} doesn exists`);
          const cityObj = {
            name: cities[j],
            cityImg:
              "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          };
          allCities.push(cityObj);
        }
      }
      const newCountry = new Country({
        country: countriesData.data[i].country,
        cities: allCities,
        image: countryImgData.photos[0].src.original,
      });

      await newCountry.save();
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ result: false, error: "Internal Server Error" });
  }

  res.json({ result: true });
});

router.get("/Allcountries", async (req, res) => {
  Country.find().then((data) => {
    let countries = [];
    for (let i = 0; i < data.length; i++) {
      console.log("data de i", data[i]);
      const country = {
        name: data[i].name,
        image: data[i].image,
        id: data[i]._id,
      };
      console.log("country", country);
      countries.push(country);
    }
    console.log("countries", countries);
    res.json({ result: true, countries });
  });
});

router.post("/cities", async (req, res) => {
  Country.findOne({ country: req.body.country }).then((data) => {
    console.log(data);
    res.json({ result: true, cities: data.cities });
  });
});

router.post("/city", async (req, res) => {
  Country.findOne({ country: req.body.country }).then((data) => {
    const city = data.cities.find((element) => element.name === req.body.city);
    res.json({ result: true, city });
  });
});

module.exports = router;
