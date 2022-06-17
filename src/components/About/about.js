import React from 'react';
import './about.scss';
import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';

function About() {
  return (
    <div className="title">
      <h1 className="about">A propos de nous</h1>

      <div className="container1">

        <div className="text1">
          <h3 className="about-title">Notre origine</h3>
          <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est, eget rhoncus nibh
            metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>

        <div className="image1">
          <img src={team1} alt="team1" className="team1" />
        </div>

      </div>

      <div className="container2">
        <div className="image2">
          <img src={team2} alt="team2" className="team2" />
        </div>
        <div className="text2">
          <h3 className="about-title">Notre mission</h3>
          <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est, eget rhoncus nibh
            metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
    </div>

  );
}

export default React.memo(About);
