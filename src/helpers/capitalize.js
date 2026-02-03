export const capitalizeCity = (city) => {
  if (!city) return city;
  return city
    .toLowerCase()
    .split(/[\s-]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');
};