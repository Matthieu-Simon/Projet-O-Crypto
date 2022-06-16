/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './dashBoardStyles.scss';
import { CoinList } from '../../config/api/api';
import Coin from './Coins/coins';
import Footer from '../footer/footer';

function dashBoard() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const fetchCoins = async () => {
    const { data } = await axios.get(CoinList('eur'));
    setCoins(data);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="coin-app">
      <h1 className="coin-text">Cours des cryptomonnaie</h1>
      <div className="coin-search">
        <form>
          <input type="text" className="coin-input" placeholder="Entrez le nom de la cryptomonnaie" onChange={handleChange} />
        </form>
      </div>
      <div className="row-description">
        <p className="coin-rank-description">Rang</p>
        <p className="coin-name-description">Monnaies</p>
        <p className="coin-price-description">Prix</p>
        <p className="coin-volume-description">Volume</p>
        <p className="coin-percent-description">24h</p>
        <p className="coin-marketcap-description">Capitalisation Boursière</p>
      </div>
      {filteredCoins.map((coin) => (
        <Coin
          key={coin.id}
          onClick={() => navigate(`/coin/${coin.id}`)}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          price={coin.current_price}
          marketcap={coin.market_cap}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          rank={coin.market_cap_rank}
        />
      ))}
      <Footer />
    </div>
  );
}

export default React.memo(dashBoard);
