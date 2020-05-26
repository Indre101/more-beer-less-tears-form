import React from "react";
import { Link } from "react-router-dom";

export default function Payment(props) {
  return (
    <div>
      Payment
      <Link to="/confirmation">
        <input type="button" value="Next" />
      </Link>
      <Link
        to={{
          pathname: `/details`,
          state: {
            orders: props.location.state.orders,
            user: props.userInfo,
          },
        }}>
        <input type="submit" value="go back" />
      </Link>
    </div>
  );
}
