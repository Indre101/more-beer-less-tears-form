import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.scss";

function Form(props) {
  console.log(props.userInfo);

  function handleChange(event) {
    const { name, value } = event.target;
    props.setuserInfo((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleSubmit(event) {
    event.prevetnDefault();
  }
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
          />
        </label>
        <label>
          <h2>Telephone</h2>
          <input
            type="number"
            onChange={handleChange}
            autoComplete="tel"
            name="phone"
            value={props.userInfo.phone}
          />
        </label>
        <div>
          <Link
            to={{
              pathname: `/payment`,
              state: {
                orders: props.orders,
                user: props.userInfo,
              },
            }}>
            <input type="submit" value="Next" />
          </Link>

          <Link
            to={{
              pathname: `/cart`,
              state: {
                orders: props.orders,
                user: props.userInfo,
              },
            }}>
            <input type="submit" value="go back" />
          </Link>
        </div>
      </form>
    </>
  );
}

export default Form;
