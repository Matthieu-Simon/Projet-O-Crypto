/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import authService from '../../LoginForm/auth.service';
import './coinStyles.scss';

function Coin({
  name, image, symbol, price, volume, priceChange, marketcap, rank, onClick
}) {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (authService.getCurrentUser()) {
      setIsLogged(true);
    }
  }, [isLogged]);
  return (
    <div className="coin-cointainer">
      <div className="coin-row">
        <div className="add-favourite">
          {isLogged ? (
            <StarBorderIcon onClick={() => navigate('/profile')} className="star-icon" />
          ) : (
            <StarBorderIcon onClick={() => navigate('/log-in')} className="star-icon" />
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
