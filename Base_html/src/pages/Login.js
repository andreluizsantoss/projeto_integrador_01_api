import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Login() {
  const [formData, setFormData] = useState({
    usuario: '',
    senha: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/authenticate/session', formData);
      
      const { data } = response;
      const token = data.access_token || data.token;
      
      localStorage.setItem('token', token);
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      
      // Força atualização do App
      window.dispatchEvent(new Event('storage'));
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro de login:', error);
      
      if (error.response) {
        // Erro da API
        setError(error.response.data?.message || 'Credenciais inválidas');
      } else if (error.request) {
        // Erro de rede
        setError('Erro de conexão. Verifique se a API está rodando.');
      } else {
        // Outro erro
        setError('Erro inesperado. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>SOS Sorocaba</h1>
          <h4>Sistema de Gestão Social</h4>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="usuario">Usuário:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;