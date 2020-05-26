import React from "react";
import DataBase from "../modules/DataBase";
import { Link } from "react-router-dom";

export default function Confirmation(props) {
  const { orders, user, paymentMethod } = props.location.state;

  const orderSummary = orders.map((order) => (
    <div key={Math.random() * 4000}>
      name: {order.name}, amount:{order.amount}, sum:
      {order.amount * order.price}
    </div>
  ));

  function placeOrder() {
    const ordersTopost = orders.map((order) => ({
      name: order.name,
      amount: order.amount,
    }));
    console.log(ordersTopost);

    DataBase.PostOrder(ordersTopost);
  }
  return (
    <div>
      <h3>Name:{user.name} </h3>
      <h3>e-mail:{user.email} </h3>
      <h3>phone:{user.phone} </h3>
      <h3>payment method: {paymentMethod}</h3>
      <div className="ordersumary">{orderSummary}</div>

      <Link
        to={{
          pathname: `/orderMessage`,
          state: {
            orders: orders,
            user: user,
            paymentMethod: paymentMethod,
          },
        }}>
        <button onClick={placeOrder}>Place Order</button>
      </Link>
    </div>
  );
}
