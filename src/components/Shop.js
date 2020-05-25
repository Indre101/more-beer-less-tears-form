import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";
import "../App.scss";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Shop(props) {
	const [beers, setBeers] = useState([]);
	const [beersOnTap, setBeersOnTap] = useState([]);
	const [beersAvailableTobuy, setbeersAvailableTobuy] = useState([]);
	const [count, setCount] = useState(0);

	// get beers on tap
	useEffect(() => {
		const getData = async () => {
			const Beers = await DataBase.GetData();
			setBeersOnTap(Beers.taps);
		};
		getData(beers);
		return;
	}, []); // eslint-disable-line

	// get all beer data
	useEffect(() => {
		const getData = async () => {
			const barData = await DataBase.GetBeerTypes();
			setBeers(barData);
		};
		getData(beersOnTap);
		return;
	}, []); // eslint-disable-line

	//get the beer data that is only on the taps and unique
	useEffect(() => {
		//gets the beer names that would not repeat
		const uniqueBeerNamesOnTap = [
			...new Set(beersOnTap.map((beerName) => beerName.beer)),
		];

		let i = 0;
		//filters by the beer name throught the beertypes data and  return array with  objects containing beer info
		const beersAvailableToBuyFiltered = uniqueBeerNamesOnTap.map((beerName) => {
			i++;
			const beerObj = beers.find((type) => {
				return type.name === beerName;
			});

			return { ...beerObj, id: i };
		});
		setbeersAvailableTobuy(beersAvailableToBuyFiltered);
	}, [beers, beersOnTap]);

	const beersAvailableTobuyElement = beersAvailableTobuy.map((beer) => (
		<div className="single-beer" key={beer.id}>
			<div className="single-beer-image-container">
				<img
					className="single-beer-image"
					src={require(`../assets/images/${beer.label ? beer.label : "elhefe.png"}`)}
					alt="Beer"
				/>
			</div>
			<div className="single-beer-cloud">
				<img
					className="cloud"
					src={require("../../src/assets/svg/cloud.svg")}
					alt="cloud"
				/>
			</div>
			<div className="single-beer-info">
				<h2 className="single-beer-title">{beer ? beer.name : " "}</h2>
				<h3 className="single-beer-category">{beer ? beer.category : " "}</h3>
				<div className="single-beer-counter">
					<button onClick={() => setCount(count - 1)}>-</button>
					<h2>{count}</h2>
					<button onClick={() => setCount(count + 1)}>+</button>
				</div>
				<Link to={{ pathname: `/shop/product`, state: { beer: beer } }}>
					<button>More Info</button>
				</Link>
				<button>Add to cart</button>
			</div>
		</div>
	));

	useEffect(() => {
		gsap.from(".animUp", { duration: 1, y: 50, opacity: 0, stagger: 0.5 });
	});

	return (
		<div className="main-wrapper">
			<div className="cloud-top">
				<img
					className="cloud"
					src={require("../../src/assets/svg/cloud.svg")}
					alt="cloud"
				/>
			</div>
			<h1 className="animUp"></h1>
			<section className="beer-list">{beersAvailableTobuyElement}</section>
			<section className="promo-section">
				<h1>Happy Hour</h1>
			</section>
			<section className="stats-section">
				<h1>Stats</h1>
			</section>
		</div>
	);
}

export default Shop;
