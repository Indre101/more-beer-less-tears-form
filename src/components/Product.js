import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";
import "../App.scss";

function Product() {
	const [beer, setBeer] = useState({});

	useEffect(() => {
		const getData = async () => {
			const Beer = await DataBase.GetData();
			setBeer(Beer);
		};
		getData(beer);
		console.log(`this is the ${beer}`);
	}, []);

	return (
		<div>
			<h1>Product TEST</h1>
		</div>
	);
}

export default Product;
