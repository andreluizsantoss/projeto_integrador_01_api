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

A API do S.O.S. Sorocaba fornece recursos completos para o gerenciamento de atendimentos de emergência e dados relacionados. As principais funcionalidades incluem:

- **Gerenciamento de Pacientes**:
  - Cadastro, edição, consulta e listagem de pacientes atendidos.
  - Registro de informações como idade, sexo, profissão, condição de morador de rua, etnia, dados físicos e tipo de documento.

- **Histórico de Atendimentos**:
  - Registro de atividades realizadas com data de atendimento.
  - Integração com tabela de atividades fixas para padronização.

- **Gerenciamento de Benefícios**:
  - Associação de benefícios recebidos por pacientes.
  - Tabela referencial com descrição dos benefícios.

- **Gerenciamento de Dependências**:
  - Registro de dependências associadas a pacientes.
  - Tabela referencial com tipos de dependência.

- **Gerenciamento de Usuários**:
  - Cadastro e autenticação de usuários.

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

6. **Usuário padrão para acesso ao sistema**

   Após a configuração inicial do banco de dados, o sistema já conta com um **usuário administrador padrão** para fins de teste:

   - **Usuário:** `administrador`
   - **Senha:** `administrador`

7. Execute as correções automáticas de linting para padronizar o código (opcional, mas recomendado):

    ```bash
    npm run lint:fix
    ```

8. Para rodar o projeto em modo de desenvolvimento (com suporte a TypeScript):

    ```bash
    npm run dev
    ```

9. Para rodar o projeto já transpilado com Babel (modo de produção):

    1. Gere os arquivos transpilados com o comando:

        ```bash
        npm run build
        ```

    2. Inicie o servidor com os arquivos gerados:

        ```bash
        npm start
        ```

10. A API estará disponível no endereço `http://localhost:3001` (ou na porta configurada).

## Documentação da API (Swagger)

A API conta com uma documentação interativa utilizando **Swagger**, o que facilita a exploração dos endpoints disponíveis, visualização dos parâmetros esperados, respostas possíveis e testes diretos pela interface web.

Após iniciar o servidor local, a documentação estará disponível no seguinte endereço:

[http://localhost:3001/docs](http://localhost:3001/docs)

Essa documentação é útil para desenvolvedores entenderem e integrarem rapidamente os recursos expostos pela API.

## Estrutura do Projeto

```bash
/src
  /@types                   # Tipagens globais (ex: extensão do Express)
  /modules                  # Domínios funcionais da aplicação
    /fixedActivities
      /domain
        /models             # Modelos de domínio (entidades)
        /repositories       # Interfaces dos repositórios
      /infra
        /http
          /controllers      # Lógica de controle das requisições
          /routes           # Definições de rotas
        /repositories       # Implementações dos repositórios
      /services             # Casos de uso (regras de negócio)
    /fixedBenefits
    /fixedDependencies
    /historyActivities
    /patientBenefits
    /patientDependencies
    /patients
    /users
      # Estrutura idêntica ao módulo acima, organizada por domínio
  /shared                   # Recursos compartilhados em toda a aplicação
    /config                 # Configurações gerais (ex: database, env)
    /env                    # Gerenciamento de variáveis de ambiente
    /errors                 # Definições de erros personalizados
    /infra
      /container            # Injeção de dependência (ex: tsyringe)
      /lib                  # Bibliotecas utilitárias reutilizáveis
      /router               # Composição geral de rotas da aplicação
    /middlewares            # Middlewares globais (ex: autenticação, erros)

## Licença

Este projeto é licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
