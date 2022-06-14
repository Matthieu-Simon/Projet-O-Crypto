import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MarketCoin } from '../../../config/api';
import './coinListStyles.scss';

function coinList() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await axios.get(MarketCoin());
      setCoins(data);
    };
    fetchCoins();
  }, []);

  console.log(coins);

  return (
    <div>
      <h3>CoinList</h3>
    </div>
  );
}

export default React.memo(coinList);
