import { apiKey, baseUrl } from "./apiKeyAndHost.js";

const searchForm = document.querySelector('.search-form');
const cityInput = document.querySelector('.city-input');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  getGeoData();
});

export const getGeoData = async () => {
  const city = cityInput.value.trim();

  if (!city) return;
  
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

    console.log(lat, lon);

  } catch (error) {
    console.error(error.message);
  }
}