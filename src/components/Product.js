import React, { useState } from "react";
import "../App.scss";

function Product(props) {
	const [count, setCount] = useState(0);

	//deconstruct the props that get passed along from route
	const { category, name, description, label } = props.location.state.beer;
	return (
		<div className="main-wrapper">
			<div className="page-title">
				<h1>Product</h1>
			</div>
			<div className="product-page-layout">
				<div className="product-image-container">
					<img
						className="product-image"
						src={require(`../assets/images/${label}`)}
						alt="beer"
					></img>
				</div>
				<section className="product-info">
					<h1>{name}</h1>
					<h2>{category}</h2>
					<blockquote>
						<p>{description.overallImpression}</p>
					</blockquote>
					<h2>60 kr</h2>
					<button onClick={() => setCount(count + 1)}>Increment</button>
					<button onClick={() => setCount(count - 1)}>Decrement</button>
					<h2>{count}</h2>
					<button>Add to cart</button>
				</section>
				<section className="product-main-description">
					<h2>Appearance</h2>
					<p>{description.appearance}</p>
					<h2>Flavor</h2>
					<p>{description.flavor}</p>
					<h2>Aroma</h2>
					<p>{description.aroma}</p>
				</section>
			</div>
		</div>
	);
}

export default Product;
