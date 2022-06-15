import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
  const navigate = useNavigate();

  const [usernameReg, setUserNameReg] = useState('');
  const [usermailReg, setUserMailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const register = () => {
    axios.post('https://ocrypto-backend.herokuapp.com/sign-in', {
      pseudo: usernameReg,
      email: usermailReg,
      password: passwordReg
    })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
          console.log(loginStatus);
        }
        else {
          setLoginStatus(response.data[0].pseudo);
          console.log(loginStatus);
          navigate('/profile');
        }
      });
  };

  return (
    <div className="register-left">
      <h2 className="signin">Inscription</h2>
      <form action="" method="get" className="form-inscription">
        <div className="form-example">
          <input
            className="input-form"
            type="text"
            placeholder="Pseudo"
            onChange={(e) => {
              setUserNameReg(e.target.value);
            }}
          />
        </div>
        <div className="form-example">
          <input
            className="input-form"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setUserMailReg(e.target.value);
            }}
          />
        </div>
        <div className="form-example">
          <input
            className="input-form"
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </div>
        <button className="btn-form" type="submit" onClick={register}>S'enregistrer</button>
        <h1 className="login-status">{loginStatus}</h1>
      </form>
    </div>
  );
}

export default React.memo(Signin);
