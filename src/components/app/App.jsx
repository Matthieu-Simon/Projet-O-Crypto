import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../homePage/header/header';
import HomePage from '../homePage/homePage';
import DashBoard from '../../dashBoard/dashBoard';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );  
}
export default App;
