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

## Bibliotecas Utilizadas no Projeto

Descrição das bibliotecas utilizadas no projeto, separando-as entre `dependencies` (dependências de produção) e `devDependencies` (dependências de desenvolvimento), com uma breve explicação da função de cada uma.

---

## 📦 Dependencies

Estas bibliotecas são essenciais para a execução da aplicação em ambiente de produção.

- **@prisma/client**
  Cliente gerado pelo Prisma para interagir com o banco de dados usando TypeScript/JavaScript. É utilizado junto com o ORM Prisma para realizar operações como consultas, inserções e atualizações no banco de dados.

- **bcryptjs**
  Biblioteca para hash e verificação de senhas. Utiliza o algoritmo bcrypt, que é seguro e amplamente adotado.

- **cors**
  Middleware para habilitar CORS (Cross-Origin Resource Sharing), permitindo que sua API seja acessada por outras origens (como o frontend hospedado em domínio diferente).

- **dotenv**
  Carrega variáveis de ambiente de um arquivo `.env` para `process.env`. Facilita a configuração sem precisar codificar dados sensíveis.

- **express**
  Framework minimalista para criação de servidores web e APIs REST. Facilita a criação de rotas e middleware.

- **express-async-errors**
  Permite o tratamento de erros em rotas assíncronas no Express sem necessidade de `try/catch` em cada rota.

- **jsonwebtoken**
  Utilizado para gerar e validar JSON Web Tokens (JWT), geralmente usados para autenticação de usuários.

- **reflect-metadata**
  Fornece suporte a metadados em TypeScript, necessário para a injeção de dependência com `tsyringe` e decoradores.

- **rimraf**
  Comando para deletar arquivos/pastas recursivamente. Usado, por exemplo, para limpar a pasta `dist` antes de builds.

- **swagger-ui-express**
  Middleware para servir documentação Swagger gerada para APIs Express. Gera uma interface web com os endpoints da API.

- **tsyringe**
  Biblioteca leve de injeção de dependência baseada em decorators, útil para desacoplar componentes e facilitar testes.

- **zod**
  Biblioteca de validação e parsing de dados com suporte a tipagem estática. Utilizada para validar objetos, entradas de API, etc.

---

## 🛠️ DevDependencies

Essas bibliotecas são utilizadas apenas durante o desenvolvimento e não são necessárias em produção.

- **@babel/cli, @babel/core, @babel/node**
  Utilizadas para transpilar e executar código TypeScript via Babel. Permitem transformar o código da aplicação para um formato executável pelo Node.js.

- **@babel/plugin-proposal-decorators**
  Suporte para decoradores no TypeScript com Babel. Necessário para uso de bibliotecas como `tsyringe`.

- **@babel/plugin-transform-class-properties**
  Transforma propriedades de classe para código compatível com versões antigas do Node.js.

- **@babel/preset-env**
  Preset Babel que compila o código para uma versão compatível com os ambientes de execução desejados.

- **@babel/preset-typescript**
  Permite que Babel entenda e converta arquivos `.ts` (TypeScript).

- **@types/** (`bcryptjs`, `cors`, `express`, `jsonwebtoken`, `node`, `swagger-ui-express`)
  Pacotes de tipagem TypeScript para bibliotecas JavaScript. Permitem autocomplete, validação de tipos e integração com o editor.

- **@typescript-eslint/eslint-plugin**
  Plugin ESLint para regras específicas do TypeScript.

- **@typescript-eslint/parser**
  Parser que permite que o ESLint entenda o código TypeScript.

- **babel-plugin-module-resolver**
  Plugin que permite utilizar aliases em importações ao invés de caminhos relativos longos (ex: `@/modules/...`).

- **babel-plugin-transform-typescript-metadata**
  Necessário para compatibilidade de metadata com decoradores no Babel + TypeScript.

- **eslint**
  Ferramenta de linting para análise estática do código a fim de encontrar problemas e garantir boas práticas.

- **eslint-config-prettier**
  Desativa regras do ESLint que conflitam com Prettier.

- **eslint-plugin-prettier**
  Integra o Prettier diretamente ao ESLint, permitindo aplicar formatação como regra de linting.

- **prettier**
  Ferramenta de formatação de código automática.

- **prisma**
  CLI do Prisma usada durante o desenvolvimento para gerar cliente, realizar migrações, etc.

- **ts-node-dev**
  Executa projetos TypeScript com reinício automático em mudanças de arquivos (hot reload para dev).

- **tsconfig-paths**
  Suporte a aliases de caminho definidos em `tsconfig.json` em tempo de execução.

- **typescript**
  Linguagem baseada em JavaScript com tipagem estática. Compila para JavaScript.

---

## Observações

- As `dependencies` são instaladas em todos os ambientes (produção e desenvolvimento), pois são usadas em tempo de execução.
- As `devDependencies` são instaladas apenas em ambiente de desenvolvimento, já que são utilizadas em testes, build e ferramentas auxiliares.
