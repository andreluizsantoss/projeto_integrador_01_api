import { useMockApi } from '../hooks/useMockApi.js';
import { ChartComponent } from './ChartComponent.js';

// Home
export function Home({ setCurrentPage, setSelectedPatient }) {
    const { data: patients, loading } = useMockApi('/patient');
    const recentPatients = patients?.slice(0, 6) || [];

    const genderData = patients ? {
        labels: ['Masculino', 'Feminino'],
        datasets: [{
            data: [
                patients.filter(p => p.sexo === 'Masculino').length,
                patients.filter(p => p.sexo === 'Feminino').length
            ],
            backgroundColor: ['#3B82F6', '#EC4899'],
            borderWidth: 0
        }]
    } : null;

    const totalPacientes = patients?.length || 0;
    const pacientesAtivos = patients?.filter(p => p.status === 'Ativo').length || 0;
    const moradoresRua = patients?.filter(p => p.morador_rua).length || 0;

    return (
        <>
            <section className="hero-section">
                <h1>Painel de Controle</h1>
                <p className="hero-description">
                    Sistema com pacientes cadastrados
                </p>
            </section>

            <div className="stats-cards">
                <div className="stat-card">
                    <div className="stat-number">{totalPacientes}</div>
                    <div className="stat-label">Total de Pacientes</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{pacientesAtivos}</div>
                    <div className="stat-label">Pacientes Ativos</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{moradoresRua}</div>
                    <div className="stat-label">Moradores de Rua</div>
                </div>
                <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => setCurrentPage('dashboard')}>
                    <div className="stat-number">📊</div>
                    <div className="stat-label">Ver Dashboard</div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                <section className="recent-patients">
                    <div className="section-header">
                        <h2>Pacientes Recentes</h2>
                        <div className="section-actions">
                            <button 
                                className="btn-primary" 
                                onClick={() => setCurrentPage('register')}
                            >
                                + Novo Cadastro
                            </button>
                            <button 
                                className="btn-secondary" 
                                onClick={() => setCurrentPage('patients')}
                            >
                                Ver Todos
                            </button>
                        </div>
                    </div>
                    
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
                                {loading ? (
                                    <tr>
                                        <td colSpan="4" className="loading-message">
                                            <div className="loading-content">
                                                <div className="loading-spinner"></div>
                                                <p>Carregando...</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    recentPatients.map((patient, index) => (
                                        <tr 
                                            key={patient.id} 
                                            className="patient-row"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                            onClick={() => {
                                                setSelectedPatient(patient);
                                                setCurrentPage('profile');
                                            }}
                                        >
                                            <td>
                                                <div className="patient-name">
                                                    <strong>{patient.nome}</strong>
                                                    {index < 3 && <span className="new-badge">Novo</span>}
                                                </div>
                                            </td>
                                            <td>{patient.idade}</td>
                                            <td>{patient.profissao}</td>
                                            <td>
                                                <span className={`status-badge ${patient.status?.toLowerCase()}`}>
                                                    {patient.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>

                {genderData && (
                    <ChartComponent
                        type="doughnut"
                        data={genderData}
                        options={{
                            plugins: {
                                legend: { position: 'bottom' }
                            }
                        }}
                        title="👥 Distribuição por Gênero"
                        className="mini-chart"
                    />
                )}
            </div>
        </>
    );
}