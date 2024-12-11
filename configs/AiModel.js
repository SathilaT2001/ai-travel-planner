const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location : New York USA, for 2 Days and 2 Night for Family with a Luxury budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions. and Places to visit with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for 2 days and 2 night with each day plan with best time to visit in JSON format\n\n{\n    \"flight_details\": {\n        \"booking_platform\": \"Find My Fare\",\n        \"airline\": \"United Airlines\",\n        \"flight_price\": \"$944\",\n        \"booking_url\": \"https://www.findmyfare.com/\"\n    },\n    \"hotels\": [\n        {\n            \"name\": \"The Plaza Hotel\",\n            \"address\": \"768 5th Ave, New York, NY 10019, USA\",\n            \"price\": \"[Price]\",\n            \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/New_York_-_Manhattan_-_Plaza_Hotel.jpg/375px-New_York_-_Manhattan_-_Plaza_Hotel.jpg\",\n            \"geo_coordinates\": \"40.7668, -73.9762\",\n            \"rating\": \"4.5\",\n            \"description\": \"A luxurious landmark hotel with stunning views of Central Park.\"\n        },\n        {\n            \"name\": \"The St. Regis New York\",\n            \"address\": \"2 E 55th St, New York, NY 10022, USA\",\n            \"price\": \"[Price]\",\n            \"image_url\": \"https://lh3.googleusercontent.com/proxy/Ef2XIqdEfQW24XzQJ9fdZamukCl7-FkzrOXD3nbq1oOP0vU_E-9Uy1w487r6ZE7ztp2ObTEMBBB61j6bBHS7xT5Rpn_YGlscWAnALPocxvDtgDr4NcHCVmn2cNbVC-jPc42CksvihYTu02xmWXvrSXDQW2NuD-A=s1360-w1360-h1020\",\n            \"geo_coordinates\": \"40.7605, -73.9737\",\n            \"rating\": \"4.5\",\n            \"description\": \"A sophisticated hotel with elegant rooms and a prime location.\"\n        },\n        {\n            \"name\": \"The Ritz-Carlton New York, Central Park\",\n            \"address\": \"50 Central Park S, New York, NY 10019, USA\",\n            \"price\": \"[Price]\",\n            \"image_url\": \"https://lh3.googleusercontent.com/p/AF1QipMa9bKPvfVGbMt3MUxDn9myQYAXd59ElO9_soyU=s1360-w1360-h1020\",\n            \"geo_coordinates\": \"40.7664, -73.9784\",\n            \"rating\": \"4.6\",\n            \"description\": \"A luxurious hotel with stunning views of Central Park and top-notch amenities.\"\n        }\n    ],\n    \"itinerary\": [\n        {\n            \"day\": 1: \n                {\n                    \"name\": \"Central Park\",\n                    \"details\": \"Explore the iconic Central Park, rent a bike, or take a horse-drawn carriage ride.\",\n                    \"image_url\": \"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSY2Ku_AcgrKPeoJXL11qEbvgEe6BCoxv7HKea0HhCpSjPYUx3QCtHb7PUYPX2QrxHNOOgbOhu7PJqQ_9VgYVOKVhTMuVcJQ2VN21SPAg\",\n                    \"geo_coordinates\": \"40.7789, -73.9694\",\n                    \"ticket_price\": \"Free\",\n                    \"time_to_travel\": 30\n                },\n               \n                {\n                    \"name\": \"Shopping at Fifth Avenue\",\n                    \"details\": \"Indulge in luxury shopping at high-end stores like Bergdorf Goodman, Tiffany & Co., and Saks Fifth Avenue.\",\n                    \"image_url\": \"https://lh3.googleusercontent.com/p/AF1QipM18ohH5CPtC8j-2C-XT983HzaZeg8zirF5RXL8=s1360-w1360-h1020\",\n                    \"geo_coordinates\": \"40.7667, -73.9763\",\n                    \"ticket_price\": \"Free\",\n                    \"time_to_travel\": 5\n                },\n          \n            \n                {\n                    \"name\": \"Broadway Show\",\n                    \"details\": \"Catch a Broadway show at a historic theater.\",\n                    \"image_url\": \"https://images.ctfassets.net/1aemqu6a6t65/7itGivzNvJXbB1htnRO86h/058afdf5947c344803214a2f9b0c8146/Aladdin-the-musical-2-Broadway-Manhattan-NYC-Courtesy-Disney.jpg\",\n                    \"geo_coordinates\": \"Varies by show\",\n                    \"ticket_price\": \"Varies\",\n                    \"time_to_travel\": \"Varies\"\n                }\n            \n        },\n        {\n            \"day\": 2:\n                {\n                    \"name\": \"The Metropolitan Museum of Art\",\n                    \"details\": \"Explore one of the world's finest art museums.\",\n                    \"image_url\": \"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQq01BCpidukUnEoF4A4dbLIlb0sT_kCYcGgyyb0-oDJJns6c_hLlc4xEh3dFbZEuttPZbDTP_UebqQld2rqKopgGEtvb7UZ_p1eJJRh2M\",\n                    \"geo_coordinates\": \"40.7794, -73.9632\",\n                    \"ticket_price\": \"Varies\",\n                    \"time_to_travel\": 15\n                },\n            \n            \n                {\n                    \"name\": \"Museum of Modern Art (MoMA)\",\n                    \"details\": \"Immerse yourself in modern and contemporary art.\",\n                    \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/MoMa_NY_USA_1.jpg/1200px-MoMa_NY_USA_1.jpg\",\n                    \"geo_coordinates\": \"40.7614, -73.9772\",\n                    \"ticket_price\": \"Varies\",\n                    \"time_to_travel\": 5\n                },\n            \n                {\n                    \"name\": \"Top of the Rock Observation Deck\",\n                    \"details\": \"Enjoy breathtaking panoramic views of the city.\",\n                    \"image_url\": \"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ2IcASU-pLwBhLbzi8Ad4Upa189JeKXxGgFkvw5wFHjlvUpLRDsetIf6VrB9HgNCIuVY9L4g4KBa5O8p8RQ4y0iU_CYlYa5FGkQCDE8g\",\n                    \"geo_coordinates\": \"40.7580, -73.9785\",\n                    \"ticket_price\": \"Varies\",\n                    \"time_to_travel\": 10\n                }\n            ]\n        }\n    ]\n}"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"flight_details\": {\n    \"booking_platform\": \"Expedia\", \n    \"airline\": \"Delta Airlines\", \n    \"flight_price\": \"$800\", \n    \"booking_url\": \"https://www.expedia.com/\" \n  },\n  \"hotels\": [\n    {\n      \"name\": \"The Plaza Hotel\",\n      \"address\": \"768 5th Ave, New York, NY 10019, USA\",\n      \"price\": \"$1500/night\",\n      \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/New_York_-_Manhattan_-_Plaza_Hotel.jpg/375px-New_York_-_Manhattan_-_Plaza_Hotel.jpg\",\n      \"geo_coordinates\": \"40.7668, -73.9762\",\n      \"rating\": \"4.6\",\n      \"description\": \"A luxurious landmark hotel with stunning views of Central Park.  Features high-end shopping, fine dining, and impeccable service.\"\n    },\n    {\n      \"name\": \"The St. Regis New York\",\n      \"address\": \"2 E 55th St, New York, NY 10022, USA\",\n      \"price\": \"$1200/night\",\n      \"image_url\": \"https://dynamic-media.cdn.cnn.com/api/v1/image/387712_1.jpg?q=80&size=400x400\",\n      \"geo_coordinates\": \"40.7605, -73.9737\",\n      \"rating\": \"4.7\",\n      \"description\": \"A sophisticated hotel known for its elegant rooms, exceptional butler service, and a prime Midtown location.\"\n    },\n    {\n      \"name\": \"The Ritz-Carlton New York, Central Park\",\n      \"address\": \"50 Central Park S, New York, NY 10019, USA\",\n      \"price\": \"$1800/night\",\n      \"image_url\": \"https://dynamic-media.cdn.cnn.com/api/v1/image/387712_1.jpg?q=80&size=400x400\",\n      \"geo_coordinates\": \"40.7664, -73.9784\",\n      \"rating\": \"4.8\",\n      \"description\": \"A luxurious hotel offering breathtaking Central Park views, impeccable service, and world-class amenities.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"plan\": [\n        {\n          \"name\": \"Central Park Exploration\",\n          \"details\": \"Enjoy a leisurely stroll, bike ride, or horse-drawn carriage ride through Central Park. Visit Strawberry Fields, Bethesda Terrace, and the Bow Bridge.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Central_Park_from_the_air.jpg/1280px-Central_Park_from_the_air.jpg\",\n          \"geo_coordinates\": \"40.7829, -73.9654\", \n          \"ticket_price\": \"Free (carriage ride extra)\",\n          \"time_to_travel\": \"3-4 hours\"\n        },\n        {\n          \"name\": \"Fifth Avenue Shopping & Lunch\",\n          \"details\": \"Explore luxury boutiques on Fifth Avenue, including Saks Fifth Avenue, Tiffany & Co., and Bergdorf Goodman. Enjoy lunch at a high-end restaurant.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Fifth_Avenue_looking_south_from_57th_Street.jpg/1280px-Fifth_Avenue_looking_south_from_57th_Street.jpg\",\n          \"geo_coordinates\": \"40.7649, -73.9738\",\n          \"ticket_price\": \"Varies (shopping)\",\n          \"time_to_travel\": \"3-4 hours\"\n        },\n        {\n          \"name\": \"Broadway Show\",\n          \"details\": \"Attend a captivating Broadway performance.  Book tickets in advance!\",\n          \"image_url\": \"https://www.broadway.com/wp-content/uploads/2023/06/hamilton-2023-2.jpg\",\n          \"geo_coordinates\": \"Varies by theater\",\n          \"ticket_price\": \"$100-$500+\",\n          \"time_to_travel\": \"3-4 hours (including travel)\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"plan\": [\n        {\n          \"name\": \"Metropolitan Museum of Art\",\n          \"details\": \"Explore the vast collection of art and artifacts at the Met. Allow ample time to see key highlights.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Metropolitan_Museum_of_Art_exterior_view.jpg/1280px-The_Metropolitan_Museum_of_Art_exterior_view.jpg\",\n          \"geo_coordinates\": \"40.7794, -73.9632\",\n          \"ticket_price\": \"$30\",\n          \"time_to_travel\": \"3-4 hours\"\n        },\n        {\n          \"name\": \"Lunch & Rockefeller Center\",\n          \"details\": \"Enjoy lunch near the Met, then explore Rockefeller Center, including Top of the Rock Observation Deck for stunning city views.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Rockefeller_Center_from_the_Top_of_the_Rock.jpg/1280px-Rockefeller_Center_from_the_Top_of_the_Rock.jpg\",\n          \"geo_coordinates\": \"40.7589, -73.9776\",\n          \"ticket_price\": \"Top of the Rock: $40\",\n          \"time_to_travel\": \"3-4 hours\"\n        },\n        {\n          \"name\": \"Museum of Modern Art (MoMA)\",\n          \"details\": \"Visit MoMA and admire masterpieces of modern and contemporary art.\",\n          \"image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/MoMa_NY_USA_1.jpg/1200px-MoMa_NY_USA_1.jpg\",\n          \"geo_coordinates\": \"40.7614, -73.9772\",\n          \"ticket_price\": \"$25\",\n          \"time_to_travel\": \"2-3 hours\"\n        }\n      ]\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  
  