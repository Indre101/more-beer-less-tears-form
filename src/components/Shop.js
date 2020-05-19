import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";
import "../App.scss";
import { Link } from "react-router-dom";
import imageTest from "../static/githop.png";

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

	// useEffect(() => {
	// 	DataBase.GetBarData();
	// }, []);

	return (
		<div className="main-wrapper">
			<h1 className="page-title">Shop</h1>
			<section className="beer-list">
				{beers.map((beer) => (
					<div key={beer.name}>
						<img src={imageTest} />
						<h1 key={beer.name}>{beer.name}</h1>
						{/* <img src={`static/${beer.label}`} /> */}
						<Link to={`/shop/${beer.name}`}>
							<button>More Info</button>
						</Link>
						<button>Add to cart</button>
					</div>
				))}
			</section>
		</div>
	);
}

export default Shop;
