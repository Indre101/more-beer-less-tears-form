import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataBase from "./modules/DataBase";
// import CardDetails from "./components/CardDetails";
import "./App.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Form from "./components/Form";

function App() {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const Beers = await DataBase.GetData();
			setBeers(Beers);
		};
		getData();
	}, []);

	return (
		<Router>
			<div className="App">
				<Header />
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/cart" component={Cart} />
					<Route path="/shop" exact component={Shop} />
					<Route path="/shop/:id" component={Product} />
					<Route path="/form" component={Form} />
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
