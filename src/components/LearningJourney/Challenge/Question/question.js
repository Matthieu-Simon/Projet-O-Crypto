/* eslint-disable max-len */
/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import heroku from '../../../../config/api/heroku';
import Menu from '../../Menu/menu';
import authService from '../../../LoginForm/auth.service';

import './questionStyles.scss';

function Question() {
  const [question, setQuestion] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [idQuestion, setIdQuestion] = useState(1);
  const [idAnswer, setIdAnswer] = useState();
  const [message, setMessage] = useState('');
  const [isEnd, setIsEnd] = useState(false);
  const [goodAnswer, setGoodAnswer] = useState(0);

  const [color, setColor] = useState('green', 'red');

  const user = authService.getCurrentUser();

  const fetchQuestions = async () => {
    setLoading(true);
    const { data } = await heroku.get('/questions');
    setQuestions(data);
    setLoading(false);
  };

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
    fetchQuestions();
  }, [idQuestion]);

  const handleClick = () => {
    for (let i = 1; i < questions.length + 1; i++) {
      if (i === idQuestion) {
        setLoading(true);
        setIdQuestion(i + 1);
        setLoading(false);
        if (i === 10) {
          setIsEnd(true);
        }
        console.log(i);
      }
    }
    fetchAnswers();
    fetchQuestion();
    setMessage('');
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    heroku.post(`/answer/checking/${user.user.id}/${idQuestion}`, {
      idAnswer,
    }).then((res) => {
      console.log(res);
      if (res.data === true) {
        setMessage('Bravo, vous avez répondu correctement');
        setColor('green');
        setGoodAnswer(goodAnswer + 1);
      }
      else {
        setMessage('Désolé, vous avez répondu faux');
        setColor('red');
      }
    }).catch((err) => {
      console.log(err);
    });
  };
  console.log(idQuestion);
  console.log(isEnd);
  return (
    <main className="main-cours">
      {loading ? (<div className="loading">Loading...</div>) : (
        <>
          <Menu />
          <div className="main-challenge">
            {isEnd && (
            <div className="end-challenge">
              <h1 className="challenge-score">Vous avez terminé le challenge, votre score est de {goodAnswer} sur 10 bonnes réponses possible</h1>
            </div>
            )}
            {!isEnd && (
            <>
              <div className="title-question">
                <h5 className="title-question">Question</h5>
              </div>
              <div>
                <p className="question">
                  {question.description}
                </p>
                <form className="form-answers" onSubmit={handleSubmitAnswer}>
                  <ul className="answers">
                    <label className="answer-choice" htmlFor="profilePhoto">
                      <input type="submit" className="answers-description" onClick={() => setIdAnswer(answers[0])} value={answers[0]?.description} />
                      <input type="submit" className="answers-description" onClick={() => setIdAnswer(answers[1])} value={answers[1]?.description} />
                      <input type="submit" className="answers-description" onClick={() => setIdAnswer(answers[2])} value={answers[2]?.description} />
                      <input type="submit" className="answers-description" onClick={() => setIdAnswer(answers[3])} value={answers[3]?.description} />
                      <p className="answer-message" style={{ color, padding: '10px' }}>{message}</p>
                    </label>
                  </ul>
                  <div className="button-container">
                    <p className="button-container-text"> Question {idQuestion}/{questions.length}</p>
                    {/* <ArrowBackIcon className="btn-response" type="button" onClick={handleClick}>Précedent</ArrowBackIcon> */}
                    <ArrowForwardIcon className="btn-response" type="button" onClick={handleClick} />
                  </div>
                </form>
              </div>
            </>
            )}
          </div>
        </>
      )}
    </main>
  );
}

export default React.memo(Question);
