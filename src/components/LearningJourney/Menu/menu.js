/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './menuStyles.scss';

function Menu() {
  return (
    <header className="head-menu">
      <div>
        <a className="btn-menu" href="/learning">Quitter le cours</a>
        <button className="btn-menu" type="submit">Menu</button>
      </div>
      <div>
        <h3>Expert trader - niveau 3 (2022)</h3>
      </div>
      <div className="progressBar">
        <div className="levelBar" />
      </div>
    </header>
  );
}

export default React.memo(Menu);
