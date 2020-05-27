import React, { useState } from "react";
import DataBase from "../modules/DataBase";
import { Link } from "react-router-dom";

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
    props.history.push({
      pathname: `/orderMessage`,
      state: {
        orderNumber: response.id,
      },
    });
  }

  return (
    <div>
      <h3>Name:{user.name} </h3>
      <h3>e-mail:{user.email} </h3>
      <h3>phone:{user.phone} </h3>
      <h3>payment method: {paymentMethod}</h3>
      <div className="ordersumary">{orderSummary}</div>
      <h3>total:{totalAmount}</h3>

      <div style={{ display: "flex" }}>
        <Link
          to={{
            pathname: `/payment`,
          }}>
          <button>Go back</button>
        </Link>

        <button onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
}
