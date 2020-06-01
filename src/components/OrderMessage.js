import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Buttons";
import gsap from "gsap";

const OrderMessage = (props) => {
  useEffect(() => {
    // const tl = gsap.timeline({ delay: 2 });
    // tl.from(".animBeer", { opacity: 0, y: 50 });
    // tl.to(".animBeer", { opacity: 1, y: 0, duration: 1 });
    gsap.from(".animMessage", { duration: 1, y: 50, opacity: 0, stagger: 0.2 });
  }, [props.beer]);
  return (
    <div className="wrapper">
      <div className="order-message-wrapper">
        <h1 className="animMessage">No more tears</h1>
        <h2 className="animMessage">Your order number is</h2>
        <h1 className="order-number animMessage">
          {props.location.state.orderNumber}
        </h1>
        <Link
          to={{
            pathname: `/shop`,
          }}>
          <Button type="button" buttonStyle="btn--secondary--solid">
            Back to beers
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderMessage;
