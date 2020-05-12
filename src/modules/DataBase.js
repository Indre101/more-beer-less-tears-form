const Data = async () => {
  const beerData = await fetch(
    "https://more-beers-less-tears-data.herokuapp.com/beertypes"
  );

  const response = await beerData.json();
  return response;
};

function PostOrder(newOrder) {
  fetch(`https://more-beers-less-tears-data.herokuapp.com/order`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify(newOrder),
  }).then((res) => res.json());
}

const DataBase = { PostOrder, GetData };

export default DataBase;
