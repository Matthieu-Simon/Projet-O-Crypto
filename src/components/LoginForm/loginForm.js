import React from 'react';
import './loginFormStyles.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoginForm() {
  return (
    <div className="container">
      <div className="register-left">
        <h2>Inscription</h2>
        <TextField label="Pseudo" />
        <TextField label="Email" variant="outlined" />
        <TextField label="Mot de passe" />
        <TextField label="Confirmer mot de passe" />
        <Button variant="contained">S'enregistrer</Button>
      </div>
      <span className="vertical" />
      <div className="register-right">
        <h2>Connexion</h2>
        <TextField label="Email" variant="outlined" />
        <TextField label="Mot de passe" variant="outlined" />
        <Button variant="contained">Connexion</Button>
        <div className="input-reset">
          <input type="checkbox" id="memories" />
          <label htmlFor="memories">Se souvenir de moi</label>
          <a href="#">Mot de passe oublié ?</a>
        </div>
      </div>
    </div>
  );
}
export default React.memo(LoginForm);
