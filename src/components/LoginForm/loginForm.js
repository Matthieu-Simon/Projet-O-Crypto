import React from 'react';
import './loginFormStyles.scss';

function LoginForm() {
  return (
    <div className="container">
      <div className="register-left">
        <h2>Inscription</h2>
        <form action="" method="get" className="form-inscription">
          <div className="form-example">
            <input className="input-form" type="text" name="name" id="pseudo" placeholder="Pseudo" />
          </div>
          <div className="form-example">
            <input className="input-form" type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="form-example">
            <input className="input-form" type="password" name="password" id="password" placeholder="Mot de passe" />
          </div>
          <div className="form-example">
            <input className="input-form" type="password" name="password" id="confirm" placeholder="Confirmer mot de passe" />
          </div>
          <button className="btn-form" type="submit">S'enregistrer</button>
        </form>
      </div>
      <span className="vertical" />
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
          <input className="input-form" type="checkbox" id="memories" />
          <a href="#">Se souvenir de moi</a>
          <a href="#">Mot de passe oublié ?</a>
        </div>
      </div>
    </div>
  );
}
export default React.memo(LoginForm);
