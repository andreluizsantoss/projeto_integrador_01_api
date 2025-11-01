import { useMockApi } from '../hooks/useMockApi.js';
import { ChartComponent } from './ChartComponent.js';

const { useState } = React;

// Cadastro 
export function Register({ setCurrentPage }) {
    const { data: patients } = useMockApi('/patient');
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const generateUserCode = (nome) => {
        if (!nome) return '';
        const cleanName = nome.trim().toUpperCase().replace(/[^A-Z\s]/g, '');
        const words = cleanName.split(' ').filter(word => word.length > 0);
        if (words.length === 0) return '';
        const initials = words.map(word => word[0]).join('');
        const timestamp = Date.now().toString().slice(-4);
        return `${initials}${timestamp}`;
    };

    const showNotification = (message, type = 'info') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            showNotification('Cadastro realizado com sucesso!', 'success');
            setTimeout(() => setCurrentPage('home'), 2000);
        } catch (error) {
            showNotification('Erro ao cadastrar usuário. Tente novamente.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const recentData = patients ? {
        labels: ['Últimos 7 dias', 'Anteriores'],
        datasets: [{
            data: [7, patients.length - 7],
            backgroundColor: ['#10B981', '#6B7280'],
            borderWidth: 0
        }]
    } : null;

    return (
        <>
            {notification && (
                <div className={`notification notification-${notification.type}`}>
                    <span>{notification.message}</span>
                    <button onClick={() => setNotification(null)}>×</button>
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                <section>
                    <h1>Cadastro de novos Usuários</h1>
                    <p style={{ color: '#666', marginBottom: '1rem' }}>
                        Preencha os dados do novo paciente no sistema
                    </p>
                </section>

                {recentData && (
                    <ChartComponent
                        type="doughnut"
                        data={recentData}
                        options={{
                            plugins: {
                                legend: { position: 'bottom' }
                            }
                        }}
                        title="📈 Cadastros Recentes"
                        className="mini-chart"
                    />
                )}
            </div>
            
            <section>
                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-col">
                            <label htmlFor="nome">Nome:</label>
                            <input 
                                type="text" 
                                id="nome" 
                                name="nome" 
                                placeholder="Nome completo" 
                                required 
                                onChange={handleChange}
                            />

                            <label htmlFor="idade">Idade:</label>
                            <input 
                                type="number" 
                                id="idade" 
                                name="idade" 
                                min="0" 
                                max="120"
                                required 
                                onChange={handleChange}
                            />

                            <label htmlFor="documento">Documento:</label>
                            <input 
                                type="text" 
                                id="documento" 
                                name="documento" 
                                placeholder="000.000.000-00"
                                maxLength="20" 
                                required 
                                onChange={handleChange}
                            />

                            <label htmlFor="data_nascimento">Data de Nascimento:</label>
                            <input 
                                type="date" 
                                id="data_nascimento" 
                                name="data_nascimento" 
                                required 
                                onChange={handleChange}
                            />

                            <label htmlFor="sexo">Sexo:</label>
                            <select id="sexo" name="sexo" required onChange={handleChange}>
                                <option value="">Selecione</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                            </select>

                            <label htmlFor="profissao">Profissão:</label>
                            <input 
                                type="text" 
                                id="profissao" 
                                name="profissao" 
                                placeholder="Profissão atual"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-col">
                            <label htmlFor="status">Status:</label>
                            <select id="status" name="status" required onChange={handleChange}>
                                <option value="">Selecione</option>
                                <option value="Ativo">Ativo</option>
                                <option value="Bloqueado">Bloqueado</option>
                            </select>

                            <label htmlFor="tipo_documento">Tipo de Documento:</label>
                            <select id="tipo_documento" name="tipo_documento" required onChange={handleChange}>
                                <option value="">Selecione</option>
                                <option value="RG">RG</option>
                                <option value="CPF">CPF</option>
                            </select>

                            <label htmlFor="codigo_usuario">Código do Usuário:</label>
                            <input 
                                type="text" 
                                id="codigo_usuario" 
                                name="codigo_usuario" 
                                value={formData.codigo_usuario || generateUserCode(formData.nome)}
                                onChange={handleChange}
                                placeholder="Gerado automaticamente"
                            />

                            <label htmlFor="estado_civil">Estado Civil:</label>
                            <select id="estado_civil" name="estado_civil" onChange={handleChange}>
                                <option value="">Selecione</option>
                                <option value="Solteiro">Solteiro</option>
                                <option value="Casado">Casado</option>
                                <option value="Divorciado">Divorciado</option>
                                <option value="Viúvo">Viúvo</option>
                            </select>

                            <label htmlFor="morador_rua">
                                <input 
                                    type="checkbox" 
                                    id="morador_rua" 
                                    name="morador_rua" 
                                    onChange={handleChange}
                                />
                                Morador de Rua
                            </label>
                        </div>
                    </div>

                    <label htmlFor="comentario">Observações:</label>
                    <textarea 
                        name="comentario" 
                        id="comentario" 
                        placeholder="Informações adicionais sobre o paciente" 
                        rows="4"
                        onChange={handleChange}
                    />

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Cadastrando...' : 'Cadastrar Paciente'}
                    </button>
                </form>
            </section>
        </>
    );
}