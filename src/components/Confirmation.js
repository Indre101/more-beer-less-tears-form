import React, { useState } from "react";
import DataBase from "../modules/DataBase";
import { Link } from "react-router-dom";
import { Button } from "./Buttons";

export default function Confirmation(props) {
	const { orders, user, paymentMethod, totalAmount } = props.location.state;
	// const [ordderNumber, setordderNumber] = useState(0);

	const orderSummary = orders.map((order) => (
		<div className="order-summary" key={Math.random() * 4000}>
			<h2>Beers</h2>
			<h2>{order.name}</h2>
			<h2>amount</h2>
			<h2>{order.amount}</h2>
			<h2>sum</h2>
			<h2>{order.amount * order.price}</h2>
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
			<h3>Name{user.name} </h3>
			<h3>phone{user.phone} </h3>
			<h3>payment method{paymentMethod}</h3>
			<div className="ordersumary">{orderSummary}</div>
			<h3>total{totalAmount}</h3>

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
