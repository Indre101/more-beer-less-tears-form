import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Payment(props) {
  const [paymentMethod, setpaymentMethod] = useState();

  function handleChange(event) {
    const { value } = event.target;
    setpaymentMethod(value);
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
