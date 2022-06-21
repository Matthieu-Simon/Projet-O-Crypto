/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import './lexiconStyles.scss';
import axios from 'axios';

function lexicon() {
  const [words, setWords] = useState([]);
  const [search, setSearch] = useState('');
  const [slice, setSlice] = useState(10);
  const fetchLexicon = async () => {
    const { data } = await axios.get('https://ocrypto-backend.herokuapp.com/lexicon');
    setWords(data);
  };
  useEffect(() => {
    fetchLexicon();
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredWords = words.filter((word) => word.name.toLowerCase().includes(search.toLowerCase()));

  const moreResult = () => {
    setSlice(slice + 10);
  };
  return (
    <div className="lexicon-container">
      <header>
        <h1 className="lexicon-title">Lexique</h1>
      </header>
      <div className="lexicon-search">
        <form>
          <input type="text" className="articles-input" placeholder="Rechercher un terme" onChange={handleChange} />
        </form>
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
            </div>
            <a className="descriptionLetter">
              <h2 className="titleDescription">{word.name}</h2>
              <div className="descriptionNude">
                {word.abstract}
              </div>
            </a>
            <hr className="SB" />
          </div>
        ))}
      </div>
      <div className="lexicon-more">
        <button type="button" className="more-words" onClick={moreResult}>Plus de résultats</button>
      </div>
    </div>

  );
}

export default React.memo(lexicon);
