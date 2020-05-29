import React, { useState, useRef, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Payment from "payment";
import { Link } from "react-router-dom";

export default function CardPayment(props) {
  const [cardDetail, setcardDetail] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focus: "",
    formData: null,
  });

  const cardFom = useRef();
  function handleInputFocus(event) {
    const { name } = event.target;

    setcardDetail((prevInputData) => ({
      ...prevInputData,
      focus: name,
    }));
  }

  //sets the form fields and formats the values in the input to look properly
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "number") {
      Payment.formatCardNumber(document.querySelector(".cardNumber"));
    } else if (name === "expiry") {
      Payment.formatCardExpiry(document.querySelector(".expiry"));
    } else if (name === "cvc") {
      Payment.formatCardCVC(document.querySelector(".cvc"));
    }
    setcardDetail((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formInputs = [...cardFom.current.children];
    let approved = false;
    if (!cardFom.current.checkValidity()) {
      formInputs.forEach((item) => {
        //check form regulat validation wheather the required fields are filled
        if (item.hasAttribute("value") && !item.checkValidity()) {
          item.nextSibling.style.display = "block";
        } else if (item.hasAttribute("value") && item.checkValidity()) {
          item.nextSibling.style.display = "none";
        } else {
          return false;
        }
        ///check the custom validation
        if (!Payment.fns.cardType(cardDetail.number) && item.id === "number") {
          //checks if the card is a visa or mastercard or ...
          item.nextSibling.style.display = "block";
        } else if (
          cardDetail.number.split(" ").join("").length < 16 &&
          item.id === "number"
        ) {
          //checks the length of the card number
          item.nextSibling.style.display = "block";
        } else if (
          !Payment.fns.validateCardCVC(cardDetail.cvc) &&
          item.id === "cvc"
        ) {
          //checks the CVC validation
          item.nextSibling.style.display = "block";
        } else if (
          !Payment.fns.validateCardExpiry(cardDetail.expiry) &&
          item.id === "expiry"
        ) {
          //checks the expiration date
          item.nextSibling.style.display = "block";
        }
      });
    }
  }

  useEffect(() => {
    cardFom.current.noValidate = true;
  }, []);

  function openConfiramtionPage() {
    props.history.push({
      pathname: `/confirmation`,
      state: {
        orders: props.orders,
        user: props.user,
        paymentMethod: props.paymentMethod,
        totalAmount: props.totalAmount,
      },
    });
  }

  return (
    <div id="PaymentForm">
      <Cards
        number={cardDetail.number}
        name={cardDetail.name}
        expiry={cardDetail.expiry}
        cvc={cardDetail.cvc}
        focused={cardDetail.focus}
      />

      <form
        autoComplete="on"
        className="cardForm"
        onSubmit={handleSubmit}
        ref={cardFom}>
        <input
          id="number"
          className="cardNumber"
          type="tel"
          name="number"
          placeholder="Card Number"
          value={cardDetail.number}
          required
          onChange={handleChange}
          onFocus={handleInputFocus}
        />
        <label htmlFor="number">Please insert a valid Card number</label>

        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={cardDetail.name}
          onChange={handleChange}
          required
          onFocus={handleInputFocus}
        />
        <label htmlFor="name">Please insert a name</label>

        <input
          className="expiry"
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={cardDetail.expiry}
          required
          onChange={handleChange}
          onFocus={handleInputFocus}
        />
        <label htmlFor="expiry">Please insert valid date</label>

        <input
          type="tel"
          name="cvc"
          className="cvc"
          placeholder="CVC"
          value={cardDetail.cvc}
          pattern="\d{3,4}"
          onChange={handleChange}
          required
          onFocus={handleInputFocus}
        />
        <label htmlFor="cvc">Please insert valid CVC</label>

        <div style={{ display: "flex" }}>
          <Link
            to={{
              pathname: `/details`,
              state: {
                orders: props.orders,
                user: props.user,
              },
            }}>
            <input type="button" value="go back" />
          </Link>
          <input type="submit" value="Next" />
        </div>
      </form>
    </div>
  );
}
