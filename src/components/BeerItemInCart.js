import React from "react";

export default function BeerItemInCart(props) {
  console.log(props);

  return (
    <div className="beerItemInCart">
      <img
        src={require(`../assets/images/${props.order.name
          .split(" ")
          .join("")
          .toLowerCase()}.png`)}
        alt=""
      />
      <div className="beer-details">
        <h3>{props.order.name}</h3>

        <h4>40kr</h4>
      </div>
      <div className="orderControl">
        <div className="plus math">-</div>
        <div className="amount">{props.order.amount}</div>
        <div className="minus math">+</div>
      </div>
    </div>
  );
}
