import React, { useState, useEffect } from "react";
import DataBase from "../modules/DataBase";
import "../App.scss";
import BeerCardShop from "./BeerCardShop";

function Shop(props) {
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
    <BeerCardShop
      key={beer.id}
      beer={beer}
      setorder={props.setorder}
      orders={props.orders}
      setActiveBeer={props.setActiveBeer}
    />
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
