import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import MobilePay from "./MobilePay";
import CardPayment from "./CardPayment";

export default function Payment(props) {
  const { orders, user, totalAmount } = props;
  const [paymentMethod, setpaymentMethod] = useState();
  const nextBtnPayment = useRef();

  function handleChange(event) {
    const { value } = event.target;
    setpaymentMethod(value);
  }
  function setPaymentOptionDisplay(paymentOption) {
    return paymentMethod === paymentOption ? "show" : "hide";
  }

  useEffect(() => {
    nextBtnPayment.current.disabled = paymentMethod ? false : true;
  }, [paymentMethod]);
  return (
    <div>
      <h3>Choose payment method</h3>
      <form className="optionsForPayment">
        <input
          id="mobpay"
          type="radio"
          name="payment"
          value="Mobile Pay"
          checked={paymentMethod === "Mobile Pay"}
          onChange={handleChange}
        />
        <label htmlFor="mobpay" className=" mobpay">
          <img
            className="mobPay"
            src={require("../assets/payment/mobpayicon.png")}
            alt="Mobilepay"
          />
        </label>

        <input
          id="card"
          type="radio"
          name="payment"
          value="Card payment"
          checked={paymentMethod === "Card payment"}
          onChange={handleChange}
        />
        <label htmlFor="card" className="card">
          <img
            src={require("../assets/payment/mastercard.svg")}
            alt="Mastercard"
          />{" "}
          <img src={require("../assets/payment/visa.svg")} alt="Visa" />
        </label>
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

      <div style={{ display: "flex" }}>
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
        <Link
          to={{
            pathname: `/confirmation`,
            state: {
              orders: orders,
              user: user,
              paymentMethod: paymentMethod,
              totalAmount: totalAmount,
            },
          }}>
          <input type="button" value="Next" ref={nextBtnPayment} />
        </Link>
      </div>
    </div>
  );
}
