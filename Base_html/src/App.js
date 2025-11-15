import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PatientForm from './pages/PatientForm';
import Activities from './pages/Activities';
import Users from './pages/Users';
import './Styles/App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    };
    
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);
  
  console.log('Token encontrado:', isAuthenticated);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" replace />} 
          />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/cadastro" 
            element={isAuthenticated ? <PatientForm /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/atividades" 
            element={isAuthenticated ? <Activities /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/usuarios" 
            element={isAuthenticated ? <Users /> : <Navigate to="/login" replace />} 
          />
          <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
