import React from 'react';

import Menu from './menu/menu';
import logo from '../../assets/Logo.png';
import './headerStyles.scss';

function header() {
  return (
    <header className="App-header">
      <a href="/" className="App-logo-container">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <Menu />
    </header>
  );
}

export default React.memo(header);
