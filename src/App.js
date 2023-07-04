import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import CreateAccount from './pages/CreateAccount';
import VerifyEmail from './pages/VerifyEmail';
import VerifyNumber from './pages/VerifyNumber';
import AppPin from './pages/AppPin';
import Abort from './pages/Abort';
import EditAccount from './pages/EditAccount';
import SuspendAccount from './pages/SuspendAccount'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/verifynumber" element={<VerifyNumber />} />
        <Route path="/apppin" element={<AppPin />} />
        <Route path="/abort" element={<Abort />} />
        <Route path="/editaccount" element={<EditAccount />} />
        <Route path="/suspendaccount" element={<SuspendAccount />} />
      </Routes>
    </Router>
  );
};

export default App;
