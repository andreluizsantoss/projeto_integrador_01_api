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
