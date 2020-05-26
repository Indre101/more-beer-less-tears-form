import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";
import { Link } from "react-router-dom";

const OrderMessage = () => {
  const [orderNumber, setorderNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const getData = async () => {
        const barData = await DataBase.GetData();
        const numberOforder = barData.queue[barData.queue.length - 1].id;
        setorderNumber(numberOforder);
      };
      getData();
    }, 2000);
    return;
  }, []);
  return (
    <div>
      <div>Your order number is : {orderNumber} </div>

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
