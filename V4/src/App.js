import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PatientForm from './pages/PatientForm';
import Activities from './pages/Activities';
import Users from './pages/Users';
import './styles/app.css';

function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} 
          />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/cadastro" 
            element={isAuthenticated ? <PatientForm /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/atividades" 
            element={isAuthenticated ? <Activities /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/usuarios" 
            element={isAuthenticated ? <Users /> : <Navigate to="/login" />} 
          />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
