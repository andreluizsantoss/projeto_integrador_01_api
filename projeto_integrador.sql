-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06/04/2025 às 21:01
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projeto integrador`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `atividadesfixas`
--

CREATE TABLE `atividadesfixas` (
  `codigo` varchar(10) NOT NULL,
  `descricao` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `atividadesfixas`
--

INSERT INTO `atividadesfixas` (`codigo`, `descricao`) VALUES
('U01', 'Café'),
('U02', 'Refeição'),
('U03', 'Higiene pessoal'),
('U04', 'Pernoites'),
('U05', 'At. Técnico Individual'),
('U06', 'At. Técnico em grupo'),
('U07', 'Saída espontânea'),
('U08', 'Saída sugerida'),
('U09', 'Transtorno mental'),
('U10', 'Proibido pernoite'),
('U11', 'Doação de roupas');

-- --------------------------------------------------------

--
-- Estrutura para tabela `beneficiosfixos`
--

CREATE TABLE `beneficiosfixos` (
  `codigo` varchar(10) NOT NULL,
  `descricao` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `beneficiosfixos`
--

INSERT INTO `beneficiosfixos` (`codigo`, `descricao`) VALUES
('B01', 'Não possui'),
('B02', 'Bolsa Família/Auxílio Brasil'),
('B03', 'BCP/LOAS'),
('B04', 'Aposentado/Auxílio Doença');

-- --------------------------------------------------------

--
-- Estrutura para tabela `beneficiospaciente`
--

CREATE TABLE `beneficiospaciente` (
  `id` int(11) NOT NULL,
  `cadastro_id` int(11) NOT NULL,
  `codigo_beneficio` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `beneficiospaciente`
--

INSERT INTO `beneficiospaciente` (`id`, `cadastro_id`, `codigo_beneficio`) VALUES
(1, 1, 'B02');

-- --------------------------------------------------------

--
-- Estrutura para tabela `cadastro`
--

CREATE TABLE `cadastro` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `idade` int(11) NOT NULL,
  `documento` varchar(20) NOT NULL,
  `data_nascimento` date NOT NULL,
  `sexo` enum('Masculino','Feminino','Outro') NOT NULL,
  `estado_civil` enum('Solteiro','Casado','Divorciado','Viúvo','Outro') NOT NULL,
  `profissao` varchar(100) DEFAULT NULL,
  `morador_rua` tinyint(1) DEFAULT NULL,
  `status` enum('Ativo','Bloqueado') NOT NULL,
  `cor_olhos` varchar(50) DEFAULT NULL,
  `cor_cabelo` varchar(50) DEFAULT NULL,
  `altura` decimal(5,2) DEFAULT NULL,
  `peso` decimal(5,2) DEFAULT NULL,
  `etnia` varchar(50) DEFAULT NULL,
  `codigo_usuario` varchar(50) DEFAULT NULL,
  `tipo_documento` enum('RG','CPF') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cadastro`
--

INSERT INTO `cadastro` (`id`, `nome`, `idade`, `documento`, `data_nascimento`, `sexo`, `estado_civil`, `profissao`, `morador_rua`, `status`, `cor_olhos`, `cor_cabelo`, `altura`, `peso`, `etnia`, `codigo_usuario`, `tipo_documento`) VALUES
(1, 'Teste Usuario', 30, '123456789', '1995-01-01', 'Masculino', 'Solteiro', 'Engenheiro', 0, 'Ativo', 'Castanho', 'Preto', 1.75, 70.00, 'Branco', NULL, 'RG'),
(4, 'Thais', 30, '123456771', '1995-01-01', 'Feminino', 'Solteiro', 'Engenheira', 0, 'Ativo', 'Castanho', 'Preto', 1.65, 55.00, 'Branca', 'THA004', 'RG'),
(5, 'Marcos', 42, '12.345.678-9', '1983-07-15', 'Masculino', 'Casado', 'Professor', 0, 'Ativo', 'Azul', 'Loiro', 1.80, 85.00, 'Negro', 'MAR005', 'RG'),
(6, 'Thais', 30, '12345678900', '1995-01-01', 'Feminino', 'Solteiro', 'Engenheira', 0, 'Ativo', 'Castanho', 'Preto', 1.65, 55.00, 'Branca', 'THA006', 'RG');

--
-- Acionadores `cadastro`
--
DELIMITER $$
CREATE TRIGGER `GerarCodigoUsuario` BEFORE INSERT ON `cadastro` FOR EACH ROW BEGIN
    DECLARE nome_anagrama VARCHAR(3);
    DECLARE sequencial INT;

    -- Extrair as três primeiras letras do nome do usuário (em maiúsculas)
    SET nome_anagrama = UPPER(SUBSTRING(NEW.nome, 1, 3));

    -- Atribuir o ID sequencial (neste momento ainda não inserido, usamos NULL safe)
    SET sequencial = COALESCE((SELECT AUTO_INCREMENT
                               FROM information_schema.tables
                               WHERE table_name = 'Cadastro'
                               AND table_schema = DATABASE()), 1);

    -- Gerar o código de identificação (ex.: 'THA001')
    SET NEW.codigo_usuario = CONCAT(nome_anagrama, LPAD(sequencial, 3, '0'));
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `ValidarDocumento` BEFORE INSERT ON `cadastro` FOR EACH ROW BEGIN
    -- Verificar se o documento contém apenas números usando REGEXP
    IF NEW.documento NOT REGEXP '^[0-9]+$' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'O documento deve conter apenas números!';
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `dependenciasfixas`
--

CREATE TABLE `dependenciasfixas` (
  `codigo` varchar(10) NOT NULL,
  `descricao` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `dependenciasfixas`
--

INSERT INTO `dependenciasfixas` (`codigo`, `descricao`) VALUES
('D01', 'Álcool e droga'),
('D02', 'Álcool'),
('D03', 'Droga');

-- --------------------------------------------------------

--
-- Estrutura para tabela `dependenciaspaciente`
--

CREATE TABLE `dependenciaspaciente` (
  `id` int(11) NOT NULL,
  `cadastro_id` int(11) NOT NULL,
  `codigo_dependencia` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `dependenciaspaciente`
--

INSERT INTO `dependenciaspaciente` (`id`, `cadastro_id`, `codigo_dependencia`) VALUES
(1, 1, 'D01');

-- --------------------------------------------------------

--
-- Estrutura para tabela `historicoatividades`
--

CREATE TABLE `historicoatividades` (
  `id` int(11) NOT NULL,
  `cadastro_id` int(11) NOT NULL,
  `codigo_atividade` varchar(10) DEFAULT NULL,
  `data_atendimento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `historicoatividades`
--

INSERT INTO `historicoatividades` (`id`, `cadastro_id`, `codigo_atividade`, `data_atendimento`) VALUES
(1, 1, 'U03', '2025-04-06'),
(2, 1, 'U04', '2025-04-06');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `atividadesfixas`
--
ALTER TABLE `atividadesfixas`
  ADD PRIMARY KEY (`codigo`);

--
-- Índices de tabela `beneficiosfixos`
--
ALTER TABLE `beneficiosfixos`
  ADD PRIMARY KEY (`codigo`);

--
-- Índices de tabela `beneficiospaciente`
--
ALTER TABLE `beneficiospaciente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cadastro_id` (`cadastro_id`),
  ADD KEY `codigo_beneficio` (`codigo_beneficio`);

--
-- Índices de tabela `cadastro`
--
ALTER TABLE `cadastro`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `documento` (`documento`),
  ADD UNIQUE KEY `codigo_usuario` (`codigo_usuario`);

--
-- Índices de tabela `dependenciasfixas`
--
ALTER TABLE `dependenciasfixas`
  ADD PRIMARY KEY (`codigo`);

--
-- Índices de tabela `dependenciaspaciente`
--
ALTER TABLE `dependenciaspaciente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cadastro_id` (`cadastro_id`),
  ADD KEY `codigo_dependencia` (`codigo_dependencia`);

--
-- Índices de tabela `historicoatividades`
--
ALTER TABLE `historicoatividades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cadastro_id` (`cadastro_id`),
  ADD KEY `codigo_atividade` (`codigo_atividade`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `beneficiospaciente`
--
ALTER TABLE `beneficiospaciente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `cadastro`
--
ALTER TABLE `cadastro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `dependenciaspaciente`
--
ALTER TABLE `dependenciaspaciente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `historicoatividades`
--
ALTER TABLE `historicoatividades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `beneficiospaciente`
--
ALTER TABLE `beneficiospaciente`
  ADD CONSTRAINT `beneficiospaciente_ibfk_1` FOREIGN KEY (`cadastro_id`) REFERENCES `cadastro` (`id`),
  ADD CONSTRAINT `beneficiospaciente_ibfk_2` FOREIGN KEY (`codigo_beneficio`) REFERENCES `beneficiosfixos` (`codigo`);

--
-- Restrições para tabelas `dependenciaspaciente`
--
ALTER TABLE `dependenciaspaciente`
  ADD CONSTRAINT `dependenciaspaciente_ibfk_1` FOREIGN KEY (`cadastro_id`) REFERENCES `cadastro` (`id`),
  ADD CONSTRAINT `dependenciaspaciente_ibfk_2` FOREIGN KEY (`codigo_dependencia`) REFERENCES `dependenciasfixas` (`codigo`);

--
-- Restrições para tabelas `historicoatividades`
--
ALTER TABLE `historicoatividades`
  ADD CONSTRAINT `historicoatividades_ibfk_1` FOREIGN KEY (`cadastro_id`) REFERENCES `cadastro` (`id`),
  ADD CONSTRAINT `historicoatividades_ibfk_2` FOREIGN KEY (`codigo_atividade`) REFERENCES `atividadesfixas` (`codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
