import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "../App.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Form(props) {
  const { orders, setuserInfo, userInfo, totalAmount } = props;

  const nextBtn = useRef();

  function handleChange(event) {
    const { name, value } = event.target;
    setuserInfo((prevInputData) => ({ ...prevInputData, [name]: value }));
  }
  function handlePhoneInput(event) {
    setuserInfo((prevInputData) => ({ ...prevInputData, phone: event }));
  }
  function handleSubmit(event) {
    event.prevetnDefault();
  }
  useEffect(() => {
    nextBtn.current.disabled = userInfo.name && userInfo.email ? false : true;
  }, [userInfo.email, userInfo.name]);

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          <h2>Name</h2>
          <input
            type="text"
            onChange={handleChange}
            autoComplete="name"
            name="name"
            value={props.userInfo.name}
            required
          />
        </label>
        <label>
          <h2>Email</h2>
          <input
            type="email"
            onChange={handleChange}
            autoComplete="email"
            name="email"
            value={props.userInfo.email}
            required
          />
        </label>
        <PhoneInput
          country={"us"}
          value={props.userInfo.phone}
          onChange={handlePhoneInput}
        />

        <div style={{ display: "flex" }}>
          <Link
            to={{
              pathname: `/cart`,
              state: {
                orders: orders,
                user: userInfo,
              },
            }}
          >
            <input type="submit" value="go back" />
          </Link>
          <Link
            to={{
              pathname: `/payment`,
              state: { totalAmount: totalAmount },
            }}
          >
            <input type="submit" value="Next" ref={nextBtn} />
          </Link>
        </div>
      </form>
    </>
  );
}
export default Form;
