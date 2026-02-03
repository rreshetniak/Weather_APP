export const calcSunPosition = (sunrise, sunset) => {
  const now = Math.floor(Date.now() / 1000); // make seconds bcz sunrise & sunset in ms
  const totalDayLength = sunset - sunrise;
  const elapsedTime = now - sunrise;
  const percentage = elapsedTime / totalDayLength;
  return percentage;
}

export const updateSunPosition = (sunPosition) => {
  const sun = document.querySelector('.sun-graphic circle');

  if (sunPosition < 0 || sunPosition > 1) {
    sun.setAttribute("visibility", "hidden");
    return
  } 
  sun.setAttribute("visibility", "visible");
  const startX = 20;
  const endX = 180;
  const horizontY = 40;
  const arcRadius = 55;

  const x = startX + sunPosition * (endX - startX);
  const y = horizontY - Math.sin(sunPosition * Math.PI) * arcRadius

  sun.setAttribute("cx", x);
  sun.setAttribute("cy", y);
}