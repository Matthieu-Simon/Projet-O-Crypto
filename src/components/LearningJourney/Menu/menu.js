/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './menuStyles.scss';

function Menu() {
  return (
    <div className="head-liner">
      <div className="head-menu">
        <div>
          <a className="btn-menu" href="/learning">Quitter le cours</a>
          <button className="btn-menu" type="submit">Menu</button>
        </div>
        <div>
          <h3 className="title-head-menu">Expert trader - niveau 3 (2022)</h3>
        </div>
        <div className="leftHead-container">
          <p className="titleProgress">Progression du cours</p>
          <div className="progressBar">
            <div className="levelBar" />
          </div>
          <div>
            <p className="score">50%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Menu);
