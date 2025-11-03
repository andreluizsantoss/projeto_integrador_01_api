import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/dashboard">S.O.S. Sorocaba</Link>
        </div>
        
        <nav className="nav-menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/patients">Pacientes</Link>
          <Link to="/activities">Atividades</Link>
          <Link to="/users">Usuários</Link>
        </nav>
        
        <div className="user-menu">
          <button onClick={handleLogout} className="logout-btn">
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;