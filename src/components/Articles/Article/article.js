import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './articleStyles.scss';
import btclogo from '../../../assets/images/btc.png';

function Article() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const { data } = await axios.get(`https://ocrypto-backend.herokuapp.com/article/${name}`);
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="App-article-main-content">
      <div key={articles.id} className="App-article">
        <div className="App-article-header">
          <h1 className="App-article-title">
            {articles.name}
          </h1>
        </div>
        <div className="App-article-image">
          <img src={btclogo} alt="bitcoin" className="article-image" />
        </div>
        <div className="App-article-author">
          <h3 className="App-article-author-name">
            Ecrit par {articles.author}
          </h3>
        </div>
        <div className="App-article-text">
          <p className="article-text">
            {articles.abstract}
          </p>
        </div>
      </div>
      <div className="App-pub">
        <h2 className="App-pub-title">
          C'est quoi la différence entre Ethereum, Ether et ETH ?
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
