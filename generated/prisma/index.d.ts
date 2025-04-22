
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model atividadesfixas
 * 
 */
export type atividadesfixas = $Result.DefaultSelection<Prisma.$atividadesfixasPayload>
/**
 * Model beneficiosfixos
 * 
 */
export type beneficiosfixos = $Result.DefaultSelection<Prisma.$beneficiosfixosPayload>
/**
 * Model beneficiospaciente
 * 
 */
export type beneficiospaciente = $Result.DefaultSelection<Prisma.$beneficiospacientePayload>
/**
 * Model cadastro
 * 
 */
export type cadastro = $Result.DefaultSelection<Prisma.$cadastroPayload>
/**
 * Model dependenciasfixas
 * 
 */
export type dependenciasfixas = $Result.DefaultSelection<Prisma.$dependenciasfixasPayload>
/**
 * Model dependenciaspaciente
 * 
 */
export type dependenciaspaciente = $Result.DefaultSelection<Prisma.$dependenciaspacientePayload>
/**
 * Model historicoatividades
 * 
 */
export type historicoatividades = $Result.DefaultSelection<Prisma.$historicoatividadesPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const cadastro_sexo: {
  Masculino: 'Masculino',
  Feminino: 'Feminino',
  Outro: 'Outro'
};

export type cadastro_sexo = (typeof cadastro_sexo)[keyof typeof cadastro_sexo]


export const cadastro_estado_civil: {
  Solteiro: 'Solteiro',
  Casado: 'Casado',
  Divorciado: 'Divorciado',
  Vi_vo: 'Vi_vo',
  Outro: 'Outro'
};

export type cadastro_estado_civil = (typeof cadastro_estado_civil)[keyof typeof cadastro_estado_civil]


export const cadastro_status: {
  Ativo: 'Ativo',
  Bloqueado: 'Bloqueado'
};

export type cadastro_status = (typeof cadastro_status)[keyof typeof cadastro_status]


export const cadastro_tipo_documento: {
  RG: 'RG',
  CPF: 'CPF'
};

export type cadastro_tipo_documento = (typeof cadastro_tipo_documento)[keyof typeof cadastro_tipo_documento]

}

export type cadastro_sexo = $Enums.cadastro_sexo

export const cadastro_sexo: typeof $Enums.cadastro_sexo

export type cadastro_estado_civil = $Enums.cadastro_estado_civil

export const cadastro_estado_civil: typeof $Enums.cadastro_estado_civil

export type cadastro_status = $Enums.cadastro_status

export const cadastro_status: typeof $Enums.cadastro_status

export type cadastro_tipo_documento = $Enums.cadastro_tipo_documento

