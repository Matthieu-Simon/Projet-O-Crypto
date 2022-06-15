import React from 'react';
import './challengeStyles.scss';

function Challenge() {
  return (
    <main className="main-cours">
      <header className="head-menu">
        <div>
          <button className="btn-menu" type="submit">Quitter le cours</button>
          <button className="btn-menu" type="submit">Menu</button>
        </div>
        <div>
          <h3>Expert trader - niveau 3 (2022)</h3>
        </div>
        <div>
          <div>Progress Bar 75%</div>
        </div>
      </header>
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
      <footer className="footer-container">
        <div className="btn-footer">
          <button className="btn-cours" type="submit">Retour</button>
          <p className="numberPage">13/17</p>
          <button className="btn-cours" type="submit">Suivant</button>
        </div>
      </footer>
    </main>
  );
}

export default React.memo(Challenge);
