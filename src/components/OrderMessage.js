import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Buttons";

const OrderMessage = (props) => {
	return (
		<div>
			<div>Your order number is : {props.location.state.orderNumber} </div>
			<Link
				to={{
					pathname: `/shop`,
				}}
			>
				<Button>Go back to the shop</Button>
			</Link>
		</div>
	);
};

export default OrderMessage;
