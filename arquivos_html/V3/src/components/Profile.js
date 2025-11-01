import { useMockApi } from '../hooks/useMockApi.js';
import { ChartComponent } from './ChartComponent.js';

// Perfil com Dashboards
export function Profile({ patient, setCurrentPage }) {
    const { data: benefits } = useMockApi(patient ? `/patient-benefit/${patient.id}` : null);
    const { data: dependencies } = useMockApi(patient ? `/patient-dependencie/${patient.id}` : null);
    const { data: activities } = useMockApi(patient ? `/history-activitie/id?id=${patient.id}` : null);

    const formatDate = (dateString) => {
        if (!dateString) return '—';
        try {
            return new Date(dateString).toLocaleDateString('pt-BR');
        } catch {
            return '—';
        }
    };

    const renderList = (items, emptyMessage) => {
        if (!items || items.length === 0) {
            return <li className="empty-item">{emptyMessage}</li>;
        }

        return items.map((item, index) => (
            <li key={index} className="list-item">
                <strong>{item.nome || item.description || item.name || 'Item'}</strong>
                {item.description && <div style={{ fontSize: '0.9em', color: '#666', marginTop: '4px' }}>{item.description}</div>}
                {item.data && (
                    <span className="item-date"> - {formatDate(item.data)}</span>
                )}
            </li>
        ));
    };

    if (!patient) {
        return (
            <div className="error-state">
                <div className="error-content">
                    <p>⚠️ Nenhum paciente selecionado</p>
                    <button onClick={() => setCurrentPage('home')} className="btn-primary">
                        Voltar para Home
                    </button>
                </div>
            </div>
        );
    }

    // Dashboard de atividades do paciente
    const patientActivityData = activities && activities.length > 0 ? {
        labels: activities.map(a => a.nome),
        datasets: [{
            label: 'Atividades',
            data: activities.map(() => 1),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            borderWidth: 1
        }]
    } : null;

    return (
        <article>
            <header className="profile-header">
                <h1>Perfil: {patient.nome}</h1>
                <div className="profile-actions">
                    <button onClick={() => setCurrentPage('edit')} className="btn-primary">
                        ✏️ Editar
                    </button>
                    <button onClick={() => window.print()} className="btn-secondary">
                        🖨️ Imprimir
                    </button>
                    <button onClick={() => setCurrentPage('home')} className="btn-secondary">
                        ← Voltar
                    </button>
                </div>
            </header>

            <section className="patient-info">
                <h2>Informações Pessoais</h2>
                <div className="info-grid">
                    <div className="info-card">
                        <label>ID:</label>
                        <span>{patient.id}</span>
                    </div>
                    <div className="info-card">
                        <label>Nome:</label>
                        <span>{patient.nome}</span>
                    </div>
                    <div className="info-card">
                        <label>Idade:</label>
                        <span>{patient.idade} anos</span>
                    </div>
                    <div className="info-card">
                        <label>Documento:</label>
                        <span>{patient.documento}</span>
                    </div>
                    <div className="info-card">
                        <label>Sexo:</label>
                        <span>{patient.sexo}</span>
                    </div>
                    <div className="info-card">
                        <label>Data de Nascimento:</label>
                        <span>{formatDate(patient.data_nascimento)}</span>
                    </div>
                    <div className="info-card">
                        <label>Profissão:</label>
                        <span>{patient.profissao}</span>
                    </div>
                    <div className="info-card">
                        <label>Status:</label>
                        <span className={`status-badge ${patient.status?.toLowerCase()}`}>
                            {patient.status}
                        </span>
                    </div>
                </div>
            </section>

            <div className="details-grid">
                <section className="detail-section">
                    <h2>🎁 Benefícios</h2>
                    <ul className="detail-list">
                        {renderList(benefits, 'Nenhum benefício cadastrado')}
                    </ul>
                </section>

                <section className="detail-section">
                    <h2>⚠️ Dependências</h2>
                    <ul className="detail-list">
                        {renderList(dependencies, 'Nenhuma dependência cadastrada')}
                    </ul>
                </section>

                <section className="detail-section full-width">
                    <h2>🏃 Atividades Realizadas</h2>
                    <ul className="detail-list">
                        {renderList(activities, 'Nenhuma atividade registrada')}
                    </ul>
                </section>

                {patientActivityData && (
                    <section className="detail-section">
                        <ChartComponent
                            type="doughnut"
                            data={patientActivityData}
                            options={{
                                plugins: {
                                    legend: { position: 'bottom' }
                                }
                            }}
                            title="📊 Distribuição de Atividades"
                        />
                    </section>
                )}
            </div>
        </article>
    );
}