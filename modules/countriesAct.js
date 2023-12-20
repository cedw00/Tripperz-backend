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

module.exports =  { citiesActivities };