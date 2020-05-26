import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobilePay from "./MobilePay";
import CarPayment from "./CarPayment";

export default function Payment(props) {
  const [paymentMethod, setpaymentMethod] = useState();

  function handleChange(event) {
    const { value } = event.target;
    setpaymentMethod(value);
  }
  function setPaymentOptionDisplay(paymentOption) {
    return paymentMethod === paymentOption ? "show" : "hide";
  }
  return (
    <div>
      <form className="optionsForPayment">
        <label htmlFor="mobpay">Mobile Pay</label>
        <input
          id="mobpay"
          type="radio"
          name="payment"
          value="Mobile Pay"
          checked={paymentMethod === "Mobile Pay"}
          onChange={handleChange}
        />
        <label htmlFor="card">Card Payment</label>
        <input
          id="card"
          type="radio"
          name="payment"
          value="Card payment"
          checked={paymentMethod === "Card payment"}
          onChange={handleChange}
        />
      </form>
      <div
        className={"mobile"}
        data-show={setPaymentOptionDisplay("Mobile Pay")}>
        <MobilePay />
      </div>

      <div
        className="carPayment"
        data-show={setPaymentOptionDisplay("Card payment")}>
        <CarPayment />
      </div>

      <Link to="/confirmation">
        <input type="button" value="Next" />
      </Link>
      <Link
        to={{
          pathname: `/details`,
          state: {
            orders: props.location.state.orders,
            user: props.userInfo,
          },
        }}>
        <input type="submit" value="go back" />
      </Link>
    </div>
  );
}
