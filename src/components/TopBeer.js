import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";

export default function TopBeer() {
	const [beers, setBeers] = useState([]);

	// get beers on tap
	useEffect(() => {
		const getData = async () => {
			const Beers = await DataBase.GetBeerTypes();
			setBeers(Beers);
			console.log(Beers[0]);
		};
		// console.log(getData(beers));
		getData(beers.name);
		return;
	}, []); // eslint-disable-line

	// const topBeerElement = beersAvailableTobuy.map((beerTop) => (
	// 	<li key={beerTop.id}>
	// 		<h2>{beerTop.category}</h2>
	// 	</li>
	// ));

	// const topBeerDescription = beers.map((beerTop) => (
	// 	<h4>{beerTop.description.overallImpression}</h4>
	// ));

	return (
		<div>
			<h1>Test Thingssss</h1>
			<h2>Hello</h2>
			{/* <h2>{beers}</h2> */}
		</div>
	);
}
