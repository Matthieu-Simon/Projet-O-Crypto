/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function Coin({ coin, deleteCoin }) {
  return (
    <Link to={`/coin/${coin.id}`} className="text-decoration-none coin">
      <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-around align-items-center text-dark">
        <img className="coinlist-image" src={coin.image} alt="" />
        <p className="coinlist-name">{coin.name}</p>
        <span className="text-decoration-none">{coin.current_price} €</span>

        <span
          className={
            coin.price_change_percentage_24h < 0
              ? 'text-danger mr-2'
              : 'text-success mr-2'
          }
        >
          {' '}
          {coin.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down align-middle mr-1" />
          ) : (
            <i className="fas fa-sort-up align-middle mr-1" />
          )}
          {coin.price_change_percentage_24h.toFixed(2)}
          %
        </span>
        <i
          onClick={(e) => {
            e.preventDefault();
            deleteCoin(coin.id);
          }}
          className="delete-icon far fa-times-circle text-danger"
        />
      </li>
    </Link>
  );
}

export default Coin;
