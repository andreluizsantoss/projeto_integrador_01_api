import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import api from '../services/api';

function UserInfo() {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('UserInfo component mounted');
    const urlParams = new URLSearchParams(window.location.search);
    const patientId = urlParams.get('id');
    console.log('Patient ID from URL:', patientId);
    
    if (patientId) {
      loadPatientInfo(patientId);
    } else {
      setError('ID do paciente não fornecido');
      setLoading(false);
    }
  }, []);

  const loadPatientInfo = async (id) => {
    try {
      console.log('Loading patient info for ID:', id);
      const token = localStorage.getItem('token');
      console.log('Token exists:', !!token);
      
      if (!token) {
        console.log('No token, redirecting to login');
        window.location.href = '/login';
        return;
      }

      console.log('Fetching patients from API...');
      const response = await api.get('/patient');
      const patients = response.data;
      console.log('Patients received:', patients.length);
      
      // Find patient by ID
      const patient = patients.find(p => p.id == id);
      console.log('Found patient:', patient);
      
      if (patient) {
        setPatient(patient);
        console.log('Patient set successfully');
      } else {
        console.log('Patient not found');
        setError('Paciente não encontrado');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error loading patient:', error);
      setError('Erro ao carregar informações do paciente: ' + error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Carregando informações...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ color: 'red' }}>{error}</p>
          <button onClick={() => window.history.back()}>Voltar</button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>Informações do Paciente</h2>
          <button onClick={() => window.history.back()} className="btn-secondary">
            ← Voltar
          </button>
        </div>

        {patient && (
          <div className="patient-info">
            <div className="info-grid">
              <div className="info-section">
                <h3>Dados Pessoais</h3>
                <div className="info-item">
                  <strong>Nome:</strong> {patient.nome}
                </div>
                <div className="info-item">
                  <strong>Idade:</strong> {patient.idade} anos
                </div>
                <div className="info-item">
                  <strong>Data de Nascimento:</strong> {new Date(patient.data_nascimento).toLocaleDateString('pt-BR')}
                </div>
                <div className="info-item">
                  <strong>Sexo:</strong> {patient.sexo}
                </div>
                <div className="info-item">
                  <strong>Estado Civil:</strong> {patient.estado_civil}
                </div>
                <div className="info-item">
                  <strong>Etnia:</strong> {patient.etnia || 'Não informado'}
                </div>
              </div>

              <div className="info-section">
                <h3>Documentação</h3>
                <div className="info-item">
                  <strong>Tipo:</strong> {patient.tipo_documento}
                </div>
                <div className="info-item">
                  <strong>Documento:</strong> {patient.documento}
                </div>
                <div className="info-item">
                  <strong>Status:</strong> 
                  <span className={`status-badge ${patient.status?.toLowerCase()}`}>
                    {patient.status}
                  </span>
                </div>
              </div>

              <div className="info-section">
                <h3>Informações Profissionais</h3>
                <div className="info-item">
                  <strong>Profissão:</strong> {patient.profissao || 'Não informado'}
                </div>
                <div className="info-item">
                  <strong>Morador de Rua:</strong> 
                  <span className={patient.morador_rua ? 'status-badge ativo' : 'status-badge unknown'}>
                    {patient.morador_rua ? 'Sim' : 'Não'}
                  </span>
                </div>
              </div>

              <div className="info-section">
                <h3>Características Físicas</h3>
                <div className="info-item">
                  <strong>Altura:</strong> {patient.altura ? `${patient.altura} m` : 'Não informado'}
                </div>
                <div className="info-item">
                  <strong>Peso:</strong> {patient.peso ? `${patient.peso} kg` : 'Não informado'}
                </div>
                <div className="info-item">
                  <strong>Cor dos Olhos:</strong> {patient.cor_olhos || 'Não informado'}
                </div>
                <div className="info-item">
                  <strong>Cor do Cabelo:</strong> {patient.cor_cabelo || 'Não informado'}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default UserInfo;
