/* eslint-disable jsx-a11y/label-has-associated-control */
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
            <input className="input-answer" type="radio" id="answer1" name="answer" value="1" />
            <label htmlFor="answer1" />
            <p>Lorem</p>
          </div>
          <div className="answer-container">
            <input className="input-answer" type="radio" id="answer2" name="answer" value="2" />
            <label htmlFor="answer2" />
            <p>Lorem Ipsum dolor sit amet, consectetuer adipiscing elt,nonummy nibh eulsmod</p>
          </div>
          <div className="answer-container">
            <input className="input-answer" type="radio" id="answer3" name="answer" value="3" />
            <label htmlFor="answer1" />
            <p>Lorem Ipsum dolor sit amet, consectetuer adipiscing elt,nonummy nibh eulsmod</p>
          </div>
          <div className="answer-container">
            <input className="input-answer" type="radio" id="answer4" name="answer" value="4" />
            <label htmlFor="answer1" />
            <p>Lorem Ipsum dolor sit amet, consectetuer adipiscing elt,nonummy nibh eulsmod</p>
          </div>
        </div>
      </div>
      <ChangeBar />
    </main>
  );
}

export default React.memo(Challenge);
