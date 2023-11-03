import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Companies from './components/Companies';
import CompanyDetails from './components/CompanyDetail';
// import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Companies />} />
        <Route path="/details/:symbol" element={<CompanyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
