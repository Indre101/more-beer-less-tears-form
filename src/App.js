import React, { useState, useEffect } from "react";
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
	return (
		<Router>
			<div className="App">
				<Header />
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/cart" component={Cart} />
					<Route path="/shop" exact component={Shop} />
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
