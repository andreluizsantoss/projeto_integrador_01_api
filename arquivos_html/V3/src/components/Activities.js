import { useMockApi } from '../hooks/useMockApi.js';
import { ChartComponent } from './ChartComponent.js';
import { mockActivities, mockPatients } from '../utils/mockData.js';

const { useState } = React;

// Atividades com estatísticas
export function Activities({ setCurrentPage }) {
    const { data: patients } = useMockApi('/patient');
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [activityDate, setActivityDate] = useState('');
    const [userCode, setUserCode] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const activities = [
        'Oficina Profissionalizante',
        'Aconselhamento Psicossocial',
        'Atendimento de Saúde',
        'Distribuição de Alimentação',
        'Kit Higiene',
        'Nenhuma atividade'
    ];

    // Estatísticas de atividades
    const activityStats = {};
    Object.values(mockActivities).flat().forEach(activity => {
        activityStats[activity.nome] = (activityStats[activity.nome] || 0) + 1;
    });

    const activityData = {
        labels: Object.keys(activityStats),
        datasets: [{
            label: 'Atividades',
            data: Object.values(activityStats),
            backgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
            ],
            borderWidth: 1
        }]
    };

    const searchUser = async () => {
        if (!userCode.trim()) return;
        
        try {
            const user = mockPatients.find(p => p.id == userCode || p.codigo_usuario === userCode);
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
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert('Atividades registradas com sucesso!');
            
            setSelectedActivities([]);
            setActivityDate('');
            setSelectedUser(null);
            setUserCode('');
        } catch (error) {
            alert('Erro ao registrar atividades');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                <section>
                    <h1>Cadastro de Atividades</h1>
                    <p style={{ color: '#666' }}>
                        Registre as atividades realizadas pelos pacientes
                    </p>
                </section>

                <ChartComponent
                    type="doughnut"
                    data={activityData}
                    options={{
                        plugins: {
                            legend: { position: 'bottom' }
                        }
                    }}
                    title="🏃 Atividades Mais Realizadas"
                    className="mini-chart"
                />
            </div>

            <label htmlFor="codigo_usuario">Digite o código ou ID do usuário:</label>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
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
        </>
    );
}