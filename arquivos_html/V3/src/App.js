import { Layout } from './components/Layout.js';
import { Home } from './components/Home.js';
import { Dashboard } from './components/Dashboard.js';
import { PatientsList } from './components/PatientsList.js';
import { Register } from './components/Register.js';
import { Activities } from './components/Activities.js';
import { Profile } from './components/Profile.js';
import { Login } from './components/Login.js';

const { useState, useEffect } = React;

// App Principal
function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            // Aqui você pode validar o token com a API
        }
        setLoading(false);
    }, []);

    const handleLogin = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
        setCurrentPage('home');
    };

    if (loading) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
                fontSize: '1.2rem',
                color: '#667eea'
            }}>
                Carregando...
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Login onLogin={handleLogin} />;
    }

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home setCurrentPage={setCurrentPage} setSelectedPatient={setSelectedPatient} />;
            case 'dashboard':
                return <Dashboard />;
            case 'activities':
                return <Activities setCurrentPage={setCurrentPage} />;
            case 'register':
                return <Register setCurrentPage={setCurrentPage} />;
            case 'patients':
                return <PatientsList setCurrentPage={setCurrentPage} setSelectedPatient={setSelectedPatient} />;
            case 'profile':
                return <Profile patient={selectedPatient} setCurrentPage={setCurrentPage} />;
            default:
                return <Home setCurrentPage={setCurrentPage} setSelectedPatient={setSelectedPatient} />;
        }
    };

    return (
        <Layout 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            user={user}
            onLogout={handleLogout}
        >
            {renderPage()}
        </Layout>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));