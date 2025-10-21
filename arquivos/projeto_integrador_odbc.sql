BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "atividadesfixas" (
	"codigo"	TEXT,
	"descricao"	TEXT NOT NULL,
	PRIMARY KEY("codigo")
);
CREATE TABLE IF NOT EXISTS "beneficiosfixos" (
	"codigo"	TEXT,
	"descricao"	TEXT NOT NULL,
	PRIMARY KEY("codigo")
);
CREATE TABLE IF NOT EXISTS "beneficiospaciente" (
	"id"	INTEGER,
	"cadastro_id"	INTEGER NOT NULL,
	"codigo_beneficio"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("cadastro_id") REFERENCES "cadastro"("id"),
	FOREIGN KEY("codigo_beneficio") REFERENCES "beneficiosfixos"("codigo")
);
CREATE TABLE IF NOT EXISTS "cadastro" (
	"id"	INTEGER,
	"nome"	TEXT NOT NULL,
	"idade"	INTEGER NOT NULL,
	"documento"	TEXT NOT NULL UNIQUE,
	"data_nascimento"	TEXT NOT NULL,
	"sexo"	TEXT NOT NULL,
	"estado_civil"	TEXT NOT NULL,
	"profissao"	TEXT,
	"morador_rua"	INTEGER,
	"status"	TEXT NOT NULL,
	"cor_olhos"	TEXT,
	"cor_cabelo"	TEXT,
	"altura"	REAL,
	"peso"	REAL,
	"etnia"	TEXT,
	"codigo_usuario"	TEXT UNIQUE,
	"tipo_documento"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "dependenciasfixas" (
	"codigo"	TEXT,
	"descricao"	TEXT NOT NULL,
	PRIMARY KEY("codigo")
);
CREATE TABLE IF NOT EXISTS "dependenciaspaciente" (
	"id"	INTEGER,
	"cadastro_id"	INTEGER NOT NULL,
	"codigo_dependencia"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("cadastro_id") REFERENCES "cadastro"("id"),
	FOREIGN KEY("codigo_dependencia") REFERENCES "dependenciasfixas"("codigo")
);
CREATE TABLE IF NOT EXISTS "historicoatividades" (
	"id"	INTEGER,
	"cadastro_id"	INTEGER NOT NULL,
	"codigo_atividade"	TEXT,
	"data_atendimento"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("cadastro_id") REFERENCES "cadastro"("id"),
	FOREIGN KEY("codigo_atividade") REFERENCES "atividadesfixas"("codigo")
);
CREATE TABLE IF NOT EXISTS "usuarios" (
	"id"	INTEGER,
	"nome_completo"	TEXT NOT NULL,
	"usuario"	TEXT NOT NULL UNIQUE,
	"senha"	TEXT NOT NULL,
	"email"	TEXT,
	"perfil"	TEXT NOT NULL DEFAULT 'operador',
	"data_criacao"	TEXT DEFAULT (datetime('now')),
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "atividadesfixas" ("codigo","descricao") VALUES ('U01','Café'),
 ('U02','Refeição'),
 ('U03','Higiene pessoal');
INSERT INTO "beneficiosfixos" ("codigo","descricao") VALUES ('B01','Não possui'),
 ('B02','Bolsa Família/Auxílio Brasil');
INSERT INTO "beneficiospaciente" ("id","cadastro_id","codigo_beneficio") VALUES (1,1,'B02');
INSERT INTO "cadastro" ("id","nome","idade","documento","data_nascimento","sexo","estado_civil","profissao","morador_rua","status","cor_olhos","cor_cabelo","altura","peso","etnia","codigo_usuario","tipo_documento") VALUES (1,'João da Silva',35,'12345678900','1989-01-01','Masculino','Solteiro','Pedreiro',0,'Ativo','Castanho','Preto',1.75,75.5,'Pardo','JOA001','CPF');
INSERT INTO "dependenciasfixas" ("codigo","descricao") VALUES ('D01','Álcool e droga'),
 ('D02','Álcool');
INSERT INTO "dependenciaspaciente" ("id","cadastro_id","codigo_dependencia") VALUES (1,1,'D01');
INSERT INTO "historicoatividades" ("id","cadastro_id","codigo_atividade","data_atendimento") VALUES (1,1,'U01','2025-05-13'),
 (2,1,'U03','2025-05-13');
INSERT INTO "usuarios" ("id","nome_completo","usuario","senha","email","perfil","data_criacao") VALUES (1,'Administrador','admin','senha123','admin@teste.com','admin','2025-05-14 01:16:52');
COMMIT;
