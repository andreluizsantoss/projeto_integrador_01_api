
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
