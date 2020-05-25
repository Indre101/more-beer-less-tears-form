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
          <img
            src={require(`../assets/images/${
              beer.label ? beer.label : "elhefe.png"
            }`)}
            alt="Beer"
          />
          <h2>{beer ? beer.name : " "}</h2>

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
                setbeerCount((prevCount) =>
                  prevCount === 0 ? 0 : beerCount - 1
                )
              }>
              -
            </button>
          </div>
          <button onClick={createOrder}>Add to the cart</button>
          {/* <button onClick={() => props.setActiveBeer(props.beer)}>Testhjkk</button> */}
          <Link
            to={{
              pathname: `/shop/product`,
              state: { beer: beer },
            }}>
            <button>More Info</button>
          </Link>
        </div>
      )}
    />
  );
}

BeerCardShop.defaultProps = {
  orders: [],
};
