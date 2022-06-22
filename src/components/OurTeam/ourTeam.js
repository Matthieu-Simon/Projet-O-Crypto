/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React from 'react';
import './ourTeamStyles.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import fabiano from '../../assets/images/fabiano.jpg';
import florent from '../../assets/images/florent.jpg';
import hugo from '../../assets/images/hugo.png';
import mec4 from '../../assets/images/mec4.png';
import mec5 from '../../assets/images/mec5.png';

function ourTeam() {
  return (
    <div className="title-container">
      <h1 className="title-page">Notre équipe</h1>
      <div className="container-team">
        <div className="team-preview">
          <div className="team-preview-title">
            <h2 className="team-preview-title-text">
              Fabiano
            </h2>
          </div>
          <div className="team-preview-image">
            <div className="box box1">
              <img src={fabiano} alt="Fabiano" />
            </div>
          </div>
          <nav className="team-social-links">
            <a className="linkdin" href="https://www.linkedin.com/in/fabiano-albuquerque-6604391b/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a className="mail" href="mailto: falbuquerque.code@gmail.com" target="_blank" rel="noreferrer"><MailIcon /></a>
            <a className="github" href="https://github.com/falbuquerquecode" target="_blank" rel="noreferrer"><GitHubIcon /></a>
          </nav>
          <div className="team-preview-text">
            <p>
              Développeur Full Stack.
              <br />
              Passionné de games de simulation, de la voile, la bonne littérature et des cryptos.
              <br />
              Ouvert à des bonnes idées !
            </p>
          </div>
        </div>
        <div className="team-preview">
          <div className="team-preview-title">
            <h2 className="team-preview-title-text">
              Florent
            </h2>
          </div>
          <div className="team-preview-image">
            <div className="box box2">
              <img src={florent} alt="Florent" />
            </div>
          </div>
          <nav className="team-social-links">
            <a className="linkdin" href="https://www.linkedin.com/in/florentbreux/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a className="mail" href="mailto: breux.florent@gmail.com" target="_blank" rel="noreferrer"><MailIcon /></a>
            <a className="github" href="https://github.com/FlorentZz" target="_blank" rel="noreferrer"><GitHubIcon /></a>
          </nav>
          <div className="team-preview-text">
            <p>
              Développeur Front, désireux d'apprendre la programmation sur la Blockchain.
              <br />
              Basé à Paris, je suis ouvert à des propositions internationales.
              <br />
            </p>
          </div>
        </div>
        <div className="team-preview">
          <div className="team-preview-title">
            <h2 className="team-preview-title-text">
              Hugo
            </h2>
          </div>
          <div className="team-preview-image">
            <div className="box box2">
              <img src={hugo} alt="Hugo" />
            </div>
          </div>
          <nav className="team-social-links">
            <a className="linkdin" href="" target="_blank"><LinkedInIcon /></a>
            <a className="mail" href="" target="_blank"><MailIcon /></a>
            <a className="github" href="" target="_blank"><GitHubIcon /></a>
          </nav>
          <div className="team-preview-text">
            <p>
              La première cryptomonnaies largement adoptée dans le monde. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="team-preview">
          <div className="team-preview-title">
            <h2 className="team-preview-title-text">
              Matthieu
            </h2>
          </div>
          <div className="team-preview-image">
            <div className="box box2">
              <img src={mec4} alt="Matthieu" />
            </div>
          </div>
          <nav className="team-social-links">
            <a className="linkdin" href="" target="_blank"><LinkedInIcon /></a>
            <a className="mail" href="" target="_blank"><MailIcon /></a>
            <a className="github" href="" target="_blank"><GitHubIcon /></a>
          </nav>
          <div className="team-preview-text">
            <p>
              La première cryptomonnaies largement adoptée dans le monde. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="team-preview">
          <div className="team-preview-title">
            <h2 className="team-preview-title-text">
              Quentin
            </h2>
          </div>
          <div className="team-preview-image">
            <div className="box box2">
              <img src={mec5} alt="Quentin" />
            </div>
          </div>
          <nav className="team-social-links">
            <a className="linkdin" href="" target="_blank"><LinkedInIcon /></a>
            <a className="mail" href="" target="_blank"><MailIcon /></a>
            <a className="github" href="" target="_blank"><GitHubIcon /></a>
          </nav>
          <div className="team-preview-text">
            <p>
              La première cryptomonnaies largement adoptée dans le monde. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ourTeam);
