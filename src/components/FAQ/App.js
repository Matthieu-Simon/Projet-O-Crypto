import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';

function App () {

  const [faqs, setfaqs] = useState([
    {
      question: 'La formation est payante?',
      answer: 'Non. Tout est gratuit.',
      open: true
    },
    {
      question: `J'ai besoin de conaître le monde des finances?`,
      answer: 'Non. Vous êtes là pour aprendre la technologie derrière les cryptomonnaies.',
      open: false
    },
    {
      question: 'Mes données personnelles sont elles enregistrées?',
      answer: 'Vous ne rentrez aucune donnée personnelle a part votre mail. En plus on vous conseille de créer un nouveau pour ce but.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i}  toggleFAQ={ toggleFAQ }/>
        ))}
      </div>
    </div>
  );






 
}

export default App;