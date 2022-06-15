import React from 'react';
import './learningJourneyStyles.scss';

function LearningJourney() {
  return (
    <main className="learning-main">
      <h2 className="title-learn">Parcours d'apprentissage</h2>
      <div className="main-parcours">
        <div className="card">
          <div>
            <div className="head-card">
              <h3>Expert trader - niveau 3</h3>
              <p>Progrès</p>
            </div>
            <main className="main-card">
              <h4 className="card-name">Expert trader - niveau 3 2022</h4>
              <p className="card-description">300 pts</p>
            </main>
            <footer className="card-footer">
              <span className="card-progress">ProgressBar</span>
              <span className="card-time">30 minutes</span>
            </footer>
          </div>
        </div>
        <div className="card">
          <div>
            <div className="head-card">
              <h3>Expert trader - niveau 3</h3>
              <p>Progrès</p>
            </div>
            <main className="main-card">
              <h4 className="card-name">Expert trader - niveau 3 2022</h4>
              <p className="card-description">300 pts</p>
            </main>
            <footer className="card-footer">
              <span className="card-progress">ProgressBar</span>
              <span className="card-time">30 minutes</span>
            </footer>
          </div>
        </div>
        <div className="card">
          <div>
            <div className="head-card">
              <h3>Expert trader - niveau 3</h3>
              <p>Progrès</p>
            </div>
            <main className="main-card">
              <h4 className="card-name">Expert trader - niveau 3 2022</h4>
              <p className="card-description">300 pts</p>
            </main>
            <footer className="card-footer">
              <span className="card-progress">ProgressBar</span>
              <span className="card-time">30 minutes</span>
            </footer>
          </div>
        </div>
      </div>
      <div className="cours-container">
        <div className="title-cours">
          <h3 className="title-footer">Parcourir les cours</h3>
        </div>
        <div className="link-container">
          <a className="lien" href="/Cours/">Cours</a>
          <a className="lien" href="/Challenge">Challenge</a>
          <a className="lien" href="#">Trading</a>
          <a className="lien" href="#">NFT</a>
          <a className="lien" href="#">Tout afficher</a>
        </div>
      </div>
    </main>
  );
}

export default React.memo(LearningJourney);
