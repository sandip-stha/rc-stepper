const getCountries = async () => {
  const response = await fetch(
    'https://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes',
  );
  const data = await response.json();
  return data.map(({ name, flag, callingCodes }) => ({
    name,
    flag,
  }));
};

export default getCountries;
