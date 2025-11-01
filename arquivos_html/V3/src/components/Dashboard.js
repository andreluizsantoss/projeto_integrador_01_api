import { useMockApi } from '../hooks/useMockApi.js';
import { ChartComponent } from './ChartComponent.js';

// Dashboard
export function Dashboard() {
    const { data: patients } = useMockApi('/patient');
    
    if (!patients) return <div className="loading-message">Carregando dashboard...</div>;

    return (
        <>
            <section className="hero-section">
                <h1>📊 Dashboard Estatístico</h1>
                <p className="hero-description">
                    Análise completa dos dados do SOS Sorocaba
                </p>
            </section>

            <div className="stats-cards">
                <div className="stat-card">
                    <div className="stat-number">{patients.length}</div>
                    <div className="stat-label">Total de Pacientes</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{patients.filter(p => p.status === 'Ativo').length}</div>
                    <div className="stat-label">Pacientes Ativos</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{patients.filter(p => p.morador_rua).length}</div>
                    <div className="stat-label">Moradores de Rua</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{Math.round(patients.reduce((acc, p) => acc + p.idade, 0) / patients.length)}</div>
                    <div className="stat-label">Idade Média</div>
                </div>
            </div>

            <div className="charts-grid">
                <ChartComponent
                    type="doughnut"
                    data={{
                        labels: ['Masculino', 'Feminino'],
                        datasets: [{
                            data: [
                                patients.filter(p => p.sexo === 'Masculino').length,
                                patients.filter(p => p.sexo === 'Feminino').length
                            ],
                            backgroundColor: ['#3B82F6', '#EC4899']
                        }]
                    }}
                    title="👥 Distribuição por Gênero"
                />

                <ChartComponent
                    type="bar"
                    data={{
                        labels: ['18-30', '31-45', '46-60', '60+'],
                        datasets: [{
                            label: 'Pacientes',
                            data: [
                                patients.filter(p => p.idade >= 18 && p.idade <= 30).length,
                                patients.filter(p => p.idade >= 31 && p.idade <= 45).length,
                                patients.filter(p => p.idade >= 46 && p.idade <= 60).length,
                                patients.filter(p => p.idade > 60).length
                            ],
                            backgroundColor: ['#10B981', '#F59E0B', '#EF4444', '#8B5CF6']
                        }]
                    }}
                    title="📊 Pacientes por Faixa Etária"
                />
            </div>
        </>
    );
}