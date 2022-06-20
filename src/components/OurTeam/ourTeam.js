/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React from 'react';
import './ourTeamStyles.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import mec1 from '../../assets/images/mec1.png';
import mec2 from '../../assets/images/mec2.png';
import mec3 from '../../assets/images/mec3.png';
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
            <img src={mec1} alt="Fabiano" className="article-img" />
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
              Florent
            </h2>
          </div>
          <div className="team-preview-image">
            <img src={mec2} alt="Fabiano" className="article-img" />
          </div>
          <nav className="team-social-links">
            <a className="linkdin" href="https://www.linkedin.com/in/florentbreux/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a className="mail" href="mailto: breux.florent@gmail.com" target="_blank" rel="noreferrer"><MailIcon /></a>
            <a className="github" href="https://github.com/FlorentZz" target="_blank" rel="noreferrer"><GitHubIcon /></a>
          </nav>
          <div className="team-preview-text">
            <p>
              I am a junior Web Developer, interested in learning Blockchain Development.
              <br />
              I'm based in Paris, FRANCE - willing to move anywhere.
              <br />
              I'm learning React - Next.js - Typescript.
              <br />
              I'm open to collaborating on any project.
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
            <img src={mec3} alt="Fabiano" className="article-img" />
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
            <img src={mec4} alt="Fabiano" className="article-img" />
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
            <img src={mec5} alt="Fabiano" className="article-img" />
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
