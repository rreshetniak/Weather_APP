const hourlyForecast = document.querySelector('.hourly-scroll');

export const renderHourlyForecast = (data) => {
  hourlyForecast.innerHTML = "";
  const currentDate = new Date();

  currentDate.setHours(0, 0, 0, 0);

  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //const dayOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  data.list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const hour = date.getHours();
    const temp = Math.round(item.main.temp);
    const icon = item.weather[0].icon;

    const forecastDate = new Date(date);
    forecastDate.setHours(0, 0, 0, 0);

    const timeDiff = forecastDate.getTime() - currentDate.getTime();

    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    let dayLabel;

    if (dayDiff === 0) {
      dayLabel = 'Today';
    } else if (dayDiff === 1) {
      dayLabel = 'Tomorr';
    } else {
      dayLabel = dayOfWeek[forecastDate.getDay()];
    }

    const hourlyItem = document.createElement("div");
    hourlyItem.classList.add("hourly-item");
    hourlyItem.innerHTML = `

      <p class="hour">${dayLabel}</p>
      <p class="hour">${hour}:00</p>
      <img
        src="https://openweathermap.org/img/wn/${icon}.png"
        alt="Weather"
      />
      <p class="temp">${temp}°C</p>
    `;
    hourlyForecast.append(hourlyItem);
  });
};