import React from "react";
import Form from "../components/Form";
import "../App.scss";

function Details(props) {
  const { orders, setuserInfo, userInfo } = props;
  const { totalAmount } = props.location.state;
  return (
    <div className="main-wrapper">
      <div className="page-title">
        <h1>Details</h1>
      </div>
      <Form
        orders={orders}
        setuserInfo={setuserInfo}
        userInfo={userInfo}
        totalAmount={totalAmount}
      />
    </div>
  );
}

export default Details;
