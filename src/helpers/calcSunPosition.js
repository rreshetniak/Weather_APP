export const calcSunPosition = (sunriseUnix, sunsetUnix, nowUNix = Math.floor(Date.now() / 1000)) => {
  const now = Math.floor(Date.now() / 1000); // make seconds bcz sunrise & sunset in ms
  if(!Number.isFinite(sunriseUnix) || !Number.isFinite(sunsetUnix) || sunriseUnix >= sunsetUnix) {
    return null;
  }

  const progress = (nowUNix - sunriseUnix) / (sunsetUnix - sunriseUnix);

  if (progress < 0 || progress > 1) {
    return null;
  }
  
  // const totalDayLength = sunset - sunrise;
  // const elapsedTime = now - sunrise;
  // const percentage = elapsedTime / totalDayLength;
  // return percentage;
  return progress;
}

export const updateSunPosition = (sunPosition) => {
  const sun = document.querySelector('.sun-graphic .sun-cycle');

  if (!sun) {
    return;
  }

  if (!Number.isFinite(sunPosition)) {
    sun.setAttribute("visibility", "hidden");
    return;
  }

  // if (sunPosition < 0 || sunPosition > 1) {
  //   sun.setAttribute("visibility", "hidden");
  //   return
  // } 
 
  sun.setAttribute("visibility", "visible");

  const startX = 20;
  const endX = 180;
  const chordY = 40;
  //const horizontY = 40;
  // const arcRadius = 55;
  const radius = 90;

  const centerX = (startX + endX) / 2;
  const halfChord = (endX - startX) / 2;
  const centerY = chordY + Math.sqrt(radius * radius - halfChord * halfChord);

  const x = startX + sunPosition * (endX - startX);
  const dx = x - centerX;

  //const y = horizontY - Math.sin(sunPosition * Math.PI) * arcRadius

  const underRoot = Math.max(0, radius * radius - dx * dx);
  const y = centerY - Math.sqrt(underRoot);

  sun.setAttribute("cx", x);
  sun.setAttribute("cy", y);
}