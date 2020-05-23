import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BeerCardShop(props) {
  const { id, label, name } = props.beer;
  const [beerAmount, setbeerAmount] = useState(1);

  function createOrder() {
    setbeerAmount((prevState) => prevState + 1);
    const newBeerOrder = {
      name: props.beer.name,
      amount: beerAmount,
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
        return [...prevOrders];
      } else {
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
      <Link to={{ pathname: `/shop/product`, state: { beer: props.beer } }}>
        <button>More Info</button>
      </Link>
      <button onClick={createOrder}>Add to cart</button>
    </div>
  );
}
