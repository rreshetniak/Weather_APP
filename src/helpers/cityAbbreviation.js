
export const replaceAbbreviation = (city) => {
  const lowerCaseCity = city.toLowerCase();
  if (cityAbbreviations[lowerCaseCity]) { 
    return cityAbbreviations[lowerCaseCity];
  }
  return city;
}

const cityAbbreviations = {
  msk: 'Moscow',
  spb: 'Sankt-Petersburg',
  ekb: 'Ekaterinburh',
  nsk: 'Novosibirsk',
  vrn: 'Voronezh',
}