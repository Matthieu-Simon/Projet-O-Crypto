import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './articleStyles.scss';
import btclogo from '../../../assets/btc.png';

function Article() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const { data } = await axios.get('  https://ocrypto-backend.herokuapp.com/articles');
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  console.log(articles);

  return (
    <div className="App-main-content">
      <div className="App-article">
        <div className="App-article-header">
          <h1 className="App-article-title">
            Bitcoin
          </h1>
        </div>
        <div className="App-article-image">
          <img src={btclogo} alt="bitcoin" className="article-img" />
        </div>
        <div className="App-article-text">
          <p>
            ARTICLE text
          </p>
        </div>
      </div>
      <div className="App-pub">
        <h2 className="App-pub-title">
          C'est quoi la différence entre ehteur, ether et ETH ?
        </h2>
        <p className="App-pub-text">
          Suivez notre parcours d'apprentissage pour tout comprendre !
        </p>
        <button onClick={() => navigate('/log-in')} type="button" className="App-pub-button">
          S'inscrire ici !
        </button>
      </div>
    </div>
  );
}

export default React.memo(Article);
