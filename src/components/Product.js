import React, { useState } from "react";
import "../App.scss";
import OrderControl from "./OrderControl";

function Product(props) {
  //render props
  console.log(props);

  return (
    <OrderControl
      beer={props.location.state.beer}
      props={props}
      render={(beerCount, setbeerCount, createOrder, beer) => (
        <div className="main-wrapper">
          <div className="page-title">
            <h1>Product</h1>
          </div>
          <div className="product-page-layout">
            <div className="product-image">
              <img
                src={require(`../assets/images/${beer.label}`)}
                alt="beer"></img>
            </div>
            <section className="product-info">
              <h1>{beer.name}</h1>
              <h2>{beer.category}</h2>
              <blockquote>
                <p>{beer.description.overallImpression}</p>
              </blockquote>
              <h2>60 kr</h2>
              <button onClick={() => setbeerCount(beerCount + 1)}>
                Increment
              </button>
              <button
                onClick={() =>
                  setbeerCount((prevCount) =>
                    prevCount === 0 ? 0 : beerCount - 1
                  )
                }>
                Decrement
              </button>
              <h2>{beerCount}</h2>
              <button onClick={createOrder}>Add to cart</button>
            </section>
          </div>
        </div>
      )}
    />
  );
}

export default Product;
