// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/loginPage';
import SignUpForm from './components/signUpPage';
import Dashboard from './components/dashboard';
import MyWallet from './components/MyWallet';
import MyCart from './components/MyCart';
import Settings from './components/Settings';
import Logout from './components/Logout';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mywallet" element={<MyWallet />} />
            <Route path="/mycart" element={<MyCart />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
            {/* Redirection depuis la route principale vers /login */}
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
