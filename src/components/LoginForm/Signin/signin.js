import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
  const navigate = useNavigate();
  const [usernameReg, setUserNameReg] = useState('');
  const [usermailReg, setUserMailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const register = (e) => {
    e.preventDefault();
    axios.post('https://ocrypto-backend.herokuapp.com/sign-in', {
      pseudo: usernameReg,
      email: usermailReg,
      password: passwordReg
    })
      .then((response) => {
        console.log(response);
        navigate('/profile');
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
        <button
          className="btn-form"
          type="submit"
          onClick={(e) => {
            register(e);
          }}
        >S'enregistrer
        </button>
      </form>
    </div>
  );
}

export default React.memo(Signin);
