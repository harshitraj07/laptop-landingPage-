// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../src/screens/landingPage'; // Adjust path as needed

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Add more routes here if needed */}
    </Routes>
  );
};

export default App;
