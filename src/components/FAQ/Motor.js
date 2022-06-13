import React from 'react';
import PropTypes from 'prop-types';
import './FAQ.scss';

function Motor({ faq, index, toggleFAQ }) {
  return (
    <div
      className={`faq ${faq.open ? 'open' : ''}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.question}
      </div>
      <div className="faq-answer">
        {faq.answer}
      </div>
    </div>
  );
}
Motor.propTypes = {

  faq: PropTypes.string,
  index: PropTypes.string,
  toggleFAQ: PropTypes.func

};

export default React.memo(Motor);
