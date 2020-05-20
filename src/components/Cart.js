import React, { useState, useEffect } from "react";
import "../App.scss";

function Cart() {
	const [count, setCount] = useState(0);

	return (
		<div className="main-wrapper">
			<div className="page-title">
				<h1>Cart</h1>
			</div>
		</div>
	);
}

export default Cart;
