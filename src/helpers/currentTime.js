let currentTimezoneOffsetSec = null;

export const setCurrentTimezoneOffset = (offsetSeconds) => {
  if (Number.isFinite(offsetSeconds)) {
    currentTimezoneOffsetSec = offsetSeconds;
   } else {
    currentTimezoneOffsetSec = null;
   }

   renderCurrentTime();
}

export const formatDate = (date, useUtcFormatting) => {
  // const datePart = date.toLocaleDateString('en', {
  //   weekday: 'short',
  //   day: 'numeric',
  //   month: 'short',
  
  // });

  const dateOptions = {
    weekDay: "short",
    day: "numeric",
    month: "short",
  };

  // const timePart = date.toLocaleTimeString('en-US', {
  //   hour: '2-digit',
  //   minute: '2-digit',

  // })

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }

  if (useUtcFormatting) {
    dateOptions.timeZone = "UTC";
    timeOptions.timeZone = "UTC";
  }

  const datePart = date.toLocaleDateString("en-US", dateOptions);
  const timePart = date.toLocaleDateString("en-US", timeOptions);

  return `${datePart}, ${timePart}`
}

export const renderCurrentTime = () => {
  const nowElement = document.querySelector('.now');
  // const currentTime = new Date();

  // const formattedTime = formatDate(currentTime);
  // nowElement.textContent = `Now: ${formattedTime}`;
  if (!nowElement) {
    return;
  }
  
  if (currentTimezoneOffsetSec === null) {
    localNow = new Date ();
    nowElement.textContent = `Now: ${formatDate(localNow, false)}`;
    return;
  }

  // Время выбранной локации:
  // 1) берём текущее UTC-время в секундах
  // 2) прибавляем offset города (в секундах)
  // 3) создаём Date и форматируем как UTC
  const nowUtcSec = Math.floor(Date.now() / 1000);
  const localSec = nowUtcSec + currentTimezoneOffsetSec;
  const localDate = new Date(localSec * 1000);

  nowElement.textContent = `Now: ${formatDate(localDate, true)}`;

}



setInterval(renderCurrentTime, 60000);