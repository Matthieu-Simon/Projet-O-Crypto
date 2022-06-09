import React from 'react';
import PropTypes from 'prop-types';
import './mainStyles.scss'; 
import btclogo from '../../../assets/btc.png';
import dashboardlogo from '../../../assets/Dashboard.png';

function main(){
   return (
    <main className="App-main">
        <div className="App-main-content">
            <div className="App-main-header">
                <h1 className="App-main-title">
                C'est quoi les cryptomonnaies ?
                </h1>
                <p className="App-main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
            </div>
            <div className="App-articles">
            <div className="App-article-preview">
                <div className="App-article-preview-title">
                    <h2 className="App-article-preview-title-text">
                        Bitcoin
                    </h2>
                    </div>
                <div className="App-article-preview-image">
                        <img src={btclogo} alt="bitcoin" className="article-img" />
                    </div>
                <div className="App-article-preview-text">
                    <p>
                    La première cryptomonnaies largement adoptée dans le monde. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                 </div>
            </div>
            <div className="App-article-preview">
                <div className="App-article-preview-title">
                    <h2 className="App-article-preview-title-text">
                        Bitcoin
                    </h2>
                    </div>
                <div className="App-article-preview-image">
                        <img src={btclogo} className="article-img" alt="bitcoin" />
                    </div>
                <div className="App-article-preview-text">
                    <p>
                    La première cryptomonnaies largement adoptée dans le monde. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                 </div>
            </div>
            <div className="App-article-preview">
                <div className="App-article-preview-title">
                    <h2 className="App-article-preview-title-text">
                        Bitcoin
                    </h2>
                    </div>
                <div className="App-article-preview-image">
                        <img src={btclogo} className="article-img" alt="bitcoin" />
                    </div>
                <div className="App-article-preview-text">
                    <p>
                        La première cryptomonnaies largement adoptée dans le monde. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                    </p>
                 </div>
            </div>
            </div>
            <div className="App-more-articles">
            <button className="button-more-articles">
                Plus d'articles...
            </button>
            </div>
            <div className="App-learning-preview">
                    <h2 className='App-learning-preview-title'>
                        Devenez un expert en rejoignant notre parcours d'apprentissage !
                    </h2>
                    <button className="button-signin">
                        S'inscrire ici !
                    </button>
            </div>
            <div className="App-dashboard-preview">
                <div className="App-dashboard-preview-title">
                    <h2 className="App-dashboard-preview-title-text">
                        Suivez le cours de vos cryptos préférées !
                    </h2>
                </div>
                <div className="App-dashboard-preview-image">
                    <img src={dashboardlogo} className="dashboard-img" alt="bitcoin" />
                </div>
            </div>
        </div>
    </main>
   );
};

export default React.memo(main);
