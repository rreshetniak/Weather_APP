import { showError } from "../components/error.js";

const cityInput = document.querySelector('.city-input');

export const isLatinOnly = (inputCityText) => {
  //const latinPattern = /^[A-Za-zÄÖÜäöü\s.'-]+$/;
  const latinPattern = /^[\p{Script=Latin}\s.'-]+$/u;
  return latinPattern.test(inputCityText);
}

cityInput.addEventListener('input', () => {
  const inputValue = cityInput.value;
  if (inputValue && !isLatinOnly(inputValue)) {
    showError("Use latin symbols only");
  } else {
    showError('');
  }
});