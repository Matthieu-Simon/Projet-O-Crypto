import React from 'react';
import PropTypes from 'prop-types';
import './coinStyles.scss';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


function Coin({name, image, symbol, price, volume, priceChange, marketcap, rank,onClick}) {
   return (
    <div className="coin-cointainer">
        <div className="coin-row" >
            <div className="add-favourite" onClick={onClick}>
                <StarBorderIcon className="star-icon" />
            </div>
            <div className="coin">
                <p className="coin-rank">{rank}</p>
                <img src={image} alt="crypto" />
                <h1 onClick={onClick}>{name}</h1>
                <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">{price}€</p>
                <p className="coin-volume">{volume.toLocaleString()}</p>
                {priceChange < 0 ?(<p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                ):(<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                )}
                <p className="coin-marketcap">
                {marketcap.toLocaleString()}€
                </p>
            </div>
        </div>
    </div>
    );
};

export default React.memo(Coin);
