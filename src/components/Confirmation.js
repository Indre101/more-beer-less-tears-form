import React, { useState } from "react";
import DataBase from "../modules/DataBase";
import { Link } from "react-router-dom";
import { Button } from "./Buttons";

export default function Confirmation(props) {
	const { orders, user, paymentMethod, totalAmount } = props.location.state;
	// const [ordderNumber, setordderNumber] = useState(0);

	const orderSummary = orders.map((order) => (
		<div key={Math.random() * 4000}>
			name: {order.name}, amount:{order.amount}, sum:
			{order.amount * order.price}
		</div>
	));

	async function placeOrder() {
		const ordersTopost = orders.map((order) => ({
			name: order.name,
			amount: order.amount,
		}));
		const response = await DataBase.PostOrder(ordersTopost);
		props.setorder([]);
		props.history.push({
			pathname: `/orderMessage`,
			state: {
				orderNumber: response.id,
			},
		});
	}

	return (
		<div className="main-wrapper confirmation">
			<h3>Name:{user.name} </h3>
			<h3>phone:{user.phone} </h3>
			<h3>payment method: {paymentMethod}</h3>
			<div className="ordersumary">{orderSummary}</div>
			<h3>total:{totalAmount}</h3>

			<div style={{ display: "flex", flexDirection: "column" }}>
				<Link
					to={{
						pathname: `/payment`,
					}}
				>
					<Button type="button" buttonStyle="btn--secondary--solid">
						Go back
					</Button>
				</Link>

				<Button onClick={placeOrder} type="button" buttonStyle="btn--primary--solid">
					Place Order
				</Button>
			</div>
		</div>
	);
}
