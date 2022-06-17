/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { useEffect, useState, useContext } from 'react';
import coinGecko from '../../../config/api/coinGecko';
import { WatchListContext } from '../../../context/watchListContext';
import Coin from './coin';
import './coinListStyles.scss';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { watchList, deleteCoin } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get('/coins/markets/', {
        params: {
          vs_currency: 'eur',
          ids: watchList.join(','),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    if (watchList.length > 0) {
      fetchData();
    }
    else setCoins([]);
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <ul className="coinlist list-group ">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
