/* eslint-disable react/jsx-no-constructed-context-values */
import './App.scss';
import { createContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import authService from '../LoginForm/auth.service';

import Header from '../header/header';
import Footer from '../footer/footer';
import HomePage from '../homePage/homePage';
import DashBoard from '../DashBoard/dashBoard';
import CoinPage from '../DashBoard/CoinPage/coinPage';
import LoginForm from '../LoginForm/loginForm';
import LearningJourney from '../LearningJourney/learningJourney';
import Challenge from '../LearningJourney/Challenge/challenge';
import Cours from '../LearningJourney/Cours/cours';
import FAQ from '../FAQ/FAQ';
import Profil from '../Profil/profil';
import Articles from '../Articles/articles';
import Article from '../Articles/Article/article';
import Lexicon from '../Lexicon/lexicon';
import About from '../About/about';
import OurTeam from '../OurTeam/ourTeam';
import PageNotFound from '../404/PageNotFound';

export const Themecontext = createContext(null);

function App() {
  const isLogged = authService.getCurrentUser();
  const [theme, setTheme] = useState('light');

  const toogleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <Themecontext.Provider value={{ theme, toogleTheme }}>
      <div className="App" id={theme}>
        <Header />
        <div className="switch-container">
          <label> {theme === 'light' ? 'Mode Clair' : 'Mode Sombre'}</label>
          <ReactSwitch onChange={toogleTheme} checked={theme === 'dark'} offColor="#424C7C" onColor="#FFFFFF" onHandleColor="#424C7C" />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {isLogged && (<Route path="/profile" element={<Profil />} />)}
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/log-in" element={<LoginForm />} />
          <Route path="/learning" element={<LearningJourney />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/Cours" element={<Cours />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="challenge" element={<Challenge />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:name" element={<Article />} />
          <Route path="/lexicon" element={<Lexicon />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Themecontext.Provider>
  );
}
export default App;
