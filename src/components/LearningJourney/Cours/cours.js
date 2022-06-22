import React, { useState, useEffect } from 'react';
import Menu from '../Menu/menu';
// import ChangeBar from '../ChangeBar/changeBar';
import heroku from '../../../config/api/heroku';
import './coursStyles.scss';

function Cours() {
  const [challenge, setChallenge] = useState([]);

  const fetchChallenge = async () => {
    const { data } = await heroku.get('/challenge/Blockchain');
    setChallenge(data);
    console.log(data);
  };

  useEffect(() => {
    fetchChallenge();
  }, []);

  return (
    <main className="main-cours">
      <Menu />
      <div className="homepage-cours">
        <div className="title-cours">
          <h5>{challenge.name}</h5>
        </div>
        <p className="lesson">
          {challenge.abstract}
        </p>
      </div>
      {/* <ChangeBar /> */}
    </main>
  );
}

export default React.memo(Cours);
