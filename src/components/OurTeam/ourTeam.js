/* eslint-disable max-len */
import React from 'react';
import './ourTeamStyles.scss';
import mec1 from '../../assets/mec1.png';
import mec2 from '../../assets/mec2.png';
import mec3 from '../../assets/mec3.png';
import mec4 from '../../assets/mec4.png';
import mec5 from '../../assets/mec5.png';

function ourTeam() {
  return (
    <div className="title">
      <h1>La crypto team</h1>
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
            <img src={mec3} alt="Fabiano" className="article-img" />
          </div>
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
            <img src={mec4} alt="Fabiano" className="article-img" />
          </div>
          <div className="team-preview-text">
            <p>

              La première cryptomonnaies largement adoptée dans le monde. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
            <img src={mec5} alt="Fabiano" className="article-img" />
          </div>
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
