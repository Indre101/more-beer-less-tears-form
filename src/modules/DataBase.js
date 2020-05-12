const Data = async () => {
  const beerData = await fetch(
    "https://more-beers-less-tears-data.herokuapp.com/beertypes"
  );

  const response = await beerData.json();
  return response;
};

export default Data;
