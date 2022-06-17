/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import authService from '../../LoginForm/auth.service';

import './menuStyles.scss';
// import SearchBar from '../searchBar/searchBar';

function menu() {
  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setIsLogged(false);
    navigate('/');
  };
  // check if user is logged
  useEffect(() => {
    if (authService.getCurrentUser()) {
      setIsLogged(true);
    }
  }, [isLogged]);

  return (
    <menu className="App-menu">
      <nav className="App-nav">
        <NavLink className="App-link" to="/dashboard">Cours des Cryptomonnaies</NavLink>
        <a className="App-link" href="/articles">Articles</a>
        <a className="App-link" href="/lexicon">Lexique</a>
        <a className="App-link" href="/learning">Parcours d'apprentissage</a>
        <a className="App-link" href="/faq">FAQ</a>
      </nav>
      {isLogged ? (
        <div className="App-button">
          <button onClick={() => navigate('/profile')} type="button" className="App-button-signin"><PersonIcon fontSize="large" style={{ color: '#424C7C' }} /></button>
          <button onClick={handleLogout} type="button" className="App-button-login"><LogoutIcon fontSize="medium" /></button>
        </div>
      ) : (
        <div className="App-button">
          <button onClick={() => navigate('/log-in')} type="button" className="App-button-signin">S'inscrire</button>
          <button onClick={() => navigate('/log-in')} type="button" className="App-button-login">Connexion</button>
        </div>
      )}
      {/* <SearchBar /> */}
      <div />
    </menu>
  );
}

export default React.memo(menu);
