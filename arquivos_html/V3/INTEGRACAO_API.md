# 🔗 Integração com API - SOS Sorocaba V3

## ✅ Arquivos Criados

### 1. **useApi.js** - Hook para API Real
- Substitui `useMockApi.js`
- Conecta com endpoints reais
- Tratamento de erros
- Loading states

### 2. **apiService.js** - Serviço Centralizado
- Classe com todos os métodos da API
- Autenticação JWT automática
- Endpoints organizados por módulo

### 3. **Login.js** - Componente de Autenticação
- Tela de login responsiva
- Credenciais padrão preenchidas
- Validação de erros

## 🔧 Configuração da API

### Base URL
```javascript
const API_BASE_URL = 'http://localhost:3001';
```

### Credenciais Padrão
- **Usuário**: `administrador`
- **Senha**: `administrador`

## 📡 Endpoints Mapeados

### Pacientes
- `GET /patients` - Listar todos
- `GET /patients/:id` - Buscar por ID
- `POST /patients` - Criar novo
- `PUT /patients/:id` - Atualizar
- `DELETE /patients/:id` - Deletar

### Benefícios
- `GET /patient-benefits/:patientId` - Benefícios do paciente
- `POST /patient-benefits` - Adicionar benefício
- `GET /fixed-benefits` - Lista de benefícios

### Dependências
- `GET /patient-dependencies/:patientId` - Dependências do paciente
- `POST /patient-dependencies` - Adicionar dependência
- `GET /fixed-dependencies` - Lista de dependências

### Atividades
- `GET /history-activities/patient/:patientId` - Atividades do paciente
- `POST /history-activities` - Registrar atividade
- `GET /fixed-activities` - Lista de atividades

### Autenticação
- `POST /auth/login` - Login
- `GET /users/me` - Dados do usuário logado

## 🚀 Como Usar

### 1. Iniciar a API
```bash
cd projeto_integrador_01_api
npm install
npm run dev
```

### 2. Verificar Swagger
Acesse: `http://localhost:3001/docs`

### 3. Testar no Frontend
- Abra o V3 no navegador
- Faça login com admin/admin
- Sistema consumirá API real

## 🔄 Migração Completa

### Antes (Mock)
```javascript
const { data } = useMockApi('/patient');
```

### Depois (API Real)
```javascript
const { data } = useApi('/patients');
```

## 🛡️ Autenticação

### JWT Token
- Armazenado no `localStorage`
- Enviado automaticamente nos headers
- Validação automática

### Logout
- Remove token do storage
- Redireciona para login
- Limpa estado da aplicação

## ⚠️ Tratamento de Erros

### Tipos de Erro
- **401**: Token inválido → Logout automático
- **404**: Recurso não encontrado
- **500**: Erro do servidor
- **Network**: Sem conexão

### Exibição
- Loading states durante requisições
- Mensagens de erro amigáveis
- Retry automático em alguns casos

## 📝 Próximos Passos

1. **Testar todos os endpoints** no Postman
2. **Validar estrutura de dados** retornados
3. **Ajustar mapeamentos** se necessário
4. **Implementar cache** para performance
5. **Adicionar offline support**

## 🔍 Debug

### Console Logs
- Erros de API aparecem no console
- Status das requisições
- Dados retornados

### Network Tab
- Verificar requisições HTTP
- Headers de autenticação
- Response codes

---

**Status**: ✅ Pronto para integração  
**Compatibilidade**: Mantém código existente  
**Autenticação**: JWT implementado  
**Documentação**: Swagger disponível