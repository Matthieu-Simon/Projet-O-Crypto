/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './articlesStyles.scss';
import btclogo from '../../assets/btc.png';

function Articles() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');

  const fetchArticles = async () => {
    const { data } = await axios.get('https://ocrypto-backend.herokuapp.com/articles');
    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredArtciles = articles.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App-main-content">
      <div className="App-main-header">
        <h1 className="App-main-title">
          Articles
        </h1>
        <div className="articles-search">
          <form>
            <input type="text" className="articles-input" placeholder="Rechercher un article" onChange={handleChange} />
          </form>
        </div>
      </div>
      <div className="App-articles">
        {filteredArtciles.map((article) => (
          <div key={article.id} onClick={() => navigate(`/articles/${article.name}`)} className="App-article-preview">
            <div className="App-article-preview-title">
              <h2 className="App-article-preview-title-text">
                {article.name}
              </h2>
            </div>
            <div className="App-article-preview-image">
              <img src={btclogo} alt="bitcoin" className="article-img" />
            </div>
            <div className="App-article-preview-text">
              <p>
                {article.abstract.slice(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
export default React.memo(Articles);
