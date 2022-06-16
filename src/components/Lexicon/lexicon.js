/* eslint-disable max-len */
import React from 'react';
import './lexiconStyles.scss';

function lexicon() {
  return (
    <div id="parent">
      <header>
        <h1>Lexique</h1>
      </header>
      <div className="lefttop">
        <br />
        <a href="#a">A</a>&nbsp;&nbsp;
        <a href="#b">B</a>&nbsp;&nbsp;
        <a href="#c">C</a>&nbsp;&nbsp;
        <a href="#d">D</a>&nbsp;&nbsp;
        <a href="#e">E</a>&nbsp;&nbsp;
        <a href="#f">F</a>&nbsp;&nbsp;
        <a href="#g">G</a>&nbsp;&nbsp;
        <a href="#h">H</a>&nbsp;&nbsp;
        <a href="#i">I</a>&nbsp;&nbsp;
        <a href="#j">J</a>&nbsp;&nbsp;
        <a href="#k">K</a>&nbsp;&nbsp;
        <a href="#l">L</a>&nbsp;&nbsp;
        <a href="#m">M</a>&nbsp;&nbsp;
        <a href="#n">N</a>&nbsp;&nbsp;
        <a href="#o">O</a>&nbsp;&nbsp;
        <a href="#p">P</a>&nbsp;&nbsp;
        <a href="#q">Q</a>&nbsp;&nbsp;
        <a href="#r">R</a>&nbsp;&nbsp;
        <a href="#s">S</a>&nbsp;&nbsp;
        <a href="#t">T</a>&nbsp;&nbsp;
        <a href="#u">U</a>&nbsp;&nbsp;
        <a href="#v">V</a>&nbsp;&nbsp;
        <a href="#w">W</a>&nbsp;&nbsp;
        <a href="#x">X</a>&nbsp;&nbsp;
        <a href="#y">Y</a>&nbsp;&nbsp;
        <a href="#z">Z</a>&nbsp;&nbsp;
      </div>

      <div className="divAll-A">
        <div className="divletter-A">
          <p>
            <a name="a">
              <b className="lettersolo">A</b>
            </a>
          </p>
        </div>
        <a className="descriptionLetter-A">
          <h2 className="titleDescription">Alorem</h2>
          <div className="descriptionNude">
            "Alorem ipsum ipsum ipsum"
          </div>
          <h2 className="titleDescription-A-2">Avirticon</h2>
          <div className="descriptionNude2">
            "Ascop ipsum ipsum ipsum"
          </div>
        </a>
      </div>

      <hr className="horizontal" />

      <div className="divAll-B">
        <div className="divletter-B">
          <p>
            <a name="b">
              <b className="lettersolo-B">B</b>
            </a>
          </p>
        </div>
        <a className="descriptionLetter-B">
          <h2 className="titleDescription">Bloberibon</h2>
          <div className="descriptionNude">
            "Blorem ipsum ipsum ipsum"
          </div>
          <h2 className="titleDescription-B-2">Biscoterum</h2>
          <div className="descriptionNude2">
            "Bscop ipsum ipsum ipsum"
          </div>
        </a>
      </div>

      <hr className="horizontal" />

      <div className="divAll-C">
        <div className="divletter-C">
          <p>
            <a name="c">
              <b className="lettersolo-C">C</b>
            </a>
          </p>
        </div>
        <a className="descriptionLetter-C">
          <h2 className="titleDescription">Castorium</h2>
          <div className="descriptionNude">
            "Clorem ipsum ipsum ipsum"
          </div>
          <h2 className="titleDescription-C-2">Conespiton</h2>
          <div className="descriptionNude2">
            "Cscop ipsum ipsum ipsum"
          </div>
        </a>
      </div>

    </div>

  );
}

export default React.memo(lexicon);
