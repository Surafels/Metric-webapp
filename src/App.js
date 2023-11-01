import { Routes, Route } from 'react-router-dom';
import './App.css';
import Companies from './components/Companies';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Companies" element={Companies} />
        {/* <Route path="/" element ={} />
        <Route patgh="/" element = {} /> */}

      </Routes>
      <div><Header /></div>
    </div>
  );
}

export default App;
