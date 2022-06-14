import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import HomePage from '../homePage/homePage';
import DashBoard from '../DashBoard/dashBoard';
import CoinPage from '../DashBoard/CoinPage/coinPage';
import LoginForm from '../LoginForm/loginForm';
import LearningJourney from '../LearningJourney/learningJourney';
import FAQ from '../FAQ/FAQ';
import Cours from '../LearningJourney/Cours/cours';
/* import Articles from '../Articles/articles';
import Article from '../Articles/Article/article';
import Lexicon from '../Lexicon/lexicon';
import About from '../About/about';
import OurTeam from '../OurTeam/ourTeam';
import Profil from '../Profil/profil';
import Update from '../Profil/Update/update';
import Challenge from '../LearningJourney/Challenge/challenge'; */

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/log-in" element={<LoginForm />} />
        <Route path="/learning" element={<LearningJourney />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/Cours" element={<Cours />} />

        {/* <Route path="/learning/challenge/:id" element={<Challenge />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/lexicon" element={<Lexicon />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/profile/update" element={<Update />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
