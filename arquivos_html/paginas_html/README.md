# Páginas HTML Separadas - SOS Sorocaba

## 📁 Estrutura das Páginas

Esta pasta contém todas as páginas do sistema SOS Sorocaba separadas em arquivos HTML individuais, extraídas do arquivo `sistema-completo.html`.

## 📄 Páginas Disponíveis

### 1. **home.html**
- **Função**: Página inicial do sistema
- **Conteúdo**: 
  - Painel de controle com estatísticas
  - Lista de pacientes recentes
  - Cards com números principais

### 2. **dashboard.html**
- **Função**: Dashboard estatístico completo
- **Conteúdo**:
  - Gráficos de distribuição por gênero
  - Gráficos de faixa etária
  - Estatísticas detalhadas
  - Utiliza Chart.js para visualizações

### 3. **cadastro.html**
- **Função**: Formulário de cadastro de novos usuários
- **Conteúdo**:
  - Formulário completo com validações
  - Campos para dados pessoais
  - Geração automática de código de usuário
  - Notificações de sucesso/erro

### 4. **usuarios.html**
- **Função**: Lista e busca de usuários cadastrados
- **Conteúdo**:
  - Tabela com todos os pacientes
  - Sistema de busca por nome, documento ou profissão
  - Filtros e contadores
  - Status badges

### 5. **atividades.html**
- **Função**: Registro de atividades realizadas
- **Conteúdo**:
  - Busca de usuário por ID ou código
  - Seleção múltipla de atividades
  - Dropdown customizado
  - Validações de formulário

### 6. **perfil.html**
- **Função**: Visualização detalhada do perfil do paciente
- **Conteúdo**:
  - Informações pessoais completas
  - Lista de benefícios
  - Dependências registradas
  - Histórico de atividades
  - Opções de edição e impressão

## 🔧 Características Técnicas

### Tecnologias Utilizadas
- **React 18** (via CDN)
- **Babel Standalone** (transpilação no browser)
- **Chart.js** (gráficos - apenas dashboard)
- **CSS** (referência ao forms.css do V2)

### Estrutura de Cada Arquivo
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <!-- Meta tags e imports -->
    <link rel="stylesheet" href="../V2/css/forms.css">
    <!-- Scripts React, Babel, Chart.js -->
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        // Componente específico da página
        // Layout compartilhado
        // App e render
    </script>
</body>
</html>
```

## 🚀 Como Usar

### Execução Individual
1. Abra qualquer arquivo `.html` diretamente no navegador
2. Cada página funciona independentemente
3. Dados são mockados (simulados)

### Integração com API
Para conectar com a API real:
1. Substitua dados mock por chamadas fetch()
2. Configure endpoints da API
3. Adicione tratamento de erros
4. Implemente loading states

## 📊 Dados Mock Incluídos

Cada página contém dados simulados apropriados:
- **Pacientes**: 10 registros com dados completos
- **Benefícios**: Auxílio Brasil, Vale Gás, BPC/LOAS
- **Dependências**: Álcool, Drogas
- **Atividades**: Oficinas, Atendimentos, Distribuições

## 🎯 Próximos Passos

1. **Integração com API**: Substituir dados mock
2. **Navegação**: Adicionar links entre páginas
3. **Autenticação**: Implementar login/logout
4. **Responsividade**: Melhorar para mobile
5. **Deploy**: Configurar para produção

## 📝 Observações

- Cada página é **independente** e **funcional**
- **CSS compartilhado** via referência ao V2
- **Componentes React** inline para simplicidade
- **Pronto para integração** com backend real
- **Estrutura limpa** para manutenção

---

**Data de Criação**: Janeiro 2024  
**Projeto**: SOS Sorocaba - Sistema de Gestão Social  
**Origem**: Extraído de sistema-completo.html