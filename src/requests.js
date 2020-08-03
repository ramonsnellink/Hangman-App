const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to fetch a new puzzle");
  }
};

const getCountry = async (countryCode) => {
  const response = await fetch("//restcountries.eu/rest/v2/all");
  if (response.status === 200) {
    const countries = await response.json();
    return countries.find((country) => country.alpha2Code === countryCode);
  } else {
    throw new Error("Unable to fetch data");
  }
};

const getLocation = async () => {
  const response = await fetch("//ipinfo.io/json?token=e6fa78ce09d685");
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable to fetch data");
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountry(location.country); // de return van getLocation is niet alleen country, maar ook stad etc
  return country;
};

export { getPuzzle as default };
