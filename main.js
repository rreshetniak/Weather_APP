import {initApp} from './init.js';

// движение солнца в зависимости от времени

// const svg = document.querySelector(".sun-disk");
// const path = svg?.querySelector(".sun-path");
// const sun = svg?.querySelector(".sun-cycle");

// function clamp(value, min, max) {
//   return Math.min(max, Math.max(min, value));
// }

// function parseTimeToToday(timeStr) {
//   const [hh, mm] = timeStr.split(":").map(Number);
//   const d = new Date();
//   d.setHours(hh, mm, 0, 0);
//   return d;
// }

// function setSunByProgress(progress) {
//   if (!path || !sun) {
//     return;
//   }

//   const length = path.getTotalLength();
//   const point = path.getPointAtLength(length * clamp(progress, 0, 1));

//   sun.setAttribute("cx", String(point.x));
//   sun.setAttribute("cy", String(point.y));
// }

// function updateSunPositionByTime() {
//   const sunriseEl = document.querySelector(".sun-time.sunrise");
//   const sunsetEl = document.querySelector(".sun-time.sunset");

//   if (!sunriseEl || !sunsetEl) {
//     return;
//   }

//   const sunrise = parseTimeToToday(sunriseEl.textContent.trim());
//   const sunset = parseTimeToToday(sunsetEl.textContent.trim());
//   const now = new Date();

//   const dayDuration = sunset.getTime() - sunrise.getTime();
//   if (dayDuration <= 0) {
//     return;
//   }

//   const progress = (now.getTime() - sunrise.getTime()) / dayDuration;

//   // Ночью можно "прилипать" к краям:
//   setSunByProgress(progress);
// }

// // 1) сразу поставить
// updateSunPositionByTime();

// // 2) обновлять раз в минуту достаточно (не обязательно 60fps)
// setInterval(() => {
//   updateSunPositionByTime();
// }, 60_000);

