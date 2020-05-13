const GetData = async () => {
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
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newOrder),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
const DataBase = { PostOrder, GetData };

export default DataBase;
