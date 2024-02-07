import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './HomePage.js'; // Your existing page
import BuildingAccess from './BuildingAccess.js'
import AboutUs from './components/AboutUs.js';
import VotingComponent from './VotingComponent.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/access" element={<BuildingAccess />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/voting" element={<VotingComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;