// Foursquare
const clientId = "EN5DJDGHU5COJS5BSROVHN0DYKHCGRGJ0FSWAJZC3TS0GT5T";
const clientSecret = "PCK5DQLXAJ1H4LZKRF5T3M2ERT2LK3IXW2FRYTXMYPDZ53ZY";
// Openweather
const weatherKey = "130c1f0ea968fc82e4f1a6eb80ca25e3";
const urlToFetch = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`;
const city = document.querySelector("#city");

const executeSearch = () => {
  document.querySelector("#button").onclick = async function fetchWeather(
    city
  ) {
    const response = await fetch(urlToFetch);
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  };
};

/*(async function () {
  var addweather = await fetchWeather("Malmö");
})();*/

/*async function getCurrentWeather(city) {
    const weatherKey = "130c1f0ea968fc82e4f1a6eb80ca25e3";

    const Weather_api_url = new URL(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`
      );
        /*Weather_api_url.searchParams.append("mode", "json");
        Weather_api_url.searchParams.append("appid", appId);
        Weather_api_url.searchParams.append("units", "metric");
        Weather_api_url.searchParams.append("lang", "en");
        const response = await fetch(Weather_api_url);
        const WeatherData = await response.json();
        console.log(WeatherData)
        return WeatherData;
    }*/
