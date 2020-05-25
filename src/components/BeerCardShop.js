import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BeerCardShop(props) {
  const { id, label, name } = props.beer;
  const [beerCount, setbeerCount] = useState(1);

  function getorderedBeeramount() {
    let amount;
    if (
      props.orders.length > 0 &&
      props.orders.filter((order) => order.name === name).length > 0
    ) {
      amount = props.orders
        .filter((order) => order.name === name)
        .map((order) => order.amount)
        .flat();
      return amount[0];
    } else {
      amount = 0;
    }
    return amount;
  }

  function createOrder() {
    const orderedBeeramount = getorderedBeeramount();

    const newBeerOrder = {
      name: props.beer.name,
      amount: orderedBeeramount + beerCount,
    };

    props.setorder((prevOrders) => {
      const sameBeerOccurenceInOrder = prevOrders.filter(
        (prevBeerOr) => prevBeerOr.name === newBeerOrder.name
      );

      //if there is already a beer by the same name
      if (sameBeerOccurenceInOrder.length > 0) {
        const indexOfBeeWithTheSameName = prevOrders.findIndex(
          (prevBeerOrd) => prevBeerOrd.name === newBeerOrder.name
        );

        //Change the old order with the new
        prevOrders.splice(indexOfBeeWithTheSameName, 1, newBeerOrder);
        //return the changed order list
        console.log(props.orders);

        return [...prevOrders];
      } else {
        console.log("addds");

        //If there is no beer with the same name add it to the previous orders
        return [newBeerOrder, ...prevOrders];
      }
    });
  }

  return (
    <div className="single-beer" key={id}>
      <img
        src={require(`../assets/images/${label ? label : "elhefe.png"}`)}
        alt="Beer"
      />
      <h2>{props.beer ? name : " "}</h2>

      <div className="actions">
        <button
          className="plus item-count"
          onClick={() => setbeerCount((prevCount) => prevCount + 1)}>
          +
        </button>
        <div className="amountOfBeer">{beerCount}</div>
        <button
          className="minus item-count"
          onClick={() =>
            setbeerCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1))
          }>
          -
        </button>
      </div>
      <button onClick={createOrder}>Add to the cart</button>

      <Link to={{ pathname: `/shop/product`, state: { beer: props.beer } }}>
        <button>More Info</button>
      </Link>
    </div>
  );
}

BeerCardShop.defaultProps = {
  orders: [],
};
