import React, { useState, useEffect } from "react";
import "../App.scss";

function Cart() {
	const [count, setCount] = useState(0);

	return (
		<div className="main-wrapper">
			<div className="page-title">
				<h1>Shop</h1>
			</div>
			<button onClick={() => setCount(count - 1)}>Click me</button>
			{console.log(count)}
			<h2>{count}</h2>
		</div>
	);
}

export default Cart;
