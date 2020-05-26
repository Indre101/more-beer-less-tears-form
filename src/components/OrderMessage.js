import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OrderMessage = (props) => {
  return (
    <div>
      <div>Your order number is : {props.location.state.orderNumber} </div>
      <Link
        to={{
          pathname: `/shop`,
        }}>
        <button>Go back to the shop</button>
      </Link>
    </div>
  );
};

export default OrderMessage;
