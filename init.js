import { switchTheme } from "./src/components/switchTheme.js";
import { getGeoData } from "./src/api/geoData.js"; 
import { geteWeatherByForm } from "./src/components/inputForm.js";
export function initApp () {
  switchTheme();
  getGeoData();
  geteWeatherByForm();
}