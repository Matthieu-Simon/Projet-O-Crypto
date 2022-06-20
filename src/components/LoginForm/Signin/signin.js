import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthService from '../auth.service';

function Signin() {
  const [username, setUserName] = useState('');
  const [email, setUserMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(username, email, password).then(
        (response) => {
          console.log('Bien enregistré', response);
          navigate('/');
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-left">
      <h2 className="signin">Inscription</h2>
      <form onSubmit={handleSignin} className="form-inscription">
        <div className="form-example">
          <input
            className="input-form"
            type="text"
            value={username}
            placeholder="Pseudo"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="form-example">
          <input
            className="input-form"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              setUserMail(e.target.value);
            }}
          />
        </div>
        <div className="form-example">
          <input
            className="input-form"
            type="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          className="btn-form"
          type="submit"
        >S'enregistrer
        </button>
      </form>
    </div>
  );
}

export default React.memo(Signin);
