import React, { useState, useEffect } from "react";
import "../App.scss";

function Cart() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Cart</h1>
			<button onClick={() => setCount(count - 1)}>Click me</button>
			{console.log(count)}
			<h2>{count}</h2>
		</div>
	);
}

export default Cart;
