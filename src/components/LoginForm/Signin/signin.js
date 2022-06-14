import React from 'react';

function Signin() {
  return (
    <div className="register-left">
      <h2>Inscription</h2>
      <form action="" method="get" className="form-inscription">
        <div className="form-example">
          <input className="input-form" type="text" name="name" placeholder="Pseudo" />
        </div>
        <div className="form-example">
          <input className="input-form" type="email" name="email" placeholder="Email" />
        </div>
        <div className="form-example">
          <input className="input-form" type="password" name="password" placeholder="Mot de passe" />
        </div>
        <div className="form-example">
          <input className="input-form" type="password" name="password" placeholder="Confirmer mot de passe" />
        </div>
        <button className="btn-form" type="submit">S'enregistrer</button>
      </form>
    </div>
  );
}

export default React.memo(Signin);
