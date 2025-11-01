import { useMockApi } from '../hooks/useMockApi.js';
import { ChartComponent } from './ChartComponent.js';

const { useState, useMemo } = React;

// Lista de Pacientes
export function PatientsList({ setCurrentPage, setSelectedPatient }) {
    const { data: patients, loading } = useMockApi('/patient');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPatients = useMemo(() => {
        if (!patients || !searchTerm) return patients || [];
        const term = searchTerm.toLowerCase();
        return patients.filter(patient => 
            patient.nome?.toLowerCase().includes(term) ||
            patient.documento?.toLowerCase().includes(term) ||
            patient.profissao?.toLowerCase().includes(term)
        );
    }, [patients, searchTerm]);

    const statusData = patients ? {
        labels: ['Ativo', 'Bloqueado'],
        datasets: [{
            data: [
                patients.filter(p => p.status === 'Ativo').length,
                patients.filter(p => p.status === 'Bloqueado').length
            ],
            backgroundColor: ['#10B981', '#EF4444'],
            borderWidth: 0
        }]
    } : null;

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                <section>
                    <h2>Lista de Usuários ({patients?.length || 0})</h2>
                    
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

                {statusData && (
                    <ChartComponent
                        type="doughnut"
                        data={statusData}
                        options={{
                            plugins: {
                                legend: { position: 'bottom' }
                            }
                        }}
                        title="✅ Status dos Pacientes"
                        className="mini-chart"
                    />
                )}
            </div>

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
                        {loading ? (
                            <tr>
                                <td colSpan="6" className="loading-message">
                                    <div className="loading-content">
                                        <div className="loading-spinner"></div>
                                        <p>Carregando usuários...</p>
                                    </div>
                                </td>
                            </tr>
                        ) : filteredPatients.length === 0 ? (
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
                                <tr 
                                    key={patient.id}
                                    onClick={() => {
                                        setSelectedPatient(patient);
                                        setCurrentPage('profile');
                                    }}
                                    role="button"
                                    tabIndex="0"
                                >
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
        </>
    );
}