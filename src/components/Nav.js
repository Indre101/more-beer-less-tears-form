import React from "react";
import "../App.scss";
import { Link } from "react-router-dom";

function Nav(props) {
  const amountOfitems = props.orders
    .map((item) => item.amount)
    .reduce((prev, next) => prev + next, 0);

  return (
    <nav>
      <ul className="nav-links">
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li className="cart-li">
            <img
              className="cart-img"
              src={require("../assets/graphics/icon-shopping-cart-empty.png")}
              alt="Cart"
            />
            <div
              className="item-count"
              style={{ display: amountOfitems === 0 ? "none" : "flex" }}>
              <h4>{amountOfitems}</h4>
            </div>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

Nav.defaultProps = {
  orders: [0, 0],
};

export default Nav;
