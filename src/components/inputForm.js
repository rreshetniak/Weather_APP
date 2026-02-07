import { getGeoData } from "../api/geoData.js";
import { clearError } from "./error.js";
import { showRecentCities } from "./showRecentCities.js";

const searchForm = document.querySelector('.search-form');
export const cityInput = document.querySelector('.city-input');

export function geteWeatherByForm () {
  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearError();
    getGeoData(cityInput);
  });

  cityInput.addEventListener('focus', () => {
    showRecentCities();
  });
}
