import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './HomePage.js'; // Your existing page
import BuildingAccess from './BuildingAccess.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/access" element={<BuildingAccess />} />
      </Routes>
    </Router>
  );
}

export default App;