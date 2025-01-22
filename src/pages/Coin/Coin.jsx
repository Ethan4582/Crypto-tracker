import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CointContext } from '../../context/CoinContext';
import './coin.css'
import LineChart from '../../components/Navbar/LineChart/LineChart';

function Coin() {
   // need to be carefull  from samething we provided in the routing 
  const {id} = useParams();

  const [coindata, setcoindata] =useState();
  const [chartdata, setchartdata] =useState();

  const [ currency, setCurrency] =useContext(CointContext)

  const fetchedCoinData= async ()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': COIN_GECKO_API}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
      .then(res => res.json())
      .then(res => setcoindata(res))
      .catch(err => console.error(err));
  }

  const fectchchartdata = async ()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': COIN_GECKO_API}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency={currency.name}&days=1&interval=daily`, options)
      .then(res => res.json())
      .then(res => setchartdata(res))
      .catch(err => console.error(err));
  }

  useEffect(()=>{
   fetchedCoinData();
   fectchchartdata();
  }, [currency]) // when we load the page or when the currency changes 

  if(coindata && chartdata){
    return (
      <div className='coin'>
        <div className="coin-name">
          <img src={coindata.img.large} alt=''></img>
          <p> <b> {coindata.name} ({coindata.symbol.toUppercase()})</b></p>
        </div>
        <div className="coin-chart">
          {/* pasing the chart data to google chart component  */}
          <LineChart chartdata={chartdata}></LineChart>
        </div>
        <div className="coin-info">
          <ul>
            <li>
              Crypto Market Rank
            </li>
            <li>
              {coindata.market_Cap_rank}
            </li>
          </ul>

          <ul>
            <li>
              Current Price
            </li>
            <li>
              {currency.symbol} {coindata.market_data.current_prcie[currency.name].toLocalString()}
            </li>
          </ul>

          <ul>
            <li>
              Market Cap
            </li>
            <li>
              {currency.symbol} {coindata.market_data.market_cap[currency.name].toLocalString()}
            </li>
          </ul>

          <ul>
            <li>
              24 HR High 
            </li>
            <li>
              {currency.symbol} {coindata.market_data.high_24h[currency.name].toLocalString()}
            </li>
          </ul>

          <ul>
            <li>
              24 HR low
            </li>
            <li>
              {currency.symbol} {coindata.market_data.low_24h[currency.name].toLocalString()}
            </li>
          </ul>
        </div>
      </div>
    );
  }else{
    return (
     <div className="spinner">
    <div className="spin">
    </div>
     </div>
    );

  }
}

export default Coin;
