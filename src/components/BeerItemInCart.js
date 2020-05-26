import React, { useState, useEffect } from "react";

export default function BeerItemInCart(props) {
  const [orderInediting, setOrderInEditing] = useState(props.order);
  const [indexOfOrder, setindexOfOrder] = useState(0);

  //finds and sets intial order between all the orders and it's index
  useEffect(() => {
    const filteredIndexOftheorder = props.orders.findIndex(
      (prevBeerOrd) => prevBeerOrd.name === props.order.name
    );
    setindexOfOrder(filteredIndexOftheorder);
    //the order at that index
    const orderInediting = props.orders[filteredIndexOftheorder];
    setOrderInEditing(orderInediting);
  }, [props.order.name, props.orders]);

  //takes parameters of orderInediting and changes the amount in the onclick events
  function updateOrder(newOrder, filteredIndexOftheorder) {
    props.setorder((prevOrders) => {
      prevOrders.splice(filteredIndexOftheorder, 1, newOrder);
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

        <h4>{props.order.amount * props.order.price}</h4>
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
