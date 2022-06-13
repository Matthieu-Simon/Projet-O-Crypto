import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Header from '../HomePage/Header/header';
import HomePage from '../HomePage/homePage';
import DashBoard from '../DashBoard/dashBoard';
import CoinPage from '../DashBoard/CoinPage/coinPage';
import LoginForm from '../LoginForm/loginForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/log-in" element={<LoginForm />} />
      </Routes>
    </div>
  );
}
export default App;
