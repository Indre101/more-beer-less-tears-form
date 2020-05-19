import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";
import "../App.scss";
import { Link } from "react-router-dom";

function Shop() {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const Beers = await DataBase.GetData();
			setBeers(Beers);
			// console.log(Beers);
		};
		getData(beers);
	}, []);

	return (
		<div>
			<h1>Shop</h1>
			<div>
				{beers.map((beer) => (
					<div key={beer.id}>
						<Link to={`/shop/${beer.id}`}>
							<h1>{beer.name}</h1>
							<h2>{beer.category}</h2>
							<h3>{beer.alc}</h3>
							<h4>{beer.description.aroma}</h4>
							<img src="../fairytaleale.png"></img>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default Shop;
