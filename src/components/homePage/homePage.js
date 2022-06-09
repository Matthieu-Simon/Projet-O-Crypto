import React from 'react';
import PropTypes from 'prop-types';

import Header from './header/header';
import './homePageStyles.scss';
import Footer from './footer/footer';
import Main from './main/main';

function homePage(){
   return (
    <div className="App-homePage">
        <Header />
        <Main />
        <Footer />
    </div>
   );
};

export default React.memo(homePage);
