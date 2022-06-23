import React, { useState, useEffect } from 'react';
import Menu from '../Menu/menu';
// import ChangeBar from '../ChangeBar/changeBar';
import heroku from '../../../config/api/heroku';
import './coursStyles.scss';

function Cours() {
  const [lesson, setLesson] = useState([]);

  const fetchLesson = async () => {
    const { data } = await heroku.get('/challenge/Blockchain');
    setLesson(data);
    // console.log(data);

    const myLesson = [];
    myLesson.push(data.abstract);
    // console.log(myLesson);
    const text = myLesson.slice(0, 5);
    console.log(text[0].slice(0, 806));
  };

  useEffect(() => {
    fetchLesson();
  }, []);

  return (
    <main className="main-cours">
      <Menu />
      <div className="homepage-cours">
        <div className="title-cours">
          <h5>{lesson.name}</h5>
        </div>
        <p className="lesson">
          {lesson.abstract}
        </p>
      </div>
      {/* <ChangeBar /> */}
    </main>
  );
}

export default React.memo(Cours);
