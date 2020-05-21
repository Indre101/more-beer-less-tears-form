import React, { useState, useEffect } from "react";
import "../App.scss";

function Product(props) {
  console.log(props);

  const [count, setCount] = useState(0);

  const { category, name, description, label } = props.location.state.beer;
  return (
    <div className="main-wrapper">
      <div className="page-title">
        <h1>Product</h1>
      </div>
      <div className="product-page-layout">
        <div className="product-image">
          <img src={require(`../assets/images/${label}`)} alt="beer"></img>
        </div>
        <section className="product-info">
          <h1>{name}</h1>
          <h2>{category}</h2>
          <blockquote>
            <p>{description.overallImpression}</p>
          </blockquote>
          <h2>60 kr</h2>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <h2>{count}</h2>
          <button>Add to cart</button>
        </section>
      </div>
    </div>
  );
}

export default Product;
