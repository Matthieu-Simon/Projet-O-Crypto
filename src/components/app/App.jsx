import './App.scss';
import { Routes, Route } from 'react-router-dom';

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
// import Lexicon from '../Lexicon/lexicon';
import About from '../About/about';
import OurTeam from '../OurTeam/ourTeam';
import PageNotFound from '../404/PageNotFound';

function App() {
  const isLogged = localStorage.getItem('isLogged');
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {isLogged && <Route path="/profile" element={<Profil />} />}
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/log-in" element={<LoginForm />} />
        <Route path="/learning" element={<LearningJourney />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/Cours" element={<Cours />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="challenge" element={<Challenge />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:name" element={<Article />} />
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/lexicon" element={<Lexicon />} /> */}

      </Routes>
      <Footer />
    </div>
  );
}
export default App;
