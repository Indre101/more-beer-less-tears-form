import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";
import "../App.scss";
import imageTest from "../static//img/githop.png";

function Product() {
	const [beer, setBeer] = useState({});

	useEffect(() => {
		const getData = async () => {
			const Beer = await DataBase.GetData();
			setBeer(Beer[3]);
			console.log(Beer[3]);
		};
		getData(beer);
	}, []);

	const GetBarData = async () => {
		const barData = await fetch("https://more-beers-less-tears-data.herokuapp.com");
		const response = await barData.json();
		console.log(response.bar.name);
		return response;
	};

	return (
		<div>
			<img src={imageTest} alt=""></img>
			<h2>{beer.name}</h2>
			<h3>{beer.category}</h3>
			<p>{beer.alc}</p>
		</div>
	);
}

export default Product;
