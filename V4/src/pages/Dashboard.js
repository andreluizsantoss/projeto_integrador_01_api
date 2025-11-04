import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const API_BASE = 'http://localhost:3001';

function Dashboard() {
  const [patients, setPatients] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    homeless: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
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
        throw new Error('Erro ao carregar dados');
      }

      const data = await response.json();
      
      // Pegar os últimos 3 pacientes para a tabela
      setPatients(data.slice(-3));
      
      // Calcular estatísticas
      const total = data.length;
      const active = data.filter(p => p.status === 'Ativo').length;
      const homeless = data.filter(p => p.morador_rua).length;
      
      setStats({ total, active, homeless });
      setLoading(false);

    } catch (error) {
      console.error('Erro:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Carregando dados...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="hero-section">
        <h1>Painel de Controle</h1>
        <p className="hero-description">
          Sistema com pacientes cadastrados
        </p>
      </section>

      <div className="stats-cards">
        <div className="stat-card">
          <div className="stat-number">{stats.total}</div>
          <div className="stat-label">Total de Pacientes</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.active}</div>
          <div className="stat-label">Pacientes Ativos</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.homeless}</div>
          <div className="stat-label">Moradores de Rua</div>
        </div>
      </div>

      <section className="recent-patients">
        <h2>Pacientes Recentes</h2>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Profissão</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {patients.length > 0 ? patients.map((patient) => (
                <tr key={patient.id}>
                  <td><strong>{patient.nome}</strong></td>
                  <td>{patient.idade}</td>
                  <td>{patient.profissao}</td>
                  <td>
                    <span className={`status-badge ${patient.status?.toLowerCase() || 'unknown'}`}>
                      {patient.status || 'Desconhecido'}
                    </span>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>
                    Nenhum paciente cadastrado
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}

export default Dashboard;