import React from 'react';
import './learningJourneyStyles.scss';

function LearningJourney() {
  return (
    <div className="main-container">
      <h2>Parcours d'apprentissage</h2>
      <div className="card-container">
        <div className="card-parcours">
          <h3>Expert trader - niveau 3 2022</h3>
          <p>300 pts</p>
        </div>
        <div className="card-parcours">
          <h3>Expert trader - niveau 3 2022</h3>
          <p>300 pts</p>
        </div>
        <div className="card-parcours">
          <h3>Expert trader - niveau 3 2022</h3>
          <p>300 pts</p>
        </div>
      </div>
      <div className="container-cours">
        <div className="title-cours">
          <h3>Parcourir les cours</h3>
        </div>
        <div className="lien-parcours">
          <a href="#">Blockchain</a>
          <a href="#">Cryptos</a>
          <a href="#">Trading</a>
          <a href="#">NFT</a>
          <a href="#">Tout afficher</a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(LearningJourney);
