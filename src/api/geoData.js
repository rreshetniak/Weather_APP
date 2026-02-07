import { apiKey, baseUrl } from "./apiKeyAndHost.js";
import { cityInput } from "../components/inputForm.js";
import { showError } from "../components/error.js";  
import { isLatinOnly } from "../helpers/checkLatin.js"; 
import { replaceAbbreviation } from "../helpers/cityAbbreviation.js";
import { saveCityToLocalStorage } from "../helpers/saveCityToLocalStorage.js" 
import { getWeather } from "./getWeatherAndForecast.js";
import { getForecast } from "./getWeatherAndForecast.js";
import { renderCurrentWeather } from "../components/currentWeather.js";
import { renderHourlyForecast } from "../components/hourlyForecast.js";
import { renderDailyForecast } from "../components/dailyForecast.js";

export const getGeoData = async () => {
  let city = cityInput.value.trim();

  if (!city) {
    return;
  }
  
  if (!isLatinOnly(city)) {
    showError('Check the cities Name');
    return;
  }

  city = replaceAbbreviation(city);
  
  try {
    const geoUrl = `${baseUrl}/geo/1.0/direct`;
    const queryParams = new URLSearchParams({
      q: city,
      limit: 1,
      appid: apiKey,
    });

    const geoResponse = await fetch(`${geoUrl}?${queryParams.toString()}`);
    const geoData = await geoResponse.json();

    if (!geoData.length) {
      throw new Error("The city wasn't founded");
    }

    const {lat, lon} = geoData[0];

    saveCityToLocalStorage(city); // Save the founded city to Local Storage

    const weatherData = await getWeather(lat, lon);
    const forecastData = await getForecast(lat, lon);

    console.log(weatherData);
    console.log(forecastData);

    renderCurrentWeather (weatherData, city);
    renderHourlyForecast (forecastData);
    renderDailyForecast (forecastData);

    console.log(lat, lon);

  } catch (error) {
    console.error(error.message);
    showError("Data didn't get");
  }
}