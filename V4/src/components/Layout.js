import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();

  return (
    <>
      <div className="headerContent">
        <header>
          <h1>SOS Sorocaba</h1>
          <h4>Sistema de Gestão Social</h4>
          <nav>
            <Link 
              to="/dashboard" 
              className={location.pathname === '/dashboard' ? 'active' : ''}
            >
              Dashboard
            </Link>
            <Link 
              to="/atividades" 
              className={location.pathname === '/atividades' ? 'active' : ''}
            >
              Atividades
            </Link>
            <Link 
              to="/cadastro" 
              className={location.pathname === '/cadastro' ? 'active' : ''}
            >
              Cadastro
            </Link>
            <Link 
              to="/usuarios" 
              className={location.pathname === '/usuarios' ? 'active' : ''}
            >
              Usuários
            </Link>
          </nav>
        </header>
      </div>
      <div className="mainContent">
        <main>{children}</main>
      </div>
      <div className="footerContent">
        <footer>
          <h3>SOS Sorocaba</h3>
          <h4>Plataforma de Assistência Social</h4>
        </footer>
      </div>
    </>
  );
}

export default Layout;