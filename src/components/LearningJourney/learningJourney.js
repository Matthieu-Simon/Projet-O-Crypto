import React from 'react';
import './learningJourneyStyles.scss';

function LearningJourney() {
  return (
    <div className="main-container">
      <h2 className="title-parcours">Parcours d'apprentissage</h2>
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
      <div className="cours-container">
        <div className="title-cours">
          <h3>Parcourir les cours</h3>
        </div>
        <div className="lien-parcours">
          <a className="lien" href="#">Blockchain</a>
          <a className="lien" href="#">Cryptos</a>
          <a className="lien" href="#">Trading</a>
          <a className="lien" href="#">NFT</a>
          <a className="lien" href="#">Tout afficher</a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(LearningJourney);
