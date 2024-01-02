import { useEffect, useState } from "react";
import Coin from "./components/Coin";
import "./App.css";

function App() {
  const [crypto, getCrypto] = useState([]);
  const [input, getInput] = useState("");

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((data) => getCrypto(data));
  }, []);
  console.log(crypto);

  const handleChange = (e) => {
    getInput(e.target.value);
  };

  const filterCoin = crypto.filter((crp) =>
    crp.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="coin-app">
      <h1>Real Time Crypto Update</h1>
      <div className="coin-search">
        <form action="">
          <input
            type="text"
            placeholder="Enter coin name"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filterCoin.map((crp) => {
        return (
          <Coin
            key={crp.id}
            image={crp.image}
            name={crp.name}
            current_price={crp.current_price}
            price_change_percentage_24h={crp.price_change_percentage_24h}
            market_cap={crp.market_cap}
            high_24h={crp.high_24h}
            low_24h={crp.low_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
