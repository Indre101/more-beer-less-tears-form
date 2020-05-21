import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";
import "../App.scss";
import { Link } from "react-router-dom";
import imageTest from "../assets/images/row26.png";

function Shop() {
  const [beers, setBeers] = useState([]);
  const [beersOnTap, setBeersOnTap] = useState([]);
  const [beersAvailableTobuy, setbeersAvailableTobuy] = useState([]);

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

  useEffect(() => {
    const uniqueBeerNamesOnTap = [
      ...new Set(beersOnTap.map((beerName) => beerName.beer)),
    ];

    const beersAvailableToBuyFiltered = uniqueBeerNamesOnTap.map((beerName) => {
      const beerObj = beers.find((type) => {
        return type.name === beerName;
      });
      return beerObj;
    });
    setbeersAvailableTobuy(beersAvailableToBuyFiltered);
  }, [beers, beersOnTap]);

  console.log(beersAvailableTobuy);

  const beersAvailableTobuyElement = beersAvailableTobuy.map((beer) => (
    <div className="single-beer" key={beer && beer.name}>
      <img src={require(`../assets/images/${beer.label}`)} alt="Beer" />
      {/* <img src={`static/${beer.label}`} /> */}
      <h2 key={beer.beer}>{beer.beer}</h2>

      <Link to={`/shop/${beer.id}`}>
        <button>More Info</button>
      </Link>
      <button>Add to cart</button>
    </div>
  ));

  return (
    <div className="main-wrapper">
      <div className="page-title">
        <h1>Shop</h1>
      </div>
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
