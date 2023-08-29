import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Login from './Auth/Login';
import ResetPassword from './Auth/ResetPassword';
import CreateAccount from './pages/CreateAccount';
import VerifyEmail from './pages/VerifyEmail';
import VerifyNumber from './pages/VerifyNumber';
import AppPin from './pages/AppPin';
import Abort from './pages/Abort';
import EditAccount from './pages/EditAccount';
import SuspendAccount from './pages/SuspendAccount';
import DeleteAccount from './pages/DeleteAccount';
import Home from './pages/Home';
import HabaChart from './Components/HabaChart';
import Analytics from './pages/Analytics';
import ManageUsers from './pages/ManageUsers';
import Settings from './pages/Settings';
import AdminProfile from './pages/AdminProfile';
import WithdrawalModal from './Modals/WithdrawalModal';

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
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chart" element={<HabaChart />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/withdrawal" element={<WithdrawalModal />} />
      </Routes>
    </Router>
  );
};

export default App;
