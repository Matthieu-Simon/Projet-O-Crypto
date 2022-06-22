/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import heroku from '../../../config/api/heroku';
import Menu from '../Menu/menu';
import ChangeBar from '../ChangeBar/changeBar';
import './challengeStyles.scss';

function Challenge() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [question, setQuestions] = useState([]);
  /* const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState([]); */

  const fetchQuestion = async () => {
    const { data } = await heroku.get(`/question/${id}`);
    setQuestions(data);
  };
  /* const fetchAnswers = async () => {
    const { data } = await heroku.get(`/answers/${id}`);
    setAnswers(data);
  };
  const fetchAnswer = async () => {
    const { data } = await heroku.get(`/answer/${id}`);
    setAnswer(data);
  }; */

  useEffect(() => {
    fetchQuestion();
  }, []);

  /* useEffect(() => {
    fetchAnswers();
  }, []);

  useEffect(() => {
    fetchAnswer();
  }, []); */

  const handleChange = (e) => {
    setQuestions(e.target.value);
    /* setAnswers(e.target.value);
    setAnswer(e.target.value); */
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="main-cours">
      <Menu />
      <div key={id} onClick={() => navigate(`/question/${id}`)} className="main-challenge">
        <div className="title-cours">
          <h5>Question</h5>
        </div>
        <div>
          <p key={question.id} onChange={handleChange} className="question">
            {question.description}
          </p>
          <div className="answer-container">
            <input className="input-answer" type="radio" id="answer1" name="answer" value="1" onChange={handleChange} />
            <label htmlFor="answer1" />
            <p>{question.id}</p>
          </div>
          <div className="answer-container">
            <input className="input-answer" type="radio" id="answer2" name="answer" value="2" onChange={handleChange} />
            <label htmlFor="answer2" />
            <p>{question.id}</p>
          </div>
          <div className="answer-container">
            <input className="input-answer" type="radio" id="answer3" name="answer" value="3" onChange={handleChange} />
            <label htmlFor="answer1" />
            <p>{question.id}</p>
          </div>
          <div className="answer-container">
            <input className="input-answer" type="radio" id="answer4" name="answer" value="4" onChange={handleChange} />
            <label htmlFor="answer1" />
            <p>{question.id}</p>
          </div>
        </div>
        <button className="btn-response" type="submit" onClick={handleSubmit}>Suivant</button>
      </div>
      <ChangeBar />
    </main>
  );
}

export default React.memo(Challenge);
