import React, { useContext } from 'react';
import logo from '../../assets/logo2.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { CointContext } from '../../context/CoinContext';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar ()  {
  const { setCurrency } = useContext(CointContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd':
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      case 'eur':
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      case 'inr':
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      default:
        setCurrency({ name: 'usd', symbol: '$' });
        break;
    }
  };

  return (
    <div className="navbar">
      <Link to ={'./'}>
      <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
     
    
      <ul className="navbar-menu">
      <Link to ={'./'}>
      <li>Home</li>
      </Link>
       
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className="navbar-right">
        <select className="currency-select" onChange={currencyHandler}>
          <option value="usd" className="currency-option">USD</option>
          <option value="eur" className="currency-option">EUR</option>
          <option value="inr" className="currency-option">INR</option>
        </select>

        <button className="sign-up-button">
          Sign Up
          <img src={arrow_icon} alt="Arrow Icon" className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
