import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";
import "../App.scss";
import { Link } from "react-router-dom";
import imageTest from "../static/img/row26.png";

function Shop() {
	const [beers, setBeers] = useState([]);
	const [beersOnTap, setBeersOnTap] = useState([]);

	// get beer descriptions
	useEffect(() => {
		const getData = async () => {
			const Beers = await DataBase.GetData();
			setBeers(Beers);
			// console.log(Beers);
		};
		getData(beers);
	}, []);

	// get all bar data - and filter taps
	useEffect(() => {
		const GetBarData = async () => {
			const barData = await DataBase.GetBarData();
			setBeersOnTap(barData.taps);
			console.log(barData);
		};
		GetBarData(beersOnTap);
	}, []);

	return (
		<div className="main-wrapper">
			<div className="page-title">
				<h1>Shop</h1>
			</div>
			<section className="beer-list">
				{beersOnTap.map((beer) => (
					<div className="single-beer" key={beer.id}>
						<img src={imageTest} />
						{/* <img src={`static/${beer.label}`} /> */}
						<h2 key={beer.beer}>{beer.beer}</h2>

						<Link to={`/shop/${beer.id}`}>
							<button>More Info</button>
						</Link>
						<button>Add to cart</button>
					</div>
				))}
			</section>
			<section className="promo-section">
				<h1>Happy Hour</h1>
			</section>
			<section className="stats-section">
				<h1>Stats</h1>
			</section>
		</div>
	);
}

export default Shop;
