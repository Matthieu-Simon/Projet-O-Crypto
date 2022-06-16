/* eslint-disable max-len */
import React from 'react';
import './lexiconStyles.scss';
// import axios from 'axios';

function lexicon() {
  // const [words, setWords] = useState('');
  // const fetchLexicon = async () => {
  //   const { data } = await axios.get('https://ocrypto-backend.herokuapp.com/lexicon');
  //   setWords(data);
  // };

  return (
    <div id="parent">
      <header>
        <h1>Lexique</h1>
      </header>
      <div className="lefttop">
        <br />
        <a href="#a">A</a>
        <a href="#b">B</a>
        <a href="#c">C</a>
        <a href="#d">D</a>
        <a href="#e">E</a>
        <a href="#f">F</a>
        <a href="#g">G</a>
        <a href="#h">H</a>
        <a href="#i">I</a>
        <a href="#j">J</a>
        <a href="#k">K</a>
        <a href="#l">L</a>
        <a href="#m">M</a>
        <a href="#n">N</a>
        <a href="#o">O</a>
        <a href="#p">P</a>
        <a href="#q">Q</a>
        <a href="#r">R</a>
        <a href="#s">S</a>
        <a href="#t">T</a>
        <a href="#u">U</a>
        <a href="#v">V</a>
        <a href="#w">W</a>
        <a href="#x">X</a>
        <a href="#y">Y</a>
        <a href="#z">Z</a>
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
