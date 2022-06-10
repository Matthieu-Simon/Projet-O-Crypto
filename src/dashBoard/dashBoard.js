import React from 'react';
import PropTypes from 'prop-types';
import './dashBoardStyles.scss';
import Footer from '../components/homePage/footer/footer';
function dashBoard(){
   return (
    <div className="App-dashBoard">
        <div className="App-dashBoard-header">
            <div className="App-dashBoard-header-title">
                <h1 className="App-dashBoard-header-title-text">DashBoard</h1>
            </div>
            <div className="App-dashBoard-header-search">
            </div>
        </div>
        <div className="App-dashBoard-main">
            <div className="App-dashBoard-main-left">
                <div className="App-dashBoard-main-left-title">
                    <h2 className="App-dashBoard-main-left-title-text">
                        Cours des Cryptomonnaies
                    </h2>
                </div>
            </div>
        </div>
         <Footer />
    </div>
   
   );
};

export default React.memo(dashBoard);
