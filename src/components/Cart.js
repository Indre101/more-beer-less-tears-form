import React, { useState, useEffect } from "react";
import "../App.scss";
import BeerItemInCart from "./BeerItemInCart";
import { Link } from "react-router-dom";

function Cart(props) {
  const beerOrders = props.orders
    .filter((order) => order.amount !== 0)
    .map((order) => (
      <BeerItemInCart
        key={order.name}
        order={order}
        setorder={props.setorder}
        orders={props.orders}
      />
    ));

  const [totalAmount, settotalAmount] = useState(0);

  //sets total order amount
  useEffect(() => {
    const orderSum = props.orders
      .map((order) => order.amount * order.price)
      .reduce((a, b) => a + b, 0);
    settotalAmount(orderSum);
  }, [props.orders]);

  return (
    <div className="main-wrapper">
      <div
        className="no-order-message"
        style={{ display: props.orders.length === 0 ? "block" : "none" }}>
        Order some beers to see the cart
      </div>

      <div
        className="orders"
        style={{ display: props.orders.length !== 0 ? "block" : "none" }}>
        {beerOrders}
      </div>

      <h2>Total amount:{totalAmount} </h2>

      <Link to={{ pathname: `/details`, state: { totalAmount: totalAmount } }}>
        <button
          style={{ display: props.orders.length !== 0 ? "block" : "none" }}>
          Checkout
        </button>
      </Link>
    </div>
  );
}

export default Cart;
