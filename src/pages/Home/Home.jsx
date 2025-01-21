import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CointContext } from '../../context/CoinContext';

export const Home = () => {
  const { allCoin, currency } = useContext(CointContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">
          Largest <br />
          Crypto Marketplace
        </h1>
        <p className="hero-subtitle">
          Welcome to the World's Largest Cryptocurrency marketplace. Sign up to explore more about cryptos.
        </p>
        <form className="search-form">
          <input
            type="text"
            placeholder="Search Crypto..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
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
          <div className="table-row" key={index}>
            <p>{item.market_cap_rank}</p>
            <div className="coin-info">
              <img src={item.img} alt="" className="coin-image" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>{currency.symbol} {currency.current_price}</p>
            <p>{Math.floor(item.market_cap_change_percentage_24h * 100) / 100}</p>
            <p className="table-right">{currency.symbol} {item.market_cap}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
