import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import OrderControl from "./OrderControl";
import gsap from "gsap";
import { Button } from "./Buttons";

export default function BeerCardShop(props) {
  // animation for single beers
  useEffect(() => {
    var tl = gsap.timeline({ delay: 1 });
    tl.from(".animBeer", { opacity: 0, y: 50 });
    tl.to(".animBeer", { opacity: 1, y: 0, duration: 1 });
    // gsap.from(".animBeer", { duration: 1, y: -50, opacity: 1, stagger: 0.5 });
  });
  //render props
  return (
    <OrderControl
      beer={props.beer}
      props={props}
      render={(beerCount, setbeerCount, createOrder, beer) => (
        <div className="single-beer" key={beer.id}>
          <div className="single-beer-image-container">
            <img
              className="single-beer-image animBeer"
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
              <Button
                onClick={() =>
                  setbeerCount((prevBeeerCount) =>
                    prevBeeerCount === 0 ? 0 : prevBeeerCount - 1
                  )
                }
                type="button"
                buttonStyle="btn--counter--outline"
              >
                -
              </Button>
              <h2>{beerCount}</h2>
              <Button
                onClick={() => setbeerCount((prevCount) => prevCount + 1)}
                type="button"
                buttonStyle="btn--counter--outline"
              >
                +
              </Button>
            </div>
            <Link to={{ pathname: `/shop/product`, state: { beer: beer } }}>
              <Button type="button" buttonStyle="btn--primary--outline">
                More Info
              </Button>
            </Link>
            <Button
              onClick={createOrder}
              type="button"
              buttonStyle="btn--primary--solid"
            >
              Add to cart
            </Button>
          </div>
        </div>
      )}
    />
  );
}

BeerCardShop.defaultProps = {
  orders: [],
};
