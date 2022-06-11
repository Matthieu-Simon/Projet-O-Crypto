import React from 'react';

import './homePageStyles.scss';
import Footer from './Footer/footer';
import Main from './Main/main';

function homePage() {
  return (
    <div className="App-homePage">
      <Main />
      <Footer />
    </div>
  );
}

export default React.memo(homePage);
