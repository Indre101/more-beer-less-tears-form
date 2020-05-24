import React, { useState } from "react";

export default function BeerItemInCart(props) {
  const [orderDetail, setorderDetail] = useState({
    name: props.order.name,
    amount: props.order.amount,
  });

  function deleteItemForCart(params) {
    setorderDetail((prevOrder) => {
      return { ...prevOrder, amount: prevOrder.amount - prevOrder.amount };
    });
    updateOrder(orderDetail);
  }

  function minusBeer() {
    console.log("called");

    setorderDetail((prevOrder) => {
      return {
        ...prevOrder,
        amount: prevOrder.amount - 1,
      };
    });

    updateOrder(orderDetail);
  }

  function addBeer() {
    setorderDetail((prevOrder) => ({
      ...prevOrder,
      amount: prevOrder.amount + 1,
    }));
    updateOrder(orderDetail);
  }

  function updateOrder(updatedOrder) {
    props.setorder((prevOrders) => {
      const indexOfBeeWithTheSameName = prevOrders.findIndex(
        (prevBeerOrd) => prevBeerOrd.name === orderDetail.name
      );
      console.log(indexOfBeeWithTheSameName);

      //Change the old order with the new
      prevOrders.splice(indexOfBeeWithTheSameName, 1, updatedOrder);
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
        <button className="plus math" onClick={addBeer}>
          +
        </button>

        <div className="amount">{props.order.amount}</div>
        <button className="minus math" onClick={minusBeer}>
          -
        </button>
        <button onClick={deleteItemForCart}>Delete</button>
      </div>
    </div>
  );
}
