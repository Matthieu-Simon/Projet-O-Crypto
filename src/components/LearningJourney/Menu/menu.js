import React from 'react';
import './menuStyles.scss';

function Menu() {
  return (
    <header className="head-menu">
      <div>
        <button className="btn-menu" type="submit">Quitter le cours</button>
        <button className="btn-menu" type="submit">Menu</button>
      </div>
      <div>
        <h3>Expert trader - niveau 3 (2022)</h3>
      </div>
      <div>
        <div>Progress Bar 75%</div>
      </div>
    </header>
  );
}

export default React.memo(Menu);
