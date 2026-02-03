import { getGeoData } from "../api/geoData.js";

const searchForm = document.querySelector('.search-form');
export const cityInput = document.querySelector('.city-input');

export function geteWeatherByForm () {
  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    getGeoData(cityInput);
  });

}
