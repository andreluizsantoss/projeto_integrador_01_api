# README: Sistema de Banco de Dados para Projeto Integrador

## Resumo
Este banco de dados foi projetado para gerenciar informações relacionadas ao **Cadastro de Usuários**, **Benefícios**, **Dependências Químicas**, **Histórico de Atividades**, entre outras categorias. A estrutura é relacional, garantindo consistência e eficiência na consulta de dados, sendo ideal para projetos sociais, centros de atendimento ou instituições assistenciais.

---

## Estrutura Geral
O banco de dados é composto pelas seguintes tabelas principais:

1. **Cadastro**: Informações principais dos usuários.
2. **Benefícios Fixos**: Lista de benefícios disponíveis.
3. **Benefícios Paciente**: Relaciona usuários aos benefícios recebidos.
4. **Dependências Fixas**: Lista de tipos de dependências químicas.
5. **Dependências Paciente**: Relaciona usuários às dependências químicas.
6. **Atividades Fixas**: Lista de atividades disponíveis.
7. **Histórico de Atividades**: Registros das atividades realizadas pelos usuários.

---

## Estrutura das Tabelas e Relacionamentos

### 1. Cadastro
Guarda informações principais dos usuários, como dados pessoais e status.
- **Chave Primária**: `id`
- **Colunas**:
  - `codigo_usuario`: Código gerado automaticamente (Anagrama + Sequência).
  - `documento`: Apenas números, validado via trigger.
  - `tipo_documento`: Tipo do documento (RG ou CPF).

### 2. Benefícios Fixos
Lista fixa de benefícios disponíveis no sistema.
- **Chave Primária**: `codigo`
- **Dados**:
  - `B01`: Não possui
  - `B02`: Bolsa Família/Auxílio Brasil
  - `B03`: BCP/LOAS
  - `B04`: Aposentado/Auxílio Doença

### 3. Benefícios Paciente
Relaciona os usuários com os benefícios recebidos.
- **Chave Primária**: `id`
- **Relacionamentos**:
  - Chave estrangeira com `cadastro` (`cadastro_id`).
  - Chave estrangeira com `beneficiosfixos` (`codigo_beneficio`).

### 4. Dependências Fixas
Lista fixa de tipos de dependências químicas.
- **Chave Primária**: `codigo`
- **Dados**:
  - `D01`: Álcool e droga
  - `D02`: Álcool
  - `D03`: Droga

### 5. Dependências Paciente
Relaciona usuários às dependências químicas.
- **Chave Primária**: `id`
- **Relacionamentos**:
  - Chave estrangeira com `cadastro` (`cadastro_id`).
  - Chave estrangeira com `dependenciasfixas` (`codigo_dependencia`).

### 6. Atividades Fixas
Lista fixa de atividades disponíveis no sistema.
- **Chave Primária**: `codigo`
- **Dados**:
  - `U01`: Café
  - `U02`: Refeição
  - `U03`: Higiene pessoal
  - `U04`: Pernoites
  - `U05`: At. Técnico Individual
  - `U06`: At. Técnico em grupo
  - `U07`: Saída espontânea
  - `U08`: Saída sugerida
  - `U09`: Transtorno mental
  - `U10`: Proibido pernoite
  - `U11`: Doação de roupas

### 7. Histórico de Atividades
Registra as atividades realizadas pelos usuários e a data associada.
- **Chave Primária**: `id`
- **Relacionamentos**:
  - Chave estrangeira com `cadastro` (`cadastro_id`).
  - Chave estrangeira com `atividadesfixas` (`codigo_atividade`).

---

## Funcionalidades

1. **Cadastro de Usuários**:
   - Geração automática de códigos únicos para usuários (Ex.: "THA001").
   - Validação para aceitar apenas números no campo `documento`.

2. **Gerenciamento de Benefícios**:
   - Associar múltiplos benefícios a um usuário.

3. **Gerenciamento de Dependências**:
   - Registro das dependências químicas associadas a cada usuário.

4. **Histórico de Atividades**:
   - Registro de todas as atividades realizadas pelos usuários, incluindo data de atendimento.

5. **Códigos Fixos**:
   - Garantia de consistência para benefícios, dependências e atividades.

---

## Requisitos de Tecnologia
- **Servidor de Banco de Dados**: MariaDB 10.4.32 ou superior.
- **Interface de Gerenciamento**: phpMyAdmin 5.2.1 ou equivalente.
- **Ambiente**: PHP 8.2.12 ou superior.

---

## Exemplo de Consultas

### Listar Informações de um Usuário Específico
```sql
SELECT 
    c.id AS "ID do Usuário",
    c.codigo_usuario AS "Código do Usuário",
    c.nome AS "Nome",
    c.documento AS "Documento",
    GROUP_CONCAT(DISTINCT bf.descricao) AS "Benefícios",
    GROUP_CONCAT(DISTINCT df.descricao) AS "Dependências",
    GROUP_CONCAT(DISTINCT af.descricao) AS "Atividades Realizadas",
    MAX(ha.data_atendimento) AS "Última Data de Atendimento"
FROM Cadastro c
LEFT JOIN BeneficiosPaciente bp ON c.id = bp.cadastro_id
LEFT JOIN BeneficiosFixos bf ON bp.codigo_beneficio = bf.codigo
LEFT JOIN DependenciasPaciente dp ON c.id = dp.cadastro_id
LEFT JOIN DependenciasFixas df ON dp.codigo_dependencia = df.codigo
LEFT JOIN HistoricoAtividades ha ON c.id = ha.cadastro_id
LEFT JOIN AtividadesFixas af ON ha.codigo_atividade = af.codigo
WHERE c.id = 1 
GROUP BY c.id;
