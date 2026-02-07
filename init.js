import { switchTheme } from "./src/components/switchTheme.js";
import { getGeoData } from "./src/api/geoData.js"; 
import { geteWeatherByForm } from "./src/components/inputForm.js";
import { renderCurrentTime } from "./src/helpers/currentTime.js";
import { geoLocation } from "./src/components/geoLocation.js";
import { scrollToTop } from "./src/components/scrollToTop.js";
export function initApp () {
  switchTheme();
  getGeoData();
  geteWeatherByForm();
  renderCurrentTime();
  geoLocation();
  scrollToTop();
}