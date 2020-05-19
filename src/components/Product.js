import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";
import "../App.scss";
import imageTest from "../static/githop.png";

function Product() {
	const [beer, setBeer] = useState({});

	useEffect(() => {
		GetBarData();
	}, []);

	const GetBarData = async () => {
		const barData = await fetch("https://more-beers-less-tears-data.herokuapp.com");
		const response = await barData.json();
		console.log(response.bar.name);
		return response;
	};

	return (
		<div>
			<h1>Product TEST</h1>
			<img src={imageTest} alt=""></img>
		</div>
	);
}

export default Product;
