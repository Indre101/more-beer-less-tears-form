import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import CardDetails from "./components/CardDetails";
import "./App.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Details from "./components/Details";

function App() {
  const [orders, setorder] = useState([]);
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
          <Route path="/shop/:id" component={Product} />
          <Route path="/details" component={Details} />
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
