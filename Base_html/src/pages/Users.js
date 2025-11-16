import React, { useState, useMemo, useEffect } from 'react';
import Layout from '../components/Layout';
import api from '../services/api';

function Users() {
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/login';
        return;
      }

      const response = await api.get('/patient');
      const data = response.data;
      setPatients(data);
      setLoading(false);

    } catch (error) {
      console.error('Erro:', error);
      setLoading(false);
    }
  };

  const filteredPatients = useMemo(() => {
    if (!searchTerm) return patients;
    const term = searchTerm.toLowerCase();
    return patients.filter(patient => 
      patient.nome?.toLowerCase().includes(term) ||
      patient.documento?.toLowerCase().includes(term) ||
      patient.profissao?.toLowerCase().includes(term)
    );
  }, [searchTerm, patients]);

  if (loading) {
    return (
      <Layout>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Carregando usuários...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2>Lista de Usuários ({patients.length})</h2>
          <button 
            onClick={loadPatients} 
            className="btn-secondary"
            style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
          >
            🔄 Atualizar
          </button>
        </div>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Buscar por nome, documento ou profissão..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <small className="help-text">
            {filteredPatients.length} resultado(s) encontrado(s)
          </small>
        </div>
      </section>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Documento</th>
              <th>Status</th>
              <th>Profissão</th>
              <th>Morador de Rua</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-results">
                  <div className="empty-state">
                    <p>Nenhum usuário encontrado</p>
                    <small>Tente ajustar os termos de busca</small>
                  </div>
                </td>
              </tr>
            ) : (
              filteredPatients.map((patient) => (
                <tr key={patient.id} onClick={() => window.open(`/userinfo?id=${patient.id}`, '_blank')} style={{ cursor: 'pointer' }}>
                  <td><strong>{patient.nome}</strong></td>
                  <td>{patient.idade}</td>
                  <td>{patient.documento}</td>
                  <td>
                    <span className={`status-badge ${patient.status?.toLowerCase()}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td>{patient.profissao}</td>
                  <td>
                    <span className={patient.morador_rua ? 'status-badge ativo' : 'status-badge unknown'}>
                      {patient.morador_rua ? 'Sim' : 'Não'}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Users;
