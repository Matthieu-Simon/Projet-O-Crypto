import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './dashBoardStyles.scss';


import Coin from './coin/coin';
import Footer from '../components/homePage/footer/footer';


function dashBoard(){
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(response => { 
            setCoins(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredCoins = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
    
    
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
        {filteredCoins.map(coin => {
            return (
                <Coin key={coin.id} 
                onClick={() => { console.log(coin.id)}}
                name={coin.name} 
                image={coin.image} 
                symbol={coin.symbol} 
                price={coin.current_price} 
                marketcap={coin.market_cap} 
                priceChange={coin.price_change_percentage_24h} 
                volume={coin.total_volume} 
                rank={coin.market_cap_rank} 
                />
            )
        })}
        <Footer />
    </div>
   );
};

export default React.memo(dashBoard);
