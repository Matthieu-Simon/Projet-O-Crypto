import { useState, useContext } from 'react';
import { WatchListContext } from '../../../context/watchListContext';
import './addCoinStyles.scss';

function AddCoin() {
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);

  const availableCoins = [
    'bitcoin',
    'ethereum',
    'tether',
    'usd-coin',
    'ripple',
    'litecoin',
    'monero',
    'bitcoin-cash',
    'eos',
    'cardano',
    'binance-coin',
  ];

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Ajouter une cryptomonnaie
      </button>
      <div className={isActive ? 'dropdown-menu show' : 'dropdown-menu'}>
        {availableCoins.map((el) => (
          <a
            key={el}
            onClick={() => handleClick(el)}
            href="#"
            className="dropdown-item"
          >
            {el}
          </a>
        ))}
      </div>
    </div>
  );
}

export default AddCoin;
