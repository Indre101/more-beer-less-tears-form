import React from "react";
import { Link } from "react-router-dom";

export default function BeerCardShop(props) {
  const { id, label, name } = props.beer;
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
      <button>Add to cart</button>
    </div>
  );
}
