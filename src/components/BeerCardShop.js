import React from "react";
import { Link } from "react-router-dom";
import OrderControl from "./OrderControl";

export default function BeerCardShop(props) {
  //render props
  return (
    <OrderControl
      beer={props.beer}
      props={props}
      render={(beerCount, setbeerCount, createOrder, beer) => (
        <div className="single-beer" key={beer.id}>
          <div className="single-beer-image-container">
            <img
              className="single-beer-image"
              src={require(`../assets/images/${
                beer.label ? beer.label : "elhefe.png"
              }`)}
              alt="Beer"
            />
          </div>
          <div className="single-beer-cloud">
            <img
              className="cloud"
              src={require("../../src/assets/svg/cloud.svg")}
              alt="cloud"
            />
          </div>
          <div className="single-beer-info">
            <h2 className="single-beer-title">{beer ? beer.name : " "}</h2>
            <h3 className="single-beer-category">
              {beer ? beer.category : " "}
            </h3>
            <h3>{beer.price}Kr</h3>
            <div className="single-beer-counter">
              <button
                onClick={() =>
                  setbeerCount((prevBeeerCount) =>
                    prevBeeerCount === 0 ? 0 : prevBeeerCount - 1
                  )
                }>
                -
              </button>
              <h2>{beerCount}</h2>
              <button
                onClick={() => setbeerCount((prevCount) => prevCount + 1)}>
                +
              </button>
            </div>
            <Link to={{ pathname: `/shop/product`, state: { beer: beer } }}>
              <button>More Info</button>
            </Link>
            <button onClick={createOrder}>Add to cart</button>
          </div>
        </div>
      )}
    />
  );
}

BeerCardShop.defaultProps = {
  orders: [],
};
