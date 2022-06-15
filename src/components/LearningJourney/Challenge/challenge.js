import React from 'react';
import Menu from '../Menu/menu';
import ChangeBar from '../ChangeBar/changeBar';
import './challengeStyles.scss';

function Challenge() {
  return (
    <main className="main-cours">
      <Menu />
      <div className="cours">
        <div className="title-cours">
          <h5>Question 1 sur 10</h5>
        </div>
        <div>
          <p className="question">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dicta porro obcaecati saepe ratione eligendi reprehenderit,
            eius voluptatem sint expedita.
          </p>
          <div className="answer-container">
            <input className="input-answer" type="radio" />
            <p>Lorem Ipsum dolor sit amet, consectetuer adipiscing elt,nonummy nibh eulsmod</p>
          </div>
          <div className="answer-container">
            <input className="input-answer" type="radio" />
            <p>Lorem Ipsum dolor sit amet, consectetuer adipiscing elt,nonummy nibh eulsmod</p>
          </div>
          <div className="answer-container">
            <input className="input-answer" type="radio" />
            <p>Lorem Ipsum dolor sit amet, consectetuer adipiscing elt,nonummy nibh eulsmod</p>
          </div>
          <div className="answer-container">
            <input className="input-answer" type="radio" />
            <p>Lorem Ipsum dolor sit amet, consectetuer adipiscing elt,nonummy nibh eulsmod</p>
          </div>
        </div>
      </div>
      <ChangeBar />
    </main>
  );
}

export default React.memo(Challenge);
