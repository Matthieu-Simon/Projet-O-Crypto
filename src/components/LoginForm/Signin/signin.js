import React from 'react';

function Signin() {
  return (
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
  );
}

export default React.memo(Signin);
