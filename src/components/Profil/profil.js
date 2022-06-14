/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './profilStyles.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ProfilLogo from '../../assets/profilLogo.png';
import { CoinList } from '../../config/api';
import Coin from '../DashBoard/Coins/coins';
import Update from './Update/update';

function Profil() {
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
    <div className="profil-container">
      <div className="profil-title">
        <h2>Profil</h2>
      </div>
      <div className="profil-header">
        <div className="profil-card">
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ width: 180, height: 180 }}
              src={ProfilLogo}
            />
          </Stack>
          <div className="profil-card-username">
            <h3 className="profil-username">Tarzan</h3>
          </div>
          <div className="profil-update-container">
            <Update />
          </div>
        </div>
        <div className="profil-score">
          <h3 className="profil-scoreState">Niveau : userLevel</h3>
          <h3 className="profil-scoreState">Points : userPoints</h3>
        </div>
      </div>
      <div className="coin-search">
        <form>
          <input type="text" className="coin-input" placeholder="Entrez le nom de la cryptomonnaie" onChange={handleChange} />
        </form>
      </div>
      <div className="add-favourite-coin">
        <p className="add-favourite-coin-text">Mes cryptomonnaies favorites</p>
        <button type="button" className="add-favourite-button">Ajouter aux favoris</button>
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
    </div>
  );
}

export default React.memo(Profil);
