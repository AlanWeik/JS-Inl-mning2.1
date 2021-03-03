// Foursquare
const clientId = "EN5DJDGHU5COJS5BSROVHN0DYKHCGRGJ0FSWAJZC3TS0GT5T";
const clientSecret = "PCK5DQLXAJ1H4LZKRF5T3M2ERT2LK3IXW2FRYTXMYPDZ53ZY";

async function fetchWeather(city) {
  const weatherKey = "130c1f0ea968fc82e4f1a6eb80ca25e3";
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`;
  const response = await fetch(weatherUrl);
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

(async function () {
  var addweather = await fetchWeather("Malmö");
})();

async function getVenues(city) {
  const url = `https://api.foursquare.com/v2/venues/explore?near=`;
  const venueUrl =
    url +
    city +
    "&limit=10&client_id=" +
    clientId +
    "&client_secret=" +
    clientSecret +
    "&v=20210301";
  const response = await fetch(venueUrl);
  const venueData = await response.json();
  console.log(venueData);
  return venueData;
}

(async function () {
  var addVenue = await getVenues("Malmö");
})();
