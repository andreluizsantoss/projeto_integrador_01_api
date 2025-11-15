import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import Header from '../components/Header';
import '../styles/Patients.css';

function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    try {
      const response = await api.get('/patients');
      setPatients(response.data);
    } catch (error) {
      console.error('Erro ao carregar pacientes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este paciente?')) {
      try {
        await api.delete(`/patients/${id}`);
        loadPatients();
      } catch (error) {
        console.error('Erro ao excluir paciente:', error);
      }
    }
  };

  const filteredPatients = patients.filter(patient =>
    patient.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.documento.includes(searchTerm)
  );

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="patients">
      <Header />
      
      <div className="patients-content">
        <div className="patients-header">
          <h1>Gerenciar Pacientes</h1>
          <Link to="/patients/new" className="btn-primary">
            Novo Paciente
          </Link>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar por nome ou documento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="patients-table">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Documento</th>
                <th>Sexo</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map(patient => (
                <tr key={patient.id}>
                  <td>{patient.nome}</td>
                  <td>{patient.idade}</td>
                  <td>{patient.documento}</td>
                  <td>{patient.sexo}</td>
                  <td>
                    <span className={`status ${patient.status.toLowerCase()}`}>
                      {patient.status}
                    </span>
                  </td>
                  <td>
                    <Link to={`/patients/edit/${patient.id}`} className="btn-edit">
                      Editar
                    </Link>
                    <button 
                      onClick={() => handleDelete(patient.id)}
                      className="btn-delete"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPatients.length === 0 && (
          <div className="no-data">
            Nenhum paciente encontrado.
          </div>
        )}
      </div>
    </div>
  );
}

export default Patients;