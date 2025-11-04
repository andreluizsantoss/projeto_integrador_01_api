import React, { useState, useMemo, useEffect } from 'react';
import Layout from '../components/Layout';

const API_BASE = 'http://localhost:3001';

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

      const response = await fetch(`${API_BASE}/patient`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/login';
          return;
        }
        throw new Error('Erro ao carregar pacientes');
      }

      const data = await response.json();
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
        <h2>Lista de Usuários ({patients.length})</h2>
        
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
                <tr key={patient.id}>
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