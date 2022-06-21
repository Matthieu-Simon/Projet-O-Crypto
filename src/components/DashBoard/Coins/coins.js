/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import './coinStyles.scss';
import authService from '../../LoginForm/auth.service';

function Coin({
  name, image, symbol, price, volume, priceChange, marketcap, rank, onClick
}) {
  // get favorites from local storage or empty array
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  const user = authService.getCurrentUser();

  const isFavorite = favorites.some((coin) => coin.name === name);

  const handleClick = () => {
    if (isFavorite) {
      // remove coin from favorites
      setFavorites(favorites.filter((coin) => coin.name !== name));
    }
    else {
      // add coin to favorites
      setFavorites([...favorites, {
        name, image, symbol, price, volume, priceChange, marketcap, rank
      }]);
    }
  };

  localStorage.setItem('favorites', JSON.stringify(favorites));

  console.log(localStorage.getItem('favorite'));

  return (
    <div className="coin-cointainer">
      <div className="coin-row">
        <div className="add-favourite">
          {isFavorite && user ? (
            <StarIcon onClick={handleClick} style={{ color: '#EC8B35' }} />
          ) : (
            <StarBorderIcon onClick={handleClick} />
          )}
        </div>
        <div className="coin">
          <p className="coin-rank">{rank}</p>
          <img onClick={onClick} src={image} alt="crypto" />
          <h1 className="coin-name" onClick={onClick}>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{price}€</p>
          <p className="coin-volume">{volume.toLocaleString()}</p>
          {priceChange < 0 ? (<p className="coin-percent red">{priceChange?.toFixed(2)}%</p>
          ) : (<p className="coin-percent green">{priceChange?.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            {marketcap.toLocaleString()}€
          </p>
        </div>
      </div>
    </div>
  );
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  priceChange: PropTypes.number.isRequired,
  marketcap: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default React.memo(Coin);
