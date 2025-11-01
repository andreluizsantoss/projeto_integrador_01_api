// Layout
export function Layout({ children, currentPage, setCurrentPage }) {
    return (
        <>
            <div className="headerContent">
                <header>
                    <h1>SOS Sorocaba</h1>
                    <h4>Sistema de Gestão Social</h4>
                    <nav role="navigation">
                        <a 
                            href="#" 
                            className={currentPage === 'home' ? 'active' : ''}
                            onClick={() => setCurrentPage('home')}
                        >
                            🏠 Home
                        </a>
                        <a 
                            href="#" 
                            className={currentPage === 'dashboard' ? 'active' : ''}
                            onClick={() => setCurrentPage('dashboard')}
                        >
                            📊 Dashboard
                        </a>
                        <a 
                            href="#" 
                            className={currentPage === 'activities' ? 'active' : ''}
                            onClick={() => setCurrentPage('activities')}
                        >
                            🏃 Atividades
                        </a>
                        <a 
                            href="#" 
                            className={currentPage === 'register' ? 'active' : ''}
                            onClick={() => setCurrentPage('register')}
                        >
                            📝 Cadastro
                        </a>
                        <a 
                            href="#" 
                            className={currentPage === 'patients' ? 'active' : ''}
                            onClick={() => setCurrentPage('patients')}
                        >
                            👥 Usuários
                        </a>
                    </nav>
                </header>
            </div>

            <div className="mainContent">
                <main>
                    {children}
                </main>
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