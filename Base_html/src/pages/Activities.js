import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const API_BASE = 'http://localhost:3001';

function Activities() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [activityDate, setActivityDate] = useState(new Date().toISOString().split('T')[0]);
  const [userCode, setUserCode] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activities, setActivities] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    loadActivities();
    loadPatients();
  }, []);

  const loadActivities = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch(`${API_BASE}/fixed-activitie`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        const activityNames = data.map(a => a.descricao);
        setActivities([...activityNames, 'Nenhuma atividade']);
      }
    } catch (error) {
      console.error('Erro ao carregar atividades:', error);
      setActivities(['Oficina Profissionalizante', 'Aconselhamento Psicossocial', 'Atendimento de Saúde', 'Distribuição de Alimentação', 'Kit Higiene', 'Nenhuma atividade']);
    }
  };

  const loadPatients = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await fetch(`${API_BASE}/patient`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setPatients(data);
      }
    } catch (error) {
      console.error('Erro ao carregar pacientes:', error);
    }
  };

  const searchUser = async () => {
    if (!userCode.trim()) return;
    
    try {
      const user = patients.find(p => p.id == userCode || p.codigo_usuario === userCode);
      if (user) {
        setSelectedUser(user);
      } else {
        alert('Usuário não encontrado');
        setSelectedUser(null);
      }
    } catch (error) {
      alert('Erro ao buscar usuário');
      setSelectedUser(null);
    }
  };

  const handleActivityChange = (activity) => {
    if (activity === 'Nenhuma atividade') {
      setSelectedActivities(['Nenhuma atividade']);
    } else {
      setSelectedActivities(prev => {
        const filtered = prev.filter(a => a !== 'Nenhuma atividade');
        if (filtered.includes(activity)) {
          return filtered.filter(a => a !== activity);
        } else {
          return [...filtered, activity];
        }
      });
    }
  };

  const getSelectedText = () => {
    if (selectedActivities.length === 0) return 'Selecione as Atividades';
    if (selectedActivities.length === 1) return selectedActivities[0];
    return `${selectedActivities.length} selecionadas`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedUser || selectedActivities.length === 0 || !activityDate) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Token de autenticação não encontrado');
        return;
      }

      // Get all activities to find IDs
      const activitiesResponse = await fetch(`${API_BASE}/fixed-activitie`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!activitiesResponse.ok) {
        throw new Error('Erro ao carregar atividades');
      }

      const allActivities = await activitiesResponse.json();

      for (const activity of selectedActivities) {
        // Find activity by description
        const activityData = allActivities.find(a => a.descricao === activity);
        
        if (!activityData) {
          throw new Error(`Atividade não encontrada: ${activity}`);
        }
        
        const historyData = {
          cadastro_id: selectedUser.id.toString(),
          codigo_atividade: activityData.codigo,
          data_atendimento: new Date(activityDate).toISOString()
        };

        const response = await fetch(`${API_BASE}/history-activitie/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(historyData)
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Erro ao registrar atividade: ${activity} - ${errorText}`);
        }
      }

      alert('Atividades registradas com sucesso!');
      setSelectedActivities([]);
      setActivityDate(new Date().toISOString().split('T')[0]);
      setSelectedUser(null);
      setUserCode('');
    } catch (error) {
      alert('Erro ao registrar atividades: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="hero-section">
        <h1>Cadastro de Atividades</h1>
        <p className="hero-description">
          Registre as atividades realizadas pelos pacientes
        </p>
      </section>

      <div className="search-container">
        <label htmlFor="codigo_usuario">Digite o código ou ID do usuário:</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            id="codigo_usuario" 
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Ex: 1, 2, JSS2024..."
            required 
          />
          <button type="button" onClick={searchUser}>Buscar</button>
        </div>
      </div>

      {selectedUser && (
        <div className="table" style={{ marginBottom: '20px' }}>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Sexo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{selectedUser.nome}</strong></td>
                <td>{selectedUser.idade}</td>
                <td>{selectedUser.sexo}</td>
                <td>
                  <span className={`status-badge ${selectedUser.status?.toLowerCase()}`}>
                    {selectedUser.status}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Atividades Realizadas</legend>
          <div style={{ position: 'relative', maxWidth: '500px' }}>
            <label>Selecione uma ou mais atividades:</label><br />
            
            <div 
              style={{
                marginTop: '8px',
                display: 'flex',
                padding: '12px',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                backgroundColor: '#fff',
                cursor: 'pointer'
              }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div>{getSelectedText()}</div>
              <div>
                {dropdownOpen ? '▲' : '▼'}
              </div>
            </div>
            
            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                marginTop: '4px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                backgroundColor: '#fff',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                padding: '8px',
                zIndex: 50,
                maxHeight: '250px',
                overflowY: 'auto'
              }}>
                {activities.map((activity) => (
                  <div 
                    key={activity}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    <input 
                      type="checkbox" 
                      checked={selectedActivities.includes(activity)}
                      onChange={() => handleActivityChange(activity)}
                    />
                    <label style={{ cursor: 'pointer', flexGrow: 1 }}>
                      {activity}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </fieldset>
        
        <div style={{ marginTop: '16px' }}>
          <label htmlFor="data_atividade">Data da atividade:</label>
          <input 
            type="date" 
            id="data_atividade" 
            value={activityDate}
            onChange={(e) => setActivityDate(e.target.value)}
            required 
          />
        </div>
        
        <br />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Registrando...' : 'Registrar Atividades'}
        </button>
      </form>
    </Layout>
  );
}

export default Activities;