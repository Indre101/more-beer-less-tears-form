import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobilePay from "./MobilePay";
import CardPayment from "./CardPayment";

export default function Payment(props) {
  console.log(props);

  const { orders, user } = props;

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
      <h3>Choose payment method</h3>
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
        <CardPayment />
      </div>

      <Link
        to={{
          pathname: `/confirmation`,
          state: {
            orders: orders,
            user: user,
            paymentMethod: paymentMethod,
          },
        }}>
        <input type="button" value="Next" />
      </Link>
      <Link
        to={{
          pathname: `/details`,
          state: {
            orders: orders,
            user: user,
          },
        }}>
        <input type="submit" value="go back" />
      </Link>
    </div>
  );
}
