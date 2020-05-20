// get beer info
const GetData = async () => {
	const beerData = await fetch(
		"https://more-beers-less-tears-data.herokuapp.com/beertypes"
	);

	const response = await beerData.json();
	return response;
};

// get all bar data
const GetBarData = async () => {
	const barData = await fetch("https://more-beers-less-tears-data.herokuapp.com");
	const response = await barData.json();
	console.log(response.taps);
	return response;
};

// post order
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
const DataBase = { PostOrder, GetData, GetBarData };

export default DataBase;
