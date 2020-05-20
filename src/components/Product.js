import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";
import "../App.scss";
import imageTest from "../static//img/githop.png";

function Product() {
	const [count, setCount] = useState(0);
	const [beer, setBeer] = useState({});
	const [description, setDescription] = useState({});

	useEffect(() => {
		const getData = async () => {
			const Beer = await DataBase.GetData();
			setDescription(Beer[5].description);
			setBeer(Beer[5]);
		};
		getData();
	}, []);

	return (
		<div className="main-wrapper">
			<div className="page-title">
				<h1>Product</h1>
			</div>
			<div className="product-page-layout">
				<div className="product-image">
					<img src={imageTest} alt=""></img>
				</div>
				<section className="product-info">
					<h1>{beer.name}</h1>
					<h2>{beer.category}</h2>
					<h3>{description.overallImpression}</h3>
					<h2>60 kr</h2>
					<button onClick={() => setCount(count + 1)}>Increment</button>
					<button onClick={() => setCount(count - 1)}>Decrement</button>
					<h2>{count}</h2>
					<button>Add to cart</button>
				</section>
			</div>
		</div>
	);
}

export default Product;
