/* eslint-disable max-len */
/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import heroku from '../../../../config/api/heroku';
import Menu from '../../Menu/menu';
import authService from '../../../LoginForm/auth.service';

import './questionStyles.scss';

function Question() {
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [idQuestion, setIdQuestion] = useState(1);
  const [idAnswer, setIdAnswer] = useState();

  const user = authService.getCurrentUser();

  const fetchQuestion = async () => {
    setLoading(true);
    const { data } = await heroku.get(`/question/${idQuestion}`);
    setQuestion(data);
    setLoading(false);
  };

  const fetchAnswers = async () => {
    setLoading(true);
    const { data } = await heroku.get(`/answers/${idQuestion}`);
    setAnswers(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchQuestion();
    fetchAnswers();
  }, [idQuestion]);

  const handleClick = () => {
    setIdQuestion(idQuestion + 1);
    fetchAnswers();
    fetchQuestion();
  };

  const handleSumbitAnswer = (e) => {
    e.preventDefault();
    heroku.post(`/answer/checking/${user.id}/${idQuestion}`, {
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  };

  console.log(idQuestion);
  console.log(answers);
  console.log(idAnswer);
  return (
    <main className="main-cours">
      {loading ? (<div className="loading">Loading...</div>) : (
        <>
          <Menu />
          <div className="main-challenge">
            <div className="title-question">
              <h5 className="title-question">Question</h5>
            </div>
            <div>
              <p className="question">
                {question.description}
              </p>
              <form className="form-answers" onSubmit={handleSumbitAnswer}>
                <ul className="answers">
                  <div className="answer-container">
                    <li onClick={(e) => setIdAnswer(e.target)}>{answers[0]?.description}</li>
                  </div>
                  <div className="answer-container">
                    <li onClick={(e) => setIdAnswer(e.target)}>{answers[1]?.description}</li>
                  </div>
                  <div className="answer-container">
                    <li onClick={(e) => setIdAnswer(e.target)}>{answers[2]?.description}</li>
                  </div>
                  <div className="answer-container">
                    <li onClick={(e) => setIdAnswer(e.target)}>{answers[3]?.description}</li>
                  </div>
                </ul>
              </form>
            </div>
            <div className="button-container">
              <ArrowBackIcon className="btn-response" type="button" onClick={handleClick}>Précedent</ArrowBackIcon>
              <ArrowForwardIcon className="btn-response" type="button" onClick={handleClick}>Suivant</ArrowForwardIcon>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default React.memo(Question);
