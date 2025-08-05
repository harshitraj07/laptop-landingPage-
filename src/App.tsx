// App.tsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../src/screens/landingPage/landingPage'; // Adjust path as needed
import Signup from '../src/screens/signUp/Signup';
import LoginPage from './screens/loginPage/LoginPage';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signUp" element={<Signup />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Add more routes here if needed */}
    </Routes>
  );
};

export default App;
