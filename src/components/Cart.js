import React, { useState, useEffect } from "react";
import "../App.scss";
import BeerItemInCart from "./BeerItemInCart";

function Cart(props) {
  const beerOrders = props.orders.map((order) => (
    <BeerItemInCart order={order} />
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
