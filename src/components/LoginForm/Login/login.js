import React from 'react';

function Login() {
  return (
    <div className="register-right">
      <h2>Connexion</h2>
      <div className="form-example">
        <input className="input-form" type="email" name="email" id="email" placeholder="Email" />
      </div>
      <div className="form-example">
        <input className="input-form" type="password" name="password" id="password" placeholder="Mot de passe" />
      </div>
      <button className="btn-form" type="submit">Connexion</button>
      <div className="input-reset">
        <input type="checkbox" id="memories" />
        <a className="a-form" href="#">Se souvenir de moi</a>
        <a className="a-form" href="#">Mot de passe oublié ?</a>
      </div>
    </div>
  );
}

export default React.memo(Login);
