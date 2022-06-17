/* eslint-disable no-undef */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
import React from 'react';
import './profilStyles.scss';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ProfilLogo from '../../assets/profilLogo.png';
import CoinSummary from './CoinList/coinSummary';
import Update from './Update/update';
import authService from '../LoginForm/auth.service';

function Profil() {
  const user = authService.getCurrentUser();
  console.log(user.user);

  return (
    <><div className="profil-container">
      <div className="profil-title">
        <h2>Bienvenue {user.user.pseudo}</h2>
      </div>
      <div className="profil-header">
        <div className="profil-card">
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ width: 180, height: 180 }}
              src={ProfilLogo}
            />
          </Stack>
          <div className="profil-card-username">
            <h3 className="profil-username">{user.user.pseudo}</h3>
          </div>
          <div className="profil-update-container">
            <Update />
          </div>
        </div>
        <div className="profil-score">
          <h3 className="profil-scoreState">Niveau : {user.user.level}</h3>
          <h3 className="profil-scoreState">Points : {user.user.reward}</h3>
        </div>
      </div>
    </div>
      <CoinSummary />
    </>
  );
}

export default React.memo(Profil);
