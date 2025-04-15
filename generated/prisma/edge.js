
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AtividadesfixasScalarFieldEnum = {
  codigo: 'codigo',
  descricao: 'descricao'
};

exports.Prisma.BeneficiosfixosScalarFieldEnum = {
  codigo: 'codigo',
  descricao: 'descricao'
};

exports.Prisma.BeneficiospacienteScalarFieldEnum = {
  id: 'id',
  cadastro_id: 'cadastro_id',
  codigo_beneficio: 'codigo_beneficio'
};

exports.Prisma.CadastroScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  idade: 'idade',
  documento: 'documento',
  data_nascimento: 'data_nascimento',
  sexo: 'sexo',
  estado_civil: 'estado_civil',
  profissao: 'profissao',
  morador_rua: 'morador_rua',
  status: 'status',
  cor_olhos: 'cor_olhos',
  cor_cabelo: 'cor_cabelo',
  altura: 'altura',
  peso: 'peso',
  etnia: 'etnia',
  codigo_usuario: 'codigo_usuario',
  tipo_documento: 'tipo_documento'
};

exports.Prisma.DependenciasfixasScalarFieldEnum = {
  codigo: 'codigo',
  descricao: 'descricao'
};

exports.Prisma.DependenciaspacienteScalarFieldEnum = {
  id: 'id',
  cadastro_id: 'cadastro_id',
  codigo_dependencia: 'codigo_dependencia'
};

