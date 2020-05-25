import React, { useState, useEffect } from "react";
import "../App.scss";
import BeerItemInCart from "./BeerItemInCart";

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
    </div>
  );
}

export default Cart;
