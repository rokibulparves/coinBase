import React from "react";
import "./Coin.css";

const Coin = ({
  image,
  name,
  current_price,
  price_change_percentage_24h,
  market_cap,
  high_24h,
  low_24h,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt={name}></img>
          <h1>{name}</h1>
        </div>
        <div className="coin-data">
          <p className="coin-price">${current_price}</p>

          {price_change_percentage_24h > 0 ? (
            <p className="coin-percent green">{price_change_percentage_24h}</p> //high
          ) : (
            <p className="coin-percent red">🔻{price_change_percentage_24h}</p>
          )}

          <p className="high_24h">High: {high_24h}</p>

          <p className="low_24h">Low: {low_24h}</p>

          <p className="coin-marketcap">Mkt: {market_cap}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
