import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './Pages/SplashScreen';
import Login from './Auth/Login';
import ResetPassword from './Auth/ResetPassword';
import CreateAccount from './Pages/CreateAccount';
import VerifyEmail from './Pages/VerifyEmail';
import VerifyNumber from './Pages/VerifyNumber';
import AppPin from './Pages/AppPin';
import Abort from './Pages/Abort';
import EditAccount from './Pages/EditAccount';
import SuspendAccount from './Pages/SuspendAccount';
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verify-number" element={<VerifyNumber />} />
        <Route path="/apppin" element={<AppPin />} />
        <Route path="/abort" element={<Abort />} />
        <Route path="/edit-account" element={<EditAccount />} />
        <Route path="/suspend-account" element={<SuspendAccount />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
