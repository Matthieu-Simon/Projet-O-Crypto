import React, { useState, useEffect } from 'react';
import Menu from '../Menu/menu';
// import ChangeBar from '../ChangeBar/changeBar';
import heroku from '../../../config/api/heroku';
import './coursStyles.scss';

function Cours() {
  const [lesson, setLesson] = useState([]);
  const [firstSlice, setFirstSlice] = useState(0);
  const [slice, setSlice] = useState(807);
  // const [disable, setDisable] = useState(false);

  const fetchLesson = async () => {
    const { data } = await heroku.get('/challenge/Blockchain');
    setLesson(data?.abstract?.slice(firstSlice, slice));
    // console.log(data);
  };

  useEffect(() => {
    fetchLesson();
  }, [firstSlice, slice]);

  const moreText = () => {
    setFirstSlice(firstSlice + 1000);
    setSlice(slice + 1000);
    fetchLesson([]);
  };

  const lessText = () => {
    setFirstSlice(firstSlice - 1000);
    setSlice(slice - 1000);
    // setDisable(false);
    fetchLesson([]);
  };

  /* console.log(slice);
  console.log(lesson); */

  return (
    <main className="main-cours-lesson">
      <Menu />
      <div className="homepage-cours">
        <div className="title-cours">
          <h5>Blockchain</h5>
        </div>
        <p className="lesson">
          {lesson.slice(firstSlice, slice)}...
        </p>
        <div className="footer-cours-lesson">
          <button className="btn-cours" type="button" onClick={lessText}>Retour</button>
          <button className="btn-cours" type="button" onClick={moreText}>Suivant</button>
        </div>
      </div>
      {/* <ChangeBar /> */}
    </main>
  );
}

export default React.memo(Cours);
