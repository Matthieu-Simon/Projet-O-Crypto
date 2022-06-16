/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import heroku from '../../../config/api/heroku';

function Login() {
  const navigate = useNavigate();

  const [usermail, setUsermail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  axios.defaults.withCredentials = true;
  //   POST LOGIN AN USER
  const login = () => {
    heroku.post('/log-in', {
      email: usermail,
      password: password
    })
      .then((response) => {
        console.log(response);
        setLoginStatus(response.data.user.message);
        if (response.data.user.message === 'Utilisateur connecté') {
          // axios.defaults.headers.common['authorization'] = `Bearer ${response.data.accesToken}`;
          // loadUserInfos();
          setLoginStatus(response.data.user.message);
          console.log(response.data.user.userData);
        }
        else {
          setLoginStatus(response.data.user.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function loadUserInfos() {
    axios.get('/log-in').then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error.response.status);
    });
  }

  //   GET LOGIN AN USER

  return (

    <div className="register-right">
      <h2 className="login">Connexion</h2>
      <div className="form-example">
        <input
          className="input-form"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setUsermail(e.target.value);
          }}
        />
      </div>
      <div className="form-example">
        <input
          className="input-form"
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button className="btn-form" type="submit" onClick={login}>Connexion</button>
      <h1 className="login-status">{loginStatus}</h1>
      <div className="input-reset">
        <input type="checkbox" id="memories" />
        <a className="a-form" href="#">Se souvenir de moi</a>
        <a className="a-form" href="#">Mot de passe oublié ?</a>
      </div>
    </div>
  );
}

export default React.memo(Login);
