import { switchTheme } from "./src/components/switchTheme.js";
import { getGeoData } from "./src/api/geoData.js"; 
export function initApp () {
  switchTheme();
  getGeoData();
}