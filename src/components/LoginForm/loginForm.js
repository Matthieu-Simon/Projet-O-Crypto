import React from 'react';
import './loginFormStyles.scss';

function LoginForm() {
  return (
    <div className="container">
      <div className="register-left">
        <h2>Inscription</h2>
        <form action="" method="get" className="form-inscription">
          <div className="form-example">
            <input type="text" name="name" id="pseudo" placeholder="Pseudo" />
          </div>
          <div className="form-example">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="form-example">
            <input type="password" name="password" id="password" placeholder="Mot de passe" />
          </div>
          <div className="form-example">
            <input type="password" name="password" id="confirm" placeholder="Confirmer mot de passe" />
          </div>
          <div className="form-example">
            <input type="submit" value="Valider" />
          </div>
        </form>
      </div>
      <span className="vertical" />
      <div className="register-right">
        <h2>Connexion</h2>
        <div className="form-example">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="form-example">
          <input type="password" name="password" id="password" placeholder="Mot de passe" />
        </div>
        <button type="submit">Connexion</button>
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
