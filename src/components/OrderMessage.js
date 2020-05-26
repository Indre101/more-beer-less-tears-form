import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";

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
  return <div>Your order number is : {orderNumber + 1} </div>;
};

export default OrderMessage;
