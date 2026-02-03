import { apiKey, baseUrl } from "./apiKeyAndHost.js";
import { cityInput } from "../components/inputForm.js";
import { showError } from "../components/error.js";  
import { isLatinOnly } from "../helpers/checkLatin.js"; 
import { replaceAbbreviation } from "../helpers/cityAbbreviation.js";

export const getGeoData = async () => {
  let city = cityInput.value.trim();

  if (!city) {
    return;
  }
  if (!isLatinOnly(city)) {
    showError('Check the cities Name');
    return;
  }

  // city = replaceAbbreviation(city) {

  // }
  
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
    showError("Data didn't get");
  }
}