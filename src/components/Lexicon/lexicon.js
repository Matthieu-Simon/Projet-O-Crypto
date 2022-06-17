/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import './lexiconStyles.scss';
import axios from 'axios';

function lexicon() {
  const [words, setWords] = useState([]);
  const fetchLexicon = async () => {
    const { data } = await axios.get('https://ocrypto-backend.herokuapp.com/lexicon');
    setWords(data);
  };
  useEffect(() => {
    fetchLexicon();
  }, []);

  console.log(words);

  return (
    <div id="parent">
      <header>
        <h1 className="titleh1">Lexique</h1>
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

      <div className="divAll">
        {words.map((word) => (
          <>
            <div key={word.created_at} className="divletter">
              <p>
                <a name="a">
                  <b className="lettersolo">{word.letter}</b>
                </a>
              </p>
            </div><a className="descriptionLetter">
              <h2 className="titleDescription">{word.name}</h2>
              <div className="descriptionNude">
                {word.abstract}
              </div>
            </a>
            <hr className="SB" />
          </>
        ))}
      </div>

    </div>

  );
}

export default React.memo(lexicon);
