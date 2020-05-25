import React, { useState, useEffect } from "react";

export default function BeerItemInCart(props) {
  const [orderInediting, setOrderInEditing] = useState(props.order);
  const [indexOfOrder, setindexOfOrder] = useState(0);

  //finds and sets intial order between all the orders and it's index
  useEffect(() => {
    const indexOfBeeWithTheSameName = props.orders.findIndex(
      (prevBeerOrd) => prevBeerOrd.name === props.order.name
    );
    setindexOfOrder(indexOfBeeWithTheSameName);
    const orderInediting = props.orders[indexOfBeeWithTheSameName];
    setOrderInEditing(orderInediting);
  }, [props.order.name, props.orders]);

  function updateOrder(newOrder, indexOfBeeWithTheSameName) {
    props.setorder((prevOrders) => {
      prevOrders.splice(indexOfBeeWithTheSameName, 1, newOrder);
      //return the changed order list
      return [...prevOrders];
    });
  }

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
        <button
          className="plus math"
          onClick={() =>
            updateOrder(
              { ...orderInediting, amount: orderInediting.amount + 1 },
              indexOfOrder
            )
          }>
          +
        </button>

        <div className="amount">{props.order.amount}</div>

        <button
          className="minus math"
          onClick={(event) =>
            updateOrder(
              { ...orderInediting, amount: orderInediting.amount - 1 },
              indexOfOrder
            )
          }>
          -
        </button>
        <button
          onClick={(event) =>
            updateOrder({ ...orderInediting, amount: 0 }, indexOfOrder)
          }>
          Delete
        </button>
      </div>
    </div>
  );
}
