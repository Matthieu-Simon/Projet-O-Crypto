import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import heroku from '../../config/api/heroku';
import './learningJourneyStyles.scss';

function LearningJourney() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState([]);

  const fetchChallenge = async () => {
    const { data } = await heroku.get(`/challenge/${name}`);
    setChallenge(data);
  };

  useEffect(() => {
    fetchChallenge();
  }, []);

  const handleChange = (e) => {
    setChallenge(e.target.value);
  };
  /* const filteredChallenges = challenge.filter((challenges) => challenges.name);

  console.log(filteredChallenges); */

  return (
    <main className="learning-main">
      <h2 className="title-learn">Parcours d'apprentissage</h2>
      <div className="card-main">
        <div className="card-container">
          <div className="card-structure">
            <div className="head-card">
              <h3>Expert trader - niveau 3</h3>
              <p>Progrès</p>
            </div>
            <div className="separator" />
            <div className="main-card">
              <h4 className="card-name">Expert trader - niveau 3 2022</h4>
              <p className="card-description">300 pts</p>
            </div>
            <div className="separator" />
            <footer className="card-footer-learn">
              <div className="card-progress">
                <div className="first-card-progress" />
              </div>
              <div>
                <div className="card-time">100%</div>
              </div>
            </footer>
          </div>
        </div>
        <div className="card-container">
          <div className="card-structure">
            <div className="head-card">
              <h3>Expert trader - niveau 3 2022</h3>
              <p>250pts avant le niveau 48</p>
            </div>
            <div className="separator" />
            <div className="main-card">
              <h4 className="card-name">Expert trader - niveau 4 2022</h4>
              <p className="card-description">300 pts</p>
            </div>
            <div className="separator" />
            <footer className="card-footer-learn">
              <div className="card-progress">
                <div className="second-card-progress" />
              </div>
              <span className="card-time">30%</span>
            </footer>
          </div>
        </div>
        <div className="card-container">
          <div className="card-structure">
            <div className="head-card">
              <h3>Expert trader - niveau 3 2022</h3>
              <p>700pts gagnés cette semaine</p>
            </div>
            <div className="separator" />
            <div className="main-card">
              <h4 className="card-name">Expert trader - niveau 3 2022</h4>
              <p className="card-description">400 pts</p>
            </div>
            <div className="separator" />
            <footer className="card-footer-learn">
              <div className="card-progress">
                <div className="third-card-progress" />
              </div>
              <span className="card-time">80%</span>
            </footer>
          </div>
        </div>
      </div>
      <div className="cours-container">
        <div className="title-cours">
          <h3 className="title-footer">Parcourir les cours</h3>
        </div>
        <div className="link-container" key={challenge.name} onClick={() => navigate(`/Challenge/${name}`)}>
          <a className="lien" href="/Cours/">Cours</a>
          <a className="lien" href="/Challenge" onChange={handleChange}>Challenge</a>
          <a className="lien" href="/Dashboard">Trading</a>
          <a className="lien" href="#">NFT</a>
          <a className="lien" href="#">Tout afficher</a>
        </div>
      </div>
    </main>
  );
}

export default React.memo(LearningJourney);
