import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Header from '../homePage/header/header';
import HomePage from '../homePage/homePage';
import DashBoard from '../DashBoard/dashBoard';
import CoinPage from '../DashBoard/CoinPage/coinPage';
import LoginForm from '../LoginForm/loginForm';
import Card from '../LearningJourney/learningJourney';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/log-in" element={<LoginForm />} />
        <Route path="/learning" element={<Card />} />
      </Routes>
    </div>
  );
}
export default App;
