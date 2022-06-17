/* eslint-disable max-len */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthService from '../auth.service';

function Login() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(() => {
        navigate('/profile');
        window.location.reload();
      }, (error) => {
        console.log(error);
      });
    }
    catch (error) {
      console.log(error);
    }
  };

  // check is user is logged
  console.log(AuthService.getCurrentUser());
  return (

    <div className="register-right">
      <form onSubmit={handleLogin}>
        <h2 className="login">Connexion</h2>
        <div className="form-example">
          <input
            className="input-form"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-example">
          <input
            className="input-form"
            type="password"
            name="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn-form" type="submit">Connexion</button>
      </form>
      <div className="input-reset">
        <input type="checkbox" id="memories" />
        <a className="a-form" href="#">Se souvenir de moi</a>
        <a className="a-form" href="#">Mot de passe oublié ?</a>
      </div>
    </div>
  );
}

export default React.memo(Login);