exports.Prisma.HistoricoatividadesScalarFieldEnum = {
  id: 'id',
  cadastro_id: 'cadastro_id',
  codigo_atividade: 'codigo_atividade',
  data_atendimento: 'data_atendimento'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  usuario: 'usuario',
  senha: 'senha',
  refresh_token: 'refresh_token',
  status: 'status'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.atividadesfixasOrderByRelevanceFieldEnum = {
  codigo: 'codigo',
  descricao: 'descricao'
};

exports.Prisma.beneficiosfixosOrderByRelevanceFieldEnum = {
  codigo: 'codigo',
  descricao: 'descricao'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.beneficiospacienteOrderByRelevanceFieldEnum = {
  codigo_beneficio: 'codigo_beneficio'
};

exports.Prisma.cadastroOrderByRelevanceFieldEnum = {
  nome: 'nome',
  documento: 'documento',
  profissao: 'profissao',
  cor_olhos: 'cor_olhos',
  cor_cabelo: 'cor_cabelo',
  etnia: 'etnia',
  codigo_usuario: 'codigo_usuario'
};

exports.Prisma.dependenciasfixasOrderByRelevanceFieldEnum = {
  codigo: 'codigo',
  descricao: 'descricao'
};

exports.Prisma.dependenciaspacienteOrderByRelevanceFieldEnum = {
  codigo_dependencia: 'codigo_dependencia'
};

exports.Prisma.historicoatividadesOrderByRelevanceFieldEnum = {
  codigo_atividade: 'codigo_atividade'
};

exports.Prisma.usuarioOrderByRelevanceFieldEnum = {
  usuario: 'usuario',
  senha: 'senha',
  refresh_token: 'refresh_token',
  status: 'status'
};
exports.cadastro_sexo = exports.$Enums.cadastro_sexo = {
  Masculino: 'Masculino',
  Feminino: 'Feminino',
  Outro: 'Outro'
};

exports.cadastro_estado_civil = exports.$Enums.cadastro_estado_civil = {
  Solteiro: 'Solteiro',
  Casado: 'Casado',
  Divorciado: 'Divorciado',
  Vi_vo: 'Vi_vo',
  Outro: 'Outro'
};

exports.cadastro_status = exports.$Enums.cadastro_status = {
  Ativo: 'Ativo',
  Bloqueado: 'Bloqueado'
};

exports.cadastro_tipo_documento = exports.$Enums.cadastro_tipo_documento = {
  RG: 'RG',
  CPF: 'CPF'
};

exports.Prisma.ModelName = {
  atividadesfixas: 'atividadesfixas',
  beneficiosfixos: 'beneficiosfixos',
  beneficiospaciente: 'beneficiospaciente',
  cadastro: 'cadastro',
  dependenciasfixas: 'dependenciasfixas',
  dependenciaspaciente: 'dependenciaspaciente',
  historicoatividades: 'historicoatividades',
  usuario: 'usuario'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\andre\\Projetos\\projeto_integrador_01_api\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\andre\\Projetos\\projeto_integrador_01_api\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel atividadesfixas {\n  codigo              String                @id @db.VarChar(10)\n  descricao           String                @db.VarChar(255)\n  historicoatividades historicoatividades[]\n}\n\nmodel beneficiosfixos {\n  codigo             String               @id @db.VarChar(10)\n  descricao          String               @db.VarChar(255)\n  beneficiospaciente beneficiospaciente[]\n}\n\nmodel beneficiospaciente {\n  id               Int              @id @default(autoincrement())\n  cadastro_id      Int\n  codigo_beneficio String?          @db.VarChar(10)\n  cadastro         cadastro         @relation(fields: [cadastro_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"beneficiospaciente_ibfk_1\")\n  beneficiosfixos  beneficiosfixos? @relation(fields: [codigo_beneficio], references: [codigo], onDelete: NoAction, onUpdate: NoAction, map: \"beneficiospaciente_ibfk_2\")\n\n  @@index([cadastro_id], map: \"cadastro_id\")\n  @@index([codigo_beneficio], map: \"codigo_beneficio\")\n}\n\nmodel cadastro {\n  id                   Int                     @id @default(autoincrement())\n  nome                 String                  @db.VarChar(255)\n  idade                Int\n  documento            String                  @unique(map: \"documento\") @db.VarChar(20)\n  data_nascimento      DateTime                @db.Date\n  sexo                 cadastro_sexo\n  estado_civil         cadastro_estado_civil\n  profissao            String?                 @db.VarChar(100)\n  morador_rua          Boolean?\n  status               cadastro_status\n  cor_olhos            String?                 @db.VarChar(50)\n  cor_cabelo           String?                 @db.VarChar(50)\n  altura               Decimal?                @db.Decimal(5, 2)\n  peso                 Decimal?                @db.Decimal(5, 2)\n  etnia                String?                 @db.VarChar(50)\n  codigo_usuario       String?                 @unique(map: \"codigo_usuario\") @db.VarChar(50)\n  tipo_documento       cadastro_tipo_documento\n  beneficiospaciente   beneficiospaciente[]\n  dependenciaspaciente dependenciaspaciente[]\n  historicoatividades  historicoatividades[]\n}\n\nmodel dependenciasfixas {\n  codigo               String                 @id @db.VarChar(10)\n  descricao            String                 @db.VarChar(255)\n  dependenciaspaciente dependenciaspaciente[]\n}\n\nmodel dependenciaspaciente {\n  id                 Int                @id @default(autoincrement())\n  cadastro_id        Int\n  codigo_dependencia String?            @db.VarChar(10)\n  cadastro           cadastro           @relation(fields: [cadastro_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"dependenciaspaciente_ibfk_1\")\n  dependenciasfixas  dependenciasfixas? @relation(fields: [codigo_dependencia], references: [codigo], onDelete: NoAction, onUpdate: NoAction, map: \"dependenciaspaciente_ibfk_2\")\n\n  @@index([cadastro_id], map: \"cadastro_id\")\n  @@index([codigo_dependencia], map: \"codigo_dependencia\")\n}\n\nmodel historicoatividades {\n  id               Int              @id @default(autoincrement())\n  cadastro_id      Int\n  codigo_atividade String?          @db.VarChar(10)\n  data_atendimento DateTime         @db.Date\n  cadastro         cadastro         @relation(fields: [cadastro_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"historicoatividades_ibfk_1\")\n  atividadesfixas  atividadesfixas? @relation(fields: [codigo_atividade], references: [codigo], onDelete: NoAction, onUpdate: NoAction, map: \"historicoatividades_ibfk_2\")\n\n  @@index([cadastro_id], map: \"cadastro_id\")\n  @@index([codigo_atividade], map: \"codigo_atividade\")\n}\n\nmodel usuario {\n  id            Int     @id @default(autoincrement())\n  usuario       String  @unique(map: \"usuario_UNIQUE\") @db.VarChar(80)\n  senha         String  @db.VarChar(20)\n  refresh_token String? @db.Text\n  status        String  @db.VarChar(15)\n}\n\nenum cadastro_sexo {\n  Masculino\n  Feminino\n  Outro\n}\n\nenum cadastro_estado_civil {\n  Solteiro\n  Casado\n  Divorciado\n  Vi_vo      @map(\"Viúvo\")\n  Outro\n}\n\nenum cadastro_status {\n  Ativo\n  Bloqueado\n}\n\nenum cadastro_tipo_documento {\n  RG\n  CPF\n}\n",
  "inlineSchemaHash": "24de19da673276973375ce72940d8623a75dfa58b46d92c730747bae3807ac55",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"atividadesfixas\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"historicoatividades\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"historicoatividades\",\"nativeType\":null,\"relationName\":\"atividadesfixasTohistoricoatividades\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"beneficiosfixos\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"beneficiospaciente\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"beneficiospaciente\",\"nativeType\":null,\"relationName\":\"beneficiosfixosTobeneficiospaciente\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"beneficiospaciente\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cadastro_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo_beneficio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cadastro\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cadastro\",\"nativeType\":null,\"relationName\":\"beneficiospacienteTocadastro\",\"relationFromFields\":[\"cadastro_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"beneficiosfixos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"beneficiosfixos\",\"nativeType\":null,\"relationName\":\"beneficiosfixosTobeneficiospaciente\",\"relationFromFields\":[\"codigo_beneficio\"],\"relationToFields\":[\"codigo\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cadastro\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_nascimento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sexo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cadastro_sexo\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado_civil\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cadastro_estado_civil\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profissao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"morador_rua\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cadastro_status\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cor_olhos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cor_cabelo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"altura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"5\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"peso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"5\",\"2\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"etnia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_documento\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cadastro_tipo_documento\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"beneficiospaciente\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"beneficiospaciente\",\"nativeType\":null,\"relationName\":\"beneficiospacienteTocadastro\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependenciaspaciente\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dependenciaspaciente\",\"nativeType\":null,\"relationName\":\"cadastroTodependenciaspaciente\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"historicoatividades\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"historicoatividades\",\"nativeType\":null,\"relationName\":\"cadastroTohistoricoatividades\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dependenciasfixas\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependenciaspaciente\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dependenciaspaciente\",\"nativeType\":null,\"relationName\":\"dependenciasfixasTodependenciaspaciente\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"dependenciaspaciente\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cadastro_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo_dependencia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cadastro\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cadastro\",\"nativeType\":null,\"relationName\":\"cadastroTodependenciaspaciente\",\"relationFromFields\":[\"cadastro_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependenciasfixas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dependenciasfixas\",\"nativeType\":null,\"relationName\":\"dependenciasfixasTodependenciaspaciente\",\"relationFromFields\":[\"codigo_dependencia\"],\"relationToFields\":[\"codigo\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"historicoatividades\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cadastro_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo_atividade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_atendimento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cadastro\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cadastro\",\"nativeType\":null,\"relationName\":\"cadastroTohistoricoatividades\",\"relationFromFields\":[\"cadastro_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"atividadesfixas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"atividadesfixas\",\"nativeType\":null,\"relationName\":\"atividadesfixasTohistoricoatividades\",\"relationFromFields\":[\"codigo_atividade\"],\"relationToFields\":[\"codigo\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuario\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"80\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"15\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"cadastro_sexo\":{\"values\":[{\"name\":\"Masculino\",\"dbName\":null},{\"name\":\"Feminino\",\"dbName\":null},{\"name\":\"Outro\",\"dbName\":null}],\"dbName\":null},\"cadastro_estado_civil\":{\"values\":[{\"name\":\"Solteiro\",\"dbName\":null},{\"name\":\"Casado\",\"dbName\":null},{\"name\":\"Divorciado\",\"dbName\":null},{\"name\":\"Vi_vo\",\"dbName\":\"Viúvo\"},{\"name\":\"Outro\",\"dbName\":null}],\"dbName\":null},\"cadastro_status\":{\"values\":[{\"name\":\"Ativo\",\"dbName\":null},{\"name\":\"Bloqueado\",\"dbName\":null}],\"dbName\":null},\"cadastro_tipo_documento\":{\"values\":[{\"name\":\"RG\",\"dbName\":null},{\"name\":\"CPF\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

