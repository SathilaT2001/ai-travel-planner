export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'⛷️',
        people:'1'
    },
    {
        id: 2,
        title: "Couple",
        desc: "A duo exploring the world together",
        icon: "💑",
        people: "2"
      },
      {
        id: 3,
        title: "Family",
        desc: "A group sharing memorable journeys",
        icon: "🏡",
        people: "3 to 5 People"
      },
      {
        id: 4,
        title: "Friends",
        desc: "A lively crew chasing adventures",
        icon: "🤝",
        people: "5 to 10 People"
      }
]

export const SelectBudgetOption=[
  {
    id:1,
    title:'Cheap',
    desc:'Stay vonscious of costs',
    icon:'🤑',
  },
  {
    id:2,
    title:'Moderate',
    desc:'Keep cost on the average',
    icon:'💵',
  },
  {
    id:3,
    title:'Luxury',
    desc:'Dont worry about cost',
    icon:'💰',
  },
]

export const AI_PROMPT='Generate Travel Plan for Location : {location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions. and Places to visit with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit,my travel plan details(destination,duration,budget,traveler_details...etc) in JSON format'