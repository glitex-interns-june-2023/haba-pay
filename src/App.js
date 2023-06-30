import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import AdminAccount from './pages/AdminAccount';
import VerifyEmail from './pages/VerifyEmail';
import VerifyNumber from './pages/VerifyNumber'
import Abort from './pages/Abort';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/adminaccount" element={<AdminAccount />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/verifynumber" element={<VerifyNumber />} />
        <Route path="/abort" element={<Abort />} />
      </Routes>
    </Router>
  );
};

export default App;
