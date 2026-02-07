import { baseUrl, apiKey } from "../api/apiKeyAndHost.js";
import { showError, clearError } from "./error.js";
import { getWeather, getForecast } from "../api/getWeatherAndForecast.js";
import { renderCurrentWeather } from "./currentWeather.js";
import { renderHourlyForecast } from "./hourlyForecast.js";
import { renderDailyForecast } from "./dailyForecast.js";
import { cityInput } from "./inputForm.js";

export function geoLocation () {
  document.addEventListener('DOMContentLoaded', async () => {
    clearError();
    try {
      // Получить данные широты и долготы
      const {latitude, longitude} = await getBrowserGeolocation();

      // на основе этих данных получаем название населённого пункта
      const locationName = await geoLocationName(latitude, longitude);

      // мы передаём координаты 
      
      // на основе полученного населённого пункта получаем данные погоды
      await fetchWeatherByCoords(latitude, longitude, locationName);
    } catch (error) {
       // обработка ошибок
      console.error('Error while getting geolocation:', error);
      //console.error('Error by catch geolocation data:', error.message);
      const typedCity = cityInput?.value?.trim();
      if (typedCity) return;
      
    // ошибки navigator.geolocation приходят с code: 1/2/3
    if (error && typeof error.code === "number") {
      if (error.code === 1) {
        showError("Geolocation is blocked. Please enter the city manually.");
        return;
      }
      if (error.code === 2) {
        showError("Geolocation is unavailable. Please enter the city manually.");
        return;
      }
      if (error.code === 3) {
        showError("Geolocation timeout. Please enter the city manually.");
        return;
      }
    }

    showError("It's not possible to find your place. Please input the city manually.");
    }
  })
}

const getBrowserGeolocation = () => {
  return new Promise((resolve, reject) => {
    if(!navigator.geolocation) {
      reject(new Error("Geolocation dosn't support by your browser"));
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: false,
        timeout: 10_000,
        maximumAge: 60_000,
      }
    );
    }
  })
}

const geoLocationName = async (latitude, longitude) => {
  const reversGeocodingUrl = new URL(`${baseUrl}/geo/1.0/reverse`);
  const queryParams = new URLSearchParams({
    lat: latitude,
    lon: longitude,
    limit: 1,
    appid: apiKey,
  });

  const url = `${reversGeocodingUrl}?${queryParams.toString()}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return null;
      //throw new Error ("Reverse geocoding request failed");
    } 

    const data = await response.json();

    // if (data && data.length > 0) {
    //   const {local_names} = data[0];
    //   return local_names;
    // } else {
    //   throw new Error("The place name is unknown");
    // }

    if (Array.isArray(data) && data.length > 0) {
      const item = data[0];
      return item.names || null;
    } 

    return null;
    
  } catch (error) {
    console.error("Reverse geocoding error:", error)
    return null;
  }
};

const fetchWeatherByCoords = async (latitude, longitude, locationName) => {
  try {
    const weatherData = await getWeather(latitude, longitude);
    const forecastData = await getForecast(latitude, longitude);

    renderCurrentWeather(weatherData, locationName);
    renderHourlyForecast(forecastData);
    renderDailyForecast(forecastData);
  } catch (error) {
    console.error(error.message);
    showError("It's not possible to get the weather data, try again later.");
  }
}