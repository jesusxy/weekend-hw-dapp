import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home';
import Results from './pages/Results';
import Vote from './pages/Vote';
import Delegate from './pages/Delegate';

import './App.scss';

function App() {
  return (
    <Router>
      <Fragment>
        <nav className="App__navbar">
          <ul className='App__navbar__links'>
            <div className="App__navbar__menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/vote">Vote</Link>
              </li>
              <li>
                <Link to="/results">Results</Link>
              </li>
              <li>
                <Link to="/delegate">Delegate</Link>
              </li>
            </div>
          </ul>
        </nav>
        
        <div className={"App"}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/results" element={<Results />} />
            <Route path="/delegate" element={<Delegate />} />
          </Routes>

        </div>
      </Fragment>
    </Router>
  );
}

export default App;
