import { apiService } from '../services/apiService.js';

const { useState } = React;

// Componente de Login
export function Login({ onLogin }) {
    const [credentials, setCredentials] = useState({
        username: 'administrador',
        password: 'administrador'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await apiService.login(credentials.username, credentials.password);
            
            if (response.token) {
                localStorage.setItem('token', response.token);
                onLogin(response.user);
            }
        } catch (err) {
            setError('Credenciais inválidas. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <header className="login-header">
                    <h1>🏥 SOS Sorocaba</h1>
                    <h4>Sistema de Gestão Social</h4>
                </header>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">Usuário:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                            disabled={loading}
                        />
                    </div>

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                    <button type="submit" disabled={loading} className="login-button">
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>

                    <div className="login-info">
                        <small>
                            <strong>Usuário padrão:</strong> administrador<br />
                            <strong>Senha padrão:</strong> administrador
                        </small>
                    </div>
                </form>
            </div>

            <style jsx>{`
                .login-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 1rem;
                }

                .login-card {
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                    padding: 2rem;
                    width: 100%;
                    max-width: 400px;
                }

                .login-header {
                    text-align: center;
                    margin-bottom: 2rem;
                }

                .login-header h1 {
                    color: #667eea;
                    margin-bottom: 0.5rem;
                }

                .login-header h4 {
                    color: #6b7280;
                    font-weight: 400;
                }

                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .form-group label {
                    font-weight: 500;
                    color: #374151;
                }

                .form-group input {
                    padding: 0.75rem;
                    border: 1px solid #d1d5db;
                    border-radius: 6px;
                    font-size: 1rem;
                    transition: border-color 0.2s;
                }

                .form-group input:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                }

                .error-message {
                    background: #fef2f2;
                    color: #dc2626;
                    padding: 0.75rem;
                    border-radius: 6px;
                    font-size: 0.875rem;
                    border: 1px solid #fecaca;
                }

                .login-button {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border: none;
                    padding: 0.75rem;
                    border-radius: 6px;
                    font-size: 1rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: transform 0.2s;
                }

                .login-button:hover:not(:disabled) {
                    transform: translateY(-1px);
                }

                .login-button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    transform: none;
                }

                .login-info {
                    text-align: center;
                    color: #6b7280;
                    margin-top: 1rem;
                    padding-top: 1rem;
                    border-top: 1px solid #e5e7eb;
                }
            `}</style>
        </div>
    );
}