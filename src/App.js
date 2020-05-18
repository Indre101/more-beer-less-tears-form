import React, { useState, useEffect } from "react";
import DataBase from "./modules/DataBase";
import CardDetails from "./components/CardDetails";
import "./App.scss";

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
		<div className="App">
			<CardDetails />
		</div>
	);
}

export default App;
