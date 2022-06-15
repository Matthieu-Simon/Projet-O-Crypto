/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [usermail, setUsermail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  //   POST LOGIN AN USER
  const login = () => {
    axios.post('https://ocrypto-backend.herokuapp.com/log-in', {
      email: usermail,
      password: password
    })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        }
        else {
          setLoginStatus(response.data[0].pseudo);
          navigate('/profile');
        }
      });
  };

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
