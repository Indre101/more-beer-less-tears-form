import React, { useState, useEffect } from "react";
import DataBase from "./modules/DataBase";
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

	const test = beers.map((beer) => <div key={beer.name}>{beer.name}</div>);
	return <div className="App">{test}</div>;
}

export default App;
