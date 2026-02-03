export function updateWindDirection (windDeg) {
  const windIcon = document.getElementById('wind-direction-icon');
  const windText = document.getElementById('wind-direction-text');

  const iconRotation = (windDeg + 180) % 360;
  windIcon.style.transform = `rotate(${iconRotation}deg)`

  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const normalizeDegrees = (windDeg + 360) % 360;
  const windIndex = Math.round(normalizeDegrees / 45) % 8;
  windText.textContent = directions[windIndex] || 'N/D';

}