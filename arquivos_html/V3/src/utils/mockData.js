// 📊 DADOS MOCKADOS COMPLETOS
export const mockPatients = [
    { id: 1, nome: "João Silva Santos", idade: 45, documento: "123.456.789-00", sexo: "Masculino", data_nascimento: "1978-03-15", profissao: "Pedreiro", status: "Ativo", codigo_usuario: "JSS2024", morador_rua: true, created_at: "2024-01-15", estado_civil: "Solteiro", cor_olhos: "Castanho", altura: 1.75, peso: 80 },
    { id: 2, nome: "Maria Oliveira Costa", idade: 38, documento: "987.654.321-00", sexo: "Feminino", data_nascimento: "1985-07-22", profissao: "Diarista", status: "Ativo", codigo_usuario: "MOC2024", morador_rua: false, created_at: "2024-01-14", estado_civil: "Casado", cor_olhos: "Preto", altura: 1.60, peso: 65 },
    { id: 3, nome: "Carlos Eduardo Lima", idade: 52, documento: "456.789.123-00", sexo: "Masculino", data_nascimento: "1971-11-08", profissao: "Desempregado", status: "Ativo", codigo_usuario: "CEL2024", morador_rua: true, created_at: "2024-01-13", estado_civil: "Divorciado", cor_olhos: "Verde", altura: 1.70, peso: 75 },
    { id: 4, nome: "Ana Paula Ferreira", idade: 29, documento: "789.123.456-00", sexo: "Feminino", data_nascimento: "1994-05-12", profissao: "Vendedora", status: "Ativo", codigo_usuario: "APF2024", morador_rua: false, created_at: "2024-01-12", estado_civil: "Solteiro", cor_olhos: "Azul", altura: 1.65, peso: 58 },
    { id: 5, nome: "Roberto Almeida", idade: 61, documento: "321.654.987-00", sexo: "Masculino", data_nascimento: "1962-09-30", profissao: "Aposentado", status: "Ativo", codigo_usuario: "RA2024", morador_rua: true, created_at: "2024-01-11", estado_civil: "Viúvo", cor_olhos: "Castanho", altura: 1.68, peso: 85 },
    { id: 6, nome: "Fernanda Santos", idade: 34, documento: "654.987.321-00", sexo: "Feminino", data_nascimento: "1989-12-03", profissao: "Cozinheira", status: "Ativo", codigo_usuario: "FS2024", morador_rua: false, created_at: "2024-01-10", estado_civil: "Casado", cor_olhos: "Preto", altura: 1.58, peso: 62 },
    { id: 7, nome: "José Carlos Souza", idade: 47, documento: "147.258.369-00", sexo: "Masculino", data_nascimento: "1976-04-18", profissao: "Mecânico", status: "Bloqueado", codigo_usuario: "JCS2024", morador_rua: true, created_at: "2024-01-09", estado_civil: "Solteiro", cor_olhos: "Castanho", altura: 1.72, peso: 78 },
    { id: 8, nome: "Luciana Rodrigues", idade: 26, documento: "258.369.147-00", sexo: "Feminino", data_nascimento: "1997-08-25", profissao: "Estudante", status: "Ativo", codigo_usuario: "LR2024", morador_rua: false, created_at: "2024-01-08", estado_civil: "Solteiro", cor_olhos: "Verde", altura: 1.62, peso: 55 },
    { id: 9, nome: "Pedro Henrique", idade: 33, documento: "369.147.258-00", sexo: "Masculino", data_nascimento: "1990-02-14", profissao: "Garçom", status: "Ativo", codigo_usuario: "PH2024", morador_rua: false, created_at: "2024-01-07", estado_civil: "Solteiro", cor_olhos: "Preto", altura: 1.78, peso: 72 },
    { id: 10, nome: "Carla Mendes", idade: 42, documento: "741.852.963-00", sexo: "Feminino", data_nascimento: "1981-06-30", profissao: "Enfermeira", status: "Ativo", codigo_usuario: "CM2024", morador_rua: false, created_at: "2024-01-06", estado_civil: "Casado", cor_olhos: "Azul", altura: 1.66, peso: 68 }
];

export const mockBenefits = {
    1: [{ nome: "Auxílio Brasil", description: "R$ 400,00 mensais" }, { nome: "Vale Gás", description: "R$ 120,00 bimestral" }],
    2: [{ nome: "Bolsa Família", description: "R$ 350,00 mensais" }],
    3: [{ nome: "BPC/LOAS", description: "1 salário mínimo" }],
    5: [{ nome: "Aposentadoria", description: "R$ 1.320,00 mensais" }],
    6: [{ nome: "Auxílio Brasil", description: "R$ 400,00 mensais" }],
    10: [{ nome: "Vale Alimentação", description: "R$ 200,00 mensais" }]
};

export const mockDependencies = {
    1: [{ nome: "Álcool", description: "Dependência moderada" }],
    3: [{ nome: "Álcool e Drogas", description: "Dependência severa" }],
    7: [{ nome: "Drogas", description: "Crack - dependência severa" }],
    5: [{ nome: "Álcool", description: "Dependência leve" }]
};

export const mockActivities = {
    1: [{ nome: "Oficina Profissionalizante", data: "2024-01-15" }, { nome: "Kit Higiene", data: "2024-01-13" }, { nome: "Distribuição de Alimentação", data: "2024-01-12" }],
    2: [{ nome: "Aconselhamento Psicossocial", data: "2024-01-14" }, { nome: "Atendimento de Saúde", data: "2024-01-10" }],
    3: [{ nome: "Distribuição de Alimentação", data: "2024-01-13" }, { nome: "Kit Higiene", data: "2024-01-11" }],
    4: [{ nome: "Oficina Profissionalizante", data: "2024-01-12" }],
    5: [{ nome: "Atendimento de Saúde", data: "2024-01-11" }, { nome: "Distribuição de Alimentação", data: "2024-01-09" }],
    6: [{ nome: "Aconselhamento Psicossocial", data: "2024-01-10" }],
    7: [{ nome: "Atendimento de Saúde", data: "2024-01-09" }],
    8: [{ nome: "Oficina Profissionalizante", data: "2024-01-08" }],
    9: [{ nome: "Kit Higiene", data: "2024-01-07" }],
    10: [{ nome: "Aconselhamento Psicossocial", data: "2024-01-06" }, { nome: "Atendimento de Saúde", data: "2024-01-05" }]
};