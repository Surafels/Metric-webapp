import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Companies from './components/Companies';
import CompanyDetails from './components/CompanyDetail';
import CompanyNotFound from './components/CompanyNotfound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Companies />} />
        <Route path="/details/:symbol" element={<CompanyDetails />} />
        <Route path="*" element={<CompanyNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
