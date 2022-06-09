import React from 'react';
import PropTypes from 'prop-types';

import './menuStyles.scss';
import SearchBar from '../searchBar/searchBar';


function menu(){
   return (
    <menu className="App-menu">
        <nav className="App-nav">
            <a className="App-link" href="/cryptocurrencies">Cours des Cryptomonnaies</a>
            <a className="App-link" href="/articles">Articles</a>
            <a className="App-link" href="/lexicon">Lexique</a>
            <a className="App-link" href="/learning">Parcours d'apprentissage</a>
            <a className="App-link" href="/faq">FAQ</a>
        </nav>
    <div className="App-button">
        <button className="App-button-signin">S'inscrire</button>
        <button className="App-button-login">Connexion</button>
    </div>
        <SearchBar />
   </menu>
   );
};

export default React.memo(menu);
