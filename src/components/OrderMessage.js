import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Buttons";

const OrderMessage = (props) => {
	return (
		<div className="wrapper">
			<div>Your order number is : {props.location.state.orderNumber} </div>
			<Link
				to={{
					pathname: `/shop`,
				}}
			>
				<Button type="button" buttonStyle="btn--secondary--solid">
					Go to the shop
				</Button>
			</Link>
		</div>
	);
};

export default OrderMessage;
