<<<<<<< HEAD
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
=======
# API S.O.S. Sorocaba

Este repositório contém a **API** desenvolvida em **TypeScript**, utilizando **MySQL** como banco de dados, para o projeto do **Sistema Web S.O.S. Sorocaba**, que será utilizado pelo Serviço de Atendimento de Emergência (S.O.S.) do município de Sorocaba. O sistema tem como objetivo proporcionar uma plataforma eficiente para o atendimento de emergências e gerenciamento de solicitações da população.

## Sobre o Projeto

Este projeto é um **Projeto Integrador I** do **Curso de Engenharia da Computação** da **UNIVESP** (Universidade Virtual do Estado de São Paulo). O foco principal é criar uma API robusta, escalável e segura que será consumida por um sistema web que atuará diretamente na gestão de atendimentos e serviços de emergência na cidade de Sorocaba.

## Tecnologias Utilizadas

- **Node.js** com **TypeScript**: A API será desenvolvida utilizando o framework Node.js com TypeScript para garantir maior segurança, escalabilidade e organização no código.
- **MySQL**: O banco de dados relacional MySQL será utilizado para armazenar informações sobre atendimentos, usuários, equipes de emergência, entre outras.
- **Express**: O framework Express será utilizado para facilitar a criação das rotas e manipulação das requisições HTTP.
- **Prisma**: ORM para facilitar a interação com o banco de dados MySQL de forma mais organizada e segura.

## Funcionalidades da API

- Cadastro de usuários (administração, atendentes, médicos, etc.).
- Registro e gerenciamento de chamados de emergência.
- Acompanhamento do status dos atendimentos e chamadas.
- Relatórios gerenciais para análise de dados de atendimento.

## Instruções de Instalação

Para rodar este projeto localmente, siga os seguintes passos:

1. Clone este repositório:

    ```bash
    git clone https://github.com/andreluizsantoss/projeto_integrador_01_api.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd projeto_integrador_01_api
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

4. Crie o banco de dados MySQL com a estrutura necessária ou configure a conexão com um banco de dados já existente.

5. Configure o arquivo `.env` com as variáveis de ambiente necessárias, como informações do banco de dados.

6. Para rodar o projeto em modo de desenvolvimento, utilize:

    ```bash
    npm run dev
    ```

7. A API estará disponível no endereço `http://localhost:3000` (ou na porta configurada).

## Estrutura do Projeto

```bash
/src
  /controllers      # Lógica das rotas
  /models           # Definições do banco de dados
  /routes           # Definições das rotas da API
  /services         # Lógica de negócio
  /utils            # Funções utilitárias
```

## Contribuição

1. Faça um fork deste repositório.
2. Crie uma branch com sua feature: `git checkout -b minha-feature`
3. Faça as mudanças e commit: `git commit -m 'Adiciona nova funcionalidade'`
4. Faça push para a branch: `git push origin minha-feature`
5. Abra um Pull Request explicando as alterações.

## Licença

Este projeto é licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
>>>>>>> 7b78b9de0ce45f0f4a4d549408135d0e120aaee3
