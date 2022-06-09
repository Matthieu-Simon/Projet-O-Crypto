import React from 'react';
import PropTypes from 'prop-types';
import './searchBarStyles.scss';

function searchBar(){
   return (
    <div className="search-box">
    <button className="btn-search"><i className="fas fa-search"></i></button>
    <input type="text" className="input-search" placeholder="Rechercher" />
  </div>
    );
};

export default React.memo(searchBar);
