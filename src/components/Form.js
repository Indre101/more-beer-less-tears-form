import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "../App.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-phone-input-2/lib/bootstrap.css";
import { Redirect } from "react-router";

function Form(props) {
  const { orders, setuserInfo, userInfo, totalAmount } = props;

  const nextBtn = useRef();
  const detailsForm = useRef();
  function handleChange(event) {
    const { name, value } = event.target;
    setuserInfo((prevInputData) => ({ ...prevInputData, [name]: value }));
  }
  function handlePhoneInput(event) {
    setuserInfo((prevInputData) => ({ ...prevInputData, phone: event }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
    if (!detailsForm.current.checkValidity()) {
      console.log("not valid");
    } else {
      console.log("valid");
      openPaymentPage();
    }
  }

  function openPaymentPage() {
    console.log("openPayment");
    this.context.router.push("/payment");
  }

  return (
    <>
      <form
        autoComplete="on"
        className="detailsForm"
        onSubmit={handleSubmit}
        ref={detailsForm}
      >
        <label>
          <h2>Name</h2>
          <input
            className="nameInput"
            placeholder="John Smith"
            type="text"
            onChange={handleChange}
            autoComplete="name"
            name="name"
            value={props.userInfo.name}
            required
          />
        </label>
        <label>
          <h2>Phone</h2>

          <PhoneInput
            placeholder=" "
            autoFormat="false"
            dropdownClass="t1"
            containerClass="t2"
            buttonClass="t3"
            inputClass="t4"
            name="phone"
            country={"dk"}
            value={props.userInfo.phone}
            onChange={handlePhoneInput}
            aria-describedby="hint-user"
            required
          />
        </label>
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
            <input className="btn" type="submit" value="go back" />
          </Link>
          <input className="btn" type="submit" value="Next" ref={nextBtn} />
        </div>
      </form>
    </>
  );
}
export default Form;

/*<label>
          <h2>Email</h2>
          <input
            type="email"
            onChange={handleChange}
            autoComplete="email"
            name="email"
            value={props.userInfo.email}
            required
          />
        </label> */

/*useEffect(() => {
    nextBtn.current.disabled = userInfo.name && userInfo.email ? false : true;
  }, [userInfo.email, userInfo.name]); */

/*useEffect(() => {
    nextBtn.current.disabled = userInfo.name && userInfo.phone ? false : true;
  }, [userInfo.name]); */
