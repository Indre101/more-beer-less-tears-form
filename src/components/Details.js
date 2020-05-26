import React, { useState } from "react";
import Form from "../components/Form";
import "../App.scss";

function Details(props) {
  const { orders, setuserInfo, userInfo } = props;

  // const [userInfo, setuserInfo] = useState({
  //   name: " ",
  //   email: " ",
  //   phone: " ",
  // });

  return (
    <div className="main-wrapper">
      <div className="page-title">
        <h1>Details</h1>
      </div>
      <Form orders={orders} setuserInfo={setuserInfo} userInfo={userInfo} />
    </div>
  );
}

export default Details;
