import React, { useState, useEffect } from "react";
import "../App.scss";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<ul className="nav-links">
				<Link to="/shop">
					<li>Shop</li>
				</Link>
				<Link to="/cart">
					<li>Cart</li>
				</Link>
				<Link to="/details">
					<li>Details</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
