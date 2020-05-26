import React, { useState, useEffect } from "react";
import "../App.scss";
import OrderControl from "./OrderControl";
import gsap from "gsap";

function Product(props) {
  //render props
  // animate gsap elements in
  useEffect(() => {
    gsap.from(".animUp", { duration: 1, y: 50, opacity: 0, stagger: 0.5 });
  });

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
            <div className="product-image-container animUp">
              <img
                className="product-image"
                src={require(`../assets/images/${beer.label}`)}
                alt="beer"></img>
            </div>
            <section className="product-info animUp">
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
                  setbeerCount((prevBeeerCount) =>
                    prevBeeerCount === 0 ? 0 : prevBeeerCount - 1
                  )
                }>
                Decrement
              </button>
              <h2>{beerCount}</h2>
              <button onClick={createOrder}>Add to cart</button>
            </section>
            <section className="product-main-description animUp">
              <h2>Appearance</h2>
              <p>{beer.description.appearance}</p>
              <h2>Flavor</h2>
              <p>{beer.description.flavor}</p>
              <h2>Aroma</h2>
              <p>{beer.description.aroma}</p>
            </section>
          </div>
        </div>
      )}
    />
  );
}

export default Product;
