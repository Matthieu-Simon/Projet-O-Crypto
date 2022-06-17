import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';

import './menuStyles.scss';
// import SearchBar from '../searchBar/searchBar';

function menu() {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem('isLogged');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <PersonIcon fontSize="large" style={{ color: '#424C7C' }} />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem style={{ color: '#424C7C' }} onClick={handleClose}>Profil</MenuItem>
            <MenuItem style={{ color: '#424C7C' }} onClick={handleClose}>Deconnexion</MenuItem>
          </Menu>
        </>
      ) : (
        <div className="App-button">
          <button onClick={() => navigate('/log-in')} type="button" className="App-button-signin">S'inscrire</button>
          <button onClick={() => navigate('/log-in')} type="button" className="App-button-login">Connexion</button>
        </div>
      )}
      {/* <SearchBar /> */}
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" style={{ color: '#424C7C' }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem style={{ color: '#424C7C' }} onClick={handleClose}>Cours des Cryptomonnaies</MenuItem>
        <MenuItem style={{ color: '#424C7C' }} onClick={handleClose}>Articles</MenuItem>
        <MenuItem style={{ color: '#424C7C' }} onClick={handleClose}>Lexique</MenuItem>
        <MenuItem style={{ color: '#424C7C' }} onClick={handleClose}>Parcours d'apprentissage</MenuItem>
        <MenuItem style={{ color: '#424C7C' }} onClick={handleClose}>FAQ</MenuItem>
        <MenuItem style={{ color: '#424C7C' }} onClick={handleClose}>Inscription/Connexion</MenuItem>
      </Menu>
      <div />
    </menu>
  );
}

export default React.memo(menu);