export const cadastro_tipo_documento: typeof $Enums.cadastro_tipo_documento

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Atividadesfixas
 * const atividadesfixas = await prisma.atividadesfixas.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Atividadesfixas
   * const atividadesfixas = await prisma.atividadesfixas.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.atividadesfixas`: Exposes CRUD operations for the **atividadesfixas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atividadesfixas
    * const atividadesfixas = await prisma.atividadesfixas.findMany()
    * ```
    */
  get atividadesfixas(): Prisma.atividadesfixasDelegate<ExtArgs>;

  /**
   * `prisma.beneficiosfixos`: Exposes CRUD operations for the **beneficiosfixos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beneficiosfixos
    * const beneficiosfixos = await prisma.beneficiosfixos.findMany()
    * ```
    */
  get beneficiosfixos(): Prisma.beneficiosfixosDelegate<ExtArgs>;

  /**
   * `prisma.beneficiospaciente`: Exposes CRUD operations for the **beneficiospaciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beneficiospacientes
    * const beneficiospacientes = await prisma.beneficiospaciente.findMany()
    * ```
    */
  get beneficiospaciente(): Prisma.beneficiospacienteDelegate<ExtArgs>;

  /**
   * `prisma.cadastro`: Exposes CRUD operations for the **cadastro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cadastros
    * const cadastros = await prisma.cadastro.findMany()
    * ```
    */
  get cadastro(): Prisma.cadastroDelegate<ExtArgs>;

  /**
   * `prisma.dependenciasfixas`: Exposes CRUD operations for the **dependenciasfixas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dependenciasfixas
    * const dependenciasfixas = await prisma.dependenciasfixas.findMany()
    * ```
    */
  get dependenciasfixas(): Prisma.dependenciasfixasDelegate<ExtArgs>;

  /**
   * `prisma.dependenciaspaciente`: Exposes CRUD operations for the **dependenciaspaciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dependenciaspacientes
    * const dependenciaspacientes = await prisma.dependenciaspaciente.findMany()
    * ```
    */
  get dependenciaspaciente(): Prisma.dependenciaspacienteDelegate<ExtArgs>;

  /**
   * `prisma.historicoatividades`: Exposes CRUD operations for the **historicoatividades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historicoatividades
    * const historicoatividades = await prisma.historicoatividades.findMany()
    * ```
    */
  get historicoatividades(): Prisma.historicoatividadesDelegate<ExtArgs>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    atividadesfixas: 'atividadesfixas',
    beneficiosfixos: 'beneficiosfixos',
    beneficiospaciente: 'beneficiospaciente',
    cadastro: 'cadastro',
    dependenciasfixas: 'dependenciasfixas',
    dependenciaspaciente: 'dependenciaspaciente',
    historicoatividades: 'historicoatividades',
    usuario: 'usuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "atividadesfixas" | "beneficiosfixos" | "beneficiospaciente" | "cadastro" | "dependenciasfixas" | "dependenciaspaciente" | "historicoatividades" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      atividadesfixas: {
        payload: Prisma.$atividadesfixasPayload<ExtArgs>
        fields: Prisma.atividadesfixasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.atividadesfixasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadesfixasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.atividadesfixasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadesfixasPayload>
          }
          findFirst: {
            args: Prisma.atividadesfixasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadesfixasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.atividadesfixasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadesfixasPayload>
          }
          findMany: {
            args: Prisma.atividadesfixasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadesfixasPayload>[]
          }
          create: {
            args: Prisma.atividadesfixasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadesfixasPayload>
          }
          createMany: {
            args: Prisma.atividadesfixasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.atividadesfixasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadesfixasPayload>
          }
          update: {
            args: Prisma.atividadesfixasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadesfixasPayload>
          }
          deleteMany: {
            args: Prisma.atividadesfixasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.atividadesfixasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.atividadesfixasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$atividadesfixasPayload>
          }
          aggregate: {
            args: Prisma.AtividadesfixasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtividadesfixas>
          }
          groupBy: {
            args: Prisma.atividadesfixasGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtividadesfixasGroupByOutputType>[]
          }
          count: {
            args: Prisma.atividadesfixasCountArgs<ExtArgs>
            result: $Utils.Optional<AtividadesfixasCountAggregateOutputType> | number
          }
        }
      }
      beneficiosfixos: {
        payload: Prisma.$beneficiosfixosPayload<ExtArgs>
        fields: Prisma.beneficiosfixosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.beneficiosfixosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiosfixosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.beneficiosfixosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiosfixosPayload>
          }
          findFirst: {
            args: Prisma.beneficiosfixosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiosfixosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.beneficiosfixosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiosfixosPayload>
          }
          findMany: {
            args: Prisma.beneficiosfixosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiosfixosPayload>[]
          }
          create: {
            args: Prisma.beneficiosfixosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiosfixosPayload>
          }
          createMany: {
            args: Prisma.beneficiosfixosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.beneficiosfixosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiosfixosPayload>
          }
          update: {
            args: Prisma.beneficiosfixosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiosfixosPayload>
          }
          deleteMany: {
            args: Prisma.beneficiosfixosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.beneficiosfixosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.beneficiosfixosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiosfixosPayload>
          }
          aggregate: {
            args: Prisma.BeneficiosfixosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeneficiosfixos>
          }
          groupBy: {
            args: Prisma.beneficiosfixosGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeneficiosfixosGroupByOutputType>[]
          }
          count: {
            args: Prisma.beneficiosfixosCountArgs<ExtArgs>
            result: $Utils.Optional<BeneficiosfixosCountAggregateOutputType> | number
          }
        }
      }
      beneficiospaciente: {
        payload: Prisma.$beneficiospacientePayload<ExtArgs>
        fields: Prisma.beneficiospacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.beneficiospacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiospacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.beneficiospacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiospacientePayload>
          }
          findFirst: {
            args: Prisma.beneficiospacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiospacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.beneficiospacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiospacientePayload>
          }
          findMany: {
            args: Prisma.beneficiospacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiospacientePayload>[]
          }
          create: {
            args: Prisma.beneficiospacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiospacientePayload>
          }
          createMany: {
            args: Prisma.beneficiospacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.beneficiospacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiospacientePayload>
          }
          update: {
            args: Prisma.beneficiospacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiospacientePayload>
          }
          deleteMany: {
            args: Prisma.beneficiospacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.beneficiospacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.beneficiospacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiospacientePayload>
          }
          aggregate: {
            args: Prisma.BeneficiospacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeneficiospaciente>
          }
          groupBy: {
            args: Prisma.beneficiospacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeneficiospacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.beneficiospacienteCountArgs<ExtArgs>
            result: $Utils.Optional<BeneficiospacienteCountAggregateOutputType> | number
          }
        }
      }
      cadastro: {
        payload: Prisma.$cadastroPayload<ExtArgs>
        fields: Prisma.cadastroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cadastroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cadastroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>
          }
          findFirst: {
            args: Prisma.cadastroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cadastroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>
          }
          findMany: {
            args: Prisma.cadastroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>[]
          }
          create: {
            args: Prisma.cadastroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>
          }
          createMany: {
            args: Prisma.cadastroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cadastroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>
          }
          update: {
            args: Prisma.cadastroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>
          }
          deleteMany: {
            args: Prisma.cadastroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cadastroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cadastroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastroPayload>
          }
          aggregate: {
            args: Prisma.CadastroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCadastro>
          }
          groupBy: {
            args: Prisma.cadastroGroupByArgs<ExtArgs>
            result: $Utils.Optional<CadastroGroupByOutputType>[]
          }
          count: {
            args: Prisma.cadastroCountArgs<ExtArgs>
            result: $Utils.Optional<CadastroCountAggregateOutputType> | number
          }
        }
      }
      dependenciasfixas: {
        payload: Prisma.$dependenciasfixasPayload<ExtArgs>
        fields: Prisma.dependenciasfixasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dependenciasfixasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciasfixasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dependenciasfixasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciasfixasPayload>
          }
          findFirst: {
            args: Prisma.dependenciasfixasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciasfixasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dependenciasfixasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciasfixasPayload>
          }
          findMany: {
            args: Prisma.dependenciasfixasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciasfixasPayload>[]
          }
          create: {
            args: Prisma.dependenciasfixasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciasfixasPayload>
          }
          createMany: {
            args: Prisma.dependenciasfixasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.dependenciasfixasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciasfixasPayload>
          }
          update: {
            args: Prisma.dependenciasfixasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciasfixasPayload>
          }
          deleteMany: {
            args: Prisma.dependenciasfixasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dependenciasfixasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dependenciasfixasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciasfixasPayload>
          }
          aggregate: {
            args: Prisma.DependenciasfixasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDependenciasfixas>
          }
          groupBy: {
            args: Prisma.dependenciasfixasGroupByArgs<ExtArgs>
            result: $Utils.Optional<DependenciasfixasGroupByOutputType>[]
          }
          count: {
            args: Prisma.dependenciasfixasCountArgs<ExtArgs>
            result: $Utils.Optional<DependenciasfixasCountAggregateOutputType> | number
          }
        }
      }
      dependenciaspaciente: {
        payload: Prisma.$dependenciaspacientePayload<ExtArgs>
        fields: Prisma.dependenciaspacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dependenciaspacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciaspacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dependenciaspacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciaspacientePayload>
          }
          findFirst: {
            args: Prisma.dependenciaspacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciaspacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dependenciaspacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciaspacientePayload>
          }
          findMany: {
            args: Prisma.dependenciaspacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciaspacientePayload>[]
          }
          create: {
            args: Prisma.dependenciaspacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciaspacientePayload>
          }
          createMany: {
            args: Prisma.dependenciaspacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.dependenciaspacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciaspacientePayload>
          }
          update: {
            args: Prisma.dependenciaspacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciaspacientePayload>
          }
          deleteMany: {
            args: Prisma.dependenciaspacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dependenciaspacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dependenciaspacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dependenciaspacientePayload>
          }
          aggregate: {
            args: Prisma.DependenciaspacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDependenciaspaciente>
          }
          groupBy: {
            args: Prisma.dependenciaspacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DependenciaspacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.dependenciaspacienteCountArgs<ExtArgs>
            result: $Utils.Optional<DependenciaspacienteCountAggregateOutputType> | number
          }
        }
      }
      historicoatividades: {
        payload: Prisma.$historicoatividadesPayload<ExtArgs>
        fields: Prisma.historicoatividadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historicoatividadesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoatividadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historicoatividadesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoatividadesPayload>
          }
          findFirst: {
            args: Prisma.historicoatividadesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoatividadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historicoatividadesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoatividadesPayload>
          }
          findMany: {
            args: Prisma.historicoatividadesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoatividadesPayload>[]
          }
          create: {
            args: Prisma.historicoatividadesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoatividadesPayload>
          }
          createMany: {
            args: Prisma.historicoatividadesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.historicoatividadesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoatividadesPayload>
          }
          update: {
            args: Prisma.historicoatividadesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoatividadesPayload>
          }
          deleteMany: {
            args: Prisma.historicoatividadesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.historicoatividadesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.historicoatividadesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historicoatividadesPayload>
          }
          aggregate: {
            args: Prisma.HistoricoatividadesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoricoatividades>
          }
          groupBy: {
            args: Prisma.historicoatividadesGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoricoatividadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.historicoatividadesCountArgs<ExtArgs>
            result: $Utils.Optional<HistoricoatividadesCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AtividadesfixasCountOutputType
   */

  export type AtividadesfixasCountOutputType = {
    historicoatividades: number
  }

  export type AtividadesfixasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoatividades?: boolean | AtividadesfixasCountOutputTypeCountHistoricoatividadesArgs
  }

  // Custom InputTypes
  /**
   * AtividadesfixasCountOutputType without action
   */
  export type AtividadesfixasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtividadesfixasCountOutputType
     */
    select?: AtividadesfixasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AtividadesfixasCountOutputType without action
   */
  export type AtividadesfixasCountOutputTypeCountHistoricoatividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historicoatividadesWhereInput
  }


  /**
   * Count Type BeneficiosfixosCountOutputType
   */

  export type BeneficiosfixosCountOutputType = {
    beneficiospaciente: number
  }

  export type BeneficiosfixosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiospaciente?: boolean | BeneficiosfixosCountOutputTypeCountBeneficiospacienteArgs
  }

  // Custom InputTypes
  /**
   * BeneficiosfixosCountOutputType without action
   */
  export type BeneficiosfixosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiosfixosCountOutputType
     */
    select?: BeneficiosfixosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BeneficiosfixosCountOutputType without action
   */
  export type BeneficiosfixosCountOutputTypeCountBeneficiospacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: beneficiospacienteWhereInput
  }


  /**
   * Count Type CadastroCountOutputType
   */

  export type CadastroCountOutputType = {
    beneficiospaciente: number
    dependenciaspaciente: number
    historicoatividades: number
  }

  export type CadastroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiospaciente?: boolean | CadastroCountOutputTypeCountBeneficiospacienteArgs
    dependenciaspaciente?: boolean | CadastroCountOutputTypeCountDependenciaspacienteArgs
    historicoatividades?: boolean | CadastroCountOutputTypeCountHistoricoatividadesArgs
  }

  // Custom InputTypes
  /**
   * CadastroCountOutputType without action
   */
  export type CadastroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastroCountOutputType
     */
    select?: CadastroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CadastroCountOutputType without action
   */
  export type CadastroCountOutputTypeCountBeneficiospacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: beneficiospacienteWhereInput
  }

  /**
   * CadastroCountOutputType without action
   */
  export type CadastroCountOutputTypeCountDependenciaspacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dependenciaspacienteWhereInput
  }

  /**
   * CadastroCountOutputType without action
   */
  export type CadastroCountOutputTypeCountHistoricoatividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historicoatividadesWhereInput
  }


  /**
   * Count Type DependenciasfixasCountOutputType
   */

  export type DependenciasfixasCountOutputType = {
    dependenciaspaciente: number
  }

  export type DependenciasfixasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dependenciaspaciente?: boolean | DependenciasfixasCountOutputTypeCountDependenciaspacienteArgs
  }

  // Custom InputTypes
  /**
   * DependenciasfixasCountOutputType without action
   */
  export type DependenciasfixasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DependenciasfixasCountOutputType
     */
    select?: DependenciasfixasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DependenciasfixasCountOutputType without action
   */
  export type DependenciasfixasCountOutputTypeCountDependenciaspacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dependenciaspacienteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model atividadesfixas
   */

  export type AggregateAtividadesfixas = {
    _count: AtividadesfixasCountAggregateOutputType | null
    _min: AtividadesfixasMinAggregateOutputType | null
    _max: AtividadesfixasMaxAggregateOutputType | null
  }

  export type AtividadesfixasMinAggregateOutputType = {
    codigo: string | null
    descricao: string | null
  }

  export type AtividadesfixasMaxAggregateOutputType = {
    codigo: string | null
    descricao: string | null
  }

  export type AtividadesfixasCountAggregateOutputType = {
    codigo: number
    descricao: number
    _all: number
  }


  export type AtividadesfixasMinAggregateInputType = {
    codigo?: true
    descricao?: true
  }

  export type AtividadesfixasMaxAggregateInputType = {
    codigo?: true
    descricao?: true
  }

  export type AtividadesfixasCountAggregateInputType = {
    codigo?: true
    descricao?: true
    _all?: true
  }

  export type AtividadesfixasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which atividadesfixas to aggregate.
     */
    where?: atividadesfixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividadesfixas to fetch.
     */
    orderBy?: atividadesfixasOrderByWithRelationInput | atividadesfixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: atividadesfixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividadesfixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividadesfixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned atividadesfixas
    **/
    _count?: true | AtividadesfixasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtividadesfixasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtividadesfixasMaxAggregateInputType
  }

  export type GetAtividadesfixasAggregateType<T extends AtividadesfixasAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividadesfixas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividadesfixas[P]>
      : GetScalarType<T[P], AggregateAtividadesfixas[P]>
  }




  export type atividadesfixasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: atividadesfixasWhereInput
    orderBy?: atividadesfixasOrderByWithAggregationInput | atividadesfixasOrderByWithAggregationInput[]
    by: AtividadesfixasScalarFieldEnum[] | AtividadesfixasScalarFieldEnum
    having?: atividadesfixasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtividadesfixasCountAggregateInputType | true
    _min?: AtividadesfixasMinAggregateInputType
    _max?: AtividadesfixasMaxAggregateInputType
  }

  export type AtividadesfixasGroupByOutputType = {
    codigo: string
    descricao: string
    _count: AtividadesfixasCountAggregateOutputType | null
    _min: AtividadesfixasMinAggregateOutputType | null
    _max: AtividadesfixasMaxAggregateOutputType | null
  }

  type GetAtividadesfixasGroupByPayload<T extends atividadesfixasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtividadesfixasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtividadesfixasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtividadesfixasGroupByOutputType[P]>
            : GetScalarType<T[P], AtividadesfixasGroupByOutputType[P]>
        }
      >
    >


  export type atividadesfixasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    descricao?: boolean
    historicoatividades?: boolean | atividadesfixas$historicoatividadesArgs<ExtArgs>
    _count?: boolean | AtividadesfixasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atividadesfixas"]>


  export type atividadesfixasSelectScalar = {
    codigo?: boolean
    descricao?: boolean
  }

  export type atividadesfixasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historicoatividades?: boolean | atividadesfixas$historicoatividadesArgs<ExtArgs>
    _count?: boolean | AtividadesfixasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $atividadesfixasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "atividadesfixas"
    objects: {
      historicoatividades: Prisma.$historicoatividadesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      codigo: string
      descricao: string
    }, ExtArgs["result"]["atividadesfixas"]>
    composites: {}
  }

  type atividadesfixasGetPayload<S extends boolean | null | undefined | atividadesfixasDefaultArgs> = $Result.GetResult<Prisma.$atividadesfixasPayload, S>

  type atividadesfixasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<atividadesfixasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AtividadesfixasCountAggregateInputType | true
    }

  export interface atividadesfixasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['atividadesfixas'], meta: { name: 'atividadesfixas' } }
    /**
     * Find zero or one Atividadesfixas that matches the filter.
     * @param {atividadesfixasFindUniqueArgs} args - Arguments to find a Atividadesfixas
     * @example
     * // Get one Atividadesfixas
     * const atividadesfixas = await prisma.atividadesfixas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends atividadesfixasFindUniqueArgs>(args: SelectSubset<T, atividadesfixasFindUniqueArgs<ExtArgs>>): Prisma__atividadesfixasClient<$Result.GetResult<Prisma.$atividadesfixasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Atividadesfixas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {atividadesfixasFindUniqueOrThrowArgs} args - Arguments to find a Atividadesfixas
     * @example
     * // Get one Atividadesfixas
     * const atividadesfixas = await prisma.atividadesfixas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends atividadesfixasFindUniqueOrThrowArgs>(args: SelectSubset<T, atividadesfixasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__atividadesfixasClient<$Result.GetResult<Prisma.$atividadesfixasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Atividadesfixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadesfixasFindFirstArgs} args - Arguments to find a Atividadesfixas
     * @example
     * // Get one Atividadesfixas
     * const atividadesfixas = await prisma.atividadesfixas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends atividadesfixasFindFirstArgs>(args?: SelectSubset<T, atividadesfixasFindFirstArgs<ExtArgs>>): Prisma__atividadesfixasClient<$Result.GetResult<Prisma.$atividadesfixasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Atividadesfixas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadesfixasFindFirstOrThrowArgs} args - Arguments to find a Atividadesfixas
     * @example
     * // Get one Atividadesfixas
     * const atividadesfixas = await prisma.atividadesfixas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends atividadesfixasFindFirstOrThrowArgs>(args?: SelectSubset<T, atividadesfixasFindFirstOrThrowArgs<ExtArgs>>): Prisma__atividadesfixasClient<$Result.GetResult<Prisma.$atividadesfixasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Atividadesfixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadesfixasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atividadesfixas
     * const atividadesfixas = await prisma.atividadesfixas.findMany()
     * 
     * // Get first 10 Atividadesfixas
     * const atividadesfixas = await prisma.atividadesfixas.findMany({ take: 10 })
     * 
     * // Only select the `codigo`
     * const atividadesfixasWithCodigoOnly = await prisma.atividadesfixas.findMany({ select: { codigo: true } })
     * 
     */
    findMany<T extends atividadesfixasFindManyArgs>(args?: SelectSubset<T, atividadesfixasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$atividadesfixasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Atividadesfixas.
     * @param {atividadesfixasCreateArgs} args - Arguments to create a Atividadesfixas.
     * @example
     * // Create one Atividadesfixas
     * const Atividadesfixas = await prisma.atividadesfixas.create({
     *   data: {
     *     // ... data to create a Atividadesfixas
     *   }
     * })
     * 
     */
    create<T extends atividadesfixasCreateArgs>(args: SelectSubset<T, atividadesfixasCreateArgs<ExtArgs>>): Prisma__atividadesfixasClient<$Result.GetResult<Prisma.$atividadesfixasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Atividadesfixas.
     * @param {atividadesfixasCreateManyArgs} args - Arguments to create many Atividadesfixas.
     * @example
     * // Create many Atividadesfixas
     * const atividadesfixas = await prisma.atividadesfixas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends atividadesfixasCreateManyArgs>(args?: SelectSubset<T, atividadesfixasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Atividadesfixas.
     * @param {atividadesfixasDeleteArgs} args - Arguments to delete one Atividadesfixas.
     * @example
     * // Delete one Atividadesfixas
     * const Atividadesfixas = await prisma.atividadesfixas.delete({
     *   where: {
     *     // ... filter to delete one Atividadesfixas
     *   }
     * })
     * 
     */
    delete<T extends atividadesfixasDeleteArgs>(args: SelectSubset<T, atividadesfixasDeleteArgs<ExtArgs>>): Prisma__atividadesfixasClient<$Result.GetResult<Prisma.$atividadesfixasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Atividadesfixas.
     * @param {atividadesfixasUpdateArgs} args - Arguments to update one Atividadesfixas.
     * @example
     * // Update one Atividadesfixas
     * const atividadesfixas = await prisma.atividadesfixas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends atividadesfixasUpdateArgs>(args: SelectSubset<T, atividadesfixasUpdateArgs<ExtArgs>>): Prisma__atividadesfixasClient<$Result.GetResult<Prisma.$atividadesfixasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Atividadesfixas.
     * @param {atividadesfixasDeleteManyArgs} args - Arguments to filter Atividadesfixas to delete.
     * @example
     * // Delete a few Atividadesfixas
     * const { count } = await prisma.atividadesfixas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends atividadesfixasDeleteManyArgs>(args?: SelectSubset<T, atividadesfixasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atividadesfixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadesfixasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atividadesfixas
     * const atividadesfixas = await prisma.atividadesfixas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends atividadesfixasUpdateManyArgs>(args: SelectSubset<T, atividadesfixasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Atividadesfixas.
     * @param {atividadesfixasUpsertArgs} args - Arguments to update or create a Atividadesfixas.
     * @example
     * // Update or create a Atividadesfixas
     * const atividadesfixas = await prisma.atividadesfixas.upsert({
     *   create: {
     *     // ... data to create a Atividadesfixas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atividadesfixas we want to update
     *   }
     * })
     */
    upsert<T extends atividadesfixasUpsertArgs>(args: SelectSubset<T, atividadesfixasUpsertArgs<ExtArgs>>): Prisma__atividadesfixasClient<$Result.GetResult<Prisma.$atividadesfixasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Atividadesfixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadesfixasCountArgs} args - Arguments to filter Atividadesfixas to count.
     * @example
     * // Count the number of Atividadesfixas
     * const count = await prisma.atividadesfixas.count({
     *   where: {
     *     // ... the filter for the Atividadesfixas we want to count
     *   }
     * })
    **/
    count<T extends atividadesfixasCountArgs>(
      args?: Subset<T, atividadesfixasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtividadesfixasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atividadesfixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadesfixasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtividadesfixasAggregateArgs>(args: Subset<T, AtividadesfixasAggregateArgs>): Prisma.PrismaPromise<GetAtividadesfixasAggregateType<T>>

    /**
     * Group by Atividadesfixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {atividadesfixasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends atividadesfixasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: atividadesfixasGroupByArgs['orderBy'] }
        : { orderBy?: atividadesfixasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, atividadesfixasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividadesfixasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the atividadesfixas model
   */
  readonly fields: atividadesfixasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for atividadesfixas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__atividadesfixasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historicoatividades<T extends atividadesfixas$historicoatividadesArgs<ExtArgs> = {}>(args?: Subset<T, atividadesfixas$historicoatividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historicoatividadesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the atividadesfixas model
   */ 
  interface atividadesfixasFieldRefs {
    readonly codigo: FieldRef<"atividadesfixas", 'String'>
    readonly descricao: FieldRef<"atividadesfixas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * atividadesfixas findUnique
   */
  export type atividadesfixasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividadesfixas
     */
    select?: atividadesfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadesfixasInclude<ExtArgs> | null
    /**
     * Filter, which atividadesfixas to fetch.
     */
    where: atividadesfixasWhereUniqueInput
  }

  /**
   * atividadesfixas findUniqueOrThrow
   */
  export type atividadesfixasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividadesfixas
     */
    select?: atividadesfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadesfixasInclude<ExtArgs> | null
    /**
     * Filter, which atividadesfixas to fetch.
     */
    where: atividadesfixasWhereUniqueInput
  }

  /**
   * atividadesfixas findFirst
   */
  export type atividadesfixasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividadesfixas
     */
    select?: atividadesfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadesfixasInclude<ExtArgs> | null
    /**
     * Filter, which atividadesfixas to fetch.
     */
    where?: atividadesfixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividadesfixas to fetch.
     */
    orderBy?: atividadesfixasOrderByWithRelationInput | atividadesfixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atividadesfixas.
     */
    cursor?: atividadesfixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividadesfixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividadesfixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atividadesfixas.
     */
    distinct?: AtividadesfixasScalarFieldEnum | AtividadesfixasScalarFieldEnum[]
  }

  /**
   * atividadesfixas findFirstOrThrow
   */
  export type atividadesfixasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividadesfixas
     */
    select?: atividadesfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadesfixasInclude<ExtArgs> | null
    /**
     * Filter, which atividadesfixas to fetch.
     */
    where?: atividadesfixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividadesfixas to fetch.
     */
    orderBy?: atividadesfixasOrderByWithRelationInput | atividadesfixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for atividadesfixas.
     */
    cursor?: atividadesfixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividadesfixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividadesfixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of atividadesfixas.
     */
    distinct?: AtividadesfixasScalarFieldEnum | AtividadesfixasScalarFieldEnum[]
  }

  /**
   * atividadesfixas findMany
   */
  export type atividadesfixasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividadesfixas
     */
    select?: atividadesfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadesfixasInclude<ExtArgs> | null
    /**
     * Filter, which atividadesfixas to fetch.
     */
    where?: atividadesfixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of atividadesfixas to fetch.
     */
    orderBy?: atividadesfixasOrderByWithRelationInput | atividadesfixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing atividadesfixas.
     */
    cursor?: atividadesfixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` atividadesfixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` atividadesfixas.
     */
    skip?: number
    distinct?: AtividadesfixasScalarFieldEnum | AtividadesfixasScalarFieldEnum[]
  }

  /**
   * atividadesfixas create
   */
  export type atividadesfixasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividadesfixas
     */
    select?: atividadesfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadesfixasInclude<ExtArgs> | null
    /**
     * The data needed to create a atividadesfixas.
     */
    data: XOR<atividadesfixasCreateInput, atividadesfixasUncheckedCreateInput>
  }

  /**
   * atividadesfixas createMany
   */
  export type atividadesfixasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many atividadesfixas.
     */
    data: atividadesfixasCreateManyInput | atividadesfixasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * atividadesfixas update
   */
  export type atividadesfixasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividadesfixas
     */
    select?: atividadesfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadesfixasInclude<ExtArgs> | null
    /**
     * The data needed to update a atividadesfixas.
     */
    data: XOR<atividadesfixasUpdateInput, atividadesfixasUncheckedUpdateInput>
    /**
     * Choose, which atividadesfixas to update.
     */
    where: atividadesfixasWhereUniqueInput
  }

  /**
   * atividadesfixas updateMany
   */
  export type atividadesfixasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update atividadesfixas.
     */
    data: XOR<atividadesfixasUpdateManyMutationInput, atividadesfixasUncheckedUpdateManyInput>
    /**
     * Filter which atividadesfixas to update
     */
    where?: atividadesfixasWhereInput
  }

  /**
   * atividadesfixas upsert
   */
  export type atividadesfixasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividadesfixas
     */
    select?: atividadesfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadesfixasInclude<ExtArgs> | null
    /**
     * The filter to search for the atividadesfixas to update in case it exists.
     */
    where: atividadesfixasWhereUniqueInput
    /**
     * In case the atividadesfixas found by the `where` argument doesn't exist, create a new atividadesfixas with this data.
     */
    create: XOR<atividadesfixasCreateInput, atividadesfixasUncheckedCreateInput>
    /**
     * In case the atividadesfixas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<atividadesfixasUpdateInput, atividadesfixasUncheckedUpdateInput>
  }

  /**
   * atividadesfixas delete
   */
  export type atividadesfixasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividadesfixas
     */
    select?: atividadesfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadesfixasInclude<ExtArgs> | null
    /**
     * Filter which atividadesfixas to delete.
     */
    where: atividadesfixasWhereUniqueInput
  }

  /**
   * atividadesfixas deleteMany
   */
  export type atividadesfixasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which atividadesfixas to delete
     */
    where?: atividadesfixasWhereInput
  }

  /**
   * atividadesfixas.historicoatividades
   */
  export type atividadesfixas$historicoatividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoatividades
     */
    select?: historicoatividadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoatividadesInclude<ExtArgs> | null
    where?: historicoatividadesWhereInput
    orderBy?: historicoatividadesOrderByWithRelationInput | historicoatividadesOrderByWithRelationInput[]
    cursor?: historicoatividadesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoatividadesScalarFieldEnum | HistoricoatividadesScalarFieldEnum[]
  }

  /**
   * atividadesfixas without action
   */
  export type atividadesfixasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividadesfixas
     */
    select?: atividadesfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadesfixasInclude<ExtArgs> | null
  }


  /**
   * Model beneficiosfixos
   */

  export type AggregateBeneficiosfixos = {
    _count: BeneficiosfixosCountAggregateOutputType | null
    _min: BeneficiosfixosMinAggregateOutputType | null
    _max: BeneficiosfixosMaxAggregateOutputType | null
  }

  export type BeneficiosfixosMinAggregateOutputType = {
    codigo: string | null
    descricao: string | null
  }

  export type BeneficiosfixosMaxAggregateOutputType = {
    codigo: string | null
    descricao: string | null
  }

  export type BeneficiosfixosCountAggregateOutputType = {
    codigo: number
    descricao: number
    _all: number
  }


  export type BeneficiosfixosMinAggregateInputType = {
    codigo?: true
    descricao?: true
  }

  export type BeneficiosfixosMaxAggregateInputType = {
    codigo?: true
    descricao?: true
  }

  export type BeneficiosfixosCountAggregateInputType = {
    codigo?: true
    descricao?: true
    _all?: true
  }

  export type BeneficiosfixosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which beneficiosfixos to aggregate.
     */
    where?: beneficiosfixosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiosfixos to fetch.
     */
    orderBy?: beneficiosfixosOrderByWithRelationInput | beneficiosfixosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: beneficiosfixosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiosfixos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiosfixos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned beneficiosfixos
    **/
    _count?: true | BeneficiosfixosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeneficiosfixosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeneficiosfixosMaxAggregateInputType
  }

  export type GetBeneficiosfixosAggregateType<T extends BeneficiosfixosAggregateArgs> = {
        [P in keyof T & keyof AggregateBeneficiosfixos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeneficiosfixos[P]>
      : GetScalarType<T[P], AggregateBeneficiosfixos[P]>
  }




  export type beneficiosfixosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: beneficiosfixosWhereInput
    orderBy?: beneficiosfixosOrderByWithAggregationInput | beneficiosfixosOrderByWithAggregationInput[]
    by: BeneficiosfixosScalarFieldEnum[] | BeneficiosfixosScalarFieldEnum
    having?: beneficiosfixosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeneficiosfixosCountAggregateInputType | true
    _min?: BeneficiosfixosMinAggregateInputType
    _max?: BeneficiosfixosMaxAggregateInputType
  }

  export type BeneficiosfixosGroupByOutputType = {
    codigo: string
    descricao: string
    _count: BeneficiosfixosCountAggregateOutputType | null
    _min: BeneficiosfixosMinAggregateOutputType | null
    _max: BeneficiosfixosMaxAggregateOutputType | null
  }

  type GetBeneficiosfixosGroupByPayload<T extends beneficiosfixosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeneficiosfixosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeneficiosfixosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeneficiosfixosGroupByOutputType[P]>
            : GetScalarType<T[P], BeneficiosfixosGroupByOutputType[P]>
        }
      >
    >


  export type beneficiosfixosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    descricao?: boolean
    beneficiospaciente?: boolean | beneficiosfixos$beneficiospacienteArgs<ExtArgs>
    _count?: boolean | BeneficiosfixosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiosfixos"]>


  export type beneficiosfixosSelectScalar = {
    codigo?: boolean
    descricao?: boolean
  }

  export type beneficiosfixosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiospaciente?: boolean | beneficiosfixos$beneficiospacienteArgs<ExtArgs>
    _count?: boolean | BeneficiosfixosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $beneficiosfixosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "beneficiosfixos"
    objects: {
      beneficiospaciente: Prisma.$beneficiospacientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      codigo: string
      descricao: string
    }, ExtArgs["result"]["beneficiosfixos"]>
    composites: {}
  }

  type beneficiosfixosGetPayload<S extends boolean | null | undefined | beneficiosfixosDefaultArgs> = $Result.GetResult<Prisma.$beneficiosfixosPayload, S>

  type beneficiosfixosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<beneficiosfixosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BeneficiosfixosCountAggregateInputType | true
    }

  export interface beneficiosfixosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['beneficiosfixos'], meta: { name: 'beneficiosfixos' } }
    /**
     * Find zero or one Beneficiosfixos that matches the filter.
     * @param {beneficiosfixosFindUniqueArgs} args - Arguments to find a Beneficiosfixos
     * @example
     * // Get one Beneficiosfixos
     * const beneficiosfixos = await prisma.beneficiosfixos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends beneficiosfixosFindUniqueArgs>(args: SelectSubset<T, beneficiosfixosFindUniqueArgs<ExtArgs>>): Prisma__beneficiosfixosClient<$Result.GetResult<Prisma.$beneficiosfixosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Beneficiosfixos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {beneficiosfixosFindUniqueOrThrowArgs} args - Arguments to find a Beneficiosfixos
     * @example
     * // Get one Beneficiosfixos
     * const beneficiosfixos = await prisma.beneficiosfixos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends beneficiosfixosFindUniqueOrThrowArgs>(args: SelectSubset<T, beneficiosfixosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__beneficiosfixosClient<$Result.GetResult<Prisma.$beneficiosfixosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Beneficiosfixos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiosfixosFindFirstArgs} args - Arguments to find a Beneficiosfixos
     * @example
     * // Get one Beneficiosfixos
     * const beneficiosfixos = await prisma.beneficiosfixos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends beneficiosfixosFindFirstArgs>(args?: SelectSubset<T, beneficiosfixosFindFirstArgs<ExtArgs>>): Prisma__beneficiosfixosClient<$Result.GetResult<Prisma.$beneficiosfixosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Beneficiosfixos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiosfixosFindFirstOrThrowArgs} args - Arguments to find a Beneficiosfixos
     * @example
     * // Get one Beneficiosfixos
     * const beneficiosfixos = await prisma.beneficiosfixos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends beneficiosfixosFindFirstOrThrowArgs>(args?: SelectSubset<T, beneficiosfixosFindFirstOrThrowArgs<ExtArgs>>): Prisma__beneficiosfixosClient<$Result.GetResult<Prisma.$beneficiosfixosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Beneficiosfixos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiosfixosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beneficiosfixos
     * const beneficiosfixos = await prisma.beneficiosfixos.findMany()
     * 
     * // Get first 10 Beneficiosfixos
     * const beneficiosfixos = await prisma.beneficiosfixos.findMany({ take: 10 })
     * 
     * // Only select the `codigo`
     * const beneficiosfixosWithCodigoOnly = await prisma.beneficiosfixos.findMany({ select: { codigo: true } })
     * 
     */
    findMany<T extends beneficiosfixosFindManyArgs>(args?: SelectSubset<T, beneficiosfixosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$beneficiosfixosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Beneficiosfixos.
     * @param {beneficiosfixosCreateArgs} args - Arguments to create a Beneficiosfixos.
     * @example
     * // Create one Beneficiosfixos
     * const Beneficiosfixos = await prisma.beneficiosfixos.create({
     *   data: {
     *     // ... data to create a Beneficiosfixos
     *   }
     * })
     * 
     */
    create<T extends beneficiosfixosCreateArgs>(args: SelectSubset<T, beneficiosfixosCreateArgs<ExtArgs>>): Prisma__beneficiosfixosClient<$Result.GetResult<Prisma.$beneficiosfixosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Beneficiosfixos.
     * @param {beneficiosfixosCreateManyArgs} args - Arguments to create many Beneficiosfixos.
     * @example
     * // Create many Beneficiosfixos
     * const beneficiosfixos = await prisma.beneficiosfixos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends beneficiosfixosCreateManyArgs>(args?: SelectSubset<T, beneficiosfixosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Beneficiosfixos.
     * @param {beneficiosfixosDeleteArgs} args - Arguments to delete one Beneficiosfixos.
     * @example
     * // Delete one Beneficiosfixos
     * const Beneficiosfixos = await prisma.beneficiosfixos.delete({
     *   where: {
     *     // ... filter to delete one Beneficiosfixos
     *   }
     * })
     * 
     */
    delete<T extends beneficiosfixosDeleteArgs>(args: SelectSubset<T, beneficiosfixosDeleteArgs<ExtArgs>>): Prisma__beneficiosfixosClient<$Result.GetResult<Prisma.$beneficiosfixosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Beneficiosfixos.
     * @param {beneficiosfixosUpdateArgs} args - Arguments to update one Beneficiosfixos.
     * @example
     * // Update one Beneficiosfixos
     * const beneficiosfixos = await prisma.beneficiosfixos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends beneficiosfixosUpdateArgs>(args: SelectSubset<T, beneficiosfixosUpdateArgs<ExtArgs>>): Prisma__beneficiosfixosClient<$Result.GetResult<Prisma.$beneficiosfixosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Beneficiosfixos.
     * @param {beneficiosfixosDeleteManyArgs} args - Arguments to filter Beneficiosfixos to delete.
     * @example
     * // Delete a few Beneficiosfixos
     * const { count } = await prisma.beneficiosfixos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends beneficiosfixosDeleteManyArgs>(args?: SelectSubset<T, beneficiosfixosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficiosfixos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiosfixosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beneficiosfixos
     * const beneficiosfixos = await prisma.beneficiosfixos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends beneficiosfixosUpdateManyArgs>(args: SelectSubset<T, beneficiosfixosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Beneficiosfixos.
     * @param {beneficiosfixosUpsertArgs} args - Arguments to update or create a Beneficiosfixos.
     * @example
     * // Update or create a Beneficiosfixos
     * const beneficiosfixos = await prisma.beneficiosfixos.upsert({
     *   create: {
     *     // ... data to create a Beneficiosfixos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beneficiosfixos we want to update
     *   }
     * })
     */
    upsert<T extends beneficiosfixosUpsertArgs>(args: SelectSubset<T, beneficiosfixosUpsertArgs<ExtArgs>>): Prisma__beneficiosfixosClient<$Result.GetResult<Prisma.$beneficiosfixosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Beneficiosfixos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiosfixosCountArgs} args - Arguments to filter Beneficiosfixos to count.
     * @example
     * // Count the number of Beneficiosfixos
     * const count = await prisma.beneficiosfixos.count({
     *   where: {
     *     // ... the filter for the Beneficiosfixos we want to count
     *   }
     * })
    **/
    count<T extends beneficiosfixosCountArgs>(
      args?: Subset<T, beneficiosfixosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeneficiosfixosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beneficiosfixos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiosfixosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BeneficiosfixosAggregateArgs>(args: Subset<T, BeneficiosfixosAggregateArgs>): Prisma.PrismaPromise<GetBeneficiosfixosAggregateType<T>>

    /**
     * Group by Beneficiosfixos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiosfixosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends beneficiosfixosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: beneficiosfixosGroupByArgs['orderBy'] }
        : { orderBy?: beneficiosfixosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, beneficiosfixosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeneficiosfixosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the beneficiosfixos model
   */
  readonly fields: beneficiosfixosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for beneficiosfixos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__beneficiosfixosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    beneficiospaciente<T extends beneficiosfixos$beneficiospacienteArgs<ExtArgs> = {}>(args?: Subset<T, beneficiosfixos$beneficiospacienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$beneficiospacientePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the beneficiosfixos model
   */ 
  interface beneficiosfixosFieldRefs {
    readonly codigo: FieldRef<"beneficiosfixos", 'String'>
    readonly descricao: FieldRef<"beneficiosfixos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * beneficiosfixos findUnique
   */
  export type beneficiosfixosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiosfixos
     */
    select?: beneficiosfixosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiosfixosInclude<ExtArgs> | null
    /**
     * Filter, which beneficiosfixos to fetch.
     */
    where: beneficiosfixosWhereUniqueInput
  }

  /**
   * beneficiosfixos findUniqueOrThrow
   */
  export type beneficiosfixosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiosfixos
     */
    select?: beneficiosfixosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiosfixosInclude<ExtArgs> | null
    /**
     * Filter, which beneficiosfixos to fetch.
     */
    where: beneficiosfixosWhereUniqueInput
  }

  /**
   * beneficiosfixos findFirst
   */
  export type beneficiosfixosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiosfixos
     */
    select?: beneficiosfixosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiosfixosInclude<ExtArgs> | null
    /**
     * Filter, which beneficiosfixos to fetch.
     */
    where?: beneficiosfixosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiosfixos to fetch.
     */
    orderBy?: beneficiosfixosOrderByWithRelationInput | beneficiosfixosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beneficiosfixos.
     */
    cursor?: beneficiosfixosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiosfixos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiosfixos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beneficiosfixos.
     */
    distinct?: BeneficiosfixosScalarFieldEnum | BeneficiosfixosScalarFieldEnum[]
  }

  /**
   * beneficiosfixos findFirstOrThrow
   */
  export type beneficiosfixosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiosfixos
     */
    select?: beneficiosfixosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiosfixosInclude<ExtArgs> | null
    /**
     * Filter, which beneficiosfixos to fetch.
     */
    where?: beneficiosfixosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiosfixos to fetch.
     */
    orderBy?: beneficiosfixosOrderByWithRelationInput | beneficiosfixosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beneficiosfixos.
     */
    cursor?: beneficiosfixosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiosfixos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiosfixos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beneficiosfixos.
     */
    distinct?: BeneficiosfixosScalarFieldEnum | BeneficiosfixosScalarFieldEnum[]
  }

  /**
   * beneficiosfixos findMany
   */
  export type beneficiosfixosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiosfixos
     */
    select?: beneficiosfixosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiosfixosInclude<ExtArgs> | null
    /**
     * Filter, which beneficiosfixos to fetch.
     */
    where?: beneficiosfixosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiosfixos to fetch.
     */
    orderBy?: beneficiosfixosOrderByWithRelationInput | beneficiosfixosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing beneficiosfixos.
     */
    cursor?: beneficiosfixosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiosfixos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiosfixos.
     */
    skip?: number
    distinct?: BeneficiosfixosScalarFieldEnum | BeneficiosfixosScalarFieldEnum[]
  }

  /**
   * beneficiosfixos create
   */
  export type beneficiosfixosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiosfixos
     */
    select?: beneficiosfixosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiosfixosInclude<ExtArgs> | null
    /**
     * The data needed to create a beneficiosfixos.
     */
    data: XOR<beneficiosfixosCreateInput, beneficiosfixosUncheckedCreateInput>
  }

  /**
   * beneficiosfixos createMany
   */
  export type beneficiosfixosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many beneficiosfixos.
     */
    data: beneficiosfixosCreateManyInput | beneficiosfixosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * beneficiosfixos update
   */
  export type beneficiosfixosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiosfixos
     */
    select?: beneficiosfixosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiosfixosInclude<ExtArgs> | null
    /**
     * The data needed to update a beneficiosfixos.
     */
    data: XOR<beneficiosfixosUpdateInput, beneficiosfixosUncheckedUpdateInput>
    /**
     * Choose, which beneficiosfixos to update.
     */
    where: beneficiosfixosWhereUniqueInput
  }

  /**
   * beneficiosfixos updateMany
   */
  export type beneficiosfixosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update beneficiosfixos.
     */
    data: XOR<beneficiosfixosUpdateManyMutationInput, beneficiosfixosUncheckedUpdateManyInput>
    /**
     * Filter which beneficiosfixos to update
     */
    where?: beneficiosfixosWhereInput
  }

  /**
   * beneficiosfixos upsert
   */
  export type beneficiosfixosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiosfixos
     */
    select?: beneficiosfixosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiosfixosInclude<ExtArgs> | null
    /**
     * The filter to search for the beneficiosfixos to update in case it exists.
     */
    where: beneficiosfixosWhereUniqueInput
    /**
     * In case the beneficiosfixos found by the `where` argument doesn't exist, create a new beneficiosfixos with this data.
     */
    create: XOR<beneficiosfixosCreateInput, beneficiosfixosUncheckedCreateInput>
    /**
     * In case the beneficiosfixos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<beneficiosfixosUpdateInput, beneficiosfixosUncheckedUpdateInput>
  }

  /**
   * beneficiosfixos delete
   */
  export type beneficiosfixosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiosfixos
     */
    select?: beneficiosfixosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiosfixosInclude<ExtArgs> | null
    /**
     * Filter which beneficiosfixos to delete.
     */
    where: beneficiosfixosWhereUniqueInput
  }

  /**
   * beneficiosfixos deleteMany
   */
  export type beneficiosfixosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which beneficiosfixos to delete
     */
    where?: beneficiosfixosWhereInput
  }

  /**
   * beneficiosfixos.beneficiospaciente
   */
  export type beneficiosfixos$beneficiospacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiospaciente
     */
    select?: beneficiospacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiospacienteInclude<ExtArgs> | null
    where?: beneficiospacienteWhereInput
    orderBy?: beneficiospacienteOrderByWithRelationInput | beneficiospacienteOrderByWithRelationInput[]
    cursor?: beneficiospacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BeneficiospacienteScalarFieldEnum | BeneficiospacienteScalarFieldEnum[]
  }

  /**
   * beneficiosfixos without action
   */
  export type beneficiosfixosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiosfixos
     */
    select?: beneficiosfixosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiosfixosInclude<ExtArgs> | null
  }


  /**
   * Model beneficiospaciente
   */

  export type AggregateBeneficiospaciente = {
    _count: BeneficiospacienteCountAggregateOutputType | null
    _avg: BeneficiospacienteAvgAggregateOutputType | null
    _sum: BeneficiospacienteSumAggregateOutputType | null
    _min: BeneficiospacienteMinAggregateOutputType | null
    _max: BeneficiospacienteMaxAggregateOutputType | null
  }

  export type BeneficiospacienteAvgAggregateOutputType = {
    id: number | null
    cadastro_id: number | null
  }

  export type BeneficiospacienteSumAggregateOutputType = {
    id: number | null
    cadastro_id: number | null
  }

  export type BeneficiospacienteMinAggregateOutputType = {
    id: number | null
    cadastro_id: number | null
    codigo_beneficio: string | null
  }

  export type BeneficiospacienteMaxAggregateOutputType = {
    id: number | null
    cadastro_id: number | null
    codigo_beneficio: string | null
  }

  export type BeneficiospacienteCountAggregateOutputType = {
    id: number
    cadastro_id: number
    codigo_beneficio: number
    _all: number
  }


  export type BeneficiospacienteAvgAggregateInputType = {
    id?: true
    cadastro_id?: true
  }

  export type BeneficiospacienteSumAggregateInputType = {
    id?: true
    cadastro_id?: true
  }

  export type BeneficiospacienteMinAggregateInputType = {
    id?: true
    cadastro_id?: true
    codigo_beneficio?: true
  }

  export type BeneficiospacienteMaxAggregateInputType = {
    id?: true
    cadastro_id?: true
    codigo_beneficio?: true
  }

  export type BeneficiospacienteCountAggregateInputType = {
    id?: true
    cadastro_id?: true
    codigo_beneficio?: true
    _all?: true
  }

  export type BeneficiospacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which beneficiospaciente to aggregate.
     */
    where?: beneficiospacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiospacientes to fetch.
     */
    orderBy?: beneficiospacienteOrderByWithRelationInput | beneficiospacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: beneficiospacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiospacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiospacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned beneficiospacientes
    **/
    _count?: true | BeneficiospacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BeneficiospacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BeneficiospacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeneficiospacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeneficiospacienteMaxAggregateInputType
  }

  export type GetBeneficiospacienteAggregateType<T extends BeneficiospacienteAggregateArgs> = {
        [P in keyof T & keyof AggregateBeneficiospaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeneficiospaciente[P]>
      : GetScalarType<T[P], AggregateBeneficiospaciente[P]>
  }




  export type beneficiospacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: beneficiospacienteWhereInput
    orderBy?: beneficiospacienteOrderByWithAggregationInput | beneficiospacienteOrderByWithAggregationInput[]
    by: BeneficiospacienteScalarFieldEnum[] | BeneficiospacienteScalarFieldEnum
    having?: beneficiospacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeneficiospacienteCountAggregateInputType | true
    _avg?: BeneficiospacienteAvgAggregateInputType
    _sum?: BeneficiospacienteSumAggregateInputType
    _min?: BeneficiospacienteMinAggregateInputType
    _max?: BeneficiospacienteMaxAggregateInputType
  }

  export type BeneficiospacienteGroupByOutputType = {
    id: number
    cadastro_id: number
    codigo_beneficio: string | null
    _count: BeneficiospacienteCountAggregateOutputType | null
    _avg: BeneficiospacienteAvgAggregateOutputType | null
    _sum: BeneficiospacienteSumAggregateOutputType | null
    _min: BeneficiospacienteMinAggregateOutputType | null
    _max: BeneficiospacienteMaxAggregateOutputType | null
  }

  type GetBeneficiospacienteGroupByPayload<T extends beneficiospacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeneficiospacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeneficiospacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeneficiospacienteGroupByOutputType[P]>
            : GetScalarType<T[P], BeneficiospacienteGroupByOutputType[P]>
        }
      >
    >


  export type beneficiospacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cadastro_id?: boolean
    codigo_beneficio?: boolean
    cadastro?: boolean | cadastroDefaultArgs<ExtArgs>
    beneficiosfixos?: boolean | beneficiospaciente$beneficiosfixosArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiospaciente"]>


  export type beneficiospacienteSelectScalar = {
    id?: boolean
    cadastro_id?: boolean
    codigo_beneficio?: boolean
  }

  export type beneficiospacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cadastro?: boolean | cadastroDefaultArgs<ExtArgs>
    beneficiosfixos?: boolean | beneficiospaciente$beneficiosfixosArgs<ExtArgs>
  }

  export type $beneficiospacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "beneficiospaciente"
    objects: {
      cadastro: Prisma.$cadastroPayload<ExtArgs>
      beneficiosfixos: Prisma.$beneficiosfixosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cadastro_id: number
      codigo_beneficio: string | null
    }, ExtArgs["result"]["beneficiospaciente"]>
    composites: {}
  }

  type beneficiospacienteGetPayload<S extends boolean | null | undefined | beneficiospacienteDefaultArgs> = $Result.GetResult<Prisma.$beneficiospacientePayload, S>

  type beneficiospacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<beneficiospacienteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BeneficiospacienteCountAggregateInputType | true
    }

  export interface beneficiospacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['beneficiospaciente'], meta: { name: 'beneficiospaciente' } }
    /**
     * Find zero or one Beneficiospaciente that matches the filter.
     * @param {beneficiospacienteFindUniqueArgs} args - Arguments to find a Beneficiospaciente
     * @example
     * // Get one Beneficiospaciente
     * const beneficiospaciente = await prisma.beneficiospaciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends beneficiospacienteFindUniqueArgs>(args: SelectSubset<T, beneficiospacienteFindUniqueArgs<ExtArgs>>): Prisma__beneficiospacienteClient<$Result.GetResult<Prisma.$beneficiospacientePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Beneficiospaciente that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {beneficiospacienteFindUniqueOrThrowArgs} args - Arguments to find a Beneficiospaciente
     * @example
     * // Get one Beneficiospaciente
     * const beneficiospaciente = await prisma.beneficiospaciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends beneficiospacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, beneficiospacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__beneficiospacienteClient<$Result.GetResult<Prisma.$beneficiospacientePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Beneficiospaciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiospacienteFindFirstArgs} args - Arguments to find a Beneficiospaciente
     * @example
     * // Get one Beneficiospaciente
     * const beneficiospaciente = await prisma.beneficiospaciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends beneficiospacienteFindFirstArgs>(args?: SelectSubset<T, beneficiospacienteFindFirstArgs<ExtArgs>>): Prisma__beneficiospacienteClient<$Result.GetResult<Prisma.$beneficiospacientePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Beneficiospaciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiospacienteFindFirstOrThrowArgs} args - Arguments to find a Beneficiospaciente
     * @example
     * // Get one Beneficiospaciente
     * const beneficiospaciente = await prisma.beneficiospaciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends beneficiospacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, beneficiospacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__beneficiospacienteClient<$Result.GetResult<Prisma.$beneficiospacientePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Beneficiospacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiospacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beneficiospacientes
     * const beneficiospacientes = await prisma.beneficiospaciente.findMany()
     * 
     * // Get first 10 Beneficiospacientes
     * const beneficiospacientes = await prisma.beneficiospaciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beneficiospacienteWithIdOnly = await prisma.beneficiospaciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends beneficiospacienteFindManyArgs>(args?: SelectSubset<T, beneficiospacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$beneficiospacientePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Beneficiospaciente.
     * @param {beneficiospacienteCreateArgs} args - Arguments to create a Beneficiospaciente.
     * @example
     * // Create one Beneficiospaciente
     * const Beneficiospaciente = await prisma.beneficiospaciente.create({
     *   data: {
     *     // ... data to create a Beneficiospaciente
     *   }
     * })
     * 
     */
    create<T extends beneficiospacienteCreateArgs>(args: SelectSubset<T, beneficiospacienteCreateArgs<ExtArgs>>): Prisma__beneficiospacienteClient<$Result.GetResult<Prisma.$beneficiospacientePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Beneficiospacientes.
     * @param {beneficiospacienteCreateManyArgs} args - Arguments to create many Beneficiospacientes.
     * @example
     * // Create many Beneficiospacientes
     * const beneficiospaciente = await prisma.beneficiospaciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends beneficiospacienteCreateManyArgs>(args?: SelectSubset<T, beneficiospacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Beneficiospaciente.
     * @param {beneficiospacienteDeleteArgs} args - Arguments to delete one Beneficiospaciente.
     * @example
     * // Delete one Beneficiospaciente
     * const Beneficiospaciente = await prisma.beneficiospaciente.delete({
     *   where: {
     *     // ... filter to delete one Beneficiospaciente
     *   }
     * })
     * 
     */
    delete<T extends beneficiospacienteDeleteArgs>(args: SelectSubset<T, beneficiospacienteDeleteArgs<ExtArgs>>): Prisma__beneficiospacienteClient<$Result.GetResult<Prisma.$beneficiospacientePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Beneficiospaciente.
     * @param {beneficiospacienteUpdateArgs} args - Arguments to update one Beneficiospaciente.
     * @example
     * // Update one Beneficiospaciente
     * const beneficiospaciente = await prisma.beneficiospaciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends beneficiospacienteUpdateArgs>(args: SelectSubset<T, beneficiospacienteUpdateArgs<ExtArgs>>): Prisma__beneficiospacienteClient<$Result.GetResult<Prisma.$beneficiospacientePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Beneficiospacientes.
     * @param {beneficiospacienteDeleteManyArgs} args - Arguments to filter Beneficiospacientes to delete.
     * @example
     * // Delete a few Beneficiospacientes
     * const { count } = await prisma.beneficiospaciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends beneficiospacienteDeleteManyArgs>(args?: SelectSubset<T, beneficiospacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficiospacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiospacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beneficiospacientes
     * const beneficiospaciente = await prisma.beneficiospaciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends beneficiospacienteUpdateManyArgs>(args: SelectSubset<T, beneficiospacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Beneficiospaciente.
     * @param {beneficiospacienteUpsertArgs} args - Arguments to update or create a Beneficiospaciente.
     * @example
     * // Update or create a Beneficiospaciente
     * const beneficiospaciente = await prisma.beneficiospaciente.upsert({
     *   create: {
     *     // ... data to create a Beneficiospaciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beneficiospaciente we want to update
     *   }
     * })
     */
    upsert<T extends beneficiospacienteUpsertArgs>(args: SelectSubset<T, beneficiospacienteUpsertArgs<ExtArgs>>): Prisma__beneficiospacienteClient<$Result.GetResult<Prisma.$beneficiospacientePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Beneficiospacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiospacienteCountArgs} args - Arguments to filter Beneficiospacientes to count.
     * @example
     * // Count the number of Beneficiospacientes
     * const count = await prisma.beneficiospaciente.count({
     *   where: {
     *     // ... the filter for the Beneficiospacientes we want to count
     *   }
     * })
    **/
    count<T extends beneficiospacienteCountArgs>(
      args?: Subset<T, beneficiospacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeneficiospacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beneficiospaciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiospacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BeneficiospacienteAggregateArgs>(args: Subset<T, BeneficiospacienteAggregateArgs>): Prisma.PrismaPromise<GetBeneficiospacienteAggregateType<T>>

    /**
     * Group by Beneficiospaciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiospacienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends beneficiospacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: beneficiospacienteGroupByArgs['orderBy'] }
        : { orderBy?: beneficiospacienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, beneficiospacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeneficiospacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the beneficiospaciente model
   */
  readonly fields: beneficiospacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for beneficiospaciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__beneficiospacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cadastro<T extends cadastroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cadastroDefaultArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    beneficiosfixos<T extends beneficiospaciente$beneficiosfixosArgs<ExtArgs> = {}>(args?: Subset<T, beneficiospaciente$beneficiosfixosArgs<ExtArgs>>): Prisma__beneficiosfixosClient<$Result.GetResult<Prisma.$beneficiosfixosPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the beneficiospaciente model
   */ 
  interface beneficiospacienteFieldRefs {
    readonly id: FieldRef<"beneficiospaciente", 'Int'>
    readonly cadastro_id: FieldRef<"beneficiospaciente", 'Int'>
    readonly codigo_beneficio: FieldRef<"beneficiospaciente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * beneficiospaciente findUnique
   */
  export type beneficiospacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiospaciente
     */
    select?: beneficiospacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiospacienteInclude<ExtArgs> | null
    /**
     * Filter, which beneficiospaciente to fetch.
     */
    where: beneficiospacienteWhereUniqueInput
  }

  /**
   * beneficiospaciente findUniqueOrThrow
   */
  export type beneficiospacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiospaciente
     */
    select?: beneficiospacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiospacienteInclude<ExtArgs> | null
    /**
     * Filter, which beneficiospaciente to fetch.
     */
    where: beneficiospacienteWhereUniqueInput
  }

  /**
   * beneficiospaciente findFirst
   */
  export type beneficiospacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiospaciente
     */
    select?: beneficiospacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiospacienteInclude<ExtArgs> | null
    /**
     * Filter, which beneficiospaciente to fetch.
     */
    where?: beneficiospacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiospacientes to fetch.
     */
    orderBy?: beneficiospacienteOrderByWithRelationInput | beneficiospacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beneficiospacientes.
     */
    cursor?: beneficiospacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiospacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiospacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beneficiospacientes.
     */
    distinct?: BeneficiospacienteScalarFieldEnum | BeneficiospacienteScalarFieldEnum[]
  }

  /**
   * beneficiospaciente findFirstOrThrow
   */
  export type beneficiospacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiospaciente
     */
    select?: beneficiospacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiospacienteInclude<ExtArgs> | null
    /**
     * Filter, which beneficiospaciente to fetch.
     */
    where?: beneficiospacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiospacientes to fetch.
     */
    orderBy?: beneficiospacienteOrderByWithRelationInput | beneficiospacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beneficiospacientes.
     */
    cursor?: beneficiospacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiospacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiospacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beneficiospacientes.
     */
    distinct?: BeneficiospacienteScalarFieldEnum | BeneficiospacienteScalarFieldEnum[]
  }

  /**
   * beneficiospaciente findMany
   */
  export type beneficiospacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiospaciente
     */
    select?: beneficiospacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiospacienteInclude<ExtArgs> | null
    /**
     * Filter, which beneficiospacientes to fetch.
     */
    where?: beneficiospacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiospacientes to fetch.
     */
    orderBy?: beneficiospacienteOrderByWithRelationInput | beneficiospacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing beneficiospacientes.
     */
    cursor?: beneficiospacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiospacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiospacientes.
     */
    skip?: number
    distinct?: BeneficiospacienteScalarFieldEnum | BeneficiospacienteScalarFieldEnum[]
  }

  /**
   * beneficiospaciente create
   */
  export type beneficiospacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiospaciente
     */
    select?: beneficiospacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiospacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a beneficiospaciente.
     */
    data: XOR<beneficiospacienteCreateInput, beneficiospacienteUncheckedCreateInput>
  }

  /**
   * beneficiospaciente createMany
   */
  export type beneficiospacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many beneficiospacientes.
     */
    data: beneficiospacienteCreateManyInput | beneficiospacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * beneficiospaciente update
   */
  export type beneficiospacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiospaciente
     */
    select?: beneficiospacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiospacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a beneficiospaciente.
     */
    data: XOR<beneficiospacienteUpdateInput, beneficiospacienteUncheckedUpdateInput>
    /**
     * Choose, which beneficiospaciente to update.
     */
    where: beneficiospacienteWhereUniqueInput
  }

  /**
   * beneficiospaciente updateMany
   */
  export type beneficiospacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update beneficiospacientes.
     */
    data: XOR<beneficiospacienteUpdateManyMutationInput, beneficiospacienteUncheckedUpdateManyInput>
    /**
     * Filter which beneficiospacientes to update
     */
    where?: beneficiospacienteWhereInput
  }

  /**
   * beneficiospaciente upsert
   */
  export type beneficiospacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiospaciente
     */
    select?: beneficiospacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiospacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the beneficiospaciente to update in case it exists.
     */
    where: beneficiospacienteWhereUniqueInput
    /**
     * In case the beneficiospaciente found by the `where` argument doesn't exist, create a new beneficiospaciente with this data.
     */
    create: XOR<beneficiospacienteCreateInput, beneficiospacienteUncheckedCreateInput>
    /**
     * In case the beneficiospaciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<beneficiospacienteUpdateInput, beneficiospacienteUncheckedUpdateInput>
  }

  /**
   * beneficiospaciente delete
   */
  export type beneficiospacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiospaciente
     */
    select?: beneficiospacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiospacienteInclude<ExtArgs> | null
    /**
     * Filter which beneficiospaciente to delete.
     */
    where: beneficiospacienteWhereUniqueInput
  }

  /**
   * beneficiospaciente deleteMany
   */
  export type beneficiospacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which beneficiospacientes to delete
     */
    where?: beneficiospacienteWhereInput
  }

  /**
   * beneficiospaciente.beneficiosfixos
   */
  export type beneficiospaciente$beneficiosfixosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiosfixos
     */
    select?: beneficiosfixosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiosfixosInclude<ExtArgs> | null
    where?: beneficiosfixosWhereInput
  }

  /**
   * beneficiospaciente without action
   */
  export type beneficiospacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiospaciente
     */
    select?: beneficiospacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiospacienteInclude<ExtArgs> | null
  }


  /**
   * Model cadastro
   */

  export type AggregateCadastro = {
    _count: CadastroCountAggregateOutputType | null
    _avg: CadastroAvgAggregateOutputType | null
    _sum: CadastroSumAggregateOutputType | null
    _min: CadastroMinAggregateOutputType | null
    _max: CadastroMaxAggregateOutputType | null
  }

  export type CadastroAvgAggregateOutputType = {
    id: number | null
    idade: number | null
    altura: Decimal | null
    peso: Decimal | null
  }

  export type CadastroSumAggregateOutputType = {
    id: number | null
    idade: number | null
    altura: Decimal | null
    peso: Decimal | null
  }

  export type CadastroMinAggregateOutputType = {
    id: number | null
    nome: string | null
    idade: number | null
    documento: string | null
    data_nascimento: Date | null
    sexo: $Enums.cadastro_sexo | null
    estado_civil: $Enums.cadastro_estado_civil | null
    profissao: string | null
    morador_rua: boolean | null
    status: $Enums.cadastro_status | null
    cor_olhos: string | null
    cor_cabelo: string | null
    altura: Decimal | null
    peso: Decimal | null
    etnia: string | null
    codigo_usuario: string | null
    tipo_documento: $Enums.cadastro_tipo_documento | null
  }

  export type CadastroMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    idade: number | null
    documento: string | null
    data_nascimento: Date | null
    sexo: $Enums.cadastro_sexo | null
    estado_civil: $Enums.cadastro_estado_civil | null
    profissao: string | null
    morador_rua: boolean | null
    status: $Enums.cadastro_status | null
    cor_olhos: string | null
    cor_cabelo: string | null
    altura: Decimal | null
    peso: Decimal | null
    etnia: string | null
    codigo_usuario: string | null
    tipo_documento: $Enums.cadastro_tipo_documento | null
  }

  export type CadastroCountAggregateOutputType = {
    id: number
    nome: number
    idade: number
    documento: number
    data_nascimento: number
    sexo: number
    estado_civil: number
    profissao: number
    morador_rua: number
    status: number
    cor_olhos: number
    cor_cabelo: number
    altura: number
    peso: number
    etnia: number
    codigo_usuario: number
    tipo_documento: number
    _all: number
  }


  export type CadastroAvgAggregateInputType = {
    id?: true
    idade?: true
    altura?: true
    peso?: true
  }

  export type CadastroSumAggregateInputType = {
    id?: true
    idade?: true
    altura?: true
    peso?: true
  }

  export type CadastroMinAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    documento?: true
    data_nascimento?: true
    sexo?: true
    estado_civil?: true
    profissao?: true
    morador_rua?: true
    status?: true
    cor_olhos?: true
    cor_cabelo?: true
    altura?: true
    peso?: true
    etnia?: true
    codigo_usuario?: true
    tipo_documento?: true
  }

  export type CadastroMaxAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    documento?: true
    data_nascimento?: true
    sexo?: true
    estado_civil?: true
    profissao?: true
    morador_rua?: true
    status?: true
    cor_olhos?: true
    cor_cabelo?: true
    altura?: true
    peso?: true
    etnia?: true
    codigo_usuario?: true
    tipo_documento?: true
  }

  export type CadastroCountAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    documento?: true
    data_nascimento?: true
    sexo?: true
    estado_civil?: true
    profissao?: true
    morador_rua?: true
    status?: true
    cor_olhos?: true
    cor_cabelo?: true
    altura?: true
    peso?: true
    etnia?: true
    codigo_usuario?: true
    tipo_documento?: true
    _all?: true
  }

  export type CadastroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cadastro to aggregate.
     */
    where?: cadastroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastros to fetch.
     */
    orderBy?: cadastroOrderByWithRelationInput | cadastroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cadastroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cadastros
    **/
    _count?: true | CadastroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CadastroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CadastroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CadastroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CadastroMaxAggregateInputType
  }

  export type GetCadastroAggregateType<T extends CadastroAggregateArgs> = {
        [P in keyof T & keyof AggregateCadastro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCadastro[P]>
      : GetScalarType<T[P], AggregateCadastro[P]>
  }




  export type cadastroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cadastroWhereInput
    orderBy?: cadastroOrderByWithAggregationInput | cadastroOrderByWithAggregationInput[]
    by: CadastroScalarFieldEnum[] | CadastroScalarFieldEnum
    having?: cadastroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CadastroCountAggregateInputType | true
    _avg?: CadastroAvgAggregateInputType
    _sum?: CadastroSumAggregateInputType
    _min?: CadastroMinAggregateInputType
    _max?: CadastroMaxAggregateInputType
  }

  export type CadastroGroupByOutputType = {
    id: number
    nome: string
    idade: number
    documento: string
    data_nascimento: Date
    sexo: $Enums.cadastro_sexo
    estado_civil: $Enums.cadastro_estado_civil
    profissao: string | null
    morador_rua: boolean | null
    status: $Enums.cadastro_status
    cor_olhos: string | null
    cor_cabelo: string | null
    altura: Decimal | null
    peso: Decimal | null
    etnia: string | null
    codigo_usuario: string | null
    tipo_documento: $Enums.cadastro_tipo_documento
    _count: CadastroCountAggregateOutputType | null
    _avg: CadastroAvgAggregateOutputType | null
    _sum: CadastroSumAggregateOutputType | null
    _min: CadastroMinAggregateOutputType | null
    _max: CadastroMaxAggregateOutputType | null
  }

  type GetCadastroGroupByPayload<T extends cadastroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CadastroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CadastroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CadastroGroupByOutputType[P]>
            : GetScalarType<T[P], CadastroGroupByOutputType[P]>
        }
      >
    >


  export type cadastroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    documento?: boolean
    data_nascimento?: boolean
    sexo?: boolean
    estado_civil?: boolean
    profissao?: boolean
    morador_rua?: boolean
    status?: boolean
    cor_olhos?: boolean
    cor_cabelo?: boolean
    altura?: boolean
    peso?: boolean
    etnia?: boolean
    codigo_usuario?: boolean
    tipo_documento?: boolean
    beneficiospaciente?: boolean | cadastro$beneficiospacienteArgs<ExtArgs>
    dependenciaspaciente?: boolean | cadastro$dependenciaspacienteArgs<ExtArgs>
    historicoatividades?: boolean | cadastro$historicoatividadesArgs<ExtArgs>
    _count?: boolean | CadastroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastro"]>


  export type cadastroSelectScalar = {
    id?: boolean
    nome?: boolean
    idade?: boolean
    documento?: boolean
    data_nascimento?: boolean
    sexo?: boolean
    estado_civil?: boolean
    profissao?: boolean
    morador_rua?: boolean
    status?: boolean
    cor_olhos?: boolean
    cor_cabelo?: boolean
    altura?: boolean
    peso?: boolean
    etnia?: boolean
    codigo_usuario?: boolean
    tipo_documento?: boolean
  }

  export type cadastroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiospaciente?: boolean | cadastro$beneficiospacienteArgs<ExtArgs>
    dependenciaspaciente?: boolean | cadastro$dependenciaspacienteArgs<ExtArgs>
    historicoatividades?: boolean | cadastro$historicoatividadesArgs<ExtArgs>
    _count?: boolean | CadastroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cadastroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cadastro"
    objects: {
      beneficiospaciente: Prisma.$beneficiospacientePayload<ExtArgs>[]
      dependenciaspaciente: Prisma.$dependenciaspacientePayload<ExtArgs>[]
      historicoatividades: Prisma.$historicoatividadesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      idade: number
      documento: string
      data_nascimento: Date
      sexo: $Enums.cadastro_sexo
      estado_civil: $Enums.cadastro_estado_civil
      profissao: string | null
      morador_rua: boolean | null
      status: $Enums.cadastro_status
      cor_olhos: string | null
      cor_cabelo: string | null
      altura: Prisma.Decimal | null
      peso: Prisma.Decimal | null
      etnia: string | null
      codigo_usuario: string | null
      tipo_documento: $Enums.cadastro_tipo_documento
    }, ExtArgs["result"]["cadastro"]>
    composites: {}
  }

  type cadastroGetPayload<S extends boolean | null | undefined | cadastroDefaultArgs> = $Result.GetResult<Prisma.$cadastroPayload, S>

  type cadastroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cadastroFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CadastroCountAggregateInputType | true
    }

  export interface cadastroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cadastro'], meta: { name: 'cadastro' } }
    /**
     * Find zero or one Cadastro that matches the filter.
     * @param {cadastroFindUniqueArgs} args - Arguments to find a Cadastro
     * @example
     * // Get one Cadastro
     * const cadastro = await prisma.cadastro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cadastroFindUniqueArgs>(args: SelectSubset<T, cadastroFindUniqueArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cadastro that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {cadastroFindUniqueOrThrowArgs} args - Arguments to find a Cadastro
     * @example
     * // Get one Cadastro
     * const cadastro = await prisma.cadastro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cadastroFindUniqueOrThrowArgs>(args: SelectSubset<T, cadastroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cadastro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroFindFirstArgs} args - Arguments to find a Cadastro
     * @example
     * // Get one Cadastro
     * const cadastro = await prisma.cadastro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cadastroFindFirstArgs>(args?: SelectSubset<T, cadastroFindFirstArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cadastro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroFindFirstOrThrowArgs} args - Arguments to find a Cadastro
     * @example
     * // Get one Cadastro
     * const cadastro = await prisma.cadastro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cadastroFindFirstOrThrowArgs>(args?: SelectSubset<T, cadastroFindFirstOrThrowArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cadastros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cadastros
     * const cadastros = await prisma.cadastro.findMany()
     * 
     * // Get first 10 Cadastros
     * const cadastros = await prisma.cadastro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cadastroWithIdOnly = await prisma.cadastro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cadastroFindManyArgs>(args?: SelectSubset<T, cadastroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cadastro.
     * @param {cadastroCreateArgs} args - Arguments to create a Cadastro.
     * @example
     * // Create one Cadastro
     * const Cadastro = await prisma.cadastro.create({
     *   data: {
     *     // ... data to create a Cadastro
     *   }
     * })
     * 
     */
    create<T extends cadastroCreateArgs>(args: SelectSubset<T, cadastroCreateArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cadastros.
     * @param {cadastroCreateManyArgs} args - Arguments to create many Cadastros.
     * @example
     * // Create many Cadastros
     * const cadastro = await prisma.cadastro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cadastroCreateManyArgs>(args?: SelectSubset<T, cadastroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cadastro.
     * @param {cadastroDeleteArgs} args - Arguments to delete one Cadastro.
     * @example
     * // Delete one Cadastro
     * const Cadastro = await prisma.cadastro.delete({
     *   where: {
     *     // ... filter to delete one Cadastro
     *   }
     * })
     * 
     */
    delete<T extends cadastroDeleteArgs>(args: SelectSubset<T, cadastroDeleteArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cadastro.
     * @param {cadastroUpdateArgs} args - Arguments to update one Cadastro.
     * @example
     * // Update one Cadastro
     * const cadastro = await prisma.cadastro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cadastroUpdateArgs>(args: SelectSubset<T, cadastroUpdateArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cadastros.
     * @param {cadastroDeleteManyArgs} args - Arguments to filter Cadastros to delete.
     * @example
     * // Delete a few Cadastros
     * const { count } = await prisma.cadastro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cadastroDeleteManyArgs>(args?: SelectSubset<T, cadastroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cadastros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cadastros
     * const cadastro = await prisma.cadastro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cadastroUpdateManyArgs>(args: SelectSubset<T, cadastroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cadastro.
     * @param {cadastroUpsertArgs} args - Arguments to update or create a Cadastro.
     * @example
     * // Update or create a Cadastro
     * const cadastro = await prisma.cadastro.upsert({
     *   create: {
     *     // ... data to create a Cadastro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cadastro we want to update
     *   }
     * })
     */
    upsert<T extends cadastroUpsertArgs>(args: SelectSubset<T, cadastroUpsertArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cadastros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroCountArgs} args - Arguments to filter Cadastros to count.
     * @example
     * // Count the number of Cadastros
     * const count = await prisma.cadastro.count({
     *   where: {
     *     // ... the filter for the Cadastros we want to count
     *   }
     * })
    **/
    count<T extends cadastroCountArgs>(
      args?: Subset<T, cadastroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CadastroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cadastro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CadastroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CadastroAggregateArgs>(args: Subset<T, CadastroAggregateArgs>): Prisma.PrismaPromise<GetCadastroAggregateType<T>>

    /**
     * Group by Cadastro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cadastroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cadastroGroupByArgs['orderBy'] }
        : { orderBy?: cadastroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cadastroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCadastroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cadastro model
   */
  readonly fields: cadastroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cadastro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cadastroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    beneficiospaciente<T extends cadastro$beneficiospacienteArgs<ExtArgs> = {}>(args?: Subset<T, cadastro$beneficiospacienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$beneficiospacientePayload<ExtArgs>, T, "findMany"> | Null>
    dependenciaspaciente<T extends cadastro$dependenciaspacienteArgs<ExtArgs> = {}>(args?: Subset<T, cadastro$dependenciaspacienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dependenciaspacientePayload<ExtArgs>, T, "findMany"> | Null>
    historicoatividades<T extends cadastro$historicoatividadesArgs<ExtArgs> = {}>(args?: Subset<T, cadastro$historicoatividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historicoatividadesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cadastro model
   */ 
  interface cadastroFieldRefs {
    readonly id: FieldRef<"cadastro", 'Int'>
    readonly nome: FieldRef<"cadastro", 'String'>
    readonly idade: FieldRef<"cadastro", 'Int'>
    readonly documento: FieldRef<"cadastro", 'String'>
    readonly data_nascimento: FieldRef<"cadastro", 'DateTime'>
    readonly sexo: FieldRef<"cadastro", 'cadastro_sexo'>
    readonly estado_civil: FieldRef<"cadastro", 'cadastro_estado_civil'>
    readonly profissao: FieldRef<"cadastro", 'String'>
    readonly morador_rua: FieldRef<"cadastro", 'Boolean'>
    readonly status: FieldRef<"cadastro", 'cadastro_status'>
    readonly cor_olhos: FieldRef<"cadastro", 'String'>
    readonly cor_cabelo: FieldRef<"cadastro", 'String'>
    readonly altura: FieldRef<"cadastro", 'Decimal'>
    readonly peso: FieldRef<"cadastro", 'Decimal'>
    readonly etnia: FieldRef<"cadastro", 'String'>
    readonly codigo_usuario: FieldRef<"cadastro", 'String'>
    readonly tipo_documento: FieldRef<"cadastro", 'cadastro_tipo_documento'>
  }
    

  // Custom InputTypes
  /**
   * cadastro findUnique
   */
  export type cadastroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroInclude<ExtArgs> | null
    /**
     * Filter, which cadastro to fetch.
     */
    where: cadastroWhereUniqueInput
  }

  /**
   * cadastro findUniqueOrThrow
   */
  export type cadastroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroInclude<ExtArgs> | null
    /**
     * Filter, which cadastro to fetch.
     */
    where: cadastroWhereUniqueInput
  }

  /**
   * cadastro findFirst
   */
  export type cadastroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroInclude<ExtArgs> | null
    /**
     * Filter, which cadastro to fetch.
     */
    where?: cadastroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastros to fetch.
     */
    orderBy?: cadastroOrderByWithRelationInput | cadastroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cadastros.
     */
    cursor?: cadastroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cadastros.
     */
    distinct?: CadastroScalarFieldEnum | CadastroScalarFieldEnum[]
  }

  /**
   * cadastro findFirstOrThrow
   */
  export type cadastroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroInclude<ExtArgs> | null
    /**
     * Filter, which cadastro to fetch.
     */
    where?: cadastroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastros to fetch.
     */
    orderBy?: cadastroOrderByWithRelationInput | cadastroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cadastros.
     */
    cursor?: cadastroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cadastros.
     */
    distinct?: CadastroScalarFieldEnum | CadastroScalarFieldEnum[]
  }

  /**
   * cadastro findMany
   */
  export type cadastroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroInclude<ExtArgs> | null
    /**
     * Filter, which cadastros to fetch.
     */
    where?: cadastroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastros to fetch.
     */
    orderBy?: cadastroOrderByWithRelationInput | cadastroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cadastros.
     */
    cursor?: cadastroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastros.
     */
    skip?: number
    distinct?: CadastroScalarFieldEnum | CadastroScalarFieldEnum[]
  }

  /**
   * cadastro create
   */
  export type cadastroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroInclude<ExtArgs> | null
    /**
     * The data needed to create a cadastro.
     */
    data: XOR<cadastroCreateInput, cadastroUncheckedCreateInput>
  }

  /**
   * cadastro createMany
   */
  export type cadastroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cadastros.
     */
    data: cadastroCreateManyInput | cadastroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cadastro update
   */
  export type cadastroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroInclude<ExtArgs> | null
    /**
     * The data needed to update a cadastro.
     */
    data: XOR<cadastroUpdateInput, cadastroUncheckedUpdateInput>
    /**
     * Choose, which cadastro to update.
     */
    where: cadastroWhereUniqueInput
  }

  /**
   * cadastro updateMany
   */
  export type cadastroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cadastros.
     */
    data: XOR<cadastroUpdateManyMutationInput, cadastroUncheckedUpdateManyInput>
    /**
     * Filter which cadastros to update
     */
    where?: cadastroWhereInput
  }

  /**
   * cadastro upsert
   */
  export type cadastroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroInclude<ExtArgs> | null
    /**
     * The filter to search for the cadastro to update in case it exists.
     */
    where: cadastroWhereUniqueInput
    /**
     * In case the cadastro found by the `where` argument doesn't exist, create a new cadastro with this data.
     */
    create: XOR<cadastroCreateInput, cadastroUncheckedCreateInput>
    /**
     * In case the cadastro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cadastroUpdateInput, cadastroUncheckedUpdateInput>
  }

  /**
   * cadastro delete
   */
  export type cadastroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroInclude<ExtArgs> | null
    /**
     * Filter which cadastro to delete.
     */
    where: cadastroWhereUniqueInput
  }

  /**
   * cadastro deleteMany
   */
  export type cadastroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cadastros to delete
     */
    where?: cadastroWhereInput
  }

  /**
   * cadastro.beneficiospaciente
   */
  export type cadastro$beneficiospacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiospaciente
     */
    select?: beneficiospacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiospacienteInclude<ExtArgs> | null
    where?: beneficiospacienteWhereInput
    orderBy?: beneficiospacienteOrderByWithRelationInput | beneficiospacienteOrderByWithRelationInput[]
    cursor?: beneficiospacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BeneficiospacienteScalarFieldEnum | BeneficiospacienteScalarFieldEnum[]
  }

  /**
   * cadastro.dependenciaspaciente
   */
  export type cadastro$dependenciaspacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciaspaciente
     */
    select?: dependenciaspacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciaspacienteInclude<ExtArgs> | null
    where?: dependenciaspacienteWhereInput
    orderBy?: dependenciaspacienteOrderByWithRelationInput | dependenciaspacienteOrderByWithRelationInput[]
    cursor?: dependenciaspacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DependenciaspacienteScalarFieldEnum | DependenciaspacienteScalarFieldEnum[]
  }

  /**
   * cadastro.historicoatividades
   */
  export type cadastro$historicoatividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoatividades
     */
    select?: historicoatividadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoatividadesInclude<ExtArgs> | null
    where?: historicoatividadesWhereInput
    orderBy?: historicoatividadesOrderByWithRelationInput | historicoatividadesOrderByWithRelationInput[]
    cursor?: historicoatividadesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoricoatividadesScalarFieldEnum | HistoricoatividadesScalarFieldEnum[]
  }

  /**
   * cadastro without action
   */
  export type cadastroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastro
     */
    select?: cadastroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastroInclude<ExtArgs> | null
  }


  /**
   * Model dependenciasfixas
   */

  export type AggregateDependenciasfixas = {
    _count: DependenciasfixasCountAggregateOutputType | null
    _min: DependenciasfixasMinAggregateOutputType | null
    _max: DependenciasfixasMaxAggregateOutputType | null
  }

  export type DependenciasfixasMinAggregateOutputType = {
    codigo: string | null
    descricao: string | null
  }

  export type DependenciasfixasMaxAggregateOutputType = {
    codigo: string | null
    descricao: string | null
  }

  export type DependenciasfixasCountAggregateOutputType = {
    codigo: number
    descricao: number
    _all: number
  }


  export type DependenciasfixasMinAggregateInputType = {
    codigo?: true
    descricao?: true
  }

  export type DependenciasfixasMaxAggregateInputType = {
    codigo?: true
    descricao?: true
  }

  export type DependenciasfixasCountAggregateInputType = {
    codigo?: true
    descricao?: true
    _all?: true
  }

  export type DependenciasfixasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dependenciasfixas to aggregate.
     */
    where?: dependenciasfixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dependenciasfixas to fetch.
     */
    orderBy?: dependenciasfixasOrderByWithRelationInput | dependenciasfixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dependenciasfixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dependenciasfixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dependenciasfixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dependenciasfixas
    **/
    _count?: true | DependenciasfixasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DependenciasfixasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DependenciasfixasMaxAggregateInputType
  }

  export type GetDependenciasfixasAggregateType<T extends DependenciasfixasAggregateArgs> = {
        [P in keyof T & keyof AggregateDependenciasfixas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDependenciasfixas[P]>
      : GetScalarType<T[P], AggregateDependenciasfixas[P]>
  }




  export type dependenciasfixasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dependenciasfixasWhereInput
    orderBy?: dependenciasfixasOrderByWithAggregationInput | dependenciasfixasOrderByWithAggregationInput[]
    by: DependenciasfixasScalarFieldEnum[] | DependenciasfixasScalarFieldEnum
    having?: dependenciasfixasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DependenciasfixasCountAggregateInputType | true
    _min?: DependenciasfixasMinAggregateInputType
    _max?: DependenciasfixasMaxAggregateInputType
  }

  export type DependenciasfixasGroupByOutputType = {
    codigo: string
    descricao: string
    _count: DependenciasfixasCountAggregateOutputType | null
    _min: DependenciasfixasMinAggregateOutputType | null
    _max: DependenciasfixasMaxAggregateOutputType | null
  }

  type GetDependenciasfixasGroupByPayload<T extends dependenciasfixasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DependenciasfixasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DependenciasfixasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DependenciasfixasGroupByOutputType[P]>
            : GetScalarType<T[P], DependenciasfixasGroupByOutputType[P]>
        }
      >
    >


  export type dependenciasfixasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    descricao?: boolean
    dependenciaspaciente?: boolean | dependenciasfixas$dependenciaspacienteArgs<ExtArgs>
    _count?: boolean | DependenciasfixasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dependenciasfixas"]>


  export type dependenciasfixasSelectScalar = {
    codigo?: boolean
    descricao?: boolean
  }

  export type dependenciasfixasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dependenciaspaciente?: boolean | dependenciasfixas$dependenciaspacienteArgs<ExtArgs>
    _count?: boolean | DependenciasfixasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $dependenciasfixasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dependenciasfixas"
    objects: {
      dependenciaspaciente: Prisma.$dependenciaspacientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      codigo: string
      descricao: string
    }, ExtArgs["result"]["dependenciasfixas"]>
    composites: {}
  }

  type dependenciasfixasGetPayload<S extends boolean | null | undefined | dependenciasfixasDefaultArgs> = $Result.GetResult<Prisma.$dependenciasfixasPayload, S>

  type dependenciasfixasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<dependenciasfixasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DependenciasfixasCountAggregateInputType | true
    }

  export interface dependenciasfixasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dependenciasfixas'], meta: { name: 'dependenciasfixas' } }
    /**
     * Find zero or one Dependenciasfixas that matches the filter.
     * @param {dependenciasfixasFindUniqueArgs} args - Arguments to find a Dependenciasfixas
     * @example
     * // Get one Dependenciasfixas
     * const dependenciasfixas = await prisma.dependenciasfixas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dependenciasfixasFindUniqueArgs>(args: SelectSubset<T, dependenciasfixasFindUniqueArgs<ExtArgs>>): Prisma__dependenciasfixasClient<$Result.GetResult<Prisma.$dependenciasfixasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dependenciasfixas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {dependenciasfixasFindUniqueOrThrowArgs} args - Arguments to find a Dependenciasfixas
     * @example
     * // Get one Dependenciasfixas
     * const dependenciasfixas = await prisma.dependenciasfixas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dependenciasfixasFindUniqueOrThrowArgs>(args: SelectSubset<T, dependenciasfixasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dependenciasfixasClient<$Result.GetResult<Prisma.$dependenciasfixasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dependenciasfixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dependenciasfixasFindFirstArgs} args - Arguments to find a Dependenciasfixas
     * @example
     * // Get one Dependenciasfixas
     * const dependenciasfixas = await prisma.dependenciasfixas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dependenciasfixasFindFirstArgs>(args?: SelectSubset<T, dependenciasfixasFindFirstArgs<ExtArgs>>): Prisma__dependenciasfixasClient<$Result.GetResult<Prisma.$dependenciasfixasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dependenciasfixas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dependenciasfixasFindFirstOrThrowArgs} args - Arguments to find a Dependenciasfixas
     * @example
     * // Get one Dependenciasfixas
     * const dependenciasfixas = await prisma.dependenciasfixas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dependenciasfixasFindFirstOrThrowArgs>(args?: SelectSubset<T, dependenciasfixasFindFirstOrThrowArgs<ExtArgs>>): Prisma__dependenciasfixasClient<$Result.GetResult<Prisma.$dependenciasfixasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Dependenciasfixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dependenciasfixasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dependenciasfixas
     * const dependenciasfixas = await prisma.dependenciasfixas.findMany()
     * 
     * // Get first 10 Dependenciasfixas
     * const dependenciasfixas = await prisma.dependenciasfixas.findMany({ take: 10 })
     * 
     * // Only select the `codigo`
     * const dependenciasfixasWithCodigoOnly = await prisma.dependenciasfixas.findMany({ select: { codigo: true } })
     * 
     */
    findMany<T extends dependenciasfixasFindManyArgs>(args?: SelectSubset<T, dependenciasfixasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dependenciasfixasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dependenciasfixas.
     * @param {dependenciasfixasCreateArgs} args - Arguments to create a Dependenciasfixas.
     * @example
     * // Create one Dependenciasfixas
     * const Dependenciasfixas = await prisma.dependenciasfixas.create({
     *   data: {
     *     // ... data to create a Dependenciasfixas
     *   }
     * })
     * 
     */
    create<T extends dependenciasfixasCreateArgs>(args: SelectSubset<T, dependenciasfixasCreateArgs<ExtArgs>>): Prisma__dependenciasfixasClient<$Result.GetResult<Prisma.$dependenciasfixasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Dependenciasfixas.
     * @param {dependenciasfixasCreateManyArgs} args - Arguments to create many Dependenciasfixas.
     * @example
     * // Create many Dependenciasfixas
     * const dependenciasfixas = await prisma.dependenciasfixas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dependenciasfixasCreateManyArgs>(args?: SelectSubset<T, dependenciasfixasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dependenciasfixas.
     * @param {dependenciasfixasDeleteArgs} args - Arguments to delete one Dependenciasfixas.
     * @example
     * // Delete one Dependenciasfixas
     * const Dependenciasfixas = await prisma.dependenciasfixas.delete({
     *   where: {
     *     // ... filter to delete one Dependenciasfixas
     *   }
     * })
     * 
     */
    delete<T extends dependenciasfixasDeleteArgs>(args: SelectSubset<T, dependenciasfixasDeleteArgs<ExtArgs>>): Prisma__dependenciasfixasClient<$Result.GetResult<Prisma.$dependenciasfixasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dependenciasfixas.
     * @param {dependenciasfixasUpdateArgs} args - Arguments to update one Dependenciasfixas.
     * @example
     * // Update one Dependenciasfixas
     * const dependenciasfixas = await prisma.dependenciasfixas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dependenciasfixasUpdateArgs>(args: SelectSubset<T, dependenciasfixasUpdateArgs<ExtArgs>>): Prisma__dependenciasfixasClient<$Result.GetResult<Prisma.$dependenciasfixasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Dependenciasfixas.
     * @param {dependenciasfixasDeleteManyArgs} args - Arguments to filter Dependenciasfixas to delete.
     * @example
     * // Delete a few Dependenciasfixas
     * const { count } = await prisma.dependenciasfixas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dependenciasfixasDeleteManyArgs>(args?: SelectSubset<T, dependenciasfixasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dependenciasfixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dependenciasfixasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dependenciasfixas
     * const dependenciasfixas = await prisma.dependenciasfixas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dependenciasfixasUpdateManyArgs>(args: SelectSubset<T, dependenciasfixasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dependenciasfixas.
     * @param {dependenciasfixasUpsertArgs} args - Arguments to update or create a Dependenciasfixas.
     * @example
     * // Update or create a Dependenciasfixas
     * const dependenciasfixas = await prisma.dependenciasfixas.upsert({
     *   create: {
     *     // ... data to create a Dependenciasfixas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dependenciasfixas we want to update
     *   }
     * })
     */
    upsert<T extends dependenciasfixasUpsertArgs>(args: SelectSubset<T, dependenciasfixasUpsertArgs<ExtArgs>>): Prisma__dependenciasfixasClient<$Result.GetResult<Prisma.$dependenciasfixasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Dependenciasfixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dependenciasfixasCountArgs} args - Arguments to filter Dependenciasfixas to count.
     * @example
     * // Count the number of Dependenciasfixas
     * const count = await prisma.dependenciasfixas.count({
     *   where: {
     *     // ... the filter for the Dependenciasfixas we want to count
     *   }
     * })
    **/
    count<T extends dependenciasfixasCountArgs>(
      args?: Subset<T, dependenciasfixasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DependenciasfixasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dependenciasfixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenciasfixasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DependenciasfixasAggregateArgs>(args: Subset<T, DependenciasfixasAggregateArgs>): Prisma.PrismaPromise<GetDependenciasfixasAggregateType<T>>

    /**
     * Group by Dependenciasfixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dependenciasfixasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dependenciasfixasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dependenciasfixasGroupByArgs['orderBy'] }
        : { orderBy?: dependenciasfixasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dependenciasfixasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDependenciasfixasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dependenciasfixas model
   */
  readonly fields: dependenciasfixasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dependenciasfixas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dependenciasfixasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dependenciaspaciente<T extends dependenciasfixas$dependenciaspacienteArgs<ExtArgs> = {}>(args?: Subset<T, dependenciasfixas$dependenciaspacienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dependenciaspacientePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dependenciasfixas model
   */ 
  interface dependenciasfixasFieldRefs {
    readonly codigo: FieldRef<"dependenciasfixas", 'String'>
    readonly descricao: FieldRef<"dependenciasfixas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dependenciasfixas findUnique
   */
  export type dependenciasfixasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciasfixas
     */
    select?: dependenciasfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciasfixasInclude<ExtArgs> | null
    /**
     * Filter, which dependenciasfixas to fetch.
     */
    where: dependenciasfixasWhereUniqueInput
  }

  /**
   * dependenciasfixas findUniqueOrThrow
   */
  export type dependenciasfixasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciasfixas
     */
    select?: dependenciasfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciasfixasInclude<ExtArgs> | null
    /**
     * Filter, which dependenciasfixas to fetch.
     */
    where: dependenciasfixasWhereUniqueInput
  }

  /**
   * dependenciasfixas findFirst
   */
  export type dependenciasfixasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciasfixas
     */
    select?: dependenciasfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciasfixasInclude<ExtArgs> | null
    /**
     * Filter, which dependenciasfixas to fetch.
     */
    where?: dependenciasfixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dependenciasfixas to fetch.
     */
    orderBy?: dependenciasfixasOrderByWithRelationInput | dependenciasfixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dependenciasfixas.
     */
    cursor?: dependenciasfixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dependenciasfixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dependenciasfixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dependenciasfixas.
     */
    distinct?: DependenciasfixasScalarFieldEnum | DependenciasfixasScalarFieldEnum[]
  }

  /**
   * dependenciasfixas findFirstOrThrow
   */
  export type dependenciasfixasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciasfixas
     */
    select?: dependenciasfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciasfixasInclude<ExtArgs> | null
    /**
     * Filter, which dependenciasfixas to fetch.
     */
    where?: dependenciasfixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dependenciasfixas to fetch.
     */
    orderBy?: dependenciasfixasOrderByWithRelationInput | dependenciasfixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dependenciasfixas.
     */
    cursor?: dependenciasfixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dependenciasfixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dependenciasfixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dependenciasfixas.
     */
    distinct?: DependenciasfixasScalarFieldEnum | DependenciasfixasScalarFieldEnum[]
  }

  /**
   * dependenciasfixas findMany
   */
  export type dependenciasfixasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciasfixas
     */
    select?: dependenciasfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciasfixasInclude<ExtArgs> | null
    /**
     * Filter, which dependenciasfixas to fetch.
     */
    where?: dependenciasfixasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dependenciasfixas to fetch.
     */
    orderBy?: dependenciasfixasOrderByWithRelationInput | dependenciasfixasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dependenciasfixas.
     */
    cursor?: dependenciasfixasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dependenciasfixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dependenciasfixas.
     */
    skip?: number
    distinct?: DependenciasfixasScalarFieldEnum | DependenciasfixasScalarFieldEnum[]
  }

  /**
   * dependenciasfixas create
   */
  export type dependenciasfixasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciasfixas
     */
    select?: dependenciasfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciasfixasInclude<ExtArgs> | null
    /**
     * The data needed to create a dependenciasfixas.
     */
    data: XOR<dependenciasfixasCreateInput, dependenciasfixasUncheckedCreateInput>
  }

  /**
   * dependenciasfixas createMany
   */
  export type dependenciasfixasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dependenciasfixas.
     */
    data: dependenciasfixasCreateManyInput | dependenciasfixasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dependenciasfixas update
   */
  export type dependenciasfixasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciasfixas
     */
    select?: dependenciasfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciasfixasInclude<ExtArgs> | null
    /**
     * The data needed to update a dependenciasfixas.
     */
    data: XOR<dependenciasfixasUpdateInput, dependenciasfixasUncheckedUpdateInput>
    /**
     * Choose, which dependenciasfixas to update.
     */
    where: dependenciasfixasWhereUniqueInput
  }

  /**
   * dependenciasfixas updateMany
   */
  export type dependenciasfixasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dependenciasfixas.
     */
    data: XOR<dependenciasfixasUpdateManyMutationInput, dependenciasfixasUncheckedUpdateManyInput>
    /**
     * Filter which dependenciasfixas to update
     */
    where?: dependenciasfixasWhereInput
  }

  /**
   * dependenciasfixas upsert
   */
  export type dependenciasfixasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciasfixas
     */
    select?: dependenciasfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciasfixasInclude<ExtArgs> | null
    /**
     * The filter to search for the dependenciasfixas to update in case it exists.
     */
    where: dependenciasfixasWhereUniqueInput
    /**
     * In case the dependenciasfixas found by the `where` argument doesn't exist, create a new dependenciasfixas with this data.
     */
    create: XOR<dependenciasfixasCreateInput, dependenciasfixasUncheckedCreateInput>
    /**
     * In case the dependenciasfixas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dependenciasfixasUpdateInput, dependenciasfixasUncheckedUpdateInput>
  }

  /**
   * dependenciasfixas delete
   */
  export type dependenciasfixasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciasfixas
     */
    select?: dependenciasfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciasfixasInclude<ExtArgs> | null
    /**
     * Filter which dependenciasfixas to delete.
     */
    where: dependenciasfixasWhereUniqueInput
  }

  /**
   * dependenciasfixas deleteMany
   */
  export type dependenciasfixasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dependenciasfixas to delete
     */
    where?: dependenciasfixasWhereInput
  }

  /**
   * dependenciasfixas.dependenciaspaciente
   */
  export type dependenciasfixas$dependenciaspacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciaspaciente
     */
    select?: dependenciaspacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciaspacienteInclude<ExtArgs> | null
    where?: dependenciaspacienteWhereInput
    orderBy?: dependenciaspacienteOrderByWithRelationInput | dependenciaspacienteOrderByWithRelationInput[]
    cursor?: dependenciaspacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DependenciaspacienteScalarFieldEnum | DependenciaspacienteScalarFieldEnum[]
  }

  /**
   * dependenciasfixas without action
   */
  export type dependenciasfixasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciasfixas
     */
    select?: dependenciasfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciasfixasInclude<ExtArgs> | null
  }


  /**
   * Model dependenciaspaciente
   */

  export type AggregateDependenciaspaciente = {
    _count: DependenciaspacienteCountAggregateOutputType | null
    _avg: DependenciaspacienteAvgAggregateOutputType | null
    _sum: DependenciaspacienteSumAggregateOutputType | null
    _min: DependenciaspacienteMinAggregateOutputType | null
    _max: DependenciaspacienteMaxAggregateOutputType | null
  }

  export type DependenciaspacienteAvgAggregateOutputType = {
    id: number | null
    cadastro_id: number | null
  }

  export type DependenciaspacienteSumAggregateOutputType = {
    id: number | null
    cadastro_id: number | null
  }

  export type DependenciaspacienteMinAggregateOutputType = {
    id: number | null
    cadastro_id: number | null
    codigo_dependencia: string | null
  }

  export type DependenciaspacienteMaxAggregateOutputType = {
    id: number | null
    cadastro_id: number | null
    codigo_dependencia: string | null
  }

  export type DependenciaspacienteCountAggregateOutputType = {
    id: number
    cadastro_id: number
    codigo_dependencia: number
    _all: number
  }


  export type DependenciaspacienteAvgAggregateInputType = {
    id?: true
    cadastro_id?: true
  }

  export type DependenciaspacienteSumAggregateInputType = {
    id?: true
    cadastro_id?: true
  }

  export type DependenciaspacienteMinAggregateInputType = {
    id?: true
    cadastro_id?: true
    codigo_dependencia?: true
  }

  export type DependenciaspacienteMaxAggregateInputType = {
    id?: true
    cadastro_id?: true
    codigo_dependencia?: true
  }

  export type DependenciaspacienteCountAggregateInputType = {
    id?: true
    cadastro_id?: true
    codigo_dependencia?: true
    _all?: true
  }

  export type DependenciaspacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dependenciaspaciente to aggregate.
     */
    where?: dependenciaspacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dependenciaspacientes to fetch.
     */
    orderBy?: dependenciaspacienteOrderByWithRelationInput | dependenciaspacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dependenciaspacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dependenciaspacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dependenciaspacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dependenciaspacientes
    **/
    _count?: true | DependenciaspacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DependenciaspacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DependenciaspacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DependenciaspacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DependenciaspacienteMaxAggregateInputType
  }

  export type GetDependenciaspacienteAggregateType<T extends DependenciaspacienteAggregateArgs> = {
        [P in keyof T & keyof AggregateDependenciaspaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDependenciaspaciente[P]>
      : GetScalarType<T[P], AggregateDependenciaspaciente[P]>
  }




  export type dependenciaspacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dependenciaspacienteWhereInput
    orderBy?: dependenciaspacienteOrderByWithAggregationInput | dependenciaspacienteOrderByWithAggregationInput[]
    by: DependenciaspacienteScalarFieldEnum[] | DependenciaspacienteScalarFieldEnum
    having?: dependenciaspacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DependenciaspacienteCountAggregateInputType | true
    _avg?: DependenciaspacienteAvgAggregateInputType
    _sum?: DependenciaspacienteSumAggregateInputType
    _min?: DependenciaspacienteMinAggregateInputType
    _max?: DependenciaspacienteMaxAggregateInputType
  }

  export type DependenciaspacienteGroupByOutputType = {
    id: number
    cadastro_id: number
    codigo_dependencia: string | null
    _count: DependenciaspacienteCountAggregateOutputType | null
    _avg: DependenciaspacienteAvgAggregateOutputType | null
    _sum: DependenciaspacienteSumAggregateOutputType | null
    _min: DependenciaspacienteMinAggregateOutputType | null
    _max: DependenciaspacienteMaxAggregateOutputType | null
  }

  type GetDependenciaspacienteGroupByPayload<T extends dependenciaspacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DependenciaspacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DependenciaspacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DependenciaspacienteGroupByOutputType[P]>
            : GetScalarType<T[P], DependenciaspacienteGroupByOutputType[P]>
        }
      >
    >


  export type dependenciaspacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cadastro_id?: boolean
    codigo_dependencia?: boolean
    cadastro?: boolean | cadastroDefaultArgs<ExtArgs>
    dependenciasfixas?: boolean | dependenciaspaciente$dependenciasfixasArgs<ExtArgs>
  }, ExtArgs["result"]["dependenciaspaciente"]>


  export type dependenciaspacienteSelectScalar = {
    id?: boolean
    cadastro_id?: boolean
    codigo_dependencia?: boolean
  }

  export type dependenciaspacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cadastro?: boolean | cadastroDefaultArgs<ExtArgs>
    dependenciasfixas?: boolean | dependenciaspaciente$dependenciasfixasArgs<ExtArgs>
  }

  export type $dependenciaspacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dependenciaspaciente"
    objects: {
      cadastro: Prisma.$cadastroPayload<ExtArgs>
      dependenciasfixas: Prisma.$dependenciasfixasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cadastro_id: number
      codigo_dependencia: string | null
    }, ExtArgs["result"]["dependenciaspaciente"]>
    composites: {}
  }

  type dependenciaspacienteGetPayload<S extends boolean | null | undefined | dependenciaspacienteDefaultArgs> = $Result.GetResult<Prisma.$dependenciaspacientePayload, S>

  type dependenciaspacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<dependenciaspacienteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DependenciaspacienteCountAggregateInputType | true
    }

  export interface dependenciaspacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dependenciaspaciente'], meta: { name: 'dependenciaspaciente' } }
    /**
     * Find zero or one Dependenciaspaciente that matches the filter.
     * @param {dependenciaspacienteFindUniqueArgs} args - Arguments to find a Dependenciaspaciente
     * @example
     * // Get one Dependenciaspaciente
     * const dependenciaspaciente = await prisma.dependenciaspaciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dependenciaspacienteFindUniqueArgs>(args: SelectSubset<T, dependenciaspacienteFindUniqueArgs<ExtArgs>>): Prisma__dependenciaspacienteClient<$Result.GetResult<Prisma.$dependenciaspacientePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dependenciaspaciente that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {dependenciaspacienteFindUniqueOrThrowArgs} args - Arguments to find a Dependenciaspaciente
     * @example
     * // Get one Dependenciaspaciente
     * const dependenciaspaciente = await prisma.dependenciaspaciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dependenciaspacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, dependenciaspacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dependenciaspacienteClient<$Result.GetResult<Prisma.$dependenciaspacientePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dependenciaspaciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dependenciaspacienteFindFirstArgs} args - Arguments to find a Dependenciaspaciente
     * @example
     * // Get one Dependenciaspaciente
     * const dependenciaspaciente = await prisma.dependenciaspaciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dependenciaspacienteFindFirstArgs>(args?: SelectSubset<T, dependenciaspacienteFindFirstArgs<ExtArgs>>): Prisma__dependenciaspacienteClient<$Result.GetResult<Prisma.$dependenciaspacientePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dependenciaspaciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dependenciaspacienteFindFirstOrThrowArgs} args - Arguments to find a Dependenciaspaciente
     * @example
     * // Get one Dependenciaspaciente
     * const dependenciaspaciente = await prisma.dependenciaspaciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dependenciaspacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, dependenciaspacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__dependenciaspacienteClient<$Result.GetResult<Prisma.$dependenciaspacientePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Dependenciaspacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dependenciaspacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dependenciaspacientes
     * const dependenciaspacientes = await prisma.dependenciaspaciente.findMany()
     * 
     * // Get first 10 Dependenciaspacientes
     * const dependenciaspacientes = await prisma.dependenciaspaciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dependenciaspacienteWithIdOnly = await prisma.dependenciaspaciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dependenciaspacienteFindManyArgs>(args?: SelectSubset<T, dependenciaspacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dependenciaspacientePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dependenciaspaciente.
     * @param {dependenciaspacienteCreateArgs} args - Arguments to create a Dependenciaspaciente.
     * @example
     * // Create one Dependenciaspaciente
     * const Dependenciaspaciente = await prisma.dependenciaspaciente.create({
     *   data: {
     *     // ... data to create a Dependenciaspaciente
     *   }
     * })
     * 
     */
    create<T extends dependenciaspacienteCreateArgs>(args: SelectSubset<T, dependenciaspacienteCreateArgs<ExtArgs>>): Prisma__dependenciaspacienteClient<$Result.GetResult<Prisma.$dependenciaspacientePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Dependenciaspacientes.
     * @param {dependenciaspacienteCreateManyArgs} args - Arguments to create many Dependenciaspacientes.
     * @example
     * // Create many Dependenciaspacientes
     * const dependenciaspaciente = await prisma.dependenciaspaciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dependenciaspacienteCreateManyArgs>(args?: SelectSubset<T, dependenciaspacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dependenciaspaciente.
     * @param {dependenciaspacienteDeleteArgs} args - Arguments to delete one Dependenciaspaciente.
     * @example
     * // Delete one Dependenciaspaciente
     * const Dependenciaspaciente = await prisma.dependenciaspaciente.delete({
     *   where: {
     *     // ... filter to delete one Dependenciaspaciente
     *   }
     * })
     * 
     */
    delete<T extends dependenciaspacienteDeleteArgs>(args: SelectSubset<T, dependenciaspacienteDeleteArgs<ExtArgs>>): Prisma__dependenciaspacienteClient<$Result.GetResult<Prisma.$dependenciaspacientePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dependenciaspaciente.
     * @param {dependenciaspacienteUpdateArgs} args - Arguments to update one Dependenciaspaciente.
     * @example
     * // Update one Dependenciaspaciente
     * const dependenciaspaciente = await prisma.dependenciaspaciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dependenciaspacienteUpdateArgs>(args: SelectSubset<T, dependenciaspacienteUpdateArgs<ExtArgs>>): Prisma__dependenciaspacienteClient<$Result.GetResult<Prisma.$dependenciaspacientePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Dependenciaspacientes.
     * @param {dependenciaspacienteDeleteManyArgs} args - Arguments to filter Dependenciaspacientes to delete.
     * @example
     * // Delete a few Dependenciaspacientes
     * const { count } = await prisma.dependenciaspaciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dependenciaspacienteDeleteManyArgs>(args?: SelectSubset<T, dependenciaspacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dependenciaspacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dependenciaspacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dependenciaspacientes
     * const dependenciaspaciente = await prisma.dependenciaspaciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dependenciaspacienteUpdateManyArgs>(args: SelectSubset<T, dependenciaspacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dependenciaspaciente.
     * @param {dependenciaspacienteUpsertArgs} args - Arguments to update or create a Dependenciaspaciente.
     * @example
     * // Update or create a Dependenciaspaciente
     * const dependenciaspaciente = await prisma.dependenciaspaciente.upsert({
     *   create: {
     *     // ... data to create a Dependenciaspaciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dependenciaspaciente we want to update
     *   }
     * })
     */
    upsert<T extends dependenciaspacienteUpsertArgs>(args: SelectSubset<T, dependenciaspacienteUpsertArgs<ExtArgs>>): Prisma__dependenciaspacienteClient<$Result.GetResult<Prisma.$dependenciaspacientePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Dependenciaspacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dependenciaspacienteCountArgs} args - Arguments to filter Dependenciaspacientes to count.
     * @example
     * // Count the number of Dependenciaspacientes
     * const count = await prisma.dependenciaspaciente.count({
     *   where: {
     *     // ... the filter for the Dependenciaspacientes we want to count
     *   }
     * })
    **/
    count<T extends dependenciaspacienteCountArgs>(
      args?: Subset<T, dependenciaspacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DependenciaspacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dependenciaspaciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DependenciaspacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DependenciaspacienteAggregateArgs>(args: Subset<T, DependenciaspacienteAggregateArgs>): Prisma.PrismaPromise<GetDependenciaspacienteAggregateType<T>>

    /**
     * Group by Dependenciaspaciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dependenciaspacienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dependenciaspacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dependenciaspacienteGroupByArgs['orderBy'] }
        : { orderBy?: dependenciaspacienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dependenciaspacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDependenciaspacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dependenciaspaciente model
   */
  readonly fields: dependenciaspacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dependenciaspaciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dependenciaspacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cadastro<T extends cadastroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cadastroDefaultArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    dependenciasfixas<T extends dependenciaspaciente$dependenciasfixasArgs<ExtArgs> = {}>(args?: Subset<T, dependenciaspaciente$dependenciasfixasArgs<ExtArgs>>): Prisma__dependenciasfixasClient<$Result.GetResult<Prisma.$dependenciasfixasPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dependenciaspaciente model
   */ 
  interface dependenciaspacienteFieldRefs {
    readonly id: FieldRef<"dependenciaspaciente", 'Int'>
    readonly cadastro_id: FieldRef<"dependenciaspaciente", 'Int'>
    readonly codigo_dependencia: FieldRef<"dependenciaspaciente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dependenciaspaciente findUnique
   */
  export type dependenciaspacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciaspaciente
     */
    select?: dependenciaspacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciaspacienteInclude<ExtArgs> | null
    /**
     * Filter, which dependenciaspaciente to fetch.
     */
    where: dependenciaspacienteWhereUniqueInput
  }

  /**
   * dependenciaspaciente findUniqueOrThrow
   */
  export type dependenciaspacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciaspaciente
     */
    select?: dependenciaspacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciaspacienteInclude<ExtArgs> | null
    /**
     * Filter, which dependenciaspaciente to fetch.
     */
    where: dependenciaspacienteWhereUniqueInput
  }

  /**
   * dependenciaspaciente findFirst
   */
  export type dependenciaspacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciaspaciente
     */
    select?: dependenciaspacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciaspacienteInclude<ExtArgs> | null
    /**
     * Filter, which dependenciaspaciente to fetch.
     */
    where?: dependenciaspacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dependenciaspacientes to fetch.
     */
    orderBy?: dependenciaspacienteOrderByWithRelationInput | dependenciaspacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dependenciaspacientes.
     */
    cursor?: dependenciaspacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dependenciaspacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dependenciaspacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dependenciaspacientes.
     */
    distinct?: DependenciaspacienteScalarFieldEnum | DependenciaspacienteScalarFieldEnum[]
  }

  /**
   * dependenciaspaciente findFirstOrThrow
   */
  export type dependenciaspacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciaspaciente
     */
    select?: dependenciaspacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciaspacienteInclude<ExtArgs> | null
    /**
     * Filter, which dependenciaspaciente to fetch.
     */
    where?: dependenciaspacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dependenciaspacientes to fetch.
     */
    orderBy?: dependenciaspacienteOrderByWithRelationInput | dependenciaspacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dependenciaspacientes.
     */
    cursor?: dependenciaspacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dependenciaspacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dependenciaspacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dependenciaspacientes.
     */
    distinct?: DependenciaspacienteScalarFieldEnum | DependenciaspacienteScalarFieldEnum[]
  }

  /**
   * dependenciaspaciente findMany
   */
  export type dependenciaspacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciaspaciente
     */
    select?: dependenciaspacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciaspacienteInclude<ExtArgs> | null
    /**
     * Filter, which dependenciaspacientes to fetch.
     */
    where?: dependenciaspacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dependenciaspacientes to fetch.
     */
    orderBy?: dependenciaspacienteOrderByWithRelationInput | dependenciaspacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dependenciaspacientes.
     */
    cursor?: dependenciaspacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dependenciaspacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dependenciaspacientes.
     */
    skip?: number
    distinct?: DependenciaspacienteScalarFieldEnum | DependenciaspacienteScalarFieldEnum[]
  }

  /**
   * dependenciaspaciente create
   */
  export type dependenciaspacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciaspaciente
     */
    select?: dependenciaspacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciaspacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a dependenciaspaciente.
     */
    data: XOR<dependenciaspacienteCreateInput, dependenciaspacienteUncheckedCreateInput>
  }

  /**
   * dependenciaspaciente createMany
   */
  export type dependenciaspacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dependenciaspacientes.
     */
    data: dependenciaspacienteCreateManyInput | dependenciaspacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dependenciaspaciente update
   */
  export type dependenciaspacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciaspaciente
     */
    select?: dependenciaspacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciaspacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a dependenciaspaciente.
     */
    data: XOR<dependenciaspacienteUpdateInput, dependenciaspacienteUncheckedUpdateInput>
    /**
     * Choose, which dependenciaspaciente to update.
     */
    where: dependenciaspacienteWhereUniqueInput
  }

  /**
   * dependenciaspaciente updateMany
   */
  export type dependenciaspacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dependenciaspacientes.
     */
    data: XOR<dependenciaspacienteUpdateManyMutationInput, dependenciaspacienteUncheckedUpdateManyInput>
    /**
     * Filter which dependenciaspacientes to update
     */
    where?: dependenciaspacienteWhereInput
  }

  /**
   * dependenciaspaciente upsert
   */
  export type dependenciaspacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciaspaciente
     */
    select?: dependenciaspacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciaspacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the dependenciaspaciente to update in case it exists.
     */
    where: dependenciaspacienteWhereUniqueInput
    /**
     * In case the dependenciaspaciente found by the `where` argument doesn't exist, create a new dependenciaspaciente with this data.
     */
    create: XOR<dependenciaspacienteCreateInput, dependenciaspacienteUncheckedCreateInput>
    /**
     * In case the dependenciaspaciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dependenciaspacienteUpdateInput, dependenciaspacienteUncheckedUpdateInput>
  }

  /**
   * dependenciaspaciente delete
   */
  export type dependenciaspacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciaspaciente
     */
    select?: dependenciaspacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciaspacienteInclude<ExtArgs> | null
    /**
     * Filter which dependenciaspaciente to delete.
     */
    where: dependenciaspacienteWhereUniqueInput
  }

  /**
   * dependenciaspaciente deleteMany
   */
  export type dependenciaspacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dependenciaspacientes to delete
     */
    where?: dependenciaspacienteWhereInput
  }

  /**
   * dependenciaspaciente.dependenciasfixas
   */
  export type dependenciaspaciente$dependenciasfixasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciasfixas
     */
    select?: dependenciasfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciasfixasInclude<ExtArgs> | null
    where?: dependenciasfixasWhereInput
  }

  /**
   * dependenciaspaciente without action
   */
  export type dependenciaspacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dependenciaspaciente
     */
    select?: dependenciaspacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dependenciaspacienteInclude<ExtArgs> | null
  }


  /**
   * Model historicoatividades
   */

  export type AggregateHistoricoatividades = {
    _count: HistoricoatividadesCountAggregateOutputType | null
    _avg: HistoricoatividadesAvgAggregateOutputType | null
    _sum: HistoricoatividadesSumAggregateOutputType | null
    _min: HistoricoatividadesMinAggregateOutputType | null
    _max: HistoricoatividadesMaxAggregateOutputType | null
  }

  export type HistoricoatividadesAvgAggregateOutputType = {
    id: number | null
    cadastro_id: number | null
  }

  export type HistoricoatividadesSumAggregateOutputType = {
    id: number | null
    cadastro_id: number | null
  }

  export type HistoricoatividadesMinAggregateOutputType = {
    id: number | null
    cadastro_id: number | null
    codigo_atividade: string | null
    data_atendimento: Date | null
  }

  export type HistoricoatividadesMaxAggregateOutputType = {
    id: number | null
    cadastro_id: number | null
    codigo_atividade: string | null
    data_atendimento: Date | null
  }

  export type HistoricoatividadesCountAggregateOutputType = {
    id: number
    cadastro_id: number
    codigo_atividade: number
    data_atendimento: number
    _all: number
  }


  export type HistoricoatividadesAvgAggregateInputType = {
    id?: true
    cadastro_id?: true
  }

  export type HistoricoatividadesSumAggregateInputType = {
    id?: true
    cadastro_id?: true
  }

  export type HistoricoatividadesMinAggregateInputType = {
    id?: true
    cadastro_id?: true
    codigo_atividade?: true
    data_atendimento?: true
  }

  export type HistoricoatividadesMaxAggregateInputType = {
    id?: true
    cadastro_id?: true
    codigo_atividade?: true
    data_atendimento?: true
  }

  export type HistoricoatividadesCountAggregateInputType = {
    id?: true
    cadastro_id?: true
    codigo_atividade?: true
    data_atendimento?: true
    _all?: true
  }

  export type HistoricoatividadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historicoatividades to aggregate.
     */
    where?: historicoatividadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historicoatividades to fetch.
     */
    orderBy?: historicoatividadesOrderByWithRelationInput | historicoatividadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historicoatividadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historicoatividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historicoatividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historicoatividades
    **/
    _count?: true | HistoricoatividadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoricoatividadesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoricoatividadesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoricoatividadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoricoatividadesMaxAggregateInputType
  }

  export type GetHistoricoatividadesAggregateType<T extends HistoricoatividadesAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoricoatividades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoricoatividades[P]>
      : GetScalarType<T[P], AggregateHistoricoatividades[P]>
  }




  export type historicoatividadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historicoatividadesWhereInput
    orderBy?: historicoatividadesOrderByWithAggregationInput | historicoatividadesOrderByWithAggregationInput[]
    by: HistoricoatividadesScalarFieldEnum[] | HistoricoatividadesScalarFieldEnum
    having?: historicoatividadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoricoatividadesCountAggregateInputType | true
    _avg?: HistoricoatividadesAvgAggregateInputType
    _sum?: HistoricoatividadesSumAggregateInputType
    _min?: HistoricoatividadesMinAggregateInputType
    _max?: HistoricoatividadesMaxAggregateInputType
  }

  export type HistoricoatividadesGroupByOutputType = {
    id: number
    cadastro_id: number
    codigo_atividade: string | null
    data_atendimento: Date
    _count: HistoricoatividadesCountAggregateOutputType | null
    _avg: HistoricoatividadesAvgAggregateOutputType | null
    _sum: HistoricoatividadesSumAggregateOutputType | null
    _min: HistoricoatividadesMinAggregateOutputType | null
    _max: HistoricoatividadesMaxAggregateOutputType | null
  }

  type GetHistoricoatividadesGroupByPayload<T extends historicoatividadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoricoatividadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoricoatividadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoricoatividadesGroupByOutputType[P]>
            : GetScalarType<T[P], HistoricoatividadesGroupByOutputType[P]>
        }
      >
    >


  export type historicoatividadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cadastro_id?: boolean
    codigo_atividade?: boolean
    data_atendimento?: boolean
    cadastro?: boolean | cadastroDefaultArgs<ExtArgs>
    atividadesfixas?: boolean | historicoatividades$atividadesfixasArgs<ExtArgs>
  }, ExtArgs["result"]["historicoatividades"]>


  export type historicoatividadesSelectScalar = {
    id?: boolean
    cadastro_id?: boolean
    codigo_atividade?: boolean
    data_atendimento?: boolean
  }

  export type historicoatividadesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cadastro?: boolean | cadastroDefaultArgs<ExtArgs>
    atividadesfixas?: boolean | historicoatividades$atividadesfixasArgs<ExtArgs>
  }

  export type $historicoatividadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "historicoatividades"
    objects: {
      cadastro: Prisma.$cadastroPayload<ExtArgs>
      atividadesfixas: Prisma.$atividadesfixasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cadastro_id: number
      codigo_atividade: string | null
      data_atendimento: Date
    }, ExtArgs["result"]["historicoatividades"]>
    composites: {}
  }

  type historicoatividadesGetPayload<S extends boolean | null | undefined | historicoatividadesDefaultArgs> = $Result.GetResult<Prisma.$historicoatividadesPayload, S>

  type historicoatividadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<historicoatividadesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HistoricoatividadesCountAggregateInputType | true
    }

  export interface historicoatividadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historicoatividades'], meta: { name: 'historicoatividades' } }
    /**
     * Find zero or one Historicoatividades that matches the filter.
     * @param {historicoatividadesFindUniqueArgs} args - Arguments to find a Historicoatividades
     * @example
     * // Get one Historicoatividades
     * const historicoatividades = await prisma.historicoatividades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends historicoatividadesFindUniqueArgs>(args: SelectSubset<T, historicoatividadesFindUniqueArgs<ExtArgs>>): Prisma__historicoatividadesClient<$Result.GetResult<Prisma.$historicoatividadesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Historicoatividades that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {historicoatividadesFindUniqueOrThrowArgs} args - Arguments to find a Historicoatividades
     * @example
     * // Get one Historicoatividades
     * const historicoatividades = await prisma.historicoatividades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends historicoatividadesFindUniqueOrThrowArgs>(args: SelectSubset<T, historicoatividadesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__historicoatividadesClient<$Result.GetResult<Prisma.$historicoatividadesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Historicoatividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoatividadesFindFirstArgs} args - Arguments to find a Historicoatividades
     * @example
     * // Get one Historicoatividades
     * const historicoatividades = await prisma.historicoatividades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends historicoatividadesFindFirstArgs>(args?: SelectSubset<T, historicoatividadesFindFirstArgs<ExtArgs>>): Prisma__historicoatividadesClient<$Result.GetResult<Prisma.$historicoatividadesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Historicoatividades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoatividadesFindFirstOrThrowArgs} args - Arguments to find a Historicoatividades
     * @example
     * // Get one Historicoatividades
     * const historicoatividades = await prisma.historicoatividades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends historicoatividadesFindFirstOrThrowArgs>(args?: SelectSubset<T, historicoatividadesFindFirstOrThrowArgs<ExtArgs>>): Prisma__historicoatividadesClient<$Result.GetResult<Prisma.$historicoatividadesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Historicoatividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoatividadesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historicoatividades
     * const historicoatividades = await prisma.historicoatividades.findMany()
     * 
     * // Get first 10 Historicoatividades
     * const historicoatividades = await prisma.historicoatividades.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historicoatividadesWithIdOnly = await prisma.historicoatividades.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends historicoatividadesFindManyArgs>(args?: SelectSubset<T, historicoatividadesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historicoatividadesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Historicoatividades.
     * @param {historicoatividadesCreateArgs} args - Arguments to create a Historicoatividades.
     * @example
     * // Create one Historicoatividades
     * const Historicoatividades = await prisma.historicoatividades.create({
     *   data: {
     *     // ... data to create a Historicoatividades
     *   }
     * })
     * 
     */
    create<T extends historicoatividadesCreateArgs>(args: SelectSubset<T, historicoatividadesCreateArgs<ExtArgs>>): Prisma__historicoatividadesClient<$Result.GetResult<Prisma.$historicoatividadesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Historicoatividades.
     * @param {historicoatividadesCreateManyArgs} args - Arguments to create many Historicoatividades.
     * @example
     * // Create many Historicoatividades
     * const historicoatividades = await prisma.historicoatividades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends historicoatividadesCreateManyArgs>(args?: SelectSubset<T, historicoatividadesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Historicoatividades.
     * @param {historicoatividadesDeleteArgs} args - Arguments to delete one Historicoatividades.
     * @example
     * // Delete one Historicoatividades
     * const Historicoatividades = await prisma.historicoatividades.delete({
     *   where: {
     *     // ... filter to delete one Historicoatividades
     *   }
     * })
     * 
     */
    delete<T extends historicoatividadesDeleteArgs>(args: SelectSubset<T, historicoatividadesDeleteArgs<ExtArgs>>): Prisma__historicoatividadesClient<$Result.GetResult<Prisma.$historicoatividadesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Historicoatividades.
     * @param {historicoatividadesUpdateArgs} args - Arguments to update one Historicoatividades.
     * @example
     * // Update one Historicoatividades
     * const historicoatividades = await prisma.historicoatividades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends historicoatividadesUpdateArgs>(args: SelectSubset<T, historicoatividadesUpdateArgs<ExtArgs>>): Prisma__historicoatividadesClient<$Result.GetResult<Prisma.$historicoatividadesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Historicoatividades.
     * @param {historicoatividadesDeleteManyArgs} args - Arguments to filter Historicoatividades to delete.
     * @example
     * // Delete a few Historicoatividades
     * const { count } = await prisma.historicoatividades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends historicoatividadesDeleteManyArgs>(args?: SelectSubset<T, historicoatividadesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historicoatividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoatividadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historicoatividades
     * const historicoatividades = await prisma.historicoatividades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends historicoatividadesUpdateManyArgs>(args: SelectSubset<T, historicoatividadesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Historicoatividades.
     * @param {historicoatividadesUpsertArgs} args - Arguments to update or create a Historicoatividades.
     * @example
     * // Update or create a Historicoatividades
     * const historicoatividades = await prisma.historicoatividades.upsert({
     *   create: {
     *     // ... data to create a Historicoatividades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historicoatividades we want to update
     *   }
     * })
     */
    upsert<T extends historicoatividadesUpsertArgs>(args: SelectSubset<T, historicoatividadesUpsertArgs<ExtArgs>>): Prisma__historicoatividadesClient<$Result.GetResult<Prisma.$historicoatividadesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Historicoatividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoatividadesCountArgs} args - Arguments to filter Historicoatividades to count.
     * @example
     * // Count the number of Historicoatividades
     * const count = await prisma.historicoatividades.count({
     *   where: {
     *     // ... the filter for the Historicoatividades we want to count
     *   }
     * })
    **/
    count<T extends historicoatividadesCountArgs>(
      args?: Subset<T, historicoatividadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoricoatividadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historicoatividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoricoatividadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoricoatividadesAggregateArgs>(args: Subset<T, HistoricoatividadesAggregateArgs>): Prisma.PrismaPromise<GetHistoricoatividadesAggregateType<T>>

    /**
     * Group by Historicoatividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historicoatividadesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends historicoatividadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historicoatividadesGroupByArgs['orderBy'] }
        : { orderBy?: historicoatividadesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, historicoatividadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoricoatividadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the historicoatividades model
   */
  readonly fields: historicoatividadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for historicoatividades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historicoatividadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cadastro<T extends cadastroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cadastroDefaultArgs<ExtArgs>>): Prisma__cadastroClient<$Result.GetResult<Prisma.$cadastroPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    atividadesfixas<T extends historicoatividades$atividadesfixasArgs<ExtArgs> = {}>(args?: Subset<T, historicoatividades$atividadesfixasArgs<ExtArgs>>): Prisma__atividadesfixasClient<$Result.GetResult<Prisma.$atividadesfixasPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the historicoatividades model
   */ 
  interface historicoatividadesFieldRefs {
    readonly id: FieldRef<"historicoatividades", 'Int'>
    readonly cadastro_id: FieldRef<"historicoatividades", 'Int'>
    readonly codigo_atividade: FieldRef<"historicoatividades", 'String'>
    readonly data_atendimento: FieldRef<"historicoatividades", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * historicoatividades findUnique
   */
  export type historicoatividadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoatividades
     */
    select?: historicoatividadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoatividadesInclude<ExtArgs> | null
    /**
     * Filter, which historicoatividades to fetch.
     */
    where: historicoatividadesWhereUniqueInput
  }

  /**
   * historicoatividades findUniqueOrThrow
   */
  export type historicoatividadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoatividades
     */
    select?: historicoatividadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoatividadesInclude<ExtArgs> | null
    /**
     * Filter, which historicoatividades to fetch.
     */
    where: historicoatividadesWhereUniqueInput
  }

  /**
   * historicoatividades findFirst
   */
  export type historicoatividadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoatividades
     */
    select?: historicoatividadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoatividadesInclude<ExtArgs> | null
    /**
     * Filter, which historicoatividades to fetch.
     */
    where?: historicoatividadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historicoatividades to fetch.
     */
    orderBy?: historicoatividadesOrderByWithRelationInput | historicoatividadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historicoatividades.
     */
    cursor?: historicoatividadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historicoatividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historicoatividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historicoatividades.
     */
    distinct?: HistoricoatividadesScalarFieldEnum | HistoricoatividadesScalarFieldEnum[]
  }

  /**
   * historicoatividades findFirstOrThrow
   */
  export type historicoatividadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoatividades
     */
    select?: historicoatividadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoatividadesInclude<ExtArgs> | null
    /**
     * Filter, which historicoatividades to fetch.
     */
    where?: historicoatividadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historicoatividades to fetch.
     */
    orderBy?: historicoatividadesOrderByWithRelationInput | historicoatividadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historicoatividades.
     */
    cursor?: historicoatividadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historicoatividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historicoatividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historicoatividades.
     */
    distinct?: HistoricoatividadesScalarFieldEnum | HistoricoatividadesScalarFieldEnum[]
  }

  /**
   * historicoatividades findMany
   */
  export type historicoatividadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoatividades
     */
    select?: historicoatividadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoatividadesInclude<ExtArgs> | null
    /**
     * Filter, which historicoatividades to fetch.
     */
    where?: historicoatividadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historicoatividades to fetch.
     */
    orderBy?: historicoatividadesOrderByWithRelationInput | historicoatividadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historicoatividades.
     */
    cursor?: historicoatividadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historicoatividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historicoatividades.
     */
    skip?: number
    distinct?: HistoricoatividadesScalarFieldEnum | HistoricoatividadesScalarFieldEnum[]
  }

  /**
   * historicoatividades create
   */
  export type historicoatividadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoatividades
     */
    select?: historicoatividadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoatividadesInclude<ExtArgs> | null
    /**
     * The data needed to create a historicoatividades.
     */
    data: XOR<historicoatividadesCreateInput, historicoatividadesUncheckedCreateInput>
  }

  /**
   * historicoatividades createMany
   */
  export type historicoatividadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historicoatividades.
     */
    data: historicoatividadesCreateManyInput | historicoatividadesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * historicoatividades update
   */
  export type historicoatividadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoatividades
     */
    select?: historicoatividadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoatividadesInclude<ExtArgs> | null
    /**
     * The data needed to update a historicoatividades.
     */
    data: XOR<historicoatividadesUpdateInput, historicoatividadesUncheckedUpdateInput>
    /**
     * Choose, which historicoatividades to update.
     */
    where: historicoatividadesWhereUniqueInput
  }

  /**
   * historicoatividades updateMany
   */
  export type historicoatividadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historicoatividades.
     */
    data: XOR<historicoatividadesUpdateManyMutationInput, historicoatividadesUncheckedUpdateManyInput>
    /**
     * Filter which historicoatividades to update
     */
    where?: historicoatividadesWhereInput
  }

  /**
   * historicoatividades upsert
   */
  export type historicoatividadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoatividades
     */
    select?: historicoatividadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoatividadesInclude<ExtArgs> | null
    /**
     * The filter to search for the historicoatividades to update in case it exists.
     */
    where: historicoatividadesWhereUniqueInput
    /**
     * In case the historicoatividades found by the `where` argument doesn't exist, create a new historicoatividades with this data.
     */
    create: XOR<historicoatividadesCreateInput, historicoatividadesUncheckedCreateInput>
    /**
     * In case the historicoatividades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historicoatividadesUpdateInput, historicoatividadesUncheckedUpdateInput>
  }

  /**
   * historicoatividades delete
   */
  export type historicoatividadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoatividades
     */
    select?: historicoatividadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoatividadesInclude<ExtArgs> | null
    /**
     * Filter which historicoatividades to delete.
     */
    where: historicoatividadesWhereUniqueInput
  }

  /**
   * historicoatividades deleteMany
   */
  export type historicoatividadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historicoatividades to delete
     */
    where?: historicoatividadesWhereInput
  }

  /**
   * historicoatividades.atividadesfixas
   */
  export type historicoatividades$atividadesfixasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the atividadesfixas
     */
    select?: atividadesfixasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: atividadesfixasInclude<ExtArgs> | null
    where?: atividadesfixasWhereInput
  }

  /**
   * historicoatividades without action
   */
  export type historicoatividadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historicoatividades
     */
    select?: historicoatividadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historicoatividadesInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    usuario: string | null
    senha: string | null
    refresh_token: string | null
    status: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    usuario: string | null
    senha: string | null
    refresh_token: string | null
    status: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    usuario: number
    senha: number
    refresh_token: number
    status: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    usuario?: true
    senha?: true
    refresh_token?: true
    status?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    usuario?: true
    senha?: true
    refresh_token?: true
    status?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    usuario?: true
    senha?: true
    refresh_token?: true
    status?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    usuario: string
    senha: string
    refresh_token: string | null
    status: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    senha?: boolean
    refresh_token?: boolean
    status?: boolean
  }, ExtArgs["result"]["usuario"]>


  export type usuarioSelectScalar = {
    id?: boolean
    usuario?: boolean
    senha?: boolean
    refresh_token?: boolean
    status?: boolean
  }


  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario: string
      senha: string
      refresh_token: string | null
      status: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario model
   */ 
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'Int'>
    readonly usuario: FieldRef<"usuario", 'String'>
    readonly senha: FieldRef<"usuario", 'String'>
    readonly refresh_token: FieldRef<"usuario", 'String'>
    readonly status: FieldRef<"usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AtividadesfixasScalarFieldEnum: {
    codigo: 'codigo',
    descricao: 'descricao'
  };

  export type AtividadesfixasScalarFieldEnum = (typeof AtividadesfixasScalarFieldEnum)[keyof typeof AtividadesfixasScalarFieldEnum]


  export const BeneficiosfixosScalarFieldEnum: {
    codigo: 'codigo',
    descricao: 'descricao'
  };

  export type BeneficiosfixosScalarFieldEnum = (typeof BeneficiosfixosScalarFieldEnum)[keyof typeof BeneficiosfixosScalarFieldEnum]


  export const BeneficiospacienteScalarFieldEnum: {
    id: 'id',
    cadastro_id: 'cadastro_id',
    codigo_beneficio: 'codigo_beneficio'
  };

  export type BeneficiospacienteScalarFieldEnum = (typeof BeneficiospacienteScalarFieldEnum)[keyof typeof BeneficiospacienteScalarFieldEnum]


  export const CadastroScalarFieldEnum: {
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

  export type CadastroScalarFieldEnum = (typeof CadastroScalarFieldEnum)[keyof typeof CadastroScalarFieldEnum]


  export const DependenciasfixasScalarFieldEnum: {
    codigo: 'codigo',
    descricao: 'descricao'
  };

  export type DependenciasfixasScalarFieldEnum = (typeof DependenciasfixasScalarFieldEnum)[keyof typeof DependenciasfixasScalarFieldEnum]


  export const DependenciaspacienteScalarFieldEnum: {
    id: 'id',
    cadastro_id: 'cadastro_id',
    codigo_dependencia: 'codigo_dependencia'
  };

  export type DependenciaspacienteScalarFieldEnum = (typeof DependenciaspacienteScalarFieldEnum)[keyof typeof DependenciaspacienteScalarFieldEnum]


  export const HistoricoatividadesScalarFieldEnum: {
    id: 'id',
    cadastro_id: 'cadastro_id',
    codigo_atividade: 'codigo_atividade',
    data_atendimento: 'data_atendimento'
  };

  export type HistoricoatividadesScalarFieldEnum = (typeof HistoricoatividadesScalarFieldEnum)[keyof typeof HistoricoatividadesScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    usuario: 'usuario',
    senha: 'senha',
    refresh_token: 'refresh_token',
    status: 'status'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'cadastro_sexo'
   */
  export type Enumcadastro_sexoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cadastro_sexo'>
    


  /**
   * Reference to a field of type 'cadastro_estado_civil'
   */
  export type Enumcadastro_estado_civilFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cadastro_estado_civil'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'cadastro_status'
   */
  export type Enumcadastro_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cadastro_status'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'cadastro_tipo_documento'
   */
  export type Enumcadastro_tipo_documentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cadastro_tipo_documento'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type atividadesfixasWhereInput = {
    AND?: atividadesfixasWhereInput | atividadesfixasWhereInput[]
    OR?: atividadesfixasWhereInput[]
    NOT?: atividadesfixasWhereInput | atividadesfixasWhereInput[]
    codigo?: StringFilter<"atividadesfixas"> | string
    descricao?: StringFilter<"atividadesfixas"> | string
    historicoatividades?: HistoricoatividadesListRelationFilter
  }

  export type atividadesfixasOrderByWithRelationInput = {
    codigo?: SortOrder
    descricao?: SortOrder
    historicoatividades?: historicoatividadesOrderByRelationAggregateInput
  }

  export type atividadesfixasWhereUniqueInput = Prisma.AtLeast<{
    codigo?: string
    AND?: atividadesfixasWhereInput | atividadesfixasWhereInput[]
    OR?: atividadesfixasWhereInput[]
    NOT?: atividadesfixasWhereInput | atividadesfixasWhereInput[]
    descricao?: StringFilter<"atividadesfixas"> | string
    historicoatividades?: HistoricoatividadesListRelationFilter
  }, "codigo">

  export type atividadesfixasOrderByWithAggregationInput = {
    codigo?: SortOrder
    descricao?: SortOrder
    _count?: atividadesfixasCountOrderByAggregateInput
    _max?: atividadesfixasMaxOrderByAggregateInput
    _min?: atividadesfixasMinOrderByAggregateInput
  }

  export type atividadesfixasScalarWhereWithAggregatesInput = {
    AND?: atividadesfixasScalarWhereWithAggregatesInput | atividadesfixasScalarWhereWithAggregatesInput[]
    OR?: atividadesfixasScalarWhereWithAggregatesInput[]
    NOT?: atividadesfixasScalarWhereWithAggregatesInput | atividadesfixasScalarWhereWithAggregatesInput[]
    codigo?: StringWithAggregatesFilter<"atividadesfixas"> | string
    descricao?: StringWithAggregatesFilter<"atividadesfixas"> | string
  }

  export type beneficiosfixosWhereInput = {
    AND?: beneficiosfixosWhereInput | beneficiosfixosWhereInput[]
    OR?: beneficiosfixosWhereInput[]
    NOT?: beneficiosfixosWhereInput | beneficiosfixosWhereInput[]
    codigo?: StringFilter<"beneficiosfixos"> | string
    descricao?: StringFilter<"beneficiosfixos"> | string
    beneficiospaciente?: BeneficiospacienteListRelationFilter
  }

  export type beneficiosfixosOrderByWithRelationInput = {
    codigo?: SortOrder
    descricao?: SortOrder
    beneficiospaciente?: beneficiospacienteOrderByRelationAggregateInput
  }

  export type beneficiosfixosWhereUniqueInput = Prisma.AtLeast<{
    codigo?: string
    AND?: beneficiosfixosWhereInput | beneficiosfixosWhereInput[]
    OR?: beneficiosfixosWhereInput[]
    NOT?: beneficiosfixosWhereInput | beneficiosfixosWhereInput[]
    descricao?: StringFilter<"beneficiosfixos"> | string
    beneficiospaciente?: BeneficiospacienteListRelationFilter
  }, "codigo">

  export type beneficiosfixosOrderByWithAggregationInput = {
    codigo?: SortOrder
    descricao?: SortOrder
    _count?: beneficiosfixosCountOrderByAggregateInput
    _max?: beneficiosfixosMaxOrderByAggregateInput
    _min?: beneficiosfixosMinOrderByAggregateInput
  }

  export type beneficiosfixosScalarWhereWithAggregatesInput = {
    AND?: beneficiosfixosScalarWhereWithAggregatesInput | beneficiosfixosScalarWhereWithAggregatesInput[]
    OR?: beneficiosfixosScalarWhereWithAggregatesInput[]
    NOT?: beneficiosfixosScalarWhereWithAggregatesInput | beneficiosfixosScalarWhereWithAggregatesInput[]
    codigo?: StringWithAggregatesFilter<"beneficiosfixos"> | string
    descricao?: StringWithAggregatesFilter<"beneficiosfixos"> | string
  }

  export type beneficiospacienteWhereInput = {
    AND?: beneficiospacienteWhereInput | beneficiospacienteWhereInput[]
    OR?: beneficiospacienteWhereInput[]
    NOT?: beneficiospacienteWhereInput | beneficiospacienteWhereInput[]
    id?: IntFilter<"beneficiospaciente"> | number
    cadastro_id?: IntFilter<"beneficiospaciente"> | number
    codigo_beneficio?: StringNullableFilter<"beneficiospaciente"> | string | null
    cadastro?: XOR<CadastroRelationFilter, cadastroWhereInput>
    beneficiosfixos?: XOR<BeneficiosfixosNullableRelationFilter, beneficiosfixosWhereInput> | null
  }

  export type beneficiospacienteOrderByWithRelationInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_beneficio?: SortOrderInput | SortOrder
    cadastro?: cadastroOrderByWithRelationInput
    beneficiosfixos?: beneficiosfixosOrderByWithRelationInput
  }

  export type beneficiospacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: beneficiospacienteWhereInput | beneficiospacienteWhereInput[]
    OR?: beneficiospacienteWhereInput[]
    NOT?: beneficiospacienteWhereInput | beneficiospacienteWhereInput[]
    cadastro_id?: IntFilter<"beneficiospaciente"> | number
    codigo_beneficio?: StringNullableFilter<"beneficiospaciente"> | string | null
    cadastro?: XOR<CadastroRelationFilter, cadastroWhereInput>
    beneficiosfixos?: XOR<BeneficiosfixosNullableRelationFilter, beneficiosfixosWhereInput> | null
  }, "id">

  export type beneficiospacienteOrderByWithAggregationInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_beneficio?: SortOrderInput | SortOrder
    _count?: beneficiospacienteCountOrderByAggregateInput
    _avg?: beneficiospacienteAvgOrderByAggregateInput
    _max?: beneficiospacienteMaxOrderByAggregateInput
    _min?: beneficiospacienteMinOrderByAggregateInput
    _sum?: beneficiospacienteSumOrderByAggregateInput
  }

  export type beneficiospacienteScalarWhereWithAggregatesInput = {
    AND?: beneficiospacienteScalarWhereWithAggregatesInput | beneficiospacienteScalarWhereWithAggregatesInput[]
    OR?: beneficiospacienteScalarWhereWithAggregatesInput[]
    NOT?: beneficiospacienteScalarWhereWithAggregatesInput | beneficiospacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"beneficiospaciente"> | number
    cadastro_id?: IntWithAggregatesFilter<"beneficiospaciente"> | number
    codigo_beneficio?: StringNullableWithAggregatesFilter<"beneficiospaciente"> | string | null
  }

  export type cadastroWhereInput = {
    AND?: cadastroWhereInput | cadastroWhereInput[]
    OR?: cadastroWhereInput[]
    NOT?: cadastroWhereInput | cadastroWhereInput[]
    id?: IntFilter<"cadastro"> | number
    nome?: StringFilter<"cadastro"> | string
    idade?: IntFilter<"cadastro"> | number
    documento?: StringFilter<"cadastro"> | string
    data_nascimento?: DateTimeFilter<"cadastro"> | Date | string
    sexo?: Enumcadastro_sexoFilter<"cadastro"> | $Enums.cadastro_sexo
    estado_civil?: Enumcadastro_estado_civilFilter<"cadastro"> | $Enums.cadastro_estado_civil
    profissao?: StringNullableFilter<"cadastro"> | string | null
    morador_rua?: BoolNullableFilter<"cadastro"> | boolean | null
    status?: Enumcadastro_statusFilter<"cadastro"> | $Enums.cadastro_status
    cor_olhos?: StringNullableFilter<"cadastro"> | string | null
    cor_cabelo?: StringNullableFilter<"cadastro"> | string | null
    altura?: DecimalNullableFilter<"cadastro"> | Decimal | DecimalJsLike | number | string | null
    peso?: DecimalNullableFilter<"cadastro"> | Decimal | DecimalJsLike | number | string | null
    etnia?: StringNullableFilter<"cadastro"> | string | null
    codigo_usuario?: StringNullableFilter<"cadastro"> | string | null
    tipo_documento?: Enumcadastro_tipo_documentoFilter<"cadastro"> | $Enums.cadastro_tipo_documento
    beneficiospaciente?: BeneficiospacienteListRelationFilter
    dependenciaspaciente?: DependenciaspacienteListRelationFilter
    historicoatividades?: HistoricoatividadesListRelationFilter
  }

  export type cadastroOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    documento?: SortOrder
    data_nascimento?: SortOrder
    sexo?: SortOrder
    estado_civil?: SortOrder
    profissao?: SortOrderInput | SortOrder
    morador_rua?: SortOrderInput | SortOrder
    status?: SortOrder
    cor_olhos?: SortOrderInput | SortOrder
    cor_cabelo?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    etnia?: SortOrderInput | SortOrder
    codigo_usuario?: SortOrderInput | SortOrder
    tipo_documento?: SortOrder
    beneficiospaciente?: beneficiospacienteOrderByRelationAggregateInput
    dependenciaspaciente?: dependenciaspacienteOrderByRelationAggregateInput
    historicoatividades?: historicoatividadesOrderByRelationAggregateInput
  }

  export type cadastroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documento?: string
    codigo_usuario?: string
    AND?: cadastroWhereInput | cadastroWhereInput[]
    OR?: cadastroWhereInput[]
    NOT?: cadastroWhereInput | cadastroWhereInput[]
    nome?: StringFilter<"cadastro"> | string
    idade?: IntFilter<"cadastro"> | number
    data_nascimento?: DateTimeFilter<"cadastro"> | Date | string
    sexo?: Enumcadastro_sexoFilter<"cadastro"> | $Enums.cadastro_sexo
    estado_civil?: Enumcadastro_estado_civilFilter<"cadastro"> | $Enums.cadastro_estado_civil
    profissao?: StringNullableFilter<"cadastro"> | string | null
    morador_rua?: BoolNullableFilter<"cadastro"> | boolean | null
    status?: Enumcadastro_statusFilter<"cadastro"> | $Enums.cadastro_status
    cor_olhos?: StringNullableFilter<"cadastro"> | string | null
    cor_cabelo?: StringNullableFilter<"cadastro"> | string | null
    altura?: DecimalNullableFilter<"cadastro"> | Decimal | DecimalJsLike | number | string | null
    peso?: DecimalNullableFilter<"cadastro"> | Decimal | DecimalJsLike | number | string | null
    etnia?: StringNullableFilter<"cadastro"> | string | null
    tipo_documento?: Enumcadastro_tipo_documentoFilter<"cadastro"> | $Enums.cadastro_tipo_documento
    beneficiospaciente?: BeneficiospacienteListRelationFilter
    dependenciaspaciente?: DependenciaspacienteListRelationFilter
    historicoatividades?: HistoricoatividadesListRelationFilter
  }, "id" | "documento" | "codigo_usuario">

  export type cadastroOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    documento?: SortOrder
    data_nascimento?: SortOrder
    sexo?: SortOrder
    estado_civil?: SortOrder
    profissao?: SortOrderInput | SortOrder
    morador_rua?: SortOrderInput | SortOrder
    status?: SortOrder
    cor_olhos?: SortOrderInput | SortOrder
    cor_cabelo?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    etnia?: SortOrderInput | SortOrder
    codigo_usuario?: SortOrderInput | SortOrder
    tipo_documento?: SortOrder
    _count?: cadastroCountOrderByAggregateInput
    _avg?: cadastroAvgOrderByAggregateInput
    _max?: cadastroMaxOrderByAggregateInput
    _min?: cadastroMinOrderByAggregateInput
    _sum?: cadastroSumOrderByAggregateInput
  }

  export type cadastroScalarWhereWithAggregatesInput = {
    AND?: cadastroScalarWhereWithAggregatesInput | cadastroScalarWhereWithAggregatesInput[]
    OR?: cadastroScalarWhereWithAggregatesInput[]
    NOT?: cadastroScalarWhereWithAggregatesInput | cadastroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cadastro"> | number
    nome?: StringWithAggregatesFilter<"cadastro"> | string
    idade?: IntWithAggregatesFilter<"cadastro"> | number
    documento?: StringWithAggregatesFilter<"cadastro"> | string
    data_nascimento?: DateTimeWithAggregatesFilter<"cadastro"> | Date | string
    sexo?: Enumcadastro_sexoWithAggregatesFilter<"cadastro"> | $Enums.cadastro_sexo
    estado_civil?: Enumcadastro_estado_civilWithAggregatesFilter<"cadastro"> | $Enums.cadastro_estado_civil
    profissao?: StringNullableWithAggregatesFilter<"cadastro"> | string | null
    morador_rua?: BoolNullableWithAggregatesFilter<"cadastro"> | boolean | null
    status?: Enumcadastro_statusWithAggregatesFilter<"cadastro"> | $Enums.cadastro_status
    cor_olhos?: StringNullableWithAggregatesFilter<"cadastro"> | string | null
    cor_cabelo?: StringNullableWithAggregatesFilter<"cadastro"> | string | null
    altura?: DecimalNullableWithAggregatesFilter<"cadastro"> | Decimal | DecimalJsLike | number | string | null
    peso?: DecimalNullableWithAggregatesFilter<"cadastro"> | Decimal | DecimalJsLike | number | string | null
    etnia?: StringNullableWithAggregatesFilter<"cadastro"> | string | null
    codigo_usuario?: StringNullableWithAggregatesFilter<"cadastro"> | string | null
    tipo_documento?: Enumcadastro_tipo_documentoWithAggregatesFilter<"cadastro"> | $Enums.cadastro_tipo_documento
  }

  export type dependenciasfixasWhereInput = {
    AND?: dependenciasfixasWhereInput | dependenciasfixasWhereInput[]
    OR?: dependenciasfixasWhereInput[]
    NOT?: dependenciasfixasWhereInput | dependenciasfixasWhereInput[]
    codigo?: StringFilter<"dependenciasfixas"> | string
    descricao?: StringFilter<"dependenciasfixas"> | string
    dependenciaspaciente?: DependenciaspacienteListRelationFilter
  }

  export type dependenciasfixasOrderByWithRelationInput = {
    codigo?: SortOrder
    descricao?: SortOrder
    dependenciaspaciente?: dependenciaspacienteOrderByRelationAggregateInput
  }

  export type dependenciasfixasWhereUniqueInput = Prisma.AtLeast<{
    codigo?: string
    AND?: dependenciasfixasWhereInput | dependenciasfixasWhereInput[]
    OR?: dependenciasfixasWhereInput[]
    NOT?: dependenciasfixasWhereInput | dependenciasfixasWhereInput[]
    descricao?: StringFilter<"dependenciasfixas"> | string
    dependenciaspaciente?: DependenciaspacienteListRelationFilter
  }, "codigo">

  export type dependenciasfixasOrderByWithAggregationInput = {
    codigo?: SortOrder
    descricao?: SortOrder
    _count?: dependenciasfixasCountOrderByAggregateInput
    _max?: dependenciasfixasMaxOrderByAggregateInput
    _min?: dependenciasfixasMinOrderByAggregateInput
  }

  export type dependenciasfixasScalarWhereWithAggregatesInput = {
    AND?: dependenciasfixasScalarWhereWithAggregatesInput | dependenciasfixasScalarWhereWithAggregatesInput[]
    OR?: dependenciasfixasScalarWhereWithAggregatesInput[]
    NOT?: dependenciasfixasScalarWhereWithAggregatesInput | dependenciasfixasScalarWhereWithAggregatesInput[]
    codigo?: StringWithAggregatesFilter<"dependenciasfixas"> | string
    descricao?: StringWithAggregatesFilter<"dependenciasfixas"> | string
  }

  export type dependenciaspacienteWhereInput = {
    AND?: dependenciaspacienteWhereInput | dependenciaspacienteWhereInput[]
    OR?: dependenciaspacienteWhereInput[]
    NOT?: dependenciaspacienteWhereInput | dependenciaspacienteWhereInput[]
    id?: IntFilter<"dependenciaspaciente"> | number
    cadastro_id?: IntFilter<"dependenciaspaciente"> | number
    codigo_dependencia?: StringNullableFilter<"dependenciaspaciente"> | string | null
    cadastro?: XOR<CadastroRelationFilter, cadastroWhereInput>
    dependenciasfixas?: XOR<DependenciasfixasNullableRelationFilter, dependenciasfixasWhereInput> | null
  }

  export type dependenciaspacienteOrderByWithRelationInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_dependencia?: SortOrderInput | SortOrder
    cadastro?: cadastroOrderByWithRelationInput
    dependenciasfixas?: dependenciasfixasOrderByWithRelationInput
  }

  export type dependenciaspacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: dependenciaspacienteWhereInput | dependenciaspacienteWhereInput[]
    OR?: dependenciaspacienteWhereInput[]
    NOT?: dependenciaspacienteWhereInput | dependenciaspacienteWhereInput[]
    cadastro_id?: IntFilter<"dependenciaspaciente"> | number
    codigo_dependencia?: StringNullableFilter<"dependenciaspaciente"> | string | null
    cadastro?: XOR<CadastroRelationFilter, cadastroWhereInput>
    dependenciasfixas?: XOR<DependenciasfixasNullableRelationFilter, dependenciasfixasWhereInput> | null
  }, "id">

  export type dependenciaspacienteOrderByWithAggregationInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_dependencia?: SortOrderInput | SortOrder
    _count?: dependenciaspacienteCountOrderByAggregateInput
    _avg?: dependenciaspacienteAvgOrderByAggregateInput
    _max?: dependenciaspacienteMaxOrderByAggregateInput
    _min?: dependenciaspacienteMinOrderByAggregateInput
    _sum?: dependenciaspacienteSumOrderByAggregateInput
  }

  export type dependenciaspacienteScalarWhereWithAggregatesInput = {
    AND?: dependenciaspacienteScalarWhereWithAggregatesInput | dependenciaspacienteScalarWhereWithAggregatesInput[]
    OR?: dependenciaspacienteScalarWhereWithAggregatesInput[]
    NOT?: dependenciaspacienteScalarWhereWithAggregatesInput | dependenciaspacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"dependenciaspaciente"> | number
    cadastro_id?: IntWithAggregatesFilter<"dependenciaspaciente"> | number
    codigo_dependencia?: StringNullableWithAggregatesFilter<"dependenciaspaciente"> | string | null
  }

  export type historicoatividadesWhereInput = {
    AND?: historicoatividadesWhereInput | historicoatividadesWhereInput[]
    OR?: historicoatividadesWhereInput[]
    NOT?: historicoatividadesWhereInput | historicoatividadesWhereInput[]
    id?: IntFilter<"historicoatividades"> | number
    cadastro_id?: IntFilter<"historicoatividades"> | number
    codigo_atividade?: StringNullableFilter<"historicoatividades"> | string | null
    data_atendimento?: DateTimeFilter<"historicoatividades"> | Date | string
    cadastro?: XOR<CadastroRelationFilter, cadastroWhereInput>
    atividadesfixas?: XOR<AtividadesfixasNullableRelationFilter, atividadesfixasWhereInput> | null
  }

  export type historicoatividadesOrderByWithRelationInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_atividade?: SortOrderInput | SortOrder
    data_atendimento?: SortOrder
    cadastro?: cadastroOrderByWithRelationInput
    atividadesfixas?: atividadesfixasOrderByWithRelationInput
  }

  export type historicoatividadesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: historicoatividadesWhereInput | historicoatividadesWhereInput[]
    OR?: historicoatividadesWhereInput[]
    NOT?: historicoatividadesWhereInput | historicoatividadesWhereInput[]
    cadastro_id?: IntFilter<"historicoatividades"> | number
    codigo_atividade?: StringNullableFilter<"historicoatividades"> | string | null
    data_atendimento?: DateTimeFilter<"historicoatividades"> | Date | string
    cadastro?: XOR<CadastroRelationFilter, cadastroWhereInput>
    atividadesfixas?: XOR<AtividadesfixasNullableRelationFilter, atividadesfixasWhereInput> | null
  }, "id">

  export type historicoatividadesOrderByWithAggregationInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_atividade?: SortOrderInput | SortOrder
    data_atendimento?: SortOrder
    _count?: historicoatividadesCountOrderByAggregateInput
    _avg?: historicoatividadesAvgOrderByAggregateInput
    _max?: historicoatividadesMaxOrderByAggregateInput
    _min?: historicoatividadesMinOrderByAggregateInput
    _sum?: historicoatividadesSumOrderByAggregateInput
  }

  export type historicoatividadesScalarWhereWithAggregatesInput = {
    AND?: historicoatividadesScalarWhereWithAggregatesInput | historicoatividadesScalarWhereWithAggregatesInput[]
    OR?: historicoatividadesScalarWhereWithAggregatesInput[]
    NOT?: historicoatividadesScalarWhereWithAggregatesInput | historicoatividadesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"historicoatividades"> | number
    cadastro_id?: IntWithAggregatesFilter<"historicoatividades"> | number
    codigo_atividade?: StringNullableWithAggregatesFilter<"historicoatividades"> | string | null
    data_atendimento?: DateTimeWithAggregatesFilter<"historicoatividades"> | Date | string
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: IntFilter<"usuario"> | number
    usuario?: StringFilter<"usuario"> | string
    senha?: StringFilter<"usuario"> | string
    refresh_token?: StringNullableFilter<"usuario"> | string | null
    status?: StringFilter<"usuario"> | string
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    usuario?: SortOrder
    senha?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    status?: SortOrder
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuario?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    senha?: StringFilter<"usuario"> | string
    refresh_token?: StringNullableFilter<"usuario"> | string | null
    status?: StringFilter<"usuario"> | string
  }, "id" | "usuario">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuario?: SortOrder
    senha?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario"> | number
    usuario?: StringWithAggregatesFilter<"usuario"> | string
    senha?: StringWithAggregatesFilter<"usuario"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    status?: StringWithAggregatesFilter<"usuario"> | string
  }

  export type atividadesfixasCreateInput = {
    codigo: string
    descricao: string
    historicoatividades?: historicoatividadesCreateNestedManyWithoutAtividadesfixasInput
  }

  export type atividadesfixasUncheckedCreateInput = {
    codigo: string
    descricao: string
    historicoatividades?: historicoatividadesUncheckedCreateNestedManyWithoutAtividadesfixasInput
  }

  export type atividadesfixasUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    historicoatividades?: historicoatividadesUpdateManyWithoutAtividadesfixasNestedInput
  }

  export type atividadesfixasUncheckedUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    historicoatividades?: historicoatividadesUncheckedUpdateManyWithoutAtividadesfixasNestedInput
  }

  export type atividadesfixasCreateManyInput = {
    codigo: string
    descricao: string
  }

  export type atividadesfixasUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type atividadesfixasUncheckedUpdateManyInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type beneficiosfixosCreateInput = {
    codigo: string
    descricao: string
    beneficiospaciente?: beneficiospacienteCreateNestedManyWithoutBeneficiosfixosInput
  }

  export type beneficiosfixosUncheckedCreateInput = {
    codigo: string
    descricao: string
    beneficiospaciente?: beneficiospacienteUncheckedCreateNestedManyWithoutBeneficiosfixosInput
  }

  export type beneficiosfixosUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    beneficiospaciente?: beneficiospacienteUpdateManyWithoutBeneficiosfixosNestedInput
  }

  export type beneficiosfixosUncheckedUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    beneficiospaciente?: beneficiospacienteUncheckedUpdateManyWithoutBeneficiosfixosNestedInput
  }

  export type beneficiosfixosCreateManyInput = {
    codigo: string
    descricao: string
  }

  export type beneficiosfixosUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type beneficiosfixosUncheckedUpdateManyInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type beneficiospacienteCreateInput = {
    cadastro: cadastroCreateNestedOneWithoutBeneficiospacienteInput
    beneficiosfixos?: beneficiosfixosCreateNestedOneWithoutBeneficiospacienteInput
  }

  export type beneficiospacienteUncheckedCreateInput = {
    id?: number
    cadastro_id: number
    codigo_beneficio?: string | null
  }

  export type beneficiospacienteUpdateInput = {
    cadastro?: cadastroUpdateOneRequiredWithoutBeneficiospacienteNestedInput
    beneficiosfixos?: beneficiosfixosUpdateOneWithoutBeneficiospacienteNestedInput
  }

  export type beneficiospacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cadastro_id?: IntFieldUpdateOperationsInput | number
    codigo_beneficio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type beneficiospacienteCreateManyInput = {
    id?: number
    cadastro_id: number
    codigo_beneficio?: string | null
  }

  export type beneficiospacienteUpdateManyMutationInput = {

  }

  export type beneficiospacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cadastro_id?: IntFieldUpdateOperationsInput | number
    codigo_beneficio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cadastroCreateInput = {
    nome: string
    idade: number
    documento: string
    data_nascimento: Date | string
    sexo: $Enums.cadastro_sexo
    estado_civil: $Enums.cadastro_estado_civil
    profissao?: string | null
    morador_rua?: boolean | null
    status: $Enums.cadastro_status
    cor_olhos?: string | null
    cor_cabelo?: string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    etnia?: string | null
    codigo_usuario?: string | null
    tipo_documento: $Enums.cadastro_tipo_documento
    beneficiospaciente?: beneficiospacienteCreateNestedManyWithoutCadastroInput
    dependenciaspaciente?: dependenciaspacienteCreateNestedManyWithoutCadastroInput
    historicoatividades?: historicoatividadesCreateNestedManyWithoutCadastroInput
  }

  export type cadastroUncheckedCreateInput = {
    id?: number
    nome: string
    idade: number
    documento: string
    data_nascimento: Date | string
    sexo: $Enums.cadastro_sexo
    estado_civil: $Enums.cadastro_estado_civil
    profissao?: string | null
    morador_rua?: boolean | null
    status: $Enums.cadastro_status
    cor_olhos?: string | null
    cor_cabelo?: string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    etnia?: string | null
    codigo_usuario?: string | null
    tipo_documento: $Enums.cadastro_tipo_documento
    beneficiospaciente?: beneficiospacienteUncheckedCreateNestedManyWithoutCadastroInput
    dependenciaspaciente?: dependenciaspacienteUncheckedCreateNestedManyWithoutCadastroInput
    historicoatividades?: historicoatividadesUncheckedCreateNestedManyWithoutCadastroInput
  }

  export type cadastroUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: Enumcadastro_sexoFieldUpdateOperationsInput | $Enums.cadastro_sexo
    estado_civil?: Enumcadastro_estado_civilFieldUpdateOperationsInput | $Enums.cadastro_estado_civil
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    morador_rua?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: Enumcadastro_statusFieldUpdateOperationsInput | $Enums.cadastro_status
    cor_olhos?: NullableStringFieldUpdateOperationsInput | string | null
    cor_cabelo?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etnia?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_documento?: Enumcadastro_tipo_documentoFieldUpdateOperationsInput | $Enums.cadastro_tipo_documento
    beneficiospaciente?: beneficiospacienteUpdateManyWithoutCadastroNestedInput
    dependenciaspaciente?: dependenciaspacienteUpdateManyWithoutCadastroNestedInput
    historicoatividades?: historicoatividadesUpdateManyWithoutCadastroNestedInput
  }

  export type cadastroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: Enumcadastro_sexoFieldUpdateOperationsInput | $Enums.cadastro_sexo
    estado_civil?: Enumcadastro_estado_civilFieldUpdateOperationsInput | $Enums.cadastro_estado_civil
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    morador_rua?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: Enumcadastro_statusFieldUpdateOperationsInput | $Enums.cadastro_status
    cor_olhos?: NullableStringFieldUpdateOperationsInput | string | null
    cor_cabelo?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etnia?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_documento?: Enumcadastro_tipo_documentoFieldUpdateOperationsInput | $Enums.cadastro_tipo_documento
    beneficiospaciente?: beneficiospacienteUncheckedUpdateManyWithoutCadastroNestedInput
    dependenciaspaciente?: dependenciaspacienteUncheckedUpdateManyWithoutCadastroNestedInput
    historicoatividades?: historicoatividadesUncheckedUpdateManyWithoutCadastroNestedInput
  }

  export type cadastroCreateManyInput = {
    id?: number
    nome: string
    idade: number
    documento: string
    data_nascimento: Date | string
    sexo: $Enums.cadastro_sexo
    estado_civil: $Enums.cadastro_estado_civil
    profissao?: string | null
    morador_rua?: boolean | null
    status: $Enums.cadastro_status
    cor_olhos?: string | null
    cor_cabelo?: string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    etnia?: string | null
    codigo_usuario?: string | null
    tipo_documento: $Enums.cadastro_tipo_documento
  }

  export type cadastroUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: Enumcadastro_sexoFieldUpdateOperationsInput | $Enums.cadastro_sexo
    estado_civil?: Enumcadastro_estado_civilFieldUpdateOperationsInput | $Enums.cadastro_estado_civil
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    morador_rua?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: Enumcadastro_statusFieldUpdateOperationsInput | $Enums.cadastro_status
    cor_olhos?: NullableStringFieldUpdateOperationsInput | string | null
    cor_cabelo?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etnia?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_documento?: Enumcadastro_tipo_documentoFieldUpdateOperationsInput | $Enums.cadastro_tipo_documento
  }

  export type cadastroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: Enumcadastro_sexoFieldUpdateOperationsInput | $Enums.cadastro_sexo
    estado_civil?: Enumcadastro_estado_civilFieldUpdateOperationsInput | $Enums.cadastro_estado_civil
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    morador_rua?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: Enumcadastro_statusFieldUpdateOperationsInput | $Enums.cadastro_status
    cor_olhos?: NullableStringFieldUpdateOperationsInput | string | null
    cor_cabelo?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etnia?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_documento?: Enumcadastro_tipo_documentoFieldUpdateOperationsInput | $Enums.cadastro_tipo_documento
  }

  export type dependenciasfixasCreateInput = {
    codigo: string
    descricao: string
    dependenciaspaciente?: dependenciaspacienteCreateNestedManyWithoutDependenciasfixasInput
  }

  export type dependenciasfixasUncheckedCreateInput = {
    codigo: string
    descricao: string
    dependenciaspaciente?: dependenciaspacienteUncheckedCreateNestedManyWithoutDependenciasfixasInput
  }

  export type dependenciasfixasUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dependenciaspaciente?: dependenciaspacienteUpdateManyWithoutDependenciasfixasNestedInput
  }

  export type dependenciasfixasUncheckedUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    dependenciaspaciente?: dependenciaspacienteUncheckedUpdateManyWithoutDependenciasfixasNestedInput
  }

  export type dependenciasfixasCreateManyInput = {
    codigo: string
    descricao: string
  }

  export type dependenciasfixasUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type dependenciasfixasUncheckedUpdateManyInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type dependenciaspacienteCreateInput = {
    cadastro: cadastroCreateNestedOneWithoutDependenciaspacienteInput
    dependenciasfixas?: dependenciasfixasCreateNestedOneWithoutDependenciaspacienteInput
  }

  export type dependenciaspacienteUncheckedCreateInput = {
    id?: number
    cadastro_id: number
    codigo_dependencia?: string | null
  }

  export type dependenciaspacienteUpdateInput = {
    cadastro?: cadastroUpdateOneRequiredWithoutDependenciaspacienteNestedInput
    dependenciasfixas?: dependenciasfixasUpdateOneWithoutDependenciaspacienteNestedInput
  }

  export type dependenciaspacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cadastro_id?: IntFieldUpdateOperationsInput | number
    codigo_dependencia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dependenciaspacienteCreateManyInput = {
    id?: number
    cadastro_id: number
    codigo_dependencia?: string | null
  }

  export type dependenciaspacienteUpdateManyMutationInput = {

  }

  export type dependenciaspacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cadastro_id?: IntFieldUpdateOperationsInput | number
    codigo_dependencia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historicoatividadesCreateInput = {
    data_atendimento: Date | string
    cadastro: cadastroCreateNestedOneWithoutHistoricoatividadesInput
    atividadesfixas?: atividadesfixasCreateNestedOneWithoutHistoricoatividadesInput
  }

  export type historicoatividadesUncheckedCreateInput = {
    id?: number
    cadastro_id: number
    codigo_atividade?: string | null
    data_atendimento: Date | string
  }

  export type historicoatividadesUpdateInput = {
    data_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    cadastro?: cadastroUpdateOneRequiredWithoutHistoricoatividadesNestedInput
    atividadesfixas?: atividadesfixasUpdateOneWithoutHistoricoatividadesNestedInput
  }

  export type historicoatividadesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cadastro_id?: IntFieldUpdateOperationsInput | number
    codigo_atividade?: NullableStringFieldUpdateOperationsInput | string | null
    data_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoatividadesCreateManyInput = {
    id?: number
    cadastro_id: number
    codigo_atividade?: string | null
    data_atendimento: Date | string
  }

  export type historicoatividadesUpdateManyMutationInput = {
    data_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoatividadesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cadastro_id?: IntFieldUpdateOperationsInput | number
    codigo_atividade?: NullableStringFieldUpdateOperationsInput | string | null
    data_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuarioCreateInput = {
    usuario: string
    senha: string
    refresh_token?: string | null
    status: string
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    usuario: string
    senha: string
    refresh_token?: string | null
    status: string
  }

  export type usuarioUpdateInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioCreateManyInput = {
    id?: number
    usuario: string
    senha: string
    refresh_token?: string | null
    status: string
  }

  export type usuarioUpdateManyMutationInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type HistoricoatividadesListRelationFilter = {
    every?: historicoatividadesWhereInput
    some?: historicoatividadesWhereInput
    none?: historicoatividadesWhereInput
  }

  export type historicoatividadesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type atividadesfixasCountOrderByAggregateInput = {
    codigo?: SortOrder
    descricao?: SortOrder
  }

  export type atividadesfixasMaxOrderByAggregateInput = {
    codigo?: SortOrder
    descricao?: SortOrder
  }

  export type atividadesfixasMinOrderByAggregateInput = {
    codigo?: SortOrder
    descricao?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BeneficiospacienteListRelationFilter = {
    every?: beneficiospacienteWhereInput
    some?: beneficiospacienteWhereInput
    none?: beneficiospacienteWhereInput
  }

  export type beneficiospacienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type beneficiosfixosCountOrderByAggregateInput = {
    codigo?: SortOrder
    descricao?: SortOrder
  }

  export type beneficiosfixosMaxOrderByAggregateInput = {
    codigo?: SortOrder
    descricao?: SortOrder
  }

  export type beneficiosfixosMinOrderByAggregateInput = {
    codigo?: SortOrder
    descricao?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CadastroRelationFilter = {
    is?: cadastroWhereInput
    isNot?: cadastroWhereInput
  }

  export type BeneficiosfixosNullableRelationFilter = {
    is?: beneficiosfixosWhereInput | null
    isNot?: beneficiosfixosWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type beneficiospacienteCountOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_beneficio?: SortOrder
  }

  export type beneficiospacienteAvgOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
  }

  export type beneficiospacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_beneficio?: SortOrder
  }

  export type beneficiospacienteMinOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_beneficio?: SortOrder
  }

  export type beneficiospacienteSumOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumcadastro_sexoFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_sexo | Enumcadastro_sexoFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_sexo[]
    notIn?: $Enums.cadastro_sexo[]
    not?: NestedEnumcadastro_sexoFilter<$PrismaModel> | $Enums.cadastro_sexo
  }

  export type Enumcadastro_estado_civilFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_estado_civil | Enumcadastro_estado_civilFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_estado_civil[]
    notIn?: $Enums.cadastro_estado_civil[]
    not?: NestedEnumcadastro_estado_civilFilter<$PrismaModel> | $Enums.cadastro_estado_civil
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Enumcadastro_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_status | Enumcadastro_statusFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_status[]
    notIn?: $Enums.cadastro_status[]
    not?: NestedEnumcadastro_statusFilter<$PrismaModel> | $Enums.cadastro_status
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Enumcadastro_tipo_documentoFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_tipo_documento | Enumcadastro_tipo_documentoFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_tipo_documento[]
    notIn?: $Enums.cadastro_tipo_documento[]
    not?: NestedEnumcadastro_tipo_documentoFilter<$PrismaModel> | $Enums.cadastro_tipo_documento
  }

  export type DependenciaspacienteListRelationFilter = {
    every?: dependenciaspacienteWhereInput
    some?: dependenciaspacienteWhereInput
    none?: dependenciaspacienteWhereInput
  }

  export type dependenciaspacienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cadastroCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    documento?: SortOrder
    data_nascimento?: SortOrder
    sexo?: SortOrder
    estado_civil?: SortOrder
    profissao?: SortOrder
    morador_rua?: SortOrder
    status?: SortOrder
    cor_olhos?: SortOrder
    cor_cabelo?: SortOrder
    altura?: SortOrder
    peso?: SortOrder
    etnia?: SortOrder
    codigo_usuario?: SortOrder
    tipo_documento?: SortOrder
  }

  export type cadastroAvgOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
    altura?: SortOrder
    peso?: SortOrder
  }

  export type cadastroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    documento?: SortOrder
    data_nascimento?: SortOrder
    sexo?: SortOrder
    estado_civil?: SortOrder
    profissao?: SortOrder
    morador_rua?: SortOrder
    status?: SortOrder
    cor_olhos?: SortOrder
    cor_cabelo?: SortOrder
    altura?: SortOrder
    peso?: SortOrder
    etnia?: SortOrder
    codigo_usuario?: SortOrder
    tipo_documento?: SortOrder
  }

  export type cadastroMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    documento?: SortOrder
    data_nascimento?: SortOrder
    sexo?: SortOrder
    estado_civil?: SortOrder
    profissao?: SortOrder
    morador_rua?: SortOrder
    status?: SortOrder
    cor_olhos?: SortOrder
    cor_cabelo?: SortOrder
    altura?: SortOrder
    peso?: SortOrder
    etnia?: SortOrder
    codigo_usuario?: SortOrder
    tipo_documento?: SortOrder
  }

  export type cadastroSumOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
    altura?: SortOrder
    peso?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumcadastro_sexoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_sexo | Enumcadastro_sexoFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_sexo[]
    notIn?: $Enums.cadastro_sexo[]
    not?: NestedEnumcadastro_sexoWithAggregatesFilter<$PrismaModel> | $Enums.cadastro_sexo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcadastro_sexoFilter<$PrismaModel>
    _max?: NestedEnumcadastro_sexoFilter<$PrismaModel>
  }

  export type Enumcadastro_estado_civilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_estado_civil | Enumcadastro_estado_civilFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_estado_civil[]
    notIn?: $Enums.cadastro_estado_civil[]
    not?: NestedEnumcadastro_estado_civilWithAggregatesFilter<$PrismaModel> | $Enums.cadastro_estado_civil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcadastro_estado_civilFilter<$PrismaModel>
    _max?: NestedEnumcadastro_estado_civilFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Enumcadastro_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_status | Enumcadastro_statusFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_status[]
    notIn?: $Enums.cadastro_status[]
    not?: NestedEnumcadastro_statusWithAggregatesFilter<$PrismaModel> | $Enums.cadastro_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcadastro_statusFilter<$PrismaModel>
    _max?: NestedEnumcadastro_statusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Enumcadastro_tipo_documentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_tipo_documento | Enumcadastro_tipo_documentoFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_tipo_documento[]
    notIn?: $Enums.cadastro_tipo_documento[]
    not?: NestedEnumcadastro_tipo_documentoWithAggregatesFilter<$PrismaModel> | $Enums.cadastro_tipo_documento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcadastro_tipo_documentoFilter<$PrismaModel>
    _max?: NestedEnumcadastro_tipo_documentoFilter<$PrismaModel>
  }

  export type dependenciasfixasCountOrderByAggregateInput = {
    codigo?: SortOrder
    descricao?: SortOrder
  }

  export type dependenciasfixasMaxOrderByAggregateInput = {
    codigo?: SortOrder
    descricao?: SortOrder
  }

  export type dependenciasfixasMinOrderByAggregateInput = {
    codigo?: SortOrder
    descricao?: SortOrder
  }

  export type DependenciasfixasNullableRelationFilter = {
    is?: dependenciasfixasWhereInput | null
    isNot?: dependenciasfixasWhereInput | null
  }

  export type dependenciaspacienteCountOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_dependencia?: SortOrder
  }

  export type dependenciaspacienteAvgOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
  }

  export type dependenciaspacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_dependencia?: SortOrder
  }

  export type dependenciaspacienteMinOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_dependencia?: SortOrder
  }

  export type dependenciaspacienteSumOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
  }

  export type AtividadesfixasNullableRelationFilter = {
    is?: atividadesfixasWhereInput | null
    isNot?: atividadesfixasWhereInput | null
  }

  export type historicoatividadesCountOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_atividade?: SortOrder
    data_atendimento?: SortOrder
  }

  export type historicoatividadesAvgOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
  }

  export type historicoatividadesMaxOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_atividade?: SortOrder
    data_atendimento?: SortOrder
  }

  export type historicoatividadesMinOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
    codigo_atividade?: SortOrder
    data_atendimento?: SortOrder
  }

  export type historicoatividadesSumOrderByAggregateInput = {
    id?: SortOrder
    cadastro_id?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    senha?: SortOrder
    refresh_token?: SortOrder
    status?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    senha?: SortOrder
    refresh_token?: SortOrder
    status?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    senha?: SortOrder
    refresh_token?: SortOrder
    status?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type historicoatividadesCreateNestedManyWithoutAtividadesfixasInput = {
    create?: XOR<historicoatividadesCreateWithoutAtividadesfixasInput, historicoatividadesUncheckedCreateWithoutAtividadesfixasInput> | historicoatividadesCreateWithoutAtividadesfixasInput[] | historicoatividadesUncheckedCreateWithoutAtividadesfixasInput[]
    connectOrCreate?: historicoatividadesCreateOrConnectWithoutAtividadesfixasInput | historicoatividadesCreateOrConnectWithoutAtividadesfixasInput[]
    createMany?: historicoatividadesCreateManyAtividadesfixasInputEnvelope
    connect?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
  }

  export type historicoatividadesUncheckedCreateNestedManyWithoutAtividadesfixasInput = {
    create?: XOR<historicoatividadesCreateWithoutAtividadesfixasInput, historicoatividadesUncheckedCreateWithoutAtividadesfixasInput> | historicoatividadesCreateWithoutAtividadesfixasInput[] | historicoatividadesUncheckedCreateWithoutAtividadesfixasInput[]
    connectOrCreate?: historicoatividadesCreateOrConnectWithoutAtividadesfixasInput | historicoatividadesCreateOrConnectWithoutAtividadesfixasInput[]
    createMany?: historicoatividadesCreateManyAtividadesfixasInputEnvelope
    connect?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type historicoatividadesUpdateManyWithoutAtividadesfixasNestedInput = {
    create?: XOR<historicoatividadesCreateWithoutAtividadesfixasInput, historicoatividadesUncheckedCreateWithoutAtividadesfixasInput> | historicoatividadesCreateWithoutAtividadesfixasInput[] | historicoatividadesUncheckedCreateWithoutAtividadesfixasInput[]
    connectOrCreate?: historicoatividadesCreateOrConnectWithoutAtividadesfixasInput | historicoatividadesCreateOrConnectWithoutAtividadesfixasInput[]
    upsert?: historicoatividadesUpsertWithWhereUniqueWithoutAtividadesfixasInput | historicoatividadesUpsertWithWhereUniqueWithoutAtividadesfixasInput[]
    createMany?: historicoatividadesCreateManyAtividadesfixasInputEnvelope
    set?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    disconnect?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    delete?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    connect?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    update?: historicoatividadesUpdateWithWhereUniqueWithoutAtividadesfixasInput | historicoatividadesUpdateWithWhereUniqueWithoutAtividadesfixasInput[]
    updateMany?: historicoatividadesUpdateManyWithWhereWithoutAtividadesfixasInput | historicoatividadesUpdateManyWithWhereWithoutAtividadesfixasInput[]
    deleteMany?: historicoatividadesScalarWhereInput | historicoatividadesScalarWhereInput[]
  }

  export type historicoatividadesUncheckedUpdateManyWithoutAtividadesfixasNestedInput = {
    create?: XOR<historicoatividadesCreateWithoutAtividadesfixasInput, historicoatividadesUncheckedCreateWithoutAtividadesfixasInput> | historicoatividadesCreateWithoutAtividadesfixasInput[] | historicoatividadesUncheckedCreateWithoutAtividadesfixasInput[]
    connectOrCreate?: historicoatividadesCreateOrConnectWithoutAtividadesfixasInput | historicoatividadesCreateOrConnectWithoutAtividadesfixasInput[]
    upsert?: historicoatividadesUpsertWithWhereUniqueWithoutAtividadesfixasInput | historicoatividadesUpsertWithWhereUniqueWithoutAtividadesfixasInput[]
    createMany?: historicoatividadesCreateManyAtividadesfixasInputEnvelope
    set?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    disconnect?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    delete?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    connect?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    update?: historicoatividadesUpdateWithWhereUniqueWithoutAtividadesfixasInput | historicoatividadesUpdateWithWhereUniqueWithoutAtividadesfixasInput[]
    updateMany?: historicoatividadesUpdateManyWithWhereWithoutAtividadesfixasInput | historicoatividadesUpdateManyWithWhereWithoutAtividadesfixasInput[]
    deleteMany?: historicoatividadesScalarWhereInput | historicoatividadesScalarWhereInput[]
  }

  export type beneficiospacienteCreateNestedManyWithoutBeneficiosfixosInput = {
    create?: XOR<beneficiospacienteCreateWithoutBeneficiosfixosInput, beneficiospacienteUncheckedCreateWithoutBeneficiosfixosInput> | beneficiospacienteCreateWithoutBeneficiosfixosInput[] | beneficiospacienteUncheckedCreateWithoutBeneficiosfixosInput[]
    connectOrCreate?: beneficiospacienteCreateOrConnectWithoutBeneficiosfixosInput | beneficiospacienteCreateOrConnectWithoutBeneficiosfixosInput[]
    createMany?: beneficiospacienteCreateManyBeneficiosfixosInputEnvelope
    connect?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
  }

  export type beneficiospacienteUncheckedCreateNestedManyWithoutBeneficiosfixosInput = {
    create?: XOR<beneficiospacienteCreateWithoutBeneficiosfixosInput, beneficiospacienteUncheckedCreateWithoutBeneficiosfixosInput> | beneficiospacienteCreateWithoutBeneficiosfixosInput[] | beneficiospacienteUncheckedCreateWithoutBeneficiosfixosInput[]
    connectOrCreate?: beneficiospacienteCreateOrConnectWithoutBeneficiosfixosInput | beneficiospacienteCreateOrConnectWithoutBeneficiosfixosInput[]
    createMany?: beneficiospacienteCreateManyBeneficiosfixosInputEnvelope
    connect?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
  }

  export type beneficiospacienteUpdateManyWithoutBeneficiosfixosNestedInput = {
    create?: XOR<beneficiospacienteCreateWithoutBeneficiosfixosInput, beneficiospacienteUncheckedCreateWithoutBeneficiosfixosInput> | beneficiospacienteCreateWithoutBeneficiosfixosInput[] | beneficiospacienteUncheckedCreateWithoutBeneficiosfixosInput[]
    connectOrCreate?: beneficiospacienteCreateOrConnectWithoutBeneficiosfixosInput | beneficiospacienteCreateOrConnectWithoutBeneficiosfixosInput[]
    upsert?: beneficiospacienteUpsertWithWhereUniqueWithoutBeneficiosfixosInput | beneficiospacienteUpsertWithWhereUniqueWithoutBeneficiosfixosInput[]
    createMany?: beneficiospacienteCreateManyBeneficiosfixosInputEnvelope
    set?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    disconnect?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    delete?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    connect?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    update?: beneficiospacienteUpdateWithWhereUniqueWithoutBeneficiosfixosInput | beneficiospacienteUpdateWithWhereUniqueWithoutBeneficiosfixosInput[]
    updateMany?: beneficiospacienteUpdateManyWithWhereWithoutBeneficiosfixosInput | beneficiospacienteUpdateManyWithWhereWithoutBeneficiosfixosInput[]
    deleteMany?: beneficiospacienteScalarWhereInput | beneficiospacienteScalarWhereInput[]
  }

  export type beneficiospacienteUncheckedUpdateManyWithoutBeneficiosfixosNestedInput = {
    create?: XOR<beneficiospacienteCreateWithoutBeneficiosfixosInput, beneficiospacienteUncheckedCreateWithoutBeneficiosfixosInput> | beneficiospacienteCreateWithoutBeneficiosfixosInput[] | beneficiospacienteUncheckedCreateWithoutBeneficiosfixosInput[]
    connectOrCreate?: beneficiospacienteCreateOrConnectWithoutBeneficiosfixosInput | beneficiospacienteCreateOrConnectWithoutBeneficiosfixosInput[]
    upsert?: beneficiospacienteUpsertWithWhereUniqueWithoutBeneficiosfixosInput | beneficiospacienteUpsertWithWhereUniqueWithoutBeneficiosfixosInput[]
    createMany?: beneficiospacienteCreateManyBeneficiosfixosInputEnvelope
    set?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    disconnect?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    delete?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    connect?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    update?: beneficiospacienteUpdateWithWhereUniqueWithoutBeneficiosfixosInput | beneficiospacienteUpdateWithWhereUniqueWithoutBeneficiosfixosInput[]
    updateMany?: beneficiospacienteUpdateManyWithWhereWithoutBeneficiosfixosInput | beneficiospacienteUpdateManyWithWhereWithoutBeneficiosfixosInput[]
    deleteMany?: beneficiospacienteScalarWhereInput | beneficiospacienteScalarWhereInput[]
  }

  export type cadastroCreateNestedOneWithoutBeneficiospacienteInput = {
    create?: XOR<cadastroCreateWithoutBeneficiospacienteInput, cadastroUncheckedCreateWithoutBeneficiospacienteInput>
    connectOrCreate?: cadastroCreateOrConnectWithoutBeneficiospacienteInput
    connect?: cadastroWhereUniqueInput
  }

  export type beneficiosfixosCreateNestedOneWithoutBeneficiospacienteInput = {
    create?: XOR<beneficiosfixosCreateWithoutBeneficiospacienteInput, beneficiosfixosUncheckedCreateWithoutBeneficiospacienteInput>
    connectOrCreate?: beneficiosfixosCreateOrConnectWithoutBeneficiospacienteInput
    connect?: beneficiosfixosWhereUniqueInput
  }

  export type cadastroUpdateOneRequiredWithoutBeneficiospacienteNestedInput = {
    create?: XOR<cadastroCreateWithoutBeneficiospacienteInput, cadastroUncheckedCreateWithoutBeneficiospacienteInput>
    connectOrCreate?: cadastroCreateOrConnectWithoutBeneficiospacienteInput
    upsert?: cadastroUpsertWithoutBeneficiospacienteInput
    connect?: cadastroWhereUniqueInput
    update?: XOR<XOR<cadastroUpdateToOneWithWhereWithoutBeneficiospacienteInput, cadastroUpdateWithoutBeneficiospacienteInput>, cadastroUncheckedUpdateWithoutBeneficiospacienteInput>
  }

  export type beneficiosfixosUpdateOneWithoutBeneficiospacienteNestedInput = {
    create?: XOR<beneficiosfixosCreateWithoutBeneficiospacienteInput, beneficiosfixosUncheckedCreateWithoutBeneficiospacienteInput>
    connectOrCreate?: beneficiosfixosCreateOrConnectWithoutBeneficiospacienteInput
    upsert?: beneficiosfixosUpsertWithoutBeneficiospacienteInput
    disconnect?: beneficiosfixosWhereInput | boolean
    delete?: beneficiosfixosWhereInput | boolean
    connect?: beneficiosfixosWhereUniqueInput
    update?: XOR<XOR<beneficiosfixosUpdateToOneWithWhereWithoutBeneficiospacienteInput, beneficiosfixosUpdateWithoutBeneficiospacienteInput>, beneficiosfixosUncheckedUpdateWithoutBeneficiospacienteInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type beneficiospacienteCreateNestedManyWithoutCadastroInput = {
    create?: XOR<beneficiospacienteCreateWithoutCadastroInput, beneficiospacienteUncheckedCreateWithoutCadastroInput> | beneficiospacienteCreateWithoutCadastroInput[] | beneficiospacienteUncheckedCreateWithoutCadastroInput[]
    connectOrCreate?: beneficiospacienteCreateOrConnectWithoutCadastroInput | beneficiospacienteCreateOrConnectWithoutCadastroInput[]
    createMany?: beneficiospacienteCreateManyCadastroInputEnvelope
    connect?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
  }

  export type dependenciaspacienteCreateNestedManyWithoutCadastroInput = {
    create?: XOR<dependenciaspacienteCreateWithoutCadastroInput, dependenciaspacienteUncheckedCreateWithoutCadastroInput> | dependenciaspacienteCreateWithoutCadastroInput[] | dependenciaspacienteUncheckedCreateWithoutCadastroInput[]
    connectOrCreate?: dependenciaspacienteCreateOrConnectWithoutCadastroInput | dependenciaspacienteCreateOrConnectWithoutCadastroInput[]
    createMany?: dependenciaspacienteCreateManyCadastroInputEnvelope
    connect?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
  }

  export type historicoatividadesCreateNestedManyWithoutCadastroInput = {
    create?: XOR<historicoatividadesCreateWithoutCadastroInput, historicoatividadesUncheckedCreateWithoutCadastroInput> | historicoatividadesCreateWithoutCadastroInput[] | historicoatividadesUncheckedCreateWithoutCadastroInput[]
    connectOrCreate?: historicoatividadesCreateOrConnectWithoutCadastroInput | historicoatividadesCreateOrConnectWithoutCadastroInput[]
    createMany?: historicoatividadesCreateManyCadastroInputEnvelope
    connect?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
  }

  export type beneficiospacienteUncheckedCreateNestedManyWithoutCadastroInput = {
    create?: XOR<beneficiospacienteCreateWithoutCadastroInput, beneficiospacienteUncheckedCreateWithoutCadastroInput> | beneficiospacienteCreateWithoutCadastroInput[] | beneficiospacienteUncheckedCreateWithoutCadastroInput[]
    connectOrCreate?: beneficiospacienteCreateOrConnectWithoutCadastroInput | beneficiospacienteCreateOrConnectWithoutCadastroInput[]
    createMany?: beneficiospacienteCreateManyCadastroInputEnvelope
    connect?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
  }

  export type dependenciaspacienteUncheckedCreateNestedManyWithoutCadastroInput = {
    create?: XOR<dependenciaspacienteCreateWithoutCadastroInput, dependenciaspacienteUncheckedCreateWithoutCadastroInput> | dependenciaspacienteCreateWithoutCadastroInput[] | dependenciaspacienteUncheckedCreateWithoutCadastroInput[]
    connectOrCreate?: dependenciaspacienteCreateOrConnectWithoutCadastroInput | dependenciaspacienteCreateOrConnectWithoutCadastroInput[]
    createMany?: dependenciaspacienteCreateManyCadastroInputEnvelope
    connect?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
  }

  export type historicoatividadesUncheckedCreateNestedManyWithoutCadastroInput = {
    create?: XOR<historicoatividadesCreateWithoutCadastroInput, historicoatividadesUncheckedCreateWithoutCadastroInput> | historicoatividadesCreateWithoutCadastroInput[] | historicoatividadesUncheckedCreateWithoutCadastroInput[]
    connectOrCreate?: historicoatividadesCreateOrConnectWithoutCadastroInput | historicoatividadesCreateOrConnectWithoutCadastroInput[]
    createMany?: historicoatividadesCreateManyCadastroInputEnvelope
    connect?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumcadastro_sexoFieldUpdateOperationsInput = {
    set?: $Enums.cadastro_sexo
  }

  export type Enumcadastro_estado_civilFieldUpdateOperationsInput = {
    set?: $Enums.cadastro_estado_civil
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type Enumcadastro_statusFieldUpdateOperationsInput = {
    set?: $Enums.cadastro_status
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Enumcadastro_tipo_documentoFieldUpdateOperationsInput = {
    set?: $Enums.cadastro_tipo_documento
  }

  export type beneficiospacienteUpdateManyWithoutCadastroNestedInput = {
    create?: XOR<beneficiospacienteCreateWithoutCadastroInput, beneficiospacienteUncheckedCreateWithoutCadastroInput> | beneficiospacienteCreateWithoutCadastroInput[] | beneficiospacienteUncheckedCreateWithoutCadastroInput[]
    connectOrCreate?: beneficiospacienteCreateOrConnectWithoutCadastroInput | beneficiospacienteCreateOrConnectWithoutCadastroInput[]
    upsert?: beneficiospacienteUpsertWithWhereUniqueWithoutCadastroInput | beneficiospacienteUpsertWithWhereUniqueWithoutCadastroInput[]
    createMany?: beneficiospacienteCreateManyCadastroInputEnvelope
    set?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    disconnect?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    delete?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    connect?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    update?: beneficiospacienteUpdateWithWhereUniqueWithoutCadastroInput | beneficiospacienteUpdateWithWhereUniqueWithoutCadastroInput[]
    updateMany?: beneficiospacienteUpdateManyWithWhereWithoutCadastroInput | beneficiospacienteUpdateManyWithWhereWithoutCadastroInput[]
    deleteMany?: beneficiospacienteScalarWhereInput | beneficiospacienteScalarWhereInput[]
  }

  export type dependenciaspacienteUpdateManyWithoutCadastroNestedInput = {
    create?: XOR<dependenciaspacienteCreateWithoutCadastroInput, dependenciaspacienteUncheckedCreateWithoutCadastroInput> | dependenciaspacienteCreateWithoutCadastroInput[] | dependenciaspacienteUncheckedCreateWithoutCadastroInput[]
    connectOrCreate?: dependenciaspacienteCreateOrConnectWithoutCadastroInput | dependenciaspacienteCreateOrConnectWithoutCadastroInput[]
    upsert?: dependenciaspacienteUpsertWithWhereUniqueWithoutCadastroInput | dependenciaspacienteUpsertWithWhereUniqueWithoutCadastroInput[]
    createMany?: dependenciaspacienteCreateManyCadastroInputEnvelope
    set?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    disconnect?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    delete?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    connect?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    update?: dependenciaspacienteUpdateWithWhereUniqueWithoutCadastroInput | dependenciaspacienteUpdateWithWhereUniqueWithoutCadastroInput[]
    updateMany?: dependenciaspacienteUpdateManyWithWhereWithoutCadastroInput | dependenciaspacienteUpdateManyWithWhereWithoutCadastroInput[]
    deleteMany?: dependenciaspacienteScalarWhereInput | dependenciaspacienteScalarWhereInput[]
  }

  export type historicoatividadesUpdateManyWithoutCadastroNestedInput = {
    create?: XOR<historicoatividadesCreateWithoutCadastroInput, historicoatividadesUncheckedCreateWithoutCadastroInput> | historicoatividadesCreateWithoutCadastroInput[] | historicoatividadesUncheckedCreateWithoutCadastroInput[]
    connectOrCreate?: historicoatividadesCreateOrConnectWithoutCadastroInput | historicoatividadesCreateOrConnectWithoutCadastroInput[]
    upsert?: historicoatividadesUpsertWithWhereUniqueWithoutCadastroInput | historicoatividadesUpsertWithWhereUniqueWithoutCadastroInput[]
    createMany?: historicoatividadesCreateManyCadastroInputEnvelope
    set?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    disconnect?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    delete?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    connect?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    update?: historicoatividadesUpdateWithWhereUniqueWithoutCadastroInput | historicoatividadesUpdateWithWhereUniqueWithoutCadastroInput[]
    updateMany?: historicoatividadesUpdateManyWithWhereWithoutCadastroInput | historicoatividadesUpdateManyWithWhereWithoutCadastroInput[]
    deleteMany?: historicoatividadesScalarWhereInput | historicoatividadesScalarWhereInput[]
  }

  export type beneficiospacienteUncheckedUpdateManyWithoutCadastroNestedInput = {
    create?: XOR<beneficiospacienteCreateWithoutCadastroInput, beneficiospacienteUncheckedCreateWithoutCadastroInput> | beneficiospacienteCreateWithoutCadastroInput[] | beneficiospacienteUncheckedCreateWithoutCadastroInput[]
    connectOrCreate?: beneficiospacienteCreateOrConnectWithoutCadastroInput | beneficiospacienteCreateOrConnectWithoutCadastroInput[]
    upsert?: beneficiospacienteUpsertWithWhereUniqueWithoutCadastroInput | beneficiospacienteUpsertWithWhereUniqueWithoutCadastroInput[]
    createMany?: beneficiospacienteCreateManyCadastroInputEnvelope
    set?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    disconnect?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    delete?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    connect?: beneficiospacienteWhereUniqueInput | beneficiospacienteWhereUniqueInput[]
    update?: beneficiospacienteUpdateWithWhereUniqueWithoutCadastroInput | beneficiospacienteUpdateWithWhereUniqueWithoutCadastroInput[]
    updateMany?: beneficiospacienteUpdateManyWithWhereWithoutCadastroInput | beneficiospacienteUpdateManyWithWhereWithoutCadastroInput[]
    deleteMany?: beneficiospacienteScalarWhereInput | beneficiospacienteScalarWhereInput[]
  }

  export type dependenciaspacienteUncheckedUpdateManyWithoutCadastroNestedInput = {
    create?: XOR<dependenciaspacienteCreateWithoutCadastroInput, dependenciaspacienteUncheckedCreateWithoutCadastroInput> | dependenciaspacienteCreateWithoutCadastroInput[] | dependenciaspacienteUncheckedCreateWithoutCadastroInput[]
    connectOrCreate?: dependenciaspacienteCreateOrConnectWithoutCadastroInput | dependenciaspacienteCreateOrConnectWithoutCadastroInput[]
    upsert?: dependenciaspacienteUpsertWithWhereUniqueWithoutCadastroInput | dependenciaspacienteUpsertWithWhereUniqueWithoutCadastroInput[]
    createMany?: dependenciaspacienteCreateManyCadastroInputEnvelope
    set?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    disconnect?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    delete?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    connect?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    update?: dependenciaspacienteUpdateWithWhereUniqueWithoutCadastroInput | dependenciaspacienteUpdateWithWhereUniqueWithoutCadastroInput[]
    updateMany?: dependenciaspacienteUpdateManyWithWhereWithoutCadastroInput | dependenciaspacienteUpdateManyWithWhereWithoutCadastroInput[]
    deleteMany?: dependenciaspacienteScalarWhereInput | dependenciaspacienteScalarWhereInput[]
  }

  export type historicoatividadesUncheckedUpdateManyWithoutCadastroNestedInput = {
    create?: XOR<historicoatividadesCreateWithoutCadastroInput, historicoatividadesUncheckedCreateWithoutCadastroInput> | historicoatividadesCreateWithoutCadastroInput[] | historicoatividadesUncheckedCreateWithoutCadastroInput[]
    connectOrCreate?: historicoatividadesCreateOrConnectWithoutCadastroInput | historicoatividadesCreateOrConnectWithoutCadastroInput[]
    upsert?: historicoatividadesUpsertWithWhereUniqueWithoutCadastroInput | historicoatividadesUpsertWithWhereUniqueWithoutCadastroInput[]
    createMany?: historicoatividadesCreateManyCadastroInputEnvelope
    set?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    disconnect?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    delete?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    connect?: historicoatividadesWhereUniqueInput | historicoatividadesWhereUniqueInput[]
    update?: historicoatividadesUpdateWithWhereUniqueWithoutCadastroInput | historicoatividadesUpdateWithWhereUniqueWithoutCadastroInput[]
    updateMany?: historicoatividadesUpdateManyWithWhereWithoutCadastroInput | historicoatividadesUpdateManyWithWhereWithoutCadastroInput[]
    deleteMany?: historicoatividadesScalarWhereInput | historicoatividadesScalarWhereInput[]
  }

  export type dependenciaspacienteCreateNestedManyWithoutDependenciasfixasInput = {
    create?: XOR<dependenciaspacienteCreateWithoutDependenciasfixasInput, dependenciaspacienteUncheckedCreateWithoutDependenciasfixasInput> | dependenciaspacienteCreateWithoutDependenciasfixasInput[] | dependenciaspacienteUncheckedCreateWithoutDependenciasfixasInput[]
    connectOrCreate?: dependenciaspacienteCreateOrConnectWithoutDependenciasfixasInput | dependenciaspacienteCreateOrConnectWithoutDependenciasfixasInput[]
    createMany?: dependenciaspacienteCreateManyDependenciasfixasInputEnvelope
    connect?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
  }

  export type dependenciaspacienteUncheckedCreateNestedManyWithoutDependenciasfixasInput = {
    create?: XOR<dependenciaspacienteCreateWithoutDependenciasfixasInput, dependenciaspacienteUncheckedCreateWithoutDependenciasfixasInput> | dependenciaspacienteCreateWithoutDependenciasfixasInput[] | dependenciaspacienteUncheckedCreateWithoutDependenciasfixasInput[]
    connectOrCreate?: dependenciaspacienteCreateOrConnectWithoutDependenciasfixasInput | dependenciaspacienteCreateOrConnectWithoutDependenciasfixasInput[]
    createMany?: dependenciaspacienteCreateManyDependenciasfixasInputEnvelope
    connect?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
  }

  export type dependenciaspacienteUpdateManyWithoutDependenciasfixasNestedInput = {
    create?: XOR<dependenciaspacienteCreateWithoutDependenciasfixasInput, dependenciaspacienteUncheckedCreateWithoutDependenciasfixasInput> | dependenciaspacienteCreateWithoutDependenciasfixasInput[] | dependenciaspacienteUncheckedCreateWithoutDependenciasfixasInput[]
    connectOrCreate?: dependenciaspacienteCreateOrConnectWithoutDependenciasfixasInput | dependenciaspacienteCreateOrConnectWithoutDependenciasfixasInput[]
    upsert?: dependenciaspacienteUpsertWithWhereUniqueWithoutDependenciasfixasInput | dependenciaspacienteUpsertWithWhereUniqueWithoutDependenciasfixasInput[]
    createMany?: dependenciaspacienteCreateManyDependenciasfixasInputEnvelope
    set?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    disconnect?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    delete?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    connect?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    update?: dependenciaspacienteUpdateWithWhereUniqueWithoutDependenciasfixasInput | dependenciaspacienteUpdateWithWhereUniqueWithoutDependenciasfixasInput[]
    updateMany?: dependenciaspacienteUpdateManyWithWhereWithoutDependenciasfixasInput | dependenciaspacienteUpdateManyWithWhereWithoutDependenciasfixasInput[]
    deleteMany?: dependenciaspacienteScalarWhereInput | dependenciaspacienteScalarWhereInput[]
  }

  export type dependenciaspacienteUncheckedUpdateManyWithoutDependenciasfixasNestedInput = {
    create?: XOR<dependenciaspacienteCreateWithoutDependenciasfixasInput, dependenciaspacienteUncheckedCreateWithoutDependenciasfixasInput> | dependenciaspacienteCreateWithoutDependenciasfixasInput[] | dependenciaspacienteUncheckedCreateWithoutDependenciasfixasInput[]
    connectOrCreate?: dependenciaspacienteCreateOrConnectWithoutDependenciasfixasInput | dependenciaspacienteCreateOrConnectWithoutDependenciasfixasInput[]
    upsert?: dependenciaspacienteUpsertWithWhereUniqueWithoutDependenciasfixasInput | dependenciaspacienteUpsertWithWhereUniqueWithoutDependenciasfixasInput[]
    createMany?: dependenciaspacienteCreateManyDependenciasfixasInputEnvelope
    set?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    disconnect?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    delete?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    connect?: dependenciaspacienteWhereUniqueInput | dependenciaspacienteWhereUniqueInput[]
    update?: dependenciaspacienteUpdateWithWhereUniqueWithoutDependenciasfixasInput | dependenciaspacienteUpdateWithWhereUniqueWithoutDependenciasfixasInput[]
    updateMany?: dependenciaspacienteUpdateManyWithWhereWithoutDependenciasfixasInput | dependenciaspacienteUpdateManyWithWhereWithoutDependenciasfixasInput[]
    deleteMany?: dependenciaspacienteScalarWhereInput | dependenciaspacienteScalarWhereInput[]
  }

  export type cadastroCreateNestedOneWithoutDependenciaspacienteInput = {
    create?: XOR<cadastroCreateWithoutDependenciaspacienteInput, cadastroUncheckedCreateWithoutDependenciaspacienteInput>
    connectOrCreate?: cadastroCreateOrConnectWithoutDependenciaspacienteInput
    connect?: cadastroWhereUniqueInput
  }

  export type dependenciasfixasCreateNestedOneWithoutDependenciaspacienteInput = {
    create?: XOR<dependenciasfixasCreateWithoutDependenciaspacienteInput, dependenciasfixasUncheckedCreateWithoutDependenciaspacienteInput>
    connectOrCreate?: dependenciasfixasCreateOrConnectWithoutDependenciaspacienteInput
    connect?: dependenciasfixasWhereUniqueInput
  }

  export type cadastroUpdateOneRequiredWithoutDependenciaspacienteNestedInput = {
    create?: XOR<cadastroCreateWithoutDependenciaspacienteInput, cadastroUncheckedCreateWithoutDependenciaspacienteInput>
    connectOrCreate?: cadastroCreateOrConnectWithoutDependenciaspacienteInput
    upsert?: cadastroUpsertWithoutDependenciaspacienteInput
    connect?: cadastroWhereUniqueInput
    update?: XOR<XOR<cadastroUpdateToOneWithWhereWithoutDependenciaspacienteInput, cadastroUpdateWithoutDependenciaspacienteInput>, cadastroUncheckedUpdateWithoutDependenciaspacienteInput>
  }

  export type dependenciasfixasUpdateOneWithoutDependenciaspacienteNestedInput = {
    create?: XOR<dependenciasfixasCreateWithoutDependenciaspacienteInput, dependenciasfixasUncheckedCreateWithoutDependenciaspacienteInput>
    connectOrCreate?: dependenciasfixasCreateOrConnectWithoutDependenciaspacienteInput
    upsert?: dependenciasfixasUpsertWithoutDependenciaspacienteInput
    disconnect?: dependenciasfixasWhereInput | boolean
    delete?: dependenciasfixasWhereInput | boolean
    connect?: dependenciasfixasWhereUniqueInput
    update?: XOR<XOR<dependenciasfixasUpdateToOneWithWhereWithoutDependenciaspacienteInput, dependenciasfixasUpdateWithoutDependenciaspacienteInput>, dependenciasfixasUncheckedUpdateWithoutDependenciaspacienteInput>
  }

  export type cadastroCreateNestedOneWithoutHistoricoatividadesInput = {
    create?: XOR<cadastroCreateWithoutHistoricoatividadesInput, cadastroUncheckedCreateWithoutHistoricoatividadesInput>
    connectOrCreate?: cadastroCreateOrConnectWithoutHistoricoatividadesInput
    connect?: cadastroWhereUniqueInput
  }

  export type atividadesfixasCreateNestedOneWithoutHistoricoatividadesInput = {
    create?: XOR<atividadesfixasCreateWithoutHistoricoatividadesInput, atividadesfixasUncheckedCreateWithoutHistoricoatividadesInput>
    connectOrCreate?: atividadesfixasCreateOrConnectWithoutHistoricoatividadesInput
    connect?: atividadesfixasWhereUniqueInput
  }

  export type cadastroUpdateOneRequiredWithoutHistoricoatividadesNestedInput = {
    create?: XOR<cadastroCreateWithoutHistoricoatividadesInput, cadastroUncheckedCreateWithoutHistoricoatividadesInput>
    connectOrCreate?: cadastroCreateOrConnectWithoutHistoricoatividadesInput
    upsert?: cadastroUpsertWithoutHistoricoatividadesInput
    connect?: cadastroWhereUniqueInput
    update?: XOR<XOR<cadastroUpdateToOneWithWhereWithoutHistoricoatividadesInput, cadastroUpdateWithoutHistoricoatividadesInput>, cadastroUncheckedUpdateWithoutHistoricoatividadesInput>
  }

  export type atividadesfixasUpdateOneWithoutHistoricoatividadesNestedInput = {
    create?: XOR<atividadesfixasCreateWithoutHistoricoatividadesInput, atividadesfixasUncheckedCreateWithoutHistoricoatividadesInput>
    connectOrCreate?: atividadesfixasCreateOrConnectWithoutHistoricoatividadesInput
    upsert?: atividadesfixasUpsertWithoutHistoricoatividadesInput
    disconnect?: atividadesfixasWhereInput | boolean
    delete?: atividadesfixasWhereInput | boolean
    connect?: atividadesfixasWhereUniqueInput
    update?: XOR<XOR<atividadesfixasUpdateToOneWithWhereWithoutHistoricoatividadesInput, atividadesfixasUpdateWithoutHistoricoatividadesInput>, atividadesfixasUncheckedUpdateWithoutHistoricoatividadesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumcadastro_sexoFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_sexo | Enumcadastro_sexoFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_sexo[]
    notIn?: $Enums.cadastro_sexo[]
    not?: NestedEnumcadastro_sexoFilter<$PrismaModel> | $Enums.cadastro_sexo
  }

  export type NestedEnumcadastro_estado_civilFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_estado_civil | Enumcadastro_estado_civilFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_estado_civil[]
    notIn?: $Enums.cadastro_estado_civil[]
    not?: NestedEnumcadastro_estado_civilFilter<$PrismaModel> | $Enums.cadastro_estado_civil
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumcadastro_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_status | Enumcadastro_statusFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_status[]
    notIn?: $Enums.cadastro_status[]
    not?: NestedEnumcadastro_statusFilter<$PrismaModel> | $Enums.cadastro_status
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumcadastro_tipo_documentoFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_tipo_documento | Enumcadastro_tipo_documentoFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_tipo_documento[]
    notIn?: $Enums.cadastro_tipo_documento[]
    not?: NestedEnumcadastro_tipo_documentoFilter<$PrismaModel> | $Enums.cadastro_tipo_documento
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumcadastro_sexoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_sexo | Enumcadastro_sexoFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_sexo[]
    notIn?: $Enums.cadastro_sexo[]
    not?: NestedEnumcadastro_sexoWithAggregatesFilter<$PrismaModel> | $Enums.cadastro_sexo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcadastro_sexoFilter<$PrismaModel>
    _max?: NestedEnumcadastro_sexoFilter<$PrismaModel>
  }

  export type NestedEnumcadastro_estado_civilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_estado_civil | Enumcadastro_estado_civilFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_estado_civil[]
    notIn?: $Enums.cadastro_estado_civil[]
    not?: NestedEnumcadastro_estado_civilWithAggregatesFilter<$PrismaModel> | $Enums.cadastro_estado_civil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcadastro_estado_civilFilter<$PrismaModel>
    _max?: NestedEnumcadastro_estado_civilFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumcadastro_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_status | Enumcadastro_statusFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_status[]
    notIn?: $Enums.cadastro_status[]
    not?: NestedEnumcadastro_statusWithAggregatesFilter<$PrismaModel> | $Enums.cadastro_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcadastro_statusFilter<$PrismaModel>
    _max?: NestedEnumcadastro_statusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumcadastro_tipo_documentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cadastro_tipo_documento | Enumcadastro_tipo_documentoFieldRefInput<$PrismaModel>
    in?: $Enums.cadastro_tipo_documento[]
    notIn?: $Enums.cadastro_tipo_documento[]
    not?: NestedEnumcadastro_tipo_documentoWithAggregatesFilter<$PrismaModel> | $Enums.cadastro_tipo_documento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcadastro_tipo_documentoFilter<$PrismaModel>
    _max?: NestedEnumcadastro_tipo_documentoFilter<$PrismaModel>
  }

  export type historicoatividadesCreateWithoutAtividadesfixasInput = {
    data_atendimento: Date | string
    cadastro: cadastroCreateNestedOneWithoutHistoricoatividadesInput
  }

  export type historicoatividadesUncheckedCreateWithoutAtividadesfixasInput = {
    id?: number
    cadastro_id: number
    data_atendimento: Date | string
  }

  export type historicoatividadesCreateOrConnectWithoutAtividadesfixasInput = {
    where: historicoatividadesWhereUniqueInput
    create: XOR<historicoatividadesCreateWithoutAtividadesfixasInput, historicoatividadesUncheckedCreateWithoutAtividadesfixasInput>
  }

  export type historicoatividadesCreateManyAtividadesfixasInputEnvelope = {
    data: historicoatividadesCreateManyAtividadesfixasInput | historicoatividadesCreateManyAtividadesfixasInput[]
    skipDuplicates?: boolean
  }

  export type historicoatividadesUpsertWithWhereUniqueWithoutAtividadesfixasInput = {
    where: historicoatividadesWhereUniqueInput
    update: XOR<historicoatividadesUpdateWithoutAtividadesfixasInput, historicoatividadesUncheckedUpdateWithoutAtividadesfixasInput>
    create: XOR<historicoatividadesCreateWithoutAtividadesfixasInput, historicoatividadesUncheckedCreateWithoutAtividadesfixasInput>
  }

  export type historicoatividadesUpdateWithWhereUniqueWithoutAtividadesfixasInput = {
    where: historicoatividadesWhereUniqueInput
    data: XOR<historicoatividadesUpdateWithoutAtividadesfixasInput, historicoatividadesUncheckedUpdateWithoutAtividadesfixasInput>
  }

  export type historicoatividadesUpdateManyWithWhereWithoutAtividadesfixasInput = {
    where: historicoatividadesScalarWhereInput
    data: XOR<historicoatividadesUpdateManyMutationInput, historicoatividadesUncheckedUpdateManyWithoutAtividadesfixasInput>
  }

  export type historicoatividadesScalarWhereInput = {
    AND?: historicoatividadesScalarWhereInput | historicoatividadesScalarWhereInput[]
    OR?: historicoatividadesScalarWhereInput[]
    NOT?: historicoatividadesScalarWhereInput | historicoatividadesScalarWhereInput[]
    id?: IntFilter<"historicoatividades"> | number
    cadastro_id?: IntFilter<"historicoatividades"> | number
    codigo_atividade?: StringNullableFilter<"historicoatividades"> | string | null
    data_atendimento?: DateTimeFilter<"historicoatividades"> | Date | string
  }

  export type beneficiospacienteCreateWithoutBeneficiosfixosInput = {
    cadastro: cadastroCreateNestedOneWithoutBeneficiospacienteInput
  }

  export type beneficiospacienteUncheckedCreateWithoutBeneficiosfixosInput = {
    id?: number
    cadastro_id: number
  }

  export type beneficiospacienteCreateOrConnectWithoutBeneficiosfixosInput = {
    where: beneficiospacienteWhereUniqueInput
    create: XOR<beneficiospacienteCreateWithoutBeneficiosfixosInput, beneficiospacienteUncheckedCreateWithoutBeneficiosfixosInput>
  }

  export type beneficiospacienteCreateManyBeneficiosfixosInputEnvelope = {
    data: beneficiospacienteCreateManyBeneficiosfixosInput | beneficiospacienteCreateManyBeneficiosfixosInput[]
    skipDuplicates?: boolean
  }

  export type beneficiospacienteUpsertWithWhereUniqueWithoutBeneficiosfixosInput = {
    where: beneficiospacienteWhereUniqueInput
    update: XOR<beneficiospacienteUpdateWithoutBeneficiosfixosInput, beneficiospacienteUncheckedUpdateWithoutBeneficiosfixosInput>
    create: XOR<beneficiospacienteCreateWithoutBeneficiosfixosInput, beneficiospacienteUncheckedCreateWithoutBeneficiosfixosInput>
  }

  export type beneficiospacienteUpdateWithWhereUniqueWithoutBeneficiosfixosInput = {
    where: beneficiospacienteWhereUniqueInput
    data: XOR<beneficiospacienteUpdateWithoutBeneficiosfixosInput, beneficiospacienteUncheckedUpdateWithoutBeneficiosfixosInput>
  }

  export type beneficiospacienteUpdateManyWithWhereWithoutBeneficiosfixosInput = {
    where: beneficiospacienteScalarWhereInput
    data: XOR<beneficiospacienteUpdateManyMutationInput, beneficiospacienteUncheckedUpdateManyWithoutBeneficiosfixosInput>
  }

  export type beneficiospacienteScalarWhereInput = {
    AND?: beneficiospacienteScalarWhereInput | beneficiospacienteScalarWhereInput[]
    OR?: beneficiospacienteScalarWhereInput[]
    NOT?: beneficiospacienteScalarWhereInput | beneficiospacienteScalarWhereInput[]
    id?: IntFilter<"beneficiospaciente"> | number
    cadastro_id?: IntFilter<"beneficiospaciente"> | number
    codigo_beneficio?: StringNullableFilter<"beneficiospaciente"> | string | null
  }

  export type cadastroCreateWithoutBeneficiospacienteInput = {
    nome: string
    idade: number
    documento: string
    data_nascimento: Date | string
    sexo: $Enums.cadastro_sexo
    estado_civil: $Enums.cadastro_estado_civil
    profissao?: string | null
    morador_rua?: boolean | null
    status: $Enums.cadastro_status
    cor_olhos?: string | null
    cor_cabelo?: string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    etnia?: string | null
    codigo_usuario?: string | null
    tipo_documento: $Enums.cadastro_tipo_documento
    dependenciaspaciente?: dependenciaspacienteCreateNestedManyWithoutCadastroInput
    historicoatividades?: historicoatividadesCreateNestedManyWithoutCadastroInput
  }

  export type cadastroUncheckedCreateWithoutBeneficiospacienteInput = {
    id?: number
    nome: string
    idade: number
    documento: string
    data_nascimento: Date | string
    sexo: $Enums.cadastro_sexo
    estado_civil: $Enums.cadastro_estado_civil
    profissao?: string | null
    morador_rua?: boolean | null
    status: $Enums.cadastro_status
    cor_olhos?: string | null
    cor_cabelo?: string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    etnia?: string | null
    codigo_usuario?: string | null
    tipo_documento: $Enums.cadastro_tipo_documento
    dependenciaspaciente?: dependenciaspacienteUncheckedCreateNestedManyWithoutCadastroInput
    historicoatividades?: historicoatividadesUncheckedCreateNestedManyWithoutCadastroInput
  }

  export type cadastroCreateOrConnectWithoutBeneficiospacienteInput = {
    where: cadastroWhereUniqueInput
    create: XOR<cadastroCreateWithoutBeneficiospacienteInput, cadastroUncheckedCreateWithoutBeneficiospacienteInput>
  }

  export type beneficiosfixosCreateWithoutBeneficiospacienteInput = {
    codigo: string
    descricao: string
  }

  export type beneficiosfixosUncheckedCreateWithoutBeneficiospacienteInput = {
    codigo: string
    descricao: string
  }

  export type beneficiosfixosCreateOrConnectWithoutBeneficiospacienteInput = {
    where: beneficiosfixosWhereUniqueInput
    create: XOR<beneficiosfixosCreateWithoutBeneficiospacienteInput, beneficiosfixosUncheckedCreateWithoutBeneficiospacienteInput>
  }

  export type cadastroUpsertWithoutBeneficiospacienteInput = {
    update: XOR<cadastroUpdateWithoutBeneficiospacienteInput, cadastroUncheckedUpdateWithoutBeneficiospacienteInput>
    create: XOR<cadastroCreateWithoutBeneficiospacienteInput, cadastroUncheckedCreateWithoutBeneficiospacienteInput>
    where?: cadastroWhereInput
  }

  export type cadastroUpdateToOneWithWhereWithoutBeneficiospacienteInput = {
    where?: cadastroWhereInput
    data: XOR<cadastroUpdateWithoutBeneficiospacienteInput, cadastroUncheckedUpdateWithoutBeneficiospacienteInput>
  }

  export type cadastroUpdateWithoutBeneficiospacienteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: Enumcadastro_sexoFieldUpdateOperationsInput | $Enums.cadastro_sexo
    estado_civil?: Enumcadastro_estado_civilFieldUpdateOperationsInput | $Enums.cadastro_estado_civil
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    morador_rua?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: Enumcadastro_statusFieldUpdateOperationsInput | $Enums.cadastro_status
    cor_olhos?: NullableStringFieldUpdateOperationsInput | string | null
    cor_cabelo?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etnia?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_documento?: Enumcadastro_tipo_documentoFieldUpdateOperationsInput | $Enums.cadastro_tipo_documento
    dependenciaspaciente?: dependenciaspacienteUpdateManyWithoutCadastroNestedInput
    historicoatividades?: historicoatividadesUpdateManyWithoutCadastroNestedInput
  }

  export type cadastroUncheckedUpdateWithoutBeneficiospacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: Enumcadastro_sexoFieldUpdateOperationsInput | $Enums.cadastro_sexo
    estado_civil?: Enumcadastro_estado_civilFieldUpdateOperationsInput | $Enums.cadastro_estado_civil
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    morador_rua?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: Enumcadastro_statusFieldUpdateOperationsInput | $Enums.cadastro_status
    cor_olhos?: NullableStringFieldUpdateOperationsInput | string | null
    cor_cabelo?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etnia?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_documento?: Enumcadastro_tipo_documentoFieldUpdateOperationsInput | $Enums.cadastro_tipo_documento
    dependenciaspaciente?: dependenciaspacienteUncheckedUpdateManyWithoutCadastroNestedInput
    historicoatividades?: historicoatividadesUncheckedUpdateManyWithoutCadastroNestedInput
  }

  export type beneficiosfixosUpsertWithoutBeneficiospacienteInput = {
    update: XOR<beneficiosfixosUpdateWithoutBeneficiospacienteInput, beneficiosfixosUncheckedUpdateWithoutBeneficiospacienteInput>
    create: XOR<beneficiosfixosCreateWithoutBeneficiospacienteInput, beneficiosfixosUncheckedCreateWithoutBeneficiospacienteInput>
    where?: beneficiosfixosWhereInput
  }

  export type beneficiosfixosUpdateToOneWithWhereWithoutBeneficiospacienteInput = {
    where?: beneficiosfixosWhereInput
    data: XOR<beneficiosfixosUpdateWithoutBeneficiospacienteInput, beneficiosfixosUncheckedUpdateWithoutBeneficiospacienteInput>
  }

  export type beneficiosfixosUpdateWithoutBeneficiospacienteInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type beneficiosfixosUncheckedUpdateWithoutBeneficiospacienteInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type beneficiospacienteCreateWithoutCadastroInput = {
    beneficiosfixos?: beneficiosfixosCreateNestedOneWithoutBeneficiospacienteInput
  }

  export type beneficiospacienteUncheckedCreateWithoutCadastroInput = {
    id?: number
    codigo_beneficio?: string | null
  }

  export type beneficiospacienteCreateOrConnectWithoutCadastroInput = {
    where: beneficiospacienteWhereUniqueInput
    create: XOR<beneficiospacienteCreateWithoutCadastroInput, beneficiospacienteUncheckedCreateWithoutCadastroInput>
  }

  export type beneficiospacienteCreateManyCadastroInputEnvelope = {
    data: beneficiospacienteCreateManyCadastroInput | beneficiospacienteCreateManyCadastroInput[]
    skipDuplicates?: boolean
  }

  export type dependenciaspacienteCreateWithoutCadastroInput = {
    dependenciasfixas?: dependenciasfixasCreateNestedOneWithoutDependenciaspacienteInput
  }

  export type dependenciaspacienteUncheckedCreateWithoutCadastroInput = {
    id?: number
    codigo_dependencia?: string | null
  }

  export type dependenciaspacienteCreateOrConnectWithoutCadastroInput = {
    where: dependenciaspacienteWhereUniqueInput
    create: XOR<dependenciaspacienteCreateWithoutCadastroInput, dependenciaspacienteUncheckedCreateWithoutCadastroInput>
  }

  export type dependenciaspacienteCreateManyCadastroInputEnvelope = {
    data: dependenciaspacienteCreateManyCadastroInput | dependenciaspacienteCreateManyCadastroInput[]
    skipDuplicates?: boolean
  }

  export type historicoatividadesCreateWithoutCadastroInput = {
    data_atendimento: Date | string
    atividadesfixas?: atividadesfixasCreateNestedOneWithoutHistoricoatividadesInput
  }

  export type historicoatividadesUncheckedCreateWithoutCadastroInput = {
    id?: number
    codigo_atividade?: string | null
    data_atendimento: Date | string
  }

  export type historicoatividadesCreateOrConnectWithoutCadastroInput = {
    where: historicoatividadesWhereUniqueInput
    create: XOR<historicoatividadesCreateWithoutCadastroInput, historicoatividadesUncheckedCreateWithoutCadastroInput>
  }

  export type historicoatividadesCreateManyCadastroInputEnvelope = {
    data: historicoatividadesCreateManyCadastroInput | historicoatividadesCreateManyCadastroInput[]
    skipDuplicates?: boolean
  }

  export type beneficiospacienteUpsertWithWhereUniqueWithoutCadastroInput = {
    where: beneficiospacienteWhereUniqueInput
    update: XOR<beneficiospacienteUpdateWithoutCadastroInput, beneficiospacienteUncheckedUpdateWithoutCadastroInput>
    create: XOR<beneficiospacienteCreateWithoutCadastroInput, beneficiospacienteUncheckedCreateWithoutCadastroInput>
  }

  export type beneficiospacienteUpdateWithWhereUniqueWithoutCadastroInput = {
    where: beneficiospacienteWhereUniqueInput
    data: XOR<beneficiospacienteUpdateWithoutCadastroInput, beneficiospacienteUncheckedUpdateWithoutCadastroInput>
  }

  export type beneficiospacienteUpdateManyWithWhereWithoutCadastroInput = {
    where: beneficiospacienteScalarWhereInput
    data: XOR<beneficiospacienteUpdateManyMutationInput, beneficiospacienteUncheckedUpdateManyWithoutCadastroInput>
  }

  export type dependenciaspacienteUpsertWithWhereUniqueWithoutCadastroInput = {
    where: dependenciaspacienteWhereUniqueInput
    update: XOR<dependenciaspacienteUpdateWithoutCadastroInput, dependenciaspacienteUncheckedUpdateWithoutCadastroInput>
    create: XOR<dependenciaspacienteCreateWithoutCadastroInput, dependenciaspacienteUncheckedCreateWithoutCadastroInput>
  }

  export type dependenciaspacienteUpdateWithWhereUniqueWithoutCadastroInput = {
    where: dependenciaspacienteWhereUniqueInput
    data: XOR<dependenciaspacienteUpdateWithoutCadastroInput, dependenciaspacienteUncheckedUpdateWithoutCadastroInput>
  }

  export type dependenciaspacienteUpdateManyWithWhereWithoutCadastroInput = {
    where: dependenciaspacienteScalarWhereInput
    data: XOR<dependenciaspacienteUpdateManyMutationInput, dependenciaspacienteUncheckedUpdateManyWithoutCadastroInput>
  }

  export type dependenciaspacienteScalarWhereInput = {
    AND?: dependenciaspacienteScalarWhereInput | dependenciaspacienteScalarWhereInput[]
    OR?: dependenciaspacienteScalarWhereInput[]
    NOT?: dependenciaspacienteScalarWhereInput | dependenciaspacienteScalarWhereInput[]
    id?: IntFilter<"dependenciaspaciente"> | number
    cadastro_id?: IntFilter<"dependenciaspaciente"> | number
    codigo_dependencia?: StringNullableFilter<"dependenciaspaciente"> | string | null
  }

  export type historicoatividadesUpsertWithWhereUniqueWithoutCadastroInput = {
    where: historicoatividadesWhereUniqueInput
    update: XOR<historicoatividadesUpdateWithoutCadastroInput, historicoatividadesUncheckedUpdateWithoutCadastroInput>
    create: XOR<historicoatividadesCreateWithoutCadastroInput, historicoatividadesUncheckedCreateWithoutCadastroInput>
  }

  export type historicoatividadesUpdateWithWhereUniqueWithoutCadastroInput = {
    where: historicoatividadesWhereUniqueInput
    data: XOR<historicoatividadesUpdateWithoutCadastroInput, historicoatividadesUncheckedUpdateWithoutCadastroInput>
  }

  export type historicoatividadesUpdateManyWithWhereWithoutCadastroInput = {
    where: historicoatividadesScalarWhereInput
    data: XOR<historicoatividadesUpdateManyMutationInput, historicoatividadesUncheckedUpdateManyWithoutCadastroInput>
  }

  export type dependenciaspacienteCreateWithoutDependenciasfixasInput = {
    cadastro: cadastroCreateNestedOneWithoutDependenciaspacienteInput
  }

  export type dependenciaspacienteUncheckedCreateWithoutDependenciasfixasInput = {
    id?: number
    cadastro_id: number
  }

  export type dependenciaspacienteCreateOrConnectWithoutDependenciasfixasInput = {
    where: dependenciaspacienteWhereUniqueInput
    create: XOR<dependenciaspacienteCreateWithoutDependenciasfixasInput, dependenciaspacienteUncheckedCreateWithoutDependenciasfixasInput>
  }

  export type dependenciaspacienteCreateManyDependenciasfixasInputEnvelope = {
    data: dependenciaspacienteCreateManyDependenciasfixasInput | dependenciaspacienteCreateManyDependenciasfixasInput[]
    skipDuplicates?: boolean
  }

  export type dependenciaspacienteUpsertWithWhereUniqueWithoutDependenciasfixasInput = {
    where: dependenciaspacienteWhereUniqueInput
    update: XOR<dependenciaspacienteUpdateWithoutDependenciasfixasInput, dependenciaspacienteUncheckedUpdateWithoutDependenciasfixasInput>
    create: XOR<dependenciaspacienteCreateWithoutDependenciasfixasInput, dependenciaspacienteUncheckedCreateWithoutDependenciasfixasInput>
  }

  export type dependenciaspacienteUpdateWithWhereUniqueWithoutDependenciasfixasInput = {
    where: dependenciaspacienteWhereUniqueInput
    data: XOR<dependenciaspacienteUpdateWithoutDependenciasfixasInput, dependenciaspacienteUncheckedUpdateWithoutDependenciasfixasInput>
  }

  export type dependenciaspacienteUpdateManyWithWhereWithoutDependenciasfixasInput = {
    where: dependenciaspacienteScalarWhereInput
    data: XOR<dependenciaspacienteUpdateManyMutationInput, dependenciaspacienteUncheckedUpdateManyWithoutDependenciasfixasInput>
  }

  export type cadastroCreateWithoutDependenciaspacienteInput = {
    nome: string
    idade: number
    documento: string
    data_nascimento: Date | string
    sexo: $Enums.cadastro_sexo
    estado_civil: $Enums.cadastro_estado_civil
    profissao?: string | null
    morador_rua?: boolean | null
    status: $Enums.cadastro_status
    cor_olhos?: string | null
    cor_cabelo?: string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    etnia?: string | null
    codigo_usuario?: string | null
    tipo_documento: $Enums.cadastro_tipo_documento
    beneficiospaciente?: beneficiospacienteCreateNestedManyWithoutCadastroInput
    historicoatividades?: historicoatividadesCreateNestedManyWithoutCadastroInput
  }

  export type cadastroUncheckedCreateWithoutDependenciaspacienteInput = {
    id?: number
    nome: string
    idade: number
    documento: string
    data_nascimento: Date | string
    sexo: $Enums.cadastro_sexo
    estado_civil: $Enums.cadastro_estado_civil
    profissao?: string | null
    morador_rua?: boolean | null
    status: $Enums.cadastro_status
    cor_olhos?: string | null
    cor_cabelo?: string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    etnia?: string | null
    codigo_usuario?: string | null
    tipo_documento: $Enums.cadastro_tipo_documento
    beneficiospaciente?: beneficiospacienteUncheckedCreateNestedManyWithoutCadastroInput
    historicoatividades?: historicoatividadesUncheckedCreateNestedManyWithoutCadastroInput
  }

  export type cadastroCreateOrConnectWithoutDependenciaspacienteInput = {
    where: cadastroWhereUniqueInput
    create: XOR<cadastroCreateWithoutDependenciaspacienteInput, cadastroUncheckedCreateWithoutDependenciaspacienteInput>
  }

  export type dependenciasfixasCreateWithoutDependenciaspacienteInput = {
    codigo: string
    descricao: string
  }

  export type dependenciasfixasUncheckedCreateWithoutDependenciaspacienteInput = {
    codigo: string
    descricao: string
  }

  export type dependenciasfixasCreateOrConnectWithoutDependenciaspacienteInput = {
    where: dependenciasfixasWhereUniqueInput
    create: XOR<dependenciasfixasCreateWithoutDependenciaspacienteInput, dependenciasfixasUncheckedCreateWithoutDependenciaspacienteInput>
  }

  export type cadastroUpsertWithoutDependenciaspacienteInput = {
    update: XOR<cadastroUpdateWithoutDependenciaspacienteInput, cadastroUncheckedUpdateWithoutDependenciaspacienteInput>
    create: XOR<cadastroCreateWithoutDependenciaspacienteInput, cadastroUncheckedCreateWithoutDependenciaspacienteInput>
    where?: cadastroWhereInput
  }

  export type cadastroUpdateToOneWithWhereWithoutDependenciaspacienteInput = {
    where?: cadastroWhereInput
    data: XOR<cadastroUpdateWithoutDependenciaspacienteInput, cadastroUncheckedUpdateWithoutDependenciaspacienteInput>
  }

  export type cadastroUpdateWithoutDependenciaspacienteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: Enumcadastro_sexoFieldUpdateOperationsInput | $Enums.cadastro_sexo
    estado_civil?: Enumcadastro_estado_civilFieldUpdateOperationsInput | $Enums.cadastro_estado_civil
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    morador_rua?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: Enumcadastro_statusFieldUpdateOperationsInput | $Enums.cadastro_status
    cor_olhos?: NullableStringFieldUpdateOperationsInput | string | null
    cor_cabelo?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etnia?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_documento?: Enumcadastro_tipo_documentoFieldUpdateOperationsInput | $Enums.cadastro_tipo_documento
    beneficiospaciente?: beneficiospacienteUpdateManyWithoutCadastroNestedInput
    historicoatividades?: historicoatividadesUpdateManyWithoutCadastroNestedInput
  }

  export type cadastroUncheckedUpdateWithoutDependenciaspacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: Enumcadastro_sexoFieldUpdateOperationsInput | $Enums.cadastro_sexo
    estado_civil?: Enumcadastro_estado_civilFieldUpdateOperationsInput | $Enums.cadastro_estado_civil
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    morador_rua?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: Enumcadastro_statusFieldUpdateOperationsInput | $Enums.cadastro_status
    cor_olhos?: NullableStringFieldUpdateOperationsInput | string | null
    cor_cabelo?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etnia?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_documento?: Enumcadastro_tipo_documentoFieldUpdateOperationsInput | $Enums.cadastro_tipo_documento
    beneficiospaciente?: beneficiospacienteUncheckedUpdateManyWithoutCadastroNestedInput
    historicoatividades?: historicoatividadesUncheckedUpdateManyWithoutCadastroNestedInput
  }

  export type dependenciasfixasUpsertWithoutDependenciaspacienteInput = {
    update: XOR<dependenciasfixasUpdateWithoutDependenciaspacienteInput, dependenciasfixasUncheckedUpdateWithoutDependenciaspacienteInput>
    create: XOR<dependenciasfixasCreateWithoutDependenciaspacienteInput, dependenciasfixasUncheckedCreateWithoutDependenciaspacienteInput>
    where?: dependenciasfixasWhereInput
  }

  export type dependenciasfixasUpdateToOneWithWhereWithoutDependenciaspacienteInput = {
    where?: dependenciasfixasWhereInput
    data: XOR<dependenciasfixasUpdateWithoutDependenciaspacienteInput, dependenciasfixasUncheckedUpdateWithoutDependenciaspacienteInput>
  }

  export type dependenciasfixasUpdateWithoutDependenciaspacienteInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type dependenciasfixasUncheckedUpdateWithoutDependenciaspacienteInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type cadastroCreateWithoutHistoricoatividadesInput = {
    nome: string
    idade: number
    documento: string
    data_nascimento: Date | string
    sexo: $Enums.cadastro_sexo
    estado_civil: $Enums.cadastro_estado_civil
    profissao?: string | null
    morador_rua?: boolean | null
    status: $Enums.cadastro_status
    cor_olhos?: string | null
    cor_cabelo?: string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    etnia?: string | null
    codigo_usuario?: string | null
    tipo_documento: $Enums.cadastro_tipo_documento
    beneficiospaciente?: beneficiospacienteCreateNestedManyWithoutCadastroInput
    dependenciaspaciente?: dependenciaspacienteCreateNestedManyWithoutCadastroInput
  }

  export type cadastroUncheckedCreateWithoutHistoricoatividadesInput = {
    id?: number
    nome: string
    idade: number
    documento: string
    data_nascimento: Date | string
    sexo: $Enums.cadastro_sexo
    estado_civil: $Enums.cadastro_estado_civil
    profissao?: string | null
    morador_rua?: boolean | null
    status: $Enums.cadastro_status
    cor_olhos?: string | null
    cor_cabelo?: string | null
    altura?: Decimal | DecimalJsLike | number | string | null
    peso?: Decimal | DecimalJsLike | number | string | null
    etnia?: string | null
    codigo_usuario?: string | null
    tipo_documento: $Enums.cadastro_tipo_documento
    beneficiospaciente?: beneficiospacienteUncheckedCreateNestedManyWithoutCadastroInput
    dependenciaspaciente?: dependenciaspacienteUncheckedCreateNestedManyWithoutCadastroInput
  }

  export type cadastroCreateOrConnectWithoutHistoricoatividadesInput = {
    where: cadastroWhereUniqueInput
    create: XOR<cadastroCreateWithoutHistoricoatividadesInput, cadastroUncheckedCreateWithoutHistoricoatividadesInput>
  }

  export type atividadesfixasCreateWithoutHistoricoatividadesInput = {
    codigo: string
    descricao: string
  }

  export type atividadesfixasUncheckedCreateWithoutHistoricoatividadesInput = {
    codigo: string
    descricao: string
  }

  export type atividadesfixasCreateOrConnectWithoutHistoricoatividadesInput = {
    where: atividadesfixasWhereUniqueInput
    create: XOR<atividadesfixasCreateWithoutHistoricoatividadesInput, atividadesfixasUncheckedCreateWithoutHistoricoatividadesInput>
  }

  export type cadastroUpsertWithoutHistoricoatividadesInput = {
    update: XOR<cadastroUpdateWithoutHistoricoatividadesInput, cadastroUncheckedUpdateWithoutHistoricoatividadesInput>
    create: XOR<cadastroCreateWithoutHistoricoatividadesInput, cadastroUncheckedCreateWithoutHistoricoatividadesInput>
    where?: cadastroWhereInput
  }

  export type cadastroUpdateToOneWithWhereWithoutHistoricoatividadesInput = {
    where?: cadastroWhereInput
    data: XOR<cadastroUpdateWithoutHistoricoatividadesInput, cadastroUncheckedUpdateWithoutHistoricoatividadesInput>
  }

  export type cadastroUpdateWithoutHistoricoatividadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: Enumcadastro_sexoFieldUpdateOperationsInput | $Enums.cadastro_sexo
    estado_civil?: Enumcadastro_estado_civilFieldUpdateOperationsInput | $Enums.cadastro_estado_civil
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    morador_rua?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: Enumcadastro_statusFieldUpdateOperationsInput | $Enums.cadastro_status
    cor_olhos?: NullableStringFieldUpdateOperationsInput | string | null
    cor_cabelo?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etnia?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_documento?: Enumcadastro_tipo_documentoFieldUpdateOperationsInput | $Enums.cadastro_tipo_documento
    beneficiospaciente?: beneficiospacienteUpdateManyWithoutCadastroNestedInput
    dependenciaspaciente?: dependenciaspacienteUpdateManyWithoutCadastroNestedInput
  }

  export type cadastroUncheckedUpdateWithoutHistoricoatividadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    data_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: Enumcadastro_sexoFieldUpdateOperationsInput | $Enums.cadastro_sexo
    estado_civil?: Enumcadastro_estado_civilFieldUpdateOperationsInput | $Enums.cadastro_estado_civil
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    morador_rua?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: Enumcadastro_statusFieldUpdateOperationsInput | $Enums.cadastro_status
    cor_olhos?: NullableStringFieldUpdateOperationsInput | string | null
    cor_cabelo?: NullableStringFieldUpdateOperationsInput | string | null
    altura?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    peso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    etnia?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_documento?: Enumcadastro_tipo_documentoFieldUpdateOperationsInput | $Enums.cadastro_tipo_documento
    beneficiospaciente?: beneficiospacienteUncheckedUpdateManyWithoutCadastroNestedInput
    dependenciaspaciente?: dependenciaspacienteUncheckedUpdateManyWithoutCadastroNestedInput
  }

  export type atividadesfixasUpsertWithoutHistoricoatividadesInput = {
    update: XOR<atividadesfixasUpdateWithoutHistoricoatividadesInput, atividadesfixasUncheckedUpdateWithoutHistoricoatividadesInput>
    create: XOR<atividadesfixasCreateWithoutHistoricoatividadesInput, atividadesfixasUncheckedCreateWithoutHistoricoatividadesInput>
    where?: atividadesfixasWhereInput
  }

  export type atividadesfixasUpdateToOneWithWhereWithoutHistoricoatividadesInput = {
    where?: atividadesfixasWhereInput
    data: XOR<atividadesfixasUpdateWithoutHistoricoatividadesInput, atividadesfixasUncheckedUpdateWithoutHistoricoatividadesInput>
  }

  export type atividadesfixasUpdateWithoutHistoricoatividadesInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type atividadesfixasUncheckedUpdateWithoutHistoricoatividadesInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type historicoatividadesCreateManyAtividadesfixasInput = {
    id?: number
    cadastro_id: number
    data_atendimento: Date | string
  }

  export type historicoatividadesUpdateWithoutAtividadesfixasInput = {
    data_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    cadastro?: cadastroUpdateOneRequiredWithoutHistoricoatividadesNestedInput
  }

  export type historicoatividadesUncheckedUpdateWithoutAtividadesfixasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cadastro_id?: IntFieldUpdateOperationsInput | number
    data_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoatividadesUncheckedUpdateManyWithoutAtividadesfixasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cadastro_id?: IntFieldUpdateOperationsInput | number
    data_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type beneficiospacienteCreateManyBeneficiosfixosInput = {
    id?: number
    cadastro_id: number
  }

  export type beneficiospacienteUpdateWithoutBeneficiosfixosInput = {
    cadastro?: cadastroUpdateOneRequiredWithoutBeneficiospacienteNestedInput
  }

  export type beneficiospacienteUncheckedUpdateWithoutBeneficiosfixosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cadastro_id?: IntFieldUpdateOperationsInput | number
  }

  export type beneficiospacienteUncheckedUpdateManyWithoutBeneficiosfixosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cadastro_id?: IntFieldUpdateOperationsInput | number
  }

  export type beneficiospacienteCreateManyCadastroInput = {
    id?: number
    codigo_beneficio?: string | null
  }

  export type dependenciaspacienteCreateManyCadastroInput = {
    id?: number
    codigo_dependencia?: string | null
  }

  export type historicoatividadesCreateManyCadastroInput = {
    id?: number
    codigo_atividade?: string | null
    data_atendimento: Date | string
  }

  export type beneficiospacienteUpdateWithoutCadastroInput = {
    beneficiosfixos?: beneficiosfixosUpdateOneWithoutBeneficiospacienteNestedInput
  }

  export type beneficiospacienteUncheckedUpdateWithoutCadastroInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_beneficio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type beneficiospacienteUncheckedUpdateManyWithoutCadastroInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_beneficio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dependenciaspacienteUpdateWithoutCadastroInput = {
    dependenciasfixas?: dependenciasfixasUpdateOneWithoutDependenciaspacienteNestedInput
  }

  export type dependenciaspacienteUncheckedUpdateWithoutCadastroInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_dependencia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dependenciaspacienteUncheckedUpdateManyWithoutCadastroInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_dependencia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historicoatividadesUpdateWithoutCadastroInput = {
    data_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
    atividadesfixas?: atividadesfixasUpdateOneWithoutHistoricoatividadesNestedInput
  }

  export type historicoatividadesUncheckedUpdateWithoutCadastroInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_atividade?: NullableStringFieldUpdateOperationsInput | string | null
    data_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historicoatividadesUncheckedUpdateManyWithoutCadastroInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_atividade?: NullableStringFieldUpdateOperationsInput | string | null
    data_atendimento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dependenciaspacienteCreateManyDependenciasfixasInput = {
    id?: number
    cadastro_id: number
  }

  export type dependenciaspacienteUpdateWithoutDependenciasfixasInput = {
    cadastro?: cadastroUpdateOneRequiredWithoutDependenciaspacienteNestedInput
  }

  export type dependenciaspacienteUncheckedUpdateWithoutDependenciasfixasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cadastro_id?: IntFieldUpdateOperationsInput | number
  }

  export type dependenciaspacienteUncheckedUpdateManyWithoutDependenciasfixasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cadastro_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AtividadesfixasCountOutputTypeDefaultArgs instead
     */
    export type AtividadesfixasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AtividadesfixasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BeneficiosfixosCountOutputTypeDefaultArgs instead
     */
    export type BeneficiosfixosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BeneficiosfixosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CadastroCountOutputTypeDefaultArgs instead
     */
    export type CadastroCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CadastroCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DependenciasfixasCountOutputTypeDefaultArgs instead
     */
    export type DependenciasfixasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DependenciasfixasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use atividadesfixasDefaultArgs instead
     */
    export type atividadesfixasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = atividadesfixasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use beneficiosfixosDefaultArgs instead
     */
    export type beneficiosfixosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = beneficiosfixosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use beneficiospacienteDefaultArgs instead
     */
    export type beneficiospacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = beneficiospacienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cadastroDefaultArgs instead
     */
    export type cadastroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cadastroDefaultArgs<ExtArgs>
    /**
     * @deprecated Use dependenciasfixasDefaultArgs instead
     */
    export type dependenciasfixasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = dependenciasfixasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use dependenciaspacienteDefaultArgs instead
     */
    export type dependenciaspacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = dependenciaspacienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use historicoatividadesDefaultArgs instead
     */
    export type historicoatividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = historicoatividadesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usuarioDefaultArgs instead
     */
    export type usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usuarioDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}