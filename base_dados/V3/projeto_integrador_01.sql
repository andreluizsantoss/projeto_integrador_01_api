-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: nozomi.proxy.rlwy.net    Database: railway
-- ------------------------------------------------------
-- Server version	9.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `atividadesfixas`
--

DROP TABLE IF EXISTS `atividadesfixas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atividadesfixas` (
  `codigo` varchar(10) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atividadesfixas`
--

LOCK TABLES `atividadesfixas` WRITE;
/*!40000 ALTER TABLE `atividadesfixas` DISABLE KEYS */;
INSERT INTO `atividadesfixas` VALUES ('U01','Café'),('U02','Refeição'),('U03','Higiene pessoal');
/*!40000 ALTER TABLE `atividadesfixas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `beneficiosfixos`
--

DROP TABLE IF EXISTS `beneficiosfixos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `beneficiosfixos` (
  `codigo` varchar(10) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beneficiosfixos`
--

LOCK TABLES `beneficiosfixos` WRITE;
/*!40000 ALTER TABLE `beneficiosfixos` DISABLE KEYS */;
INSERT INTO `beneficiosfixos` VALUES ('B01','Não possui'),('B02','Bolsa Família/Auxílio Brasil');
/*!40000 ALTER TABLE `beneficiosfixos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `beneficiospaciente`
--

DROP TABLE IF EXISTS `beneficiospaciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `beneficiospaciente` (
  `id` int NOT NULL,
  `cadastro_id` int NOT NULL,
  `codigo_beneficio` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cadastro_id` (`cadastro_id`),
  KEY `codigo_beneficio` (`codigo_beneficio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beneficiospaciente`
--

LOCK TABLES `beneficiospaciente` WRITE;
/*!40000 ALTER TABLE `beneficiospaciente` DISABLE KEYS */;
INSERT INTO `beneficiospaciente` VALUES (1,1,'B02');
/*!40000 ALTER TABLE `beneficiospaciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro`
--

DROP TABLE IF EXISTS `cadastro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cadastro` (
  `id` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `idade` int NOT NULL,
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
  `tipo_documento` enum('RG','CPF') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `documento` (`documento`),
  UNIQUE KEY `codigo_usuario` (`codigo_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro`
--

LOCK TABLES `cadastro` WRITE;
/*!40000 ALTER TABLE `cadastro` DISABLE KEYS */;
INSERT INTO `cadastro` VALUES (1,'João da Silva',35,'12345678900','1989-01-01','Masculino','Solteiro','Pedreiro',0,'Ativo','Castanho','Preto',1.75,75.50,'Pardo','JOÃ001','CPF');
/*!40000 ALTER TABLE `cadastro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dependenciasfixas`
--

DROP TABLE IF EXISTS `dependenciasfixas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dependenciasfixas` (
  `codigo` varchar(10) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dependenciasfixas`
--

LOCK TABLES `dependenciasfixas` WRITE;
/*!40000 ALTER TABLE `dependenciasfixas` DISABLE KEYS */;
INSERT INTO `dependenciasfixas` VALUES ('D01','Álcool e droga'),('D02','Álcool');
/*!40000 ALTER TABLE `dependenciasfixas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dependenciaspaciente`
--

DROP TABLE IF EXISTS `dependenciaspaciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dependenciaspaciente` (
  `id` int NOT NULL,
  `cadastro_id` int NOT NULL,
  `codigo_dependencia` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cadastro_id` (`cadastro_id`),
  KEY `codigo_dependencia` (`codigo_dependencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dependenciaspaciente`
--

LOCK TABLES `dependenciaspaciente` WRITE;
/*!40000 ALTER TABLE `dependenciaspaciente` DISABLE KEYS */;
INSERT INTO `dependenciaspaciente` VALUES (1,1,'D01');
/*!40000 ALTER TABLE `dependenciaspaciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historicoatividades`
--

DROP TABLE IF EXISTS `historicoatividades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historicoatividades` (
  `id` int NOT NULL,
  `cadastro_id` int NOT NULL,
  `codigo_atividade` varchar(10) DEFAULT NULL,
  `data_atendimento` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cadastro_id` (`cadastro_id`),
  KEY `codigo_atividade` (`codigo_atividade`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historicoatividades`
--

LOCK TABLES `historicoatividades` WRITE;
/*!40000 ALTER TABLE `historicoatividades` DISABLE KEYS */;
INSERT INTO `historicoatividades` VALUES (1,1,'U01','2025-05-13'),(2,1,'U03','2025-05-13');
/*!40000 ALTER TABLE `historicoatividades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` enum('Ativo','Bloqueado') NOT NULL,
  `nome_completo` varchar(255) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `senha` text NOT NULL,
  `email` varchar(150) NOT NULL,
  `perfil` enum('admin','operador') NOT NULL DEFAULT 'operador',
  `refresh_token` text,
  `data_criacao` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario_UNIQUE` (`usuario`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Ativo','Administrador','administrador','$2a$10$U.fVrFtrcqCeTwyhbx1scu/n5Pou7PJajPh3DtO2zAA6c3Ti3fGG.','exemplo@email.com','admin',NULL,'2025-10-21');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-22 11:09:19
