import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";

export default function TopBeer() {
	const [beers, setBeers] = useState([]);

	// get beers on tap
	useEffect(() => {
		const getData = async () => {
			const Beers = await DataBase.GetBeerTypes();
			setBeers(Beers);
		};
		getData(beers);
		return;
	}, []); // eslint-disable-line

	const topBeerElement = beers.map((beerTop) => (
		<div className="top-beer" key={beerTop.id}>
			<div className="top-beer-image">
				<img
					className="product-image"
					src={require(`../assets/images/${beerTop.label}`)}
					alt="beer"
				></img>
			</div>
			<div className="top-beer-info">
				<h2>{beerTop.name}</h2>
				<h2>{beerTop.category}</h2>
				<p>{beerTop.description.overallImpression}</p>
			</div>
		</div>
	));

	const pickBeer = topBeerElement[2];

	return (
		<div>
			<div>{pickBeer}</div>
		</div>
	);
}
