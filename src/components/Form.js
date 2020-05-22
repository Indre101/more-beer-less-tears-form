import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import Shop from "./Shop";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const nameChanged = (e) => {
    setName(e.target.value);
  };
  const emailChanged = (e) => {
    setEmail(e.target.value);
  };
  const phoneChanged = (e) => {
    setPhone(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // postForm({
    // 	name: name,
    // 	email: email,
    // 	phone: phone,
    // });
    setName("");
    setEmail("");
    setPhone("");
    console.log({ name, email, phone });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          <h2>Name</h2>
          <input
            type="text"
            onChange={nameChanged}
            autoComplete="name"
            name="name"
            value={name}
          />
        </label>
        <label>
          <h2>Email</h2>
          <input
            type="email"
            onChange={emailChanged}
            autoComplete="email"
            name="email"
            value={email}
          />
        </label>
        <label>
          <h2>Telephone</h2>
          <input
            type="number"
            onChange={phoneChanged}
            autoComplete="tel"
            name="phone"
            value={phone}
          />
        </label>
        <div>
          <Link to="/shop">
            <input type="submit" value="Send" />
          </Link>
        </div>
      </form>
    </>
  );
}

export default Form;
