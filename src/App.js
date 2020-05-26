import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import CardDetails from "./components/CardDetails";
import "./App.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Product from "./components/Product";
import Payment from "./components/Payment";
import Confirmation from "./components/Confirmation";
import OrderMessage from "./components/OrderMessage";

function App() {
  const [orders, setorder] = useState([]);
  const [userInfo, setuserInfo] = useState({
    name: " ",
    email: " ",
    phone: " ",
  });
  //sets the beer to pass to the Product page
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav orders={orders} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/cart"
            exact
            render={(...routeProps) => (
              <Cart {...routeProps} orders={orders} setorder={setorder} />
            )}
          />
          <Route
            path="/shop"
            exact
            render={(routeProps) => (
              <Shop {...routeProps} setorder={setorder} orders={orders} />
            )}
          />
          <Route
            path="/details"
            exact
            render={(routeProps) => (
              <Details
                {...routeProps}
                userInfo={userInfo}
                setuserInfo={setuserInfo}
                orders={orders}
              />
            )}
          />
          <Route
            path="/payment"
            exact
            render={(routeProps) => (
              <Payment {...routeProps} user={userInfo} orders={orders} />
            )}
          />

          <Route path="/orderMessage" component={OrderMessage} />
          <Route path="/confirmation" component={Confirmation} />
          <Route
            path="/shop/:id"
            render={(routeProps) => (
              <Product {...routeProps} setorder={setorder} orders={orders} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
