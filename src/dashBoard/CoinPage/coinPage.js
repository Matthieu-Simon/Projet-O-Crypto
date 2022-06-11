import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleCoin } from '../../config/api';

function CoinPage() {
  const { id } = useParams();
  const [coin, setCoin] = useState({});

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    console.log(),
      <div className="coin-page">
        <img src={coin?.image?.large} alt="coin" />
        <h1>{coin?.name}</h1>
      </div>
  );
}
export default CoinPage;
