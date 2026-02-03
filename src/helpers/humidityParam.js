export const updateHumidityScale = (humidity) => {
  const humidityParam = document.querySelector('.parameter');
  humidityParam.style.width = `${humidity}%`;
}