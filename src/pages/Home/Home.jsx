import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CointContext } from '../../context/CoinContext';

import { Link } from 'react-router-dom'; // when perople clik on coin it opern another page 

function Home() {
  const { allCoin, currency } = useContext(CointContext); // Access coin data and currency context
  const [displayCoin, setDisplayCoin] = useState([]); // State for displayed coins
  const [input, setInput] = useState(''); // State for search input

  // Updates input state and resets display list to all coins
  const inputHandler = (event) => {
    setInput(event.target.value);
    setDisplayCoin(allCoin);
  };

  // Filters coins based on search input
  const searchHandler = async (event) => {
    event.preventDefault();
    const filteredCoins = allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(filteredCoins);
  };

  // Initializes displayed coins when `allCoin` updates
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Largest <br /> Crypto Marketplace</h1>
        <p className="hero-subtitle">
          Welcome to the World's Largest Cryptocurrency marketplace. Sign up to explore more about cryptos.
        </p>
        {/* Search Form */}
        <form className="search-form" onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            value={input}
            type="text"
            placeholder="Search Crypto..."
            className="search-input"
            required
          />
          <datalist id="coinlist">
            {allCoin.map((item, idx) => (
              <option key={idx} value={item.name} />
            ))}
          </datalist>
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      {/* Crypto Table */}
      <div className="crypto-table">
        <div className="table-header">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="table-center">24 HR Change</p>
          <p className="table-right">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          // show the data fetched 
          <link  to ={`/coin/${item.id}`}className="table-row" key={index}>
            <p>{item.market_cap_rank}</p>
            <div className="coin-info">
              <img src={item.img} alt={item.name} className="coin-image" />
              <p>{item.name} - {item.symbol}</p>
            </div>
            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
            <p className={item.market_cap_change_percentage_24h > 0 ? "green" : "red"}>
              {Math.floor(item.market_cap_change_percentage_24h * 100) / 100}
            </p>
            <p className="table-right">{currency.symbol} {item.market_cap.toLocaleString()}</p>
          </link>
        ))}
      </div>
    </div>
  );
}

export default Home;
