
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PaymentTaken
 * 
 */
export type PaymentTaken = $Result.DefaultSelection<Prisma.$PaymentTakenPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model SetupChecklist
 * 
 */
export type SetupChecklist = $Result.DefaultSelection<Prisma.$SetupChecklistPayload>
/**
 * Model Instructor
 * 
 */
export type Instructor = $Result.DefaultSelection<Prisma.$InstructorPayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model PaymentCycle
 * 
 */
export type PaymentCycle = $Result.DefaultSelection<Prisma.$PaymentCyclePayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model SchoolSetUp
 * 
 */
export type SchoolSetUp = $Result.DefaultSelection<Prisma.$SchoolSetUpPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttendanceStatus: {
  NOT_TAKEN: 'NOT_TAKEN',
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
  HALF_DAY: 'HALF_DAY',
  LEAVE: 'LEAVE'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const JobType: {
  INSTRUCTOR: 'INSTRUCTOR',
  RECEPTION: 'RECEPTION'
};

export type JobType = (typeof JobType)[keyof typeof JobType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PARTIALLY_PAID: 'PARTIALLY_PAID',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const Enrollment_status: {
  ENQUIRY: 'ENQUIRY',
  CHOSEN: 'CHOSEN'
};

export type Enrollment_status = (typeof Enrollment_status)[keyof typeof Enrollment_status]

}

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type JobType = $Enums.JobType

export const JobType: typeof $Enums.JobType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type Enrollment_status = $Enums.Enrollment_status

export const Enrollment_status: typeof $Enums.Enrollment_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more PaymentTakens
 * const paymentTakens = await prisma.paymentTaken.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more PaymentTakens
   * const paymentTakens = await prisma.paymentTaken.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.paymentTaken`: Exposes CRUD operations for the **PaymentTaken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentTakens
    * const paymentTakens = await prisma.paymentTaken.findMany()
    * ```
    */
  get paymentTaken(): Prisma.PaymentTakenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setupChecklist`: Exposes CRUD operations for the **SetupChecklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SetupChecklists
    * const setupChecklists = await prisma.setupChecklist.findMany()
    * ```
    */
  get setupChecklist(): Prisma.SetupChecklistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructor`: Exposes CRUD operations for the **Instructor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructors
    * const instructors = await prisma.instructor.findMany()
    * ```
    */
  get instructor(): Prisma.InstructorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentCycle`: Exposes CRUD operations for the **PaymentCycle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentCycles
    * const paymentCycles = await prisma.paymentCycle.findMany()
    * ```
    */
  get paymentCycle(): Prisma.PaymentCycleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schoolSetUp`: Exposes CRUD operations for the **SchoolSetUp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolSetUps
    * const schoolSetUps = await prisma.schoolSetUp.findMany()
    * ```
    */
  get schoolSetUp(): Prisma.SchoolSetUpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    PaymentTaken: 'PaymentTaken',
    Attendance: 'Attendance',
    Car: 'Car',
    SetupChecklist: 'SetupChecklist',
    Instructor: 'Instructor',
    Package: 'Package',
    PaymentCycle: 'PaymentCycle',
    Schedule: 'Schedule',
    SchoolSetUp: 'SchoolSetUp',
    Student: 'Student'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "paymentTaken" | "attendance" | "car" | "setupChecklist" | "instructor" | "package" | "paymentCycle" | "schedule" | "schoolSetUp" | "student"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PaymentTaken: {
        payload: Prisma.$PaymentTakenPayload<ExtArgs>
        fields: Prisma.PaymentTakenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentTakenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTakenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentTakenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTakenPayload>
          }
          findFirst: {
            args: Prisma.PaymentTakenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTakenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentTakenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTakenPayload>
          }
          findMany: {
            args: Prisma.PaymentTakenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTakenPayload>[]
          }
          create: {
            args: Prisma.PaymentTakenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTakenPayload>
          }
          createMany: {
            args: Prisma.PaymentTakenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentTakenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTakenPayload>[]
          }
          delete: {
            args: Prisma.PaymentTakenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTakenPayload>
          }
          update: {
            args: Prisma.PaymentTakenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTakenPayload>
          }
          deleteMany: {
            args: Prisma.PaymentTakenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentTakenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentTakenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTakenPayload>[]
          }
          upsert: {
            args: Prisma.PaymentTakenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentTakenPayload>
          }
          aggregate: {
            args: Prisma.PaymentTakenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentTaken>
          }
          groupBy: {
            args: Prisma.PaymentTakenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentTakenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentTakenCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentTakenCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      SetupChecklist: {
        payload: Prisma.$SetupChecklistPayload<ExtArgs>
        fields: Prisma.SetupChecklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetupChecklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetupChecklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetupChecklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetupChecklistPayload>
          }
          findFirst: {
            args: Prisma.SetupChecklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetupChecklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetupChecklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetupChecklistPayload>
          }
          findMany: {
            args: Prisma.SetupChecklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetupChecklistPayload>[]
          }
          create: {
            args: Prisma.SetupChecklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetupChecklistPayload>
          }
          createMany: {
            args: Prisma.SetupChecklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SetupChecklistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetupChecklistPayload>[]
          }
          delete: {
            args: Prisma.SetupChecklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetupChecklistPayload>
          }
          update: {
            args: Prisma.SetupChecklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetupChecklistPayload>
          }
          deleteMany: {
            args: Prisma.SetupChecklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SetupChecklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SetupChecklistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetupChecklistPayload>[]
          }
          upsert: {
            args: Prisma.SetupChecklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SetupChecklistPayload>
          }
          aggregate: {
            args: Prisma.SetupChecklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetupChecklist>
          }
          groupBy: {
            args: Prisma.SetupChecklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetupChecklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetupChecklistCountArgs<ExtArgs>
            result: $Utils.Optional<SetupChecklistCountAggregateOutputType> | number
          }
        }
      }
      Instructor: {
        payload: Prisma.$InstructorPayload<ExtArgs>
        fields: Prisma.InstructorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findFirst: {
            args: Prisma.InstructorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findMany: {
            args: Prisma.InstructorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          create: {
            args: Prisma.InstructorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          createMany: {
            args: Prisma.InstructorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          delete: {
            args: Prisma.InstructorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          update: {
            args: Prisma.InstructorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          deleteMany: {
            args: Prisma.InstructorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          upsert: {
            args: Prisma.InstructorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          aggregate: {
            args: Prisma.InstructorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructor>
          }
          groupBy: {
            args: Prisma.InstructorGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorCountAggregateOutputType> | number
          }
        }
      }
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      PaymentCycle: {
        payload: Prisma.$PaymentCyclePayload<ExtArgs>
        fields: Prisma.PaymentCycleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentCycleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentCyclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentCycleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentCyclePayload>
          }
          findFirst: {
            args: Prisma.PaymentCycleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentCyclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentCycleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentCyclePayload>
          }
          findMany: {
            args: Prisma.PaymentCycleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentCyclePayload>[]
          }
          create: {
            args: Prisma.PaymentCycleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentCyclePayload>
          }
          createMany: {
            args: Prisma.PaymentCycleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCycleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentCyclePayload>[]
          }
          delete: {
            args: Prisma.PaymentCycleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentCyclePayload>
          }
          update: {
            args: Prisma.PaymentCycleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentCyclePayload>
          }
          deleteMany: {
            args: Prisma.PaymentCycleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentCycleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentCycleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentCyclePayload>[]
          }
          upsert: {
            args: Prisma.PaymentCycleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentCyclePayload>
          }
          aggregate: {
            args: Prisma.PaymentCycleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentCycle>
          }
          groupBy: {
            args: Prisma.PaymentCycleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentCycleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCycleCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCycleCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      SchoolSetUp: {
        payload: Prisma.$SchoolSetUpPayload<ExtArgs>
        fields: Prisma.SchoolSetUpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolSetUpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSetUpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolSetUpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSetUpPayload>
          }
          findFirst: {
            args: Prisma.SchoolSetUpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSetUpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolSetUpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSetUpPayload>
          }
          findMany: {
            args: Prisma.SchoolSetUpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSetUpPayload>[]
          }
          create: {
            args: Prisma.SchoolSetUpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSetUpPayload>
          }
          createMany: {
            args: Prisma.SchoolSetUpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolSetUpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSetUpPayload>[]
          }
          delete: {
            args: Prisma.SchoolSetUpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSetUpPayload>
          }
          update: {
            args: Prisma.SchoolSetUpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSetUpPayload>
          }
          deleteMany: {
            args: Prisma.SchoolSetUpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolSetUpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolSetUpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSetUpPayload>[]
          }
          upsert: {
            args: Prisma.SchoolSetUpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolSetUpPayload>
          }
          aggregate: {
            args: Prisma.SchoolSetUpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolSetUp>
          }
          groupBy: {
            args: Prisma.SchoolSetUpGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolSetUpGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolSetUpCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolSetUpCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    paymentTaken?: PaymentTakenOmit
    attendance?: AttendanceOmit
    car?: CarOmit
    setupChecklist?: SetupChecklistOmit
    instructor?: InstructorOmit
    package?: PackageOmit
    paymentCycle?: PaymentCycleOmit
    schedule?: ScheduleOmit
    schoolSetUp?: SchoolSetUpOmit
    student?: StudentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type InstructorCountOutputType
   */

  export type InstructorCountOutputType = {
    paymentCycles: number
  }

  export type InstructorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentCycles?: boolean | InstructorCountOutputTypeCountPaymentCyclesArgs
  }

  // Custom InputTypes
  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorCountOutputType
     */
    select?: InstructorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeCountPaymentCyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentCycleWhereInput
  }


  /**
   * Count Type PaymentCycleCountOutputType
   */

  export type PaymentCycleCountOutputType = {
    paymentsTaken: number
  }

  export type PaymentCycleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentsTaken?: boolean | PaymentCycleCountOutputTypeCountPaymentsTakenArgs
  }

  // Custom InputTypes
  /**
   * PaymentCycleCountOutputType without action
   */
  export type PaymentCycleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycleCountOutputType
     */
    select?: PaymentCycleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCycleCountOutputType without action
   */
  export type PaymentCycleCountOutputTypeCountPaymentsTakenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTakenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PaymentTaken
   */

  export type AggregatePaymentTaken = {
    _count: PaymentTakenCountAggregateOutputType | null
    _avg: PaymentTakenAvgAggregateOutputType | null
    _sum: PaymentTakenSumAggregateOutputType | null
    _min: PaymentTakenMinAggregateOutputType | null
    _max: PaymentTakenMaxAggregateOutputType | null
  }

  export type PaymentTakenAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentTakenSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentTakenMinAggregateOutputType = {
    id: string | null
    paymentCycleId: string | null
    amount: number | null
    takenAt: Date | null
    note: string | null
  }

  export type PaymentTakenMaxAggregateOutputType = {
    id: string | null
    paymentCycleId: string | null
    amount: number | null
    takenAt: Date | null
    note: string | null
  }

  export type PaymentTakenCountAggregateOutputType = {
    id: number
    paymentCycleId: number
    amount: number
    takenAt: number
    note: number
    _all: number
  }


  export type PaymentTakenAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentTakenSumAggregateInputType = {
    amount?: true
  }

  export type PaymentTakenMinAggregateInputType = {
    id?: true
    paymentCycleId?: true
    amount?: true
    takenAt?: true
    note?: true
  }

  export type PaymentTakenMaxAggregateInputType = {
    id?: true
    paymentCycleId?: true
    amount?: true
    takenAt?: true
    note?: true
  }

  export type PaymentTakenCountAggregateInputType = {
    id?: true
    paymentCycleId?: true
    amount?: true
    takenAt?: true
    note?: true
    _all?: true
  }

  export type PaymentTakenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTaken to aggregate.
     */
    where?: PaymentTakenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTakens to fetch.
     */
    orderBy?: PaymentTakenOrderByWithRelationInput | PaymentTakenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentTakenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTakens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTakens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentTakens
    **/
    _count?: true | PaymentTakenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentTakenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentTakenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentTakenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentTakenMaxAggregateInputType
  }

  export type GetPaymentTakenAggregateType<T extends PaymentTakenAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentTaken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentTaken[P]>
      : GetScalarType<T[P], AggregatePaymentTaken[P]>
  }




  export type PaymentTakenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentTakenWhereInput
    orderBy?: PaymentTakenOrderByWithAggregationInput | PaymentTakenOrderByWithAggregationInput[]
    by: PaymentTakenScalarFieldEnum[] | PaymentTakenScalarFieldEnum
    having?: PaymentTakenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentTakenCountAggregateInputType | true
    _avg?: PaymentTakenAvgAggregateInputType
    _sum?: PaymentTakenSumAggregateInputType
    _min?: PaymentTakenMinAggregateInputType
    _max?: PaymentTakenMaxAggregateInputType
  }

  export type PaymentTakenGroupByOutputType = {
    id: string
    paymentCycleId: string
    amount: number
    takenAt: Date
    note: string
    _count: PaymentTakenCountAggregateOutputType | null
    _avg: PaymentTakenAvgAggregateOutputType | null
    _sum: PaymentTakenSumAggregateOutputType | null
    _min: PaymentTakenMinAggregateOutputType | null
    _max: PaymentTakenMaxAggregateOutputType | null
  }

  type GetPaymentTakenGroupByPayload<T extends PaymentTakenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentTakenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentTakenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentTakenGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentTakenGroupByOutputType[P]>
        }
      >
    >


  export type PaymentTakenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentCycleId?: boolean
    amount?: boolean
    takenAt?: boolean
    note?: boolean
    paymentCycle?: boolean | PaymentCycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTaken"]>

  export type PaymentTakenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentCycleId?: boolean
    amount?: boolean
    takenAt?: boolean
    note?: boolean
    paymentCycle?: boolean | PaymentCycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTaken"]>

  export type PaymentTakenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentCycleId?: boolean
    amount?: boolean
    takenAt?: boolean
    note?: boolean
    paymentCycle?: boolean | PaymentCycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentTaken"]>

  export type PaymentTakenSelectScalar = {
    id?: boolean
    paymentCycleId?: boolean
    amount?: boolean
    takenAt?: boolean
    note?: boolean
  }

  export type PaymentTakenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentCycleId" | "amount" | "takenAt" | "note", ExtArgs["result"]["paymentTaken"]>
  export type PaymentTakenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentCycle?: boolean | PaymentCycleDefaultArgs<ExtArgs>
  }
  export type PaymentTakenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentCycle?: boolean | PaymentCycleDefaultArgs<ExtArgs>
  }
  export type PaymentTakenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentCycle?: boolean | PaymentCycleDefaultArgs<ExtArgs>
  }

  export type $PaymentTakenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentTaken"
    objects: {
      paymentCycle: Prisma.$PaymentCyclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentCycleId: string
      amount: number
      takenAt: Date
      note: string
    }, ExtArgs["result"]["paymentTaken"]>
    composites: {}
  }

  type PaymentTakenGetPayload<S extends boolean | null | undefined | PaymentTakenDefaultArgs> = $Result.GetResult<Prisma.$PaymentTakenPayload, S>

  type PaymentTakenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentTakenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentTakenCountAggregateInputType | true
    }

  export interface PaymentTakenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentTaken'], meta: { name: 'PaymentTaken' } }
    /**
     * Find zero or one PaymentTaken that matches the filter.
     * @param {PaymentTakenFindUniqueArgs} args - Arguments to find a PaymentTaken
     * @example
     * // Get one PaymentTaken
     * const paymentTaken = await prisma.paymentTaken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentTakenFindUniqueArgs>(args: SelectSubset<T, PaymentTakenFindUniqueArgs<ExtArgs>>): Prisma__PaymentTakenClient<$Result.GetResult<Prisma.$PaymentTakenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentTaken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentTakenFindUniqueOrThrowArgs} args - Arguments to find a PaymentTaken
     * @example
     * // Get one PaymentTaken
     * const paymentTaken = await prisma.paymentTaken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentTakenFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentTakenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentTakenClient<$Result.GetResult<Prisma.$PaymentTakenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTaken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTakenFindFirstArgs} args - Arguments to find a PaymentTaken
     * @example
     * // Get one PaymentTaken
     * const paymentTaken = await prisma.paymentTaken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentTakenFindFirstArgs>(args?: SelectSubset<T, PaymentTakenFindFirstArgs<ExtArgs>>): Prisma__PaymentTakenClient<$Result.GetResult<Prisma.$PaymentTakenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentTaken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTakenFindFirstOrThrowArgs} args - Arguments to find a PaymentTaken
     * @example
     * // Get one PaymentTaken
     * const paymentTaken = await prisma.paymentTaken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentTakenFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentTakenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentTakenClient<$Result.GetResult<Prisma.$PaymentTakenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentTakens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTakenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentTakens
     * const paymentTakens = await prisma.paymentTaken.findMany()
     * 
     * // Get first 10 PaymentTakens
     * const paymentTakens = await prisma.paymentTaken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentTakenWithIdOnly = await prisma.paymentTaken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentTakenFindManyArgs>(args?: SelectSubset<T, PaymentTakenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTakenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentTaken.
     * @param {PaymentTakenCreateArgs} args - Arguments to create a PaymentTaken.
     * @example
     * // Create one PaymentTaken
     * const PaymentTaken = await prisma.paymentTaken.create({
     *   data: {
     *     // ... data to create a PaymentTaken
     *   }
     * })
     * 
     */
    create<T extends PaymentTakenCreateArgs>(args: SelectSubset<T, PaymentTakenCreateArgs<ExtArgs>>): Prisma__PaymentTakenClient<$Result.GetResult<Prisma.$PaymentTakenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentTakens.
     * @param {PaymentTakenCreateManyArgs} args - Arguments to create many PaymentTakens.
     * @example
     * // Create many PaymentTakens
     * const paymentTaken = await prisma.paymentTaken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentTakenCreateManyArgs>(args?: SelectSubset<T, PaymentTakenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentTakens and returns the data saved in the database.
     * @param {PaymentTakenCreateManyAndReturnArgs} args - Arguments to create many PaymentTakens.
     * @example
     * // Create many PaymentTakens
     * const paymentTaken = await prisma.paymentTaken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentTakens and only return the `id`
     * const paymentTakenWithIdOnly = await prisma.paymentTaken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentTakenCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentTakenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTakenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentTaken.
     * @param {PaymentTakenDeleteArgs} args - Arguments to delete one PaymentTaken.
     * @example
     * // Delete one PaymentTaken
     * const PaymentTaken = await prisma.paymentTaken.delete({
     *   where: {
     *     // ... filter to delete one PaymentTaken
     *   }
     * })
     * 
     */
    delete<T extends PaymentTakenDeleteArgs>(args: SelectSubset<T, PaymentTakenDeleteArgs<ExtArgs>>): Prisma__PaymentTakenClient<$Result.GetResult<Prisma.$PaymentTakenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentTaken.
     * @param {PaymentTakenUpdateArgs} args - Arguments to update one PaymentTaken.
     * @example
     * // Update one PaymentTaken
     * const paymentTaken = await prisma.paymentTaken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentTakenUpdateArgs>(args: SelectSubset<T, PaymentTakenUpdateArgs<ExtArgs>>): Prisma__PaymentTakenClient<$Result.GetResult<Prisma.$PaymentTakenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentTakens.
     * @param {PaymentTakenDeleteManyArgs} args - Arguments to filter PaymentTakens to delete.
     * @example
     * // Delete a few PaymentTakens
     * const { count } = await prisma.paymentTaken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentTakenDeleteManyArgs>(args?: SelectSubset<T, PaymentTakenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTakens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTakenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentTakens
     * const paymentTaken = await prisma.paymentTaken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentTakenUpdateManyArgs>(args: SelectSubset<T, PaymentTakenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentTakens and returns the data updated in the database.
     * @param {PaymentTakenUpdateManyAndReturnArgs} args - Arguments to update many PaymentTakens.
     * @example
     * // Update many PaymentTakens
     * const paymentTaken = await prisma.paymentTaken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentTakens and only return the `id`
     * const paymentTakenWithIdOnly = await prisma.paymentTaken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentTakenUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentTakenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTakenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentTaken.
     * @param {PaymentTakenUpsertArgs} args - Arguments to update or create a PaymentTaken.
     * @example
     * // Update or create a PaymentTaken
     * const paymentTaken = await prisma.paymentTaken.upsert({
     *   create: {
     *     // ... data to create a PaymentTaken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentTaken we want to update
     *   }
     * })
     */
    upsert<T extends PaymentTakenUpsertArgs>(args: SelectSubset<T, PaymentTakenUpsertArgs<ExtArgs>>): Prisma__PaymentTakenClient<$Result.GetResult<Prisma.$PaymentTakenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentTakens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTakenCountArgs} args - Arguments to filter PaymentTakens to count.
     * @example
     * // Count the number of PaymentTakens
     * const count = await prisma.paymentTaken.count({
     *   where: {
     *     // ... the filter for the PaymentTakens we want to count
     *   }
     * })
    **/
    count<T extends PaymentTakenCountArgs>(
      args?: Subset<T, PaymentTakenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentTakenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentTaken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTakenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentTakenAggregateArgs>(args: Subset<T, PaymentTakenAggregateArgs>): Prisma.PrismaPromise<GetPaymentTakenAggregateType<T>>

    /**
     * Group by PaymentTaken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentTakenGroupByArgs} args - Group by arguments.
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
      T extends PaymentTakenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentTakenGroupByArgs['orderBy'] }
        : { orderBy?: PaymentTakenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentTakenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentTakenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentTaken model
   */
  readonly fields: PaymentTakenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentTaken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentTakenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentCycle<T extends PaymentCycleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentCycleDefaultArgs<ExtArgs>>): Prisma__PaymentCycleClient<$Result.GetResult<Prisma.$PaymentCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentTaken model
   */
  interface PaymentTakenFieldRefs {
    readonly id: FieldRef<"PaymentTaken", 'String'>
    readonly paymentCycleId: FieldRef<"PaymentTaken", 'String'>
    readonly amount: FieldRef<"PaymentTaken", 'Int'>
    readonly takenAt: FieldRef<"PaymentTaken", 'DateTime'>
    readonly note: FieldRef<"PaymentTaken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentTaken findUnique
   */
  export type PaymentTakenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTaken
     */
    select?: PaymentTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTaken
     */
    omit?: PaymentTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTakenInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTaken to fetch.
     */
    where: PaymentTakenWhereUniqueInput
  }

  /**
   * PaymentTaken findUniqueOrThrow
   */
  export type PaymentTakenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTaken
     */
    select?: PaymentTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTaken
     */
    omit?: PaymentTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTakenInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTaken to fetch.
     */
    where: PaymentTakenWhereUniqueInput
  }

  /**
   * PaymentTaken findFirst
   */
  export type PaymentTakenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTaken
     */
    select?: PaymentTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTaken
     */
    omit?: PaymentTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTakenInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTaken to fetch.
     */
    where?: PaymentTakenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTakens to fetch.
     */
    orderBy?: PaymentTakenOrderByWithRelationInput | PaymentTakenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTakens.
     */
    cursor?: PaymentTakenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTakens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTakens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTakens.
     */
    distinct?: PaymentTakenScalarFieldEnum | PaymentTakenScalarFieldEnum[]
  }

  /**
   * PaymentTaken findFirstOrThrow
   */
  export type PaymentTakenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTaken
     */
    select?: PaymentTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTaken
     */
    omit?: PaymentTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTakenInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTaken to fetch.
     */
    where?: PaymentTakenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTakens to fetch.
     */
    orderBy?: PaymentTakenOrderByWithRelationInput | PaymentTakenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentTakens.
     */
    cursor?: PaymentTakenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTakens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTakens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTakens.
     */
    distinct?: PaymentTakenScalarFieldEnum | PaymentTakenScalarFieldEnum[]
  }

  /**
   * PaymentTaken findMany
   */
  export type PaymentTakenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTaken
     */
    select?: PaymentTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTaken
     */
    omit?: PaymentTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTakenInclude<ExtArgs> | null
    /**
     * Filter, which PaymentTakens to fetch.
     */
    where?: PaymentTakenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentTakens to fetch.
     */
    orderBy?: PaymentTakenOrderByWithRelationInput | PaymentTakenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentTakens.
     */
    cursor?: PaymentTakenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentTakens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentTakens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentTakens.
     */
    distinct?: PaymentTakenScalarFieldEnum | PaymentTakenScalarFieldEnum[]
  }

  /**
   * PaymentTaken create
   */
  export type PaymentTakenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTaken
     */
    select?: PaymentTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTaken
     */
    omit?: PaymentTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTakenInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentTaken.
     */
    data: XOR<PaymentTakenCreateInput, PaymentTakenUncheckedCreateInput>
  }

  /**
   * PaymentTaken createMany
   */
  export type PaymentTakenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentTakens.
     */
    data: PaymentTakenCreateManyInput | PaymentTakenCreateManyInput[]
  }

  /**
   * PaymentTaken createManyAndReturn
   */
  export type PaymentTakenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTaken
     */
    select?: PaymentTakenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTaken
     */
    omit?: PaymentTakenOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentTakens.
     */
    data: PaymentTakenCreateManyInput | PaymentTakenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTakenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentTaken update
   */
  export type PaymentTakenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTaken
     */
    select?: PaymentTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTaken
     */
    omit?: PaymentTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTakenInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentTaken.
     */
    data: XOR<PaymentTakenUpdateInput, PaymentTakenUncheckedUpdateInput>
    /**
     * Choose, which PaymentTaken to update.
     */
    where: PaymentTakenWhereUniqueInput
  }

  /**
   * PaymentTaken updateMany
   */
  export type PaymentTakenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentTakens.
     */
    data: XOR<PaymentTakenUpdateManyMutationInput, PaymentTakenUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTakens to update
     */
    where?: PaymentTakenWhereInput
    /**
     * Limit how many PaymentTakens to update.
     */
    limit?: number
  }

  /**
   * PaymentTaken updateManyAndReturn
   */
  export type PaymentTakenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTaken
     */
    select?: PaymentTakenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTaken
     */
    omit?: PaymentTakenOmit<ExtArgs> | null
    /**
     * The data used to update PaymentTakens.
     */
    data: XOR<PaymentTakenUpdateManyMutationInput, PaymentTakenUncheckedUpdateManyInput>
    /**
     * Filter which PaymentTakens to update
     */
    where?: PaymentTakenWhereInput
    /**
     * Limit how many PaymentTakens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTakenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentTaken upsert
   */
  export type PaymentTakenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTaken
     */
    select?: PaymentTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTaken
     */
    omit?: PaymentTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTakenInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentTaken to update in case it exists.
     */
    where: PaymentTakenWhereUniqueInput
    /**
     * In case the PaymentTaken found by the `where` argument doesn't exist, create a new PaymentTaken with this data.
     */
    create: XOR<PaymentTakenCreateInput, PaymentTakenUncheckedCreateInput>
    /**
     * In case the PaymentTaken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentTakenUpdateInput, PaymentTakenUncheckedUpdateInput>
  }

  /**
   * PaymentTaken delete
   */
  export type PaymentTakenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTaken
     */
    select?: PaymentTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTaken
     */
    omit?: PaymentTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTakenInclude<ExtArgs> | null
    /**
     * Filter which PaymentTaken to delete.
     */
    where: PaymentTakenWhereUniqueInput
  }

  /**
   * PaymentTaken deleteMany
   */
  export type PaymentTakenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentTakens to delete
     */
    where?: PaymentTakenWhereInput
    /**
     * Limit how many PaymentTakens to delete.
     */
    limit?: number
  }

  /**
   * PaymentTaken without action
   */
  export type PaymentTakenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTaken
     */
    select?: PaymentTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTaken
     */
    omit?: PaymentTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTakenInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    instructorId: string | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    instructorId: string | null
    date: Date | null
    status: $Enums.AttendanceStatus | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    instructorId: number
    date: number
    status: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    instructorId?: true
    date?: true
    status?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    instructorId?: true
    date?: true
    status?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    instructorId?: true
    date?: true
    status?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    instructorId: string
    date: Date
    status: $Enums.AttendanceStatus
    note: string
    createdAt: Date
    updatedAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    date?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    date?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    date?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    instructorId?: boolean
    date?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instructorId" | "date" | "status" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["attendance"]>

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      instructorId: string
      date: Date
      status: $Enums.AttendanceStatus
      note: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly instructorId: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'AttendanceStatus'>
    readonly note: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
  }


  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarMinAggregateOutputType = {
    id: string | null
    name: string | null
    transmission: string | null
    assigned_instructor: string | null
    car_year: string | null
    car_Number: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarMaxAggregateOutputType = {
    id: string | null
    name: string | null
    transmission: string | null
    assigned_instructor: string | null
    car_year: string | null
    car_Number: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    name: number
    transmission: number
    assigned_instructor: number
    car_year: number
    car_Number: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarMinAggregateInputType = {
    id?: true
    name?: true
    transmission?: true
    assigned_instructor?: true
    car_year?: true
    car_Number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    name?: true
    transmission?: true
    assigned_instructor?: true
    car_year?: true
    car_Number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    name?: true
    transmission?: true
    assigned_instructor?: true
    car_year?: true
    car_Number?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: string
    name: string
    transmission: string
    assigned_instructor: string
    car_year: string
    car_Number: string
    createdAt: Date
    updatedAt: Date
    _count: CarCountAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    transmission?: boolean
    assigned_instructor?: boolean
    car_year?: boolean
    car_Number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    transmission?: boolean
    assigned_instructor?: boolean
    car_year?: boolean
    car_Number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    transmission?: boolean
    assigned_instructor?: boolean
    car_year?: boolean
    car_Number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    name?: boolean
    transmission?: boolean
    assigned_instructor?: boolean
    car_year?: boolean
    car_Number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "transmission" | "assigned_instructor" | "car_year" | "car_Number" | "createdAt" | "updatedAt", ExtArgs["result"]["car"]>

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      transmission: string
      assigned_instructor: string
      car_year: string
      car_Number: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
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
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'String'>
    readonly name: FieldRef<"Car", 'String'>
    readonly transmission: FieldRef<"Car", 'String'>
    readonly assigned_instructor: FieldRef<"Car", 'String'>
    readonly car_year: FieldRef<"Car", 'String'>
    readonly car_Number: FieldRef<"Car", 'String'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
    readonly updatedAt: FieldRef<"Car", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
  }


  /**
   * Model SetupChecklist
   */

  export type AggregateSetupChecklist = {
    _count: SetupChecklistCountAggregateOutputType | null
    _min: SetupChecklistMinAggregateOutputType | null
    _max: SetupChecklistMaxAggregateOutputType | null
  }

  export type SetupChecklistMinAggregateOutputType = {
    id: string | null
    schoolSetup: boolean | null
    instructorSetup: boolean | null
    carSetup: boolean | null
    packageSetup: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SetupChecklistMaxAggregateOutputType = {
    id: string | null
    schoolSetup: boolean | null
    instructorSetup: boolean | null
    carSetup: boolean | null
    packageSetup: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SetupChecklistCountAggregateOutputType = {
    id: number
    schoolSetup: number
    instructorSetup: number
    carSetup: number
    packageSetup: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SetupChecklistMinAggregateInputType = {
    id?: true
    schoolSetup?: true
    instructorSetup?: true
    carSetup?: true
    packageSetup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SetupChecklistMaxAggregateInputType = {
    id?: true
    schoolSetup?: true
    instructorSetup?: true
    carSetup?: true
    packageSetup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SetupChecklistCountAggregateInputType = {
    id?: true
    schoolSetup?: true
    instructorSetup?: true
    carSetup?: true
    packageSetup?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SetupChecklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SetupChecklist to aggregate.
     */
    where?: SetupChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetupChecklists to fetch.
     */
    orderBy?: SetupChecklistOrderByWithRelationInput | SetupChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetupChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetupChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetupChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SetupChecklists
    **/
    _count?: true | SetupChecklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetupChecklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetupChecklistMaxAggregateInputType
  }

  export type GetSetupChecklistAggregateType<T extends SetupChecklistAggregateArgs> = {
        [P in keyof T & keyof AggregateSetupChecklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetupChecklist[P]>
      : GetScalarType<T[P], AggregateSetupChecklist[P]>
  }




  export type SetupChecklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SetupChecklistWhereInput
    orderBy?: SetupChecklistOrderByWithAggregationInput | SetupChecklistOrderByWithAggregationInput[]
    by: SetupChecklistScalarFieldEnum[] | SetupChecklistScalarFieldEnum
    having?: SetupChecklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetupChecklistCountAggregateInputType | true
    _min?: SetupChecklistMinAggregateInputType
    _max?: SetupChecklistMaxAggregateInputType
  }

  export type SetupChecklistGroupByOutputType = {
    id: string
    schoolSetup: boolean
    instructorSetup: boolean
    carSetup: boolean
    packageSetup: boolean
    createdAt: Date
    updatedAt: Date
    _count: SetupChecklistCountAggregateOutputType | null
    _min: SetupChecklistMinAggregateOutputType | null
    _max: SetupChecklistMaxAggregateOutputType | null
  }

  type GetSetupChecklistGroupByPayload<T extends SetupChecklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetupChecklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetupChecklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetupChecklistGroupByOutputType[P]>
            : GetScalarType<T[P], SetupChecklistGroupByOutputType[P]>
        }
      >
    >


  export type SetupChecklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolSetup?: boolean
    instructorSetup?: boolean
    carSetup?: boolean
    packageSetup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setupChecklist"]>

  export type SetupChecklistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolSetup?: boolean
    instructorSetup?: boolean
    carSetup?: boolean
    packageSetup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setupChecklist"]>

  export type SetupChecklistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolSetup?: boolean
    instructorSetup?: boolean
    carSetup?: boolean
    packageSetup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setupChecklist"]>

  export type SetupChecklistSelectScalar = {
    id?: boolean
    schoolSetup?: boolean
    instructorSetup?: boolean
    carSetup?: boolean
    packageSetup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SetupChecklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolSetup" | "instructorSetup" | "carSetup" | "packageSetup" | "createdAt" | "updatedAt", ExtArgs["result"]["setupChecklist"]>

  export type $SetupChecklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SetupChecklist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolSetup: boolean
      instructorSetup: boolean
      carSetup: boolean
      packageSetup: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["setupChecklist"]>
    composites: {}
  }

  type SetupChecklistGetPayload<S extends boolean | null | undefined | SetupChecklistDefaultArgs> = $Result.GetResult<Prisma.$SetupChecklistPayload, S>

  type SetupChecklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SetupChecklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetupChecklistCountAggregateInputType | true
    }

  export interface SetupChecklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SetupChecklist'], meta: { name: 'SetupChecklist' } }
    /**
     * Find zero or one SetupChecklist that matches the filter.
     * @param {SetupChecklistFindUniqueArgs} args - Arguments to find a SetupChecklist
     * @example
     * // Get one SetupChecklist
     * const setupChecklist = await prisma.setupChecklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SetupChecklistFindUniqueArgs>(args: SelectSubset<T, SetupChecklistFindUniqueArgs<ExtArgs>>): Prisma__SetupChecklistClient<$Result.GetResult<Prisma.$SetupChecklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SetupChecklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SetupChecklistFindUniqueOrThrowArgs} args - Arguments to find a SetupChecklist
     * @example
     * // Get one SetupChecklist
     * const setupChecklist = await prisma.setupChecklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SetupChecklistFindUniqueOrThrowArgs>(args: SelectSubset<T, SetupChecklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SetupChecklistClient<$Result.GetResult<Prisma.$SetupChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SetupChecklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetupChecklistFindFirstArgs} args - Arguments to find a SetupChecklist
     * @example
     * // Get one SetupChecklist
     * const setupChecklist = await prisma.setupChecklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SetupChecklistFindFirstArgs>(args?: SelectSubset<T, SetupChecklistFindFirstArgs<ExtArgs>>): Prisma__SetupChecklistClient<$Result.GetResult<Prisma.$SetupChecklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SetupChecklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetupChecklistFindFirstOrThrowArgs} args - Arguments to find a SetupChecklist
     * @example
     * // Get one SetupChecklist
     * const setupChecklist = await prisma.setupChecklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SetupChecklistFindFirstOrThrowArgs>(args?: SelectSubset<T, SetupChecklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__SetupChecklistClient<$Result.GetResult<Prisma.$SetupChecklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SetupChecklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetupChecklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SetupChecklists
     * const setupChecklists = await prisma.setupChecklist.findMany()
     * 
     * // Get first 10 SetupChecklists
     * const setupChecklists = await prisma.setupChecklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setupChecklistWithIdOnly = await prisma.setupChecklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SetupChecklistFindManyArgs>(args?: SelectSubset<T, SetupChecklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetupChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SetupChecklist.
     * @param {SetupChecklistCreateArgs} args - Arguments to create a SetupChecklist.
     * @example
     * // Create one SetupChecklist
     * const SetupChecklist = await prisma.setupChecklist.create({
     *   data: {
     *     // ... data to create a SetupChecklist
     *   }
     * })
     * 
     */
    create<T extends SetupChecklistCreateArgs>(args: SelectSubset<T, SetupChecklistCreateArgs<ExtArgs>>): Prisma__SetupChecklistClient<$Result.GetResult<Prisma.$SetupChecklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SetupChecklists.
     * @param {SetupChecklistCreateManyArgs} args - Arguments to create many SetupChecklists.
     * @example
     * // Create many SetupChecklists
     * const setupChecklist = await prisma.setupChecklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SetupChecklistCreateManyArgs>(args?: SelectSubset<T, SetupChecklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SetupChecklists and returns the data saved in the database.
     * @param {SetupChecklistCreateManyAndReturnArgs} args - Arguments to create many SetupChecklists.
     * @example
     * // Create many SetupChecklists
     * const setupChecklist = await prisma.setupChecklist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SetupChecklists and only return the `id`
     * const setupChecklistWithIdOnly = await prisma.setupChecklist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SetupChecklistCreateManyAndReturnArgs>(args?: SelectSubset<T, SetupChecklistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetupChecklistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SetupChecklist.
     * @param {SetupChecklistDeleteArgs} args - Arguments to delete one SetupChecklist.
     * @example
     * // Delete one SetupChecklist
     * const SetupChecklist = await prisma.setupChecklist.delete({
     *   where: {
     *     // ... filter to delete one SetupChecklist
     *   }
     * })
     * 
     */
    delete<T extends SetupChecklistDeleteArgs>(args: SelectSubset<T, SetupChecklistDeleteArgs<ExtArgs>>): Prisma__SetupChecklistClient<$Result.GetResult<Prisma.$SetupChecklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SetupChecklist.
     * @param {SetupChecklistUpdateArgs} args - Arguments to update one SetupChecklist.
     * @example
     * // Update one SetupChecklist
     * const setupChecklist = await prisma.setupChecklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SetupChecklistUpdateArgs>(args: SelectSubset<T, SetupChecklistUpdateArgs<ExtArgs>>): Prisma__SetupChecklistClient<$Result.GetResult<Prisma.$SetupChecklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SetupChecklists.
     * @param {SetupChecklistDeleteManyArgs} args - Arguments to filter SetupChecklists to delete.
     * @example
     * // Delete a few SetupChecklists
     * const { count } = await prisma.setupChecklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SetupChecklistDeleteManyArgs>(args?: SelectSubset<T, SetupChecklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SetupChecklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetupChecklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SetupChecklists
     * const setupChecklist = await prisma.setupChecklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SetupChecklistUpdateManyArgs>(args: SelectSubset<T, SetupChecklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SetupChecklists and returns the data updated in the database.
     * @param {SetupChecklistUpdateManyAndReturnArgs} args - Arguments to update many SetupChecklists.
     * @example
     * // Update many SetupChecklists
     * const setupChecklist = await prisma.setupChecklist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SetupChecklists and only return the `id`
     * const setupChecklistWithIdOnly = await prisma.setupChecklist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SetupChecklistUpdateManyAndReturnArgs>(args: SelectSubset<T, SetupChecklistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetupChecklistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SetupChecklist.
     * @param {SetupChecklistUpsertArgs} args - Arguments to update or create a SetupChecklist.
     * @example
     * // Update or create a SetupChecklist
     * const setupChecklist = await prisma.setupChecklist.upsert({
     *   create: {
     *     // ... data to create a SetupChecklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SetupChecklist we want to update
     *   }
     * })
     */
    upsert<T extends SetupChecklistUpsertArgs>(args: SelectSubset<T, SetupChecklistUpsertArgs<ExtArgs>>): Prisma__SetupChecklistClient<$Result.GetResult<Prisma.$SetupChecklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SetupChecklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetupChecklistCountArgs} args - Arguments to filter SetupChecklists to count.
     * @example
     * // Count the number of SetupChecklists
     * const count = await prisma.setupChecklist.count({
     *   where: {
     *     // ... the filter for the SetupChecklists we want to count
     *   }
     * })
    **/
    count<T extends SetupChecklistCountArgs>(
      args?: Subset<T, SetupChecklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetupChecklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SetupChecklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetupChecklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SetupChecklistAggregateArgs>(args: Subset<T, SetupChecklistAggregateArgs>): Prisma.PrismaPromise<GetSetupChecklistAggregateType<T>>

    /**
     * Group by SetupChecklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetupChecklistGroupByArgs} args - Group by arguments.
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
      T extends SetupChecklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetupChecklistGroupByArgs['orderBy'] }
        : { orderBy?: SetupChecklistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SetupChecklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetupChecklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SetupChecklist model
   */
  readonly fields: SetupChecklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SetupChecklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetupChecklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SetupChecklist model
   */
  interface SetupChecklistFieldRefs {
    readonly id: FieldRef<"SetupChecklist", 'String'>
    readonly schoolSetup: FieldRef<"SetupChecklist", 'Boolean'>
    readonly instructorSetup: FieldRef<"SetupChecklist", 'Boolean'>
    readonly carSetup: FieldRef<"SetupChecklist", 'Boolean'>
    readonly packageSetup: FieldRef<"SetupChecklist", 'Boolean'>
    readonly createdAt: FieldRef<"SetupChecklist", 'DateTime'>
    readonly updatedAt: FieldRef<"SetupChecklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SetupChecklist findUnique
   */
  export type SetupChecklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetupChecklist
     */
    select?: SetupChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetupChecklist
     */
    omit?: SetupChecklistOmit<ExtArgs> | null
    /**
     * Filter, which SetupChecklist to fetch.
     */
    where: SetupChecklistWhereUniqueInput
  }

  /**
   * SetupChecklist findUniqueOrThrow
   */
  export type SetupChecklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetupChecklist
     */
    select?: SetupChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetupChecklist
     */
    omit?: SetupChecklistOmit<ExtArgs> | null
    /**
     * Filter, which SetupChecklist to fetch.
     */
    where: SetupChecklistWhereUniqueInput
  }

  /**
   * SetupChecklist findFirst
   */
  export type SetupChecklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetupChecklist
     */
    select?: SetupChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetupChecklist
     */
    omit?: SetupChecklistOmit<ExtArgs> | null
    /**
     * Filter, which SetupChecklist to fetch.
     */
    where?: SetupChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetupChecklists to fetch.
     */
    orderBy?: SetupChecklistOrderByWithRelationInput | SetupChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SetupChecklists.
     */
    cursor?: SetupChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetupChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetupChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SetupChecklists.
     */
    distinct?: SetupChecklistScalarFieldEnum | SetupChecklistScalarFieldEnum[]
  }

  /**
   * SetupChecklist findFirstOrThrow
   */
  export type SetupChecklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetupChecklist
     */
    select?: SetupChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetupChecklist
     */
    omit?: SetupChecklistOmit<ExtArgs> | null
    /**
     * Filter, which SetupChecklist to fetch.
     */
    where?: SetupChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetupChecklists to fetch.
     */
    orderBy?: SetupChecklistOrderByWithRelationInput | SetupChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SetupChecklists.
     */
    cursor?: SetupChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetupChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetupChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SetupChecklists.
     */
    distinct?: SetupChecklistScalarFieldEnum | SetupChecklistScalarFieldEnum[]
  }

  /**
   * SetupChecklist findMany
   */
  export type SetupChecklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetupChecklist
     */
    select?: SetupChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetupChecklist
     */
    omit?: SetupChecklistOmit<ExtArgs> | null
    /**
     * Filter, which SetupChecklists to fetch.
     */
    where?: SetupChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SetupChecklists to fetch.
     */
    orderBy?: SetupChecklistOrderByWithRelationInput | SetupChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SetupChecklists.
     */
    cursor?: SetupChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SetupChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SetupChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SetupChecklists.
     */
    distinct?: SetupChecklistScalarFieldEnum | SetupChecklistScalarFieldEnum[]
  }

  /**
   * SetupChecklist create
   */
  export type SetupChecklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetupChecklist
     */
    select?: SetupChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetupChecklist
     */
    omit?: SetupChecklistOmit<ExtArgs> | null
    /**
     * The data needed to create a SetupChecklist.
     */
    data: XOR<SetupChecklistCreateInput, SetupChecklistUncheckedCreateInput>
  }

  /**
   * SetupChecklist createMany
   */
  export type SetupChecklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SetupChecklists.
     */
    data: SetupChecklistCreateManyInput | SetupChecklistCreateManyInput[]
  }

  /**
   * SetupChecklist createManyAndReturn
   */
  export type SetupChecklistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetupChecklist
     */
    select?: SetupChecklistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SetupChecklist
     */
    omit?: SetupChecklistOmit<ExtArgs> | null
    /**
     * The data used to create many SetupChecklists.
     */
    data: SetupChecklistCreateManyInput | SetupChecklistCreateManyInput[]
  }

  /**
   * SetupChecklist update
   */
  export type SetupChecklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetupChecklist
     */
    select?: SetupChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetupChecklist
     */
    omit?: SetupChecklistOmit<ExtArgs> | null
    /**
     * The data needed to update a SetupChecklist.
     */
    data: XOR<SetupChecklistUpdateInput, SetupChecklistUncheckedUpdateInput>
    /**
     * Choose, which SetupChecklist to update.
     */
    where: SetupChecklistWhereUniqueInput
  }

  /**
   * SetupChecklist updateMany
   */
  export type SetupChecklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SetupChecklists.
     */
    data: XOR<SetupChecklistUpdateManyMutationInput, SetupChecklistUncheckedUpdateManyInput>
    /**
     * Filter which SetupChecklists to update
     */
    where?: SetupChecklistWhereInput
    /**
     * Limit how many SetupChecklists to update.
     */
    limit?: number
  }

  /**
   * SetupChecklist updateManyAndReturn
   */
  export type SetupChecklistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetupChecklist
     */
    select?: SetupChecklistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SetupChecklist
     */
    omit?: SetupChecklistOmit<ExtArgs> | null
    /**
     * The data used to update SetupChecklists.
     */
    data: XOR<SetupChecklistUpdateManyMutationInput, SetupChecklistUncheckedUpdateManyInput>
    /**
     * Filter which SetupChecklists to update
     */
    where?: SetupChecklistWhereInput
    /**
     * Limit how many SetupChecklists to update.
     */
    limit?: number
  }

  /**
   * SetupChecklist upsert
   */
  export type SetupChecklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetupChecklist
     */
    select?: SetupChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetupChecklist
     */
    omit?: SetupChecklistOmit<ExtArgs> | null
    /**
     * The filter to search for the SetupChecklist to update in case it exists.
     */
    where: SetupChecklistWhereUniqueInput
    /**
     * In case the SetupChecklist found by the `where` argument doesn't exist, create a new SetupChecklist with this data.
     */
    create: XOR<SetupChecklistCreateInput, SetupChecklistUncheckedCreateInput>
    /**
     * In case the SetupChecklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetupChecklistUpdateInput, SetupChecklistUncheckedUpdateInput>
  }

  /**
   * SetupChecklist delete
   */
  export type SetupChecklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetupChecklist
     */
    select?: SetupChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetupChecklist
     */
    omit?: SetupChecklistOmit<ExtArgs> | null
    /**
     * Filter which SetupChecklist to delete.
     */
    where: SetupChecklistWhereUniqueInput
  }

  /**
   * SetupChecklist deleteMany
   */
  export type SetupChecklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SetupChecklists to delete
     */
    where?: SetupChecklistWhereInput
    /**
     * Limit how many SetupChecklists to delete.
     */
    limit?: number
  }

  /**
   * SetupChecklist without action
   */
  export type SetupChecklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetupChecklist
     */
    select?: SetupChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SetupChecklist
     */
    omit?: SetupChecklistOmit<ExtArgs> | null
  }


  /**
   * Model Instructor
   */

  export type AggregateInstructor = {
    _count: InstructorCountAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  export type InstructorMinAggregateOutputType = {
    id: string | null
    name: string | null
    mobile: string | null
    licenseNumber: string | null
    jobType: $Enums.JobType | null
    joiningDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstructorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mobile: string | null
    licenseNumber: string | null
    jobType: $Enums.JobType | null
    joiningDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstructorCountAggregateOutputType = {
    id: number
    name: number
    mobile: number
    licenseNumber: number
    jobType: number
    joiningDate: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstructorMinAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    licenseNumber?: true
    jobType?: true
    joiningDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstructorMaxAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    licenseNumber?: true
    jobType?: true
    joiningDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstructorCountAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    licenseNumber?: true
    jobType?: true
    joiningDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstructorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructor to aggregate.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instructors
    **/
    _count?: true | InstructorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorMaxAggregateInputType
  }

  export type GetInstructorAggregateType<T extends InstructorAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructor[P]>
      : GetScalarType<T[P], AggregateInstructor[P]>
  }




  export type InstructorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorWhereInput
    orderBy?: InstructorOrderByWithAggregationInput | InstructorOrderByWithAggregationInput[]
    by: InstructorScalarFieldEnum[] | InstructorScalarFieldEnum
    having?: InstructorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorCountAggregateInputType | true
    _min?: InstructorMinAggregateInputType
    _max?: InstructorMaxAggregateInputType
  }

  export type InstructorGroupByOutputType = {
    id: string
    name: string
    mobile: string
    licenseNumber: string | null
    jobType: $Enums.JobType
    joiningDate: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: InstructorCountAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  type GetInstructorGroupByPayload<T extends InstructorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorGroupByOutputType[P]>
        }
      >
    >


  export type InstructorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    licenseNumber?: boolean
    jobType?: boolean
    joiningDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentCycles?: boolean | Instructor$paymentCyclesArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    licenseNumber?: boolean
    jobType?: boolean
    joiningDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    licenseNumber?: boolean
    jobType?: boolean
    joiningDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectScalar = {
    id?: boolean
    name?: boolean
    mobile?: boolean
    licenseNumber?: boolean
    jobType?: boolean
    joiningDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstructorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mobile" | "licenseNumber" | "jobType" | "joiningDate" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["instructor"]>
  export type InstructorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentCycles?: boolean | Instructor$paymentCyclesArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstructorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstructorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instructor"
    objects: {
      paymentCycles: Prisma.$PaymentCyclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mobile: string
      licenseNumber: string | null
      jobType: $Enums.JobType
      joiningDate: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["instructor"]>
    composites: {}
  }

  type InstructorGetPayload<S extends boolean | null | undefined | InstructorDefaultArgs> = $Result.GetResult<Prisma.$InstructorPayload, S>

  type InstructorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorCountAggregateInputType | true
    }

  export interface InstructorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instructor'], meta: { name: 'Instructor' } }
    /**
     * Find zero or one Instructor that matches the filter.
     * @param {InstructorFindUniqueArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorFindUniqueArgs>(args: SelectSubset<T, InstructorFindUniqueArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instructor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorFindUniqueOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorFindFirstArgs>(args?: SelectSubset<T, InstructorFindFirstArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructors
     * const instructors = await prisma.instructor.findMany()
     * 
     * // Get first 10 Instructors
     * const instructors = await prisma.instructor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorWithIdOnly = await prisma.instructor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructorFindManyArgs>(args?: SelectSubset<T, InstructorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instructor.
     * @param {InstructorCreateArgs} args - Arguments to create a Instructor.
     * @example
     * // Create one Instructor
     * const Instructor = await prisma.instructor.create({
     *   data: {
     *     // ... data to create a Instructor
     *   }
     * })
     * 
     */
    create<T extends InstructorCreateArgs>(args: SelectSubset<T, InstructorCreateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instructors.
     * @param {InstructorCreateManyArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorCreateManyArgs>(args?: SelectSubset<T, InstructorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instructors and returns the data saved in the database.
     * @param {InstructorCreateManyAndReturnArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instructors and only return the `id`
     * const instructorWithIdOnly = await prisma.instructor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instructor.
     * @param {InstructorDeleteArgs} args - Arguments to delete one Instructor.
     * @example
     * // Delete one Instructor
     * const Instructor = await prisma.instructor.delete({
     *   where: {
     *     // ... filter to delete one Instructor
     *   }
     * })
     * 
     */
    delete<T extends InstructorDeleteArgs>(args: SelectSubset<T, InstructorDeleteArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instructor.
     * @param {InstructorUpdateArgs} args - Arguments to update one Instructor.
     * @example
     * // Update one Instructor
     * const instructor = await prisma.instructor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorUpdateArgs>(args: SelectSubset<T, InstructorUpdateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instructors.
     * @param {InstructorDeleteManyArgs} args - Arguments to filter Instructors to delete.
     * @example
     * // Delete a few Instructors
     * const { count } = await prisma.instructor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorDeleteManyArgs>(args?: SelectSubset<T, InstructorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorUpdateManyArgs>(args: SelectSubset<T, InstructorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors and returns the data updated in the database.
     * @param {InstructorUpdateManyAndReturnArgs} args - Arguments to update many Instructors.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instructors and only return the `id`
     * const instructorWithIdOnly = await prisma.instructor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstructorUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instructor.
     * @param {InstructorUpsertArgs} args - Arguments to update or create a Instructor.
     * @example
     * // Update or create a Instructor
     * const instructor = await prisma.instructor.upsert({
     *   create: {
     *     // ... data to create a Instructor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructor we want to update
     *   }
     * })
     */
    upsert<T extends InstructorUpsertArgs>(args: SelectSubset<T, InstructorUpsertArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorCountArgs} args - Arguments to filter Instructors to count.
     * @example
     * // Count the number of Instructors
     * const count = await prisma.instructor.count({
     *   where: {
     *     // ... the filter for the Instructors we want to count
     *   }
     * })
    **/
    count<T extends InstructorCountArgs>(
      args?: Subset<T, InstructorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstructorAggregateArgs>(args: Subset<T, InstructorAggregateArgs>): Prisma.PrismaPromise<GetInstructorAggregateType<T>>

    /**
     * Group by Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorGroupByArgs} args - Group by arguments.
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
      T extends InstructorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorGroupByArgs['orderBy'] }
        : { orderBy?: InstructorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instructor model
   */
  readonly fields: InstructorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instructor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentCycles<T extends Instructor$paymentCyclesArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$paymentCyclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentCyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Instructor model
   */
  interface InstructorFieldRefs {
    readonly id: FieldRef<"Instructor", 'String'>
    readonly name: FieldRef<"Instructor", 'String'>
    readonly mobile: FieldRef<"Instructor", 'String'>
    readonly licenseNumber: FieldRef<"Instructor", 'String'>
    readonly jobType: FieldRef<"Instructor", 'JobType'>
    readonly joiningDate: FieldRef<"Instructor", 'DateTime'>
    readonly isActive: FieldRef<"Instructor", 'Boolean'>
    readonly createdAt: FieldRef<"Instructor", 'DateTime'>
    readonly updatedAt: FieldRef<"Instructor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Instructor findUnique
   */
  export type InstructorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findUniqueOrThrow
   */
  export type InstructorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findFirst
   */
  export type InstructorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findFirstOrThrow
   */
  export type InstructorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findMany
   */
  export type InstructorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructors to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor create
   */
  export type InstructorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to create a Instructor.
     */
    data: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
  }

  /**
   * Instructor createMany
   */
  export type InstructorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
  }

  /**
   * Instructor createManyAndReturn
   */
  export type InstructorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
  }

  /**
   * Instructor update
   */
  export type InstructorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to update a Instructor.
     */
    data: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
    /**
     * Choose, which Instructor to update.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor updateMany
   */
  export type InstructorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
  }

  /**
   * Instructor updateManyAndReturn
   */
  export type InstructorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
  }

  /**
   * Instructor upsert
   */
  export type InstructorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The filter to search for the Instructor to update in case it exists.
     */
    where: InstructorWhereUniqueInput
    /**
     * In case the Instructor found by the `where` argument doesn't exist, create a new Instructor with this data.
     */
    create: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
    /**
     * In case the Instructor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
  }

  /**
   * Instructor delete
   */
  export type InstructorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter which Instructor to delete.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor deleteMany
   */
  export type InstructorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructors to delete
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to delete.
     */
    limit?: number
  }

  /**
   * Instructor.paymentCycles
   */
  export type Instructor$paymentCyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycle
     */
    select?: PaymentCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentCycle
     */
    omit?: PaymentCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentCycleInclude<ExtArgs> | null
    where?: PaymentCycleWhereInput
    orderBy?: PaymentCycleOrderByWithRelationInput | PaymentCycleOrderByWithRelationInput[]
    cursor?: PaymentCycleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentCycleScalarFieldEnum | PaymentCycleScalarFieldEnum[]
  }

  /**
   * Instructor without action
   */
  export type InstructorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
  }


  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageAvgAggregateOutputType = {
    price: Decimal | null
    duration: number | null
  }

  export type PackageSumAggregateOutputType = {
    price: Decimal | null
    duration: number | null
  }

  export type PackageMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    duration: number | null
    isActive: boolean | null
  }

  export type PackageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    duration: number | null
    isActive: boolean | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    name: number
    price: number
    duration: number
    isActive: number
    _all: number
  }


  export type PackageAvgAggregateInputType = {
    price?: true
    duration?: true
  }

  export type PackageSumAggregateInputType = {
    price?: true
    duration?: true
  }

  export type PackageMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    isActive?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    isActive?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    isActive?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _avg?: PackageAvgAggregateInputType
    _sum?: PackageSumAggregateInputType
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: string
    name: string
    price: Decimal
    duration: number
    isActive: boolean
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["package"]>

  export type PackageSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    isActive?: boolean
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "duration" | "isActive", ExtArgs["result"]["package"]>

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: Prisma.Decimal
      duration: number
      isActive: boolean
    }, ExtArgs["result"]["package"]>
    composites: {}
  }

  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageFindUniqueArgs>(args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Package that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageFindFirstArgs>(args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageFindManyArgs>(args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
     */
    create<T extends PackageCreateArgs>(args: SelectSubset<T, PackageCreateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packages.
     * @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageCreateManyArgs>(args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packages and returns the data saved in the database.
     * @param {PackageCreateManyAndReturnArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackageCreateManyAndReturnArgs>(args?: SelectSubset<T, PackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
     */
    delete<T extends PackageDeleteArgs>(args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageUpdateArgs>(args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDeleteManyArgs>(args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageUpdateManyArgs>(args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages and returns the data updated in the database.
     * @param {PackageUpdateManyAndReturnArgs} args - Arguments to update many Packages.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Packages and only return the `id`
     * const packageWithIdOnly = await prisma.package.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PackageUpdateManyAndReturnArgs>(args: SelectSubset<T, PackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
     */
    upsert<T extends PackageUpsertArgs>(args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
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
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Package model
   */
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'String'>
    readonly name: FieldRef<"Package", 'String'>
    readonly price: FieldRef<"Package", 'Decimal'>
    readonly duration: FieldRef<"Package", 'Int'>
    readonly isActive: FieldRef<"Package", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
  }

  /**
   * Package createManyAndReturn
   */
  export type PackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package updateManyAndReturn
   */
  export type PackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to delete.
     */
    limit?: number
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
  }


  /**
   * Model PaymentCycle
   */

  export type AggregatePaymentCycle = {
    _count: PaymentCycleCountAggregateOutputType | null
    _avg: PaymentCycleAvgAggregateOutputType | null
    _sum: PaymentCycleSumAggregateOutputType | null
    _min: PaymentCycleMinAggregateOutputType | null
    _max: PaymentCycleMaxAggregateOutputType | null
  }

  export type PaymentCycleAvgAggregateOutputType = {
    amountTaken: number | null
    baseAmount: number | null
    deductions: number | null
    bonus: number | null
    netAmount: number | null
  }

  export type PaymentCycleSumAggregateOutputType = {
    amountTaken: number | null
    baseAmount: number | null
    deductions: number | null
    bonus: number | null
    netAmount: number | null
  }

  export type PaymentCycleMinAggregateOutputType = {
    id: string | null
    instructorId: string | null
    month: Date | null
    amountTaken: number | null
    baseAmount: number | null
    deductions: number | null
    bonus: number | null
    netAmount: number | null
    paidAt: Date | null
    note: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCycleMaxAggregateOutputType = {
    id: string | null
    instructorId: string | null
    month: Date | null
    amountTaken: number | null
    baseAmount: number | null
    deductions: number | null
    bonus: number | null
    netAmount: number | null
    paidAt: Date | null
    note: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCycleCountAggregateOutputType = {
    id: number
    instructorId: number
    month: number
    amountTaken: number
    baseAmount: number
    deductions: number
    bonus: number
    netAmount: number
    paidAt: number
    note: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentCycleAvgAggregateInputType = {
    amountTaken?: true
    baseAmount?: true
    deductions?: true
    bonus?: true
    netAmount?: true
  }

  export type PaymentCycleSumAggregateInputType = {
    amountTaken?: true
    baseAmount?: true
    deductions?: true
    bonus?: true
    netAmount?: true
  }

  export type PaymentCycleMinAggregateInputType = {
    id?: true
    instructorId?: true
    month?: true
    amountTaken?: true
    baseAmount?: true
    deductions?: true
    bonus?: true
    netAmount?: true
    paidAt?: true
    note?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCycleMaxAggregateInputType = {
    id?: true
    instructorId?: true
    month?: true
    amountTaken?: true
    baseAmount?: true
    deductions?: true
    bonus?: true
    netAmount?: true
    paidAt?: true
    note?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCycleCountAggregateInputType = {
    id?: true
    instructorId?: true
    month?: true
    amountTaken?: true
    baseAmount?: true
    deductions?: true
    bonus?: true
    netAmount?: true
    paidAt?: true
    note?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentCycleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentCycle to aggregate.
     */
    where?: PaymentCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentCycles to fetch.
     */
    orderBy?: PaymentCycleOrderByWithRelationInput | PaymentCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentCycles
    **/
    _count?: true | PaymentCycleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentCycleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentCycleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentCycleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentCycleMaxAggregateInputType
  }

  export type GetPaymentCycleAggregateType<T extends PaymentCycleAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentCycle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentCycle[P]>
      : GetScalarType<T[P], AggregatePaymentCycle[P]>
  }




  export type PaymentCycleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentCycleWhereInput
    orderBy?: PaymentCycleOrderByWithAggregationInput | PaymentCycleOrderByWithAggregationInput[]
    by: PaymentCycleScalarFieldEnum[] | PaymentCycleScalarFieldEnum
    having?: PaymentCycleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCycleCountAggregateInputType | true
    _avg?: PaymentCycleAvgAggregateInputType
    _sum?: PaymentCycleSumAggregateInputType
    _min?: PaymentCycleMinAggregateInputType
    _max?: PaymentCycleMaxAggregateInputType
  }

  export type PaymentCycleGroupByOutputType = {
    id: string
    instructorId: string
    month: Date
    amountTaken: number
    baseAmount: number
    deductions: number
    bonus: number
    netAmount: number
    paidAt: Date
    note: string
    status: $Enums.PaymentStatus
    createdAt: Date
    updatedAt: Date
    _count: PaymentCycleCountAggregateOutputType | null
    _avg: PaymentCycleAvgAggregateOutputType | null
    _sum: PaymentCycleSumAggregateOutputType | null
    _min: PaymentCycleMinAggregateOutputType | null
    _max: PaymentCycleMaxAggregateOutputType | null
  }

  type GetPaymentCycleGroupByPayload<T extends PaymentCycleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentCycleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentCycleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentCycleGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentCycleGroupByOutputType[P]>
        }
      >
    >


  export type PaymentCycleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    month?: boolean
    amountTaken?: boolean
    baseAmount?: boolean
    deductions?: boolean
    bonus?: boolean
    netAmount?: boolean
    paidAt?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
    paymentsTaken?: boolean | PaymentCycle$paymentsTakenArgs<ExtArgs>
    _count?: boolean | PaymentCycleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentCycle"]>

  export type PaymentCycleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    month?: boolean
    amountTaken?: boolean
    baseAmount?: boolean
    deductions?: boolean
    bonus?: boolean
    netAmount?: boolean
    paidAt?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentCycle"]>

  export type PaymentCycleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    month?: boolean
    amountTaken?: boolean
    baseAmount?: boolean
    deductions?: boolean
    bonus?: boolean
    netAmount?: boolean
    paidAt?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentCycle"]>

  export type PaymentCycleSelectScalar = {
    id?: boolean
    instructorId?: boolean
    month?: boolean
    amountTaken?: boolean
    baseAmount?: boolean
    deductions?: boolean
    bonus?: boolean
    netAmount?: boolean
    paidAt?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentCycleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instructorId" | "month" | "amountTaken" | "baseAmount" | "deductions" | "bonus" | "netAmount" | "paidAt" | "note" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentCycle"]>
  export type PaymentCycleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
    paymentsTaken?: boolean | PaymentCycle$paymentsTakenArgs<ExtArgs>
    _count?: boolean | PaymentCycleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentCycleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }
  export type PaymentCycleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructor?: boolean | InstructorDefaultArgs<ExtArgs>
  }

  export type $PaymentCyclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentCycle"
    objects: {
      instructor: Prisma.$InstructorPayload<ExtArgs>
      paymentsTaken: Prisma.$PaymentTakenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      instructorId: string
      month: Date
      amountTaken: number
      baseAmount: number
      deductions: number
      bonus: number
      netAmount: number
      paidAt: Date
      note: string
      status: $Enums.PaymentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentCycle"]>
    composites: {}
  }

  type PaymentCycleGetPayload<S extends boolean | null | undefined | PaymentCycleDefaultArgs> = $Result.GetResult<Prisma.$PaymentCyclePayload, S>

  type PaymentCycleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentCycleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCycleCountAggregateInputType | true
    }

  export interface PaymentCycleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentCycle'], meta: { name: 'PaymentCycle' } }
    /**
     * Find zero or one PaymentCycle that matches the filter.
     * @param {PaymentCycleFindUniqueArgs} args - Arguments to find a PaymentCycle
     * @example
     * // Get one PaymentCycle
     * const paymentCycle = await prisma.paymentCycle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentCycleFindUniqueArgs>(args: SelectSubset<T, PaymentCycleFindUniqueArgs<ExtArgs>>): Prisma__PaymentCycleClient<$Result.GetResult<Prisma.$PaymentCyclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentCycle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentCycleFindUniqueOrThrowArgs} args - Arguments to find a PaymentCycle
     * @example
     * // Get one PaymentCycle
     * const paymentCycle = await prisma.paymentCycle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentCycleFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentCycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentCycleClient<$Result.GetResult<Prisma.$PaymentCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentCycle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCycleFindFirstArgs} args - Arguments to find a PaymentCycle
     * @example
     * // Get one PaymentCycle
     * const paymentCycle = await prisma.paymentCycle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentCycleFindFirstArgs>(args?: SelectSubset<T, PaymentCycleFindFirstArgs<ExtArgs>>): Prisma__PaymentCycleClient<$Result.GetResult<Prisma.$PaymentCyclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentCycle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCycleFindFirstOrThrowArgs} args - Arguments to find a PaymentCycle
     * @example
     * // Get one PaymentCycle
     * const paymentCycle = await prisma.paymentCycle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentCycleFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentCycleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentCycleClient<$Result.GetResult<Prisma.$PaymentCyclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentCycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCycleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentCycles
     * const paymentCycles = await prisma.paymentCycle.findMany()
     * 
     * // Get first 10 PaymentCycles
     * const paymentCycles = await prisma.paymentCycle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentCycleWithIdOnly = await prisma.paymentCycle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentCycleFindManyArgs>(args?: SelectSubset<T, PaymentCycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentCyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentCycle.
     * @param {PaymentCycleCreateArgs} args - Arguments to create a PaymentCycle.
     * @example
     * // Create one PaymentCycle
     * const PaymentCycle = await prisma.paymentCycle.create({
     *   data: {
     *     // ... data to create a PaymentCycle
     *   }
     * })
     * 
     */
    create<T extends PaymentCycleCreateArgs>(args: SelectSubset<T, PaymentCycleCreateArgs<ExtArgs>>): Prisma__PaymentCycleClient<$Result.GetResult<Prisma.$PaymentCyclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentCycles.
     * @param {PaymentCycleCreateManyArgs} args - Arguments to create many PaymentCycles.
     * @example
     * // Create many PaymentCycles
     * const paymentCycle = await prisma.paymentCycle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCycleCreateManyArgs>(args?: SelectSubset<T, PaymentCycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentCycles and returns the data saved in the database.
     * @param {PaymentCycleCreateManyAndReturnArgs} args - Arguments to create many PaymentCycles.
     * @example
     * // Create many PaymentCycles
     * const paymentCycle = await prisma.paymentCycle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentCycles and only return the `id`
     * const paymentCycleWithIdOnly = await prisma.paymentCycle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCycleCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentCyclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentCycle.
     * @param {PaymentCycleDeleteArgs} args - Arguments to delete one PaymentCycle.
     * @example
     * // Delete one PaymentCycle
     * const PaymentCycle = await prisma.paymentCycle.delete({
     *   where: {
     *     // ... filter to delete one PaymentCycle
     *   }
     * })
     * 
     */
    delete<T extends PaymentCycleDeleteArgs>(args: SelectSubset<T, PaymentCycleDeleteArgs<ExtArgs>>): Prisma__PaymentCycleClient<$Result.GetResult<Prisma.$PaymentCyclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentCycle.
     * @param {PaymentCycleUpdateArgs} args - Arguments to update one PaymentCycle.
     * @example
     * // Update one PaymentCycle
     * const paymentCycle = await prisma.paymentCycle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentCycleUpdateArgs>(args: SelectSubset<T, PaymentCycleUpdateArgs<ExtArgs>>): Prisma__PaymentCycleClient<$Result.GetResult<Prisma.$PaymentCyclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentCycles.
     * @param {PaymentCycleDeleteManyArgs} args - Arguments to filter PaymentCycles to delete.
     * @example
     * // Delete a few PaymentCycles
     * const { count } = await prisma.paymentCycle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentCycleDeleteManyArgs>(args?: SelectSubset<T, PaymentCycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCycleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentCycles
     * const paymentCycle = await prisma.paymentCycle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentCycleUpdateManyArgs>(args: SelectSubset<T, PaymentCycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentCycles and returns the data updated in the database.
     * @param {PaymentCycleUpdateManyAndReturnArgs} args - Arguments to update many PaymentCycles.
     * @example
     * // Update many PaymentCycles
     * const paymentCycle = await prisma.paymentCycle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentCycles and only return the `id`
     * const paymentCycleWithIdOnly = await prisma.paymentCycle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentCycleUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentCycleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentCyclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentCycle.
     * @param {PaymentCycleUpsertArgs} args - Arguments to update or create a PaymentCycle.
     * @example
     * // Update or create a PaymentCycle
     * const paymentCycle = await prisma.paymentCycle.upsert({
     *   create: {
     *     // ... data to create a PaymentCycle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentCycle we want to update
     *   }
     * })
     */
    upsert<T extends PaymentCycleUpsertArgs>(args: SelectSubset<T, PaymentCycleUpsertArgs<ExtArgs>>): Prisma__PaymentCycleClient<$Result.GetResult<Prisma.$PaymentCyclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCycleCountArgs} args - Arguments to filter PaymentCycles to count.
     * @example
     * // Count the number of PaymentCycles
     * const count = await prisma.paymentCycle.count({
     *   where: {
     *     // ... the filter for the PaymentCycles we want to count
     *   }
     * })
    **/
    count<T extends PaymentCycleCountArgs>(
      args?: Subset<T, PaymentCycleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCycleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentCycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCycleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentCycleAggregateArgs>(args: Subset<T, PaymentCycleAggregateArgs>): Prisma.PrismaPromise<GetPaymentCycleAggregateType<T>>

    /**
     * Group by PaymentCycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCycleGroupByArgs} args - Group by arguments.
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
      T extends PaymentCycleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentCycleGroupByArgs['orderBy'] }
        : { orderBy?: PaymentCycleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentCycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentCycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentCycle model
   */
  readonly fields: PaymentCycleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentCycle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentCycleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructor<T extends InstructorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstructorDefaultArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paymentsTaken<T extends PaymentCycle$paymentsTakenArgs<ExtArgs> = {}>(args?: Subset<T, PaymentCycle$paymentsTakenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentTakenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PaymentCycle model
   */
  interface PaymentCycleFieldRefs {
    readonly id: FieldRef<"PaymentCycle", 'String'>
    readonly instructorId: FieldRef<"PaymentCycle", 'String'>
    readonly month: FieldRef<"PaymentCycle", 'DateTime'>
    readonly amountTaken: FieldRef<"PaymentCycle", 'Int'>
    readonly baseAmount: FieldRef<"PaymentCycle", 'Int'>
    readonly deductions: FieldRef<"PaymentCycle", 'Int'>
    readonly bonus: FieldRef<"PaymentCycle", 'Int'>
    readonly netAmount: FieldRef<"PaymentCycle", 'Int'>
    readonly paidAt: FieldRef<"PaymentCycle", 'DateTime'>
    readonly note: FieldRef<"PaymentCycle", 'String'>
    readonly status: FieldRef<"PaymentCycle", 'PaymentStatus'>
    readonly createdAt: FieldRef<"PaymentCycle", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentCycle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentCycle findUnique
   */
  export type PaymentCycleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycle
     */
    select?: PaymentCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentCycle
     */
    omit?: PaymentCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentCycleInclude<ExtArgs> | null
    /**
     * Filter, which PaymentCycle to fetch.
     */
    where: PaymentCycleWhereUniqueInput
  }

  /**
   * PaymentCycle findUniqueOrThrow
   */
  export type PaymentCycleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycle
     */
    select?: PaymentCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentCycle
     */
    omit?: PaymentCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentCycleInclude<ExtArgs> | null
    /**
     * Filter, which PaymentCycle to fetch.
     */
    where: PaymentCycleWhereUniqueInput
  }

  /**
   * PaymentCycle findFirst
   */
  export type PaymentCycleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycle
     */
    select?: PaymentCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentCycle
     */
    omit?: PaymentCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentCycleInclude<ExtArgs> | null
    /**
     * Filter, which PaymentCycle to fetch.
     */
    where?: PaymentCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentCycles to fetch.
     */
    orderBy?: PaymentCycleOrderByWithRelationInput | PaymentCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentCycles.
     */
    cursor?: PaymentCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentCycles.
     */
    distinct?: PaymentCycleScalarFieldEnum | PaymentCycleScalarFieldEnum[]
  }

  /**
   * PaymentCycle findFirstOrThrow
   */
  export type PaymentCycleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycle
     */
    select?: PaymentCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentCycle
     */
    omit?: PaymentCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentCycleInclude<ExtArgs> | null
    /**
     * Filter, which PaymentCycle to fetch.
     */
    where?: PaymentCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentCycles to fetch.
     */
    orderBy?: PaymentCycleOrderByWithRelationInput | PaymentCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentCycles.
     */
    cursor?: PaymentCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentCycles.
     */
    distinct?: PaymentCycleScalarFieldEnum | PaymentCycleScalarFieldEnum[]
  }

  /**
   * PaymentCycle findMany
   */
  export type PaymentCycleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycle
     */
    select?: PaymentCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentCycle
     */
    omit?: PaymentCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentCycleInclude<ExtArgs> | null
    /**
     * Filter, which PaymentCycles to fetch.
     */
    where?: PaymentCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentCycles to fetch.
     */
    orderBy?: PaymentCycleOrderByWithRelationInput | PaymentCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentCycles.
     */
    cursor?: PaymentCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentCycles.
     */
    distinct?: PaymentCycleScalarFieldEnum | PaymentCycleScalarFieldEnum[]
  }

  /**
   * PaymentCycle create
   */
  export type PaymentCycleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycle
     */
    select?: PaymentCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentCycle
     */
    omit?: PaymentCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentCycleInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentCycle.
     */
    data: XOR<PaymentCycleCreateInput, PaymentCycleUncheckedCreateInput>
  }

  /**
   * PaymentCycle createMany
   */
  export type PaymentCycleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentCycles.
     */
    data: PaymentCycleCreateManyInput | PaymentCycleCreateManyInput[]
  }

  /**
   * PaymentCycle createManyAndReturn
   */
  export type PaymentCycleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycle
     */
    select?: PaymentCycleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentCycle
     */
    omit?: PaymentCycleOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentCycles.
     */
    data: PaymentCycleCreateManyInput | PaymentCycleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentCycleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentCycle update
   */
  export type PaymentCycleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycle
     */
    select?: PaymentCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentCycle
     */
    omit?: PaymentCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentCycleInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentCycle.
     */
    data: XOR<PaymentCycleUpdateInput, PaymentCycleUncheckedUpdateInput>
    /**
     * Choose, which PaymentCycle to update.
     */
    where: PaymentCycleWhereUniqueInput
  }

  /**
   * PaymentCycle updateMany
   */
  export type PaymentCycleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentCycles.
     */
    data: XOR<PaymentCycleUpdateManyMutationInput, PaymentCycleUncheckedUpdateManyInput>
    /**
     * Filter which PaymentCycles to update
     */
    where?: PaymentCycleWhereInput
    /**
     * Limit how many PaymentCycles to update.
     */
    limit?: number
  }

  /**
   * PaymentCycle updateManyAndReturn
   */
  export type PaymentCycleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycle
     */
    select?: PaymentCycleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentCycle
     */
    omit?: PaymentCycleOmit<ExtArgs> | null
    /**
     * The data used to update PaymentCycles.
     */
    data: XOR<PaymentCycleUpdateManyMutationInput, PaymentCycleUncheckedUpdateManyInput>
    /**
     * Filter which PaymentCycles to update
     */
    where?: PaymentCycleWhereInput
    /**
     * Limit how many PaymentCycles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentCycleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentCycle upsert
   */
  export type PaymentCycleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycle
     */
    select?: PaymentCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentCycle
     */
    omit?: PaymentCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentCycleInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentCycle to update in case it exists.
     */
    where: PaymentCycleWhereUniqueInput
    /**
     * In case the PaymentCycle found by the `where` argument doesn't exist, create a new PaymentCycle with this data.
     */
    create: XOR<PaymentCycleCreateInput, PaymentCycleUncheckedCreateInput>
    /**
     * In case the PaymentCycle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentCycleUpdateInput, PaymentCycleUncheckedUpdateInput>
  }

  /**
   * PaymentCycle delete
   */
  export type PaymentCycleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycle
     */
    select?: PaymentCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentCycle
     */
    omit?: PaymentCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentCycleInclude<ExtArgs> | null
    /**
     * Filter which PaymentCycle to delete.
     */
    where: PaymentCycleWhereUniqueInput
  }

  /**
   * PaymentCycle deleteMany
   */
  export type PaymentCycleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentCycles to delete
     */
    where?: PaymentCycleWhereInput
    /**
     * Limit how many PaymentCycles to delete.
     */
    limit?: number
  }

  /**
   * PaymentCycle.paymentsTaken
   */
  export type PaymentCycle$paymentsTakenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentTaken
     */
    select?: PaymentTakenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentTaken
     */
    omit?: PaymentTakenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentTakenInclude<ExtArgs> | null
    where?: PaymentTakenWhereInput
    orderBy?: PaymentTakenOrderByWithRelationInput | PaymentTakenOrderByWithRelationInput[]
    cursor?: PaymentTakenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentTakenScalarFieldEnum | PaymentTakenScalarFieldEnum[]
  }

  /**
   * PaymentCycle without action
   */
  export type PaymentCycleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCycle
     */
    select?: PaymentCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentCycle
     */
    omit?: PaymentCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentCycleInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    Batch_time: string | null
    Duration_time: string | null
    Car_id: string | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    Batch_time: string | null
    Duration_time: string | null
    Car_id: string | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    student_id: number
    Batch_time: number
    Duration_time: number
    Car_id: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    student_id?: true
    Batch_time?: true
    Duration_time?: true
    Car_id?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    student_id?: true
    Batch_time?: true
    Duration_time?: true
    Car_id?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    student_id?: true
    Batch_time?: true
    Duration_time?: true
    Car_id?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    student_id: string
    Batch_time: string
    Duration_time: string
    Car_id: string
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    Batch_time?: boolean
    Duration_time?: boolean
    Car_id?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    Batch_time?: boolean
    Duration_time?: boolean
    Car_id?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    Batch_time?: boolean
    Duration_time?: boolean
    Car_id?: boolean
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    student_id?: boolean
    Batch_time?: boolean
    Duration_time?: boolean
    Car_id?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "Batch_time" | "Duration_time" | "Car_id", ExtArgs["result"]["schedule"]>

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      Batch_time: string
      Duration_time: string
      Car_id: string
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly student_id: FieldRef<"Schedule", 'String'>
    readonly Batch_time: FieldRef<"Schedule", 'String'>
    readonly Duration_time: FieldRef<"Schedule", 'String'>
    readonly Car_id: FieldRef<"Schedule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
  }


  /**
   * Model SchoolSetUp
   */

  export type AggregateSchoolSetUp = {
    _count: SchoolSetUpCountAggregateOutputType | null
    _min: SchoolSetUpMinAggregateOutputType | null
    _max: SchoolSetUpMaxAggregateOutputType | null
  }

  export type SchoolSetUpMinAggregateOutputType = {
    id: string | null
    systemId: string | null
    school_name: string | null
    support_Email: string | null
    address: string | null
    contact_Number: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolSetUpMaxAggregateOutputType = {
    id: string | null
    systemId: string | null
    school_name: string | null
    support_Email: string | null
    address: string | null
    contact_Number: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolSetUpCountAggregateOutputType = {
    id: number
    systemId: number
    school_name: number
    support_Email: number
    address: number
    contact_Number: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchoolSetUpMinAggregateInputType = {
    id?: true
    systemId?: true
    school_name?: true
    support_Email?: true
    address?: true
    contact_Number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolSetUpMaxAggregateInputType = {
    id?: true
    systemId?: true
    school_name?: true
    support_Email?: true
    address?: true
    contact_Number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolSetUpCountAggregateInputType = {
    id?: true
    systemId?: true
    school_name?: true
    support_Email?: true
    address?: true
    contact_Number?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolSetUpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolSetUp to aggregate.
     */
    where?: SchoolSetUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolSetUps to fetch.
     */
    orderBy?: SchoolSetUpOrderByWithRelationInput | SchoolSetUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolSetUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolSetUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolSetUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchoolSetUps
    **/
    _count?: true | SchoolSetUpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolSetUpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolSetUpMaxAggregateInputType
  }

  export type GetSchoolSetUpAggregateType<T extends SchoolSetUpAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolSetUp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolSetUp[P]>
      : GetScalarType<T[P], AggregateSchoolSetUp[P]>
  }




  export type SchoolSetUpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolSetUpWhereInput
    orderBy?: SchoolSetUpOrderByWithAggregationInput | SchoolSetUpOrderByWithAggregationInput[]
    by: SchoolSetUpScalarFieldEnum[] | SchoolSetUpScalarFieldEnum
    having?: SchoolSetUpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolSetUpCountAggregateInputType | true
    _min?: SchoolSetUpMinAggregateInputType
    _max?: SchoolSetUpMaxAggregateInputType
  }

  export type SchoolSetUpGroupByOutputType = {
    id: string
    systemId: string | null
    school_name: string
    support_Email: string
    address: string
    contact_Number: string
    createdAt: Date
    updatedAt: Date
    _count: SchoolSetUpCountAggregateOutputType | null
    _min: SchoolSetUpMinAggregateOutputType | null
    _max: SchoolSetUpMaxAggregateOutputType | null
  }

  type GetSchoolSetUpGroupByPayload<T extends SchoolSetUpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolSetUpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolSetUpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolSetUpGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolSetUpGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSetUpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    systemId?: boolean
    school_name?: boolean
    support_Email?: boolean
    address?: boolean
    contact_Number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schoolSetUp"]>

  export type SchoolSetUpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    systemId?: boolean
    school_name?: boolean
    support_Email?: boolean
    address?: boolean
    contact_Number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schoolSetUp"]>

  export type SchoolSetUpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    systemId?: boolean
    school_name?: boolean
    support_Email?: boolean
    address?: boolean
    contact_Number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["schoolSetUp"]>

  export type SchoolSetUpSelectScalar = {
    id?: boolean
    systemId?: boolean
    school_name?: boolean
    support_Email?: boolean
    address?: boolean
    contact_Number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchoolSetUpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "systemId" | "school_name" | "support_Email" | "address" | "contact_Number" | "createdAt" | "updatedAt", ExtArgs["result"]["schoolSetUp"]>

  export type $SchoolSetUpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolSetUp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      systemId: string | null
      school_name: string
      support_Email: string
      address: string
      contact_Number: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schoolSetUp"]>
    composites: {}
  }

  type SchoolSetUpGetPayload<S extends boolean | null | undefined | SchoolSetUpDefaultArgs> = $Result.GetResult<Prisma.$SchoolSetUpPayload, S>

  type SchoolSetUpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolSetUpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolSetUpCountAggregateInputType | true
    }

  export interface SchoolSetUpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchoolSetUp'], meta: { name: 'SchoolSetUp' } }
    /**
     * Find zero or one SchoolSetUp that matches the filter.
     * @param {SchoolSetUpFindUniqueArgs} args - Arguments to find a SchoolSetUp
     * @example
     * // Get one SchoolSetUp
     * const schoolSetUp = await prisma.schoolSetUp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolSetUpFindUniqueArgs>(args: SelectSubset<T, SchoolSetUpFindUniqueArgs<ExtArgs>>): Prisma__SchoolSetUpClient<$Result.GetResult<Prisma.$SchoolSetUpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SchoolSetUp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolSetUpFindUniqueOrThrowArgs} args - Arguments to find a SchoolSetUp
     * @example
     * // Get one SchoolSetUp
     * const schoolSetUp = await prisma.schoolSetUp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolSetUpFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolSetUpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolSetUpClient<$Result.GetResult<Prisma.$SchoolSetUpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolSetUp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSetUpFindFirstArgs} args - Arguments to find a SchoolSetUp
     * @example
     * // Get one SchoolSetUp
     * const schoolSetUp = await prisma.schoolSetUp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolSetUpFindFirstArgs>(args?: SelectSubset<T, SchoolSetUpFindFirstArgs<ExtArgs>>): Prisma__SchoolSetUpClient<$Result.GetResult<Prisma.$SchoolSetUpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SchoolSetUp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSetUpFindFirstOrThrowArgs} args - Arguments to find a SchoolSetUp
     * @example
     * // Get one SchoolSetUp
     * const schoolSetUp = await prisma.schoolSetUp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolSetUpFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolSetUpFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolSetUpClient<$Result.GetResult<Prisma.$SchoolSetUpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SchoolSetUps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSetUpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolSetUps
     * const schoolSetUps = await prisma.schoolSetUp.findMany()
     * 
     * // Get first 10 SchoolSetUps
     * const schoolSetUps = await prisma.schoolSetUp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolSetUpWithIdOnly = await prisma.schoolSetUp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolSetUpFindManyArgs>(args?: SelectSubset<T, SchoolSetUpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolSetUpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SchoolSetUp.
     * @param {SchoolSetUpCreateArgs} args - Arguments to create a SchoolSetUp.
     * @example
     * // Create one SchoolSetUp
     * const SchoolSetUp = await prisma.schoolSetUp.create({
     *   data: {
     *     // ... data to create a SchoolSetUp
     *   }
     * })
     * 
     */
    create<T extends SchoolSetUpCreateArgs>(args: SelectSubset<T, SchoolSetUpCreateArgs<ExtArgs>>): Prisma__SchoolSetUpClient<$Result.GetResult<Prisma.$SchoolSetUpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SchoolSetUps.
     * @param {SchoolSetUpCreateManyArgs} args - Arguments to create many SchoolSetUps.
     * @example
     * // Create many SchoolSetUps
     * const schoolSetUp = await prisma.schoolSetUp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolSetUpCreateManyArgs>(args?: SelectSubset<T, SchoolSetUpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchoolSetUps and returns the data saved in the database.
     * @param {SchoolSetUpCreateManyAndReturnArgs} args - Arguments to create many SchoolSetUps.
     * @example
     * // Create many SchoolSetUps
     * const schoolSetUp = await prisma.schoolSetUp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchoolSetUps and only return the `id`
     * const schoolSetUpWithIdOnly = await prisma.schoolSetUp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolSetUpCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolSetUpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolSetUpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SchoolSetUp.
     * @param {SchoolSetUpDeleteArgs} args - Arguments to delete one SchoolSetUp.
     * @example
     * // Delete one SchoolSetUp
     * const SchoolSetUp = await prisma.schoolSetUp.delete({
     *   where: {
     *     // ... filter to delete one SchoolSetUp
     *   }
     * })
     * 
     */
    delete<T extends SchoolSetUpDeleteArgs>(args: SelectSubset<T, SchoolSetUpDeleteArgs<ExtArgs>>): Prisma__SchoolSetUpClient<$Result.GetResult<Prisma.$SchoolSetUpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SchoolSetUp.
     * @param {SchoolSetUpUpdateArgs} args - Arguments to update one SchoolSetUp.
     * @example
     * // Update one SchoolSetUp
     * const schoolSetUp = await prisma.schoolSetUp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolSetUpUpdateArgs>(args: SelectSubset<T, SchoolSetUpUpdateArgs<ExtArgs>>): Prisma__SchoolSetUpClient<$Result.GetResult<Prisma.$SchoolSetUpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SchoolSetUps.
     * @param {SchoolSetUpDeleteManyArgs} args - Arguments to filter SchoolSetUps to delete.
     * @example
     * // Delete a few SchoolSetUps
     * const { count } = await prisma.schoolSetUp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolSetUpDeleteManyArgs>(args?: SelectSubset<T, SchoolSetUpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolSetUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSetUpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolSetUps
     * const schoolSetUp = await prisma.schoolSetUp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolSetUpUpdateManyArgs>(args: SelectSubset<T, SchoolSetUpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolSetUps and returns the data updated in the database.
     * @param {SchoolSetUpUpdateManyAndReturnArgs} args - Arguments to update many SchoolSetUps.
     * @example
     * // Update many SchoolSetUps
     * const schoolSetUp = await prisma.schoolSetUp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SchoolSetUps and only return the `id`
     * const schoolSetUpWithIdOnly = await prisma.schoolSetUp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchoolSetUpUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolSetUpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolSetUpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SchoolSetUp.
     * @param {SchoolSetUpUpsertArgs} args - Arguments to update or create a SchoolSetUp.
     * @example
     * // Update or create a SchoolSetUp
     * const schoolSetUp = await prisma.schoolSetUp.upsert({
     *   create: {
     *     // ... data to create a SchoolSetUp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolSetUp we want to update
     *   }
     * })
     */
    upsert<T extends SchoolSetUpUpsertArgs>(args: SelectSubset<T, SchoolSetUpUpsertArgs<ExtArgs>>): Prisma__SchoolSetUpClient<$Result.GetResult<Prisma.$SchoolSetUpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SchoolSetUps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSetUpCountArgs} args - Arguments to filter SchoolSetUps to count.
     * @example
     * // Count the number of SchoolSetUps
     * const count = await prisma.schoolSetUp.count({
     *   where: {
     *     // ... the filter for the SchoolSetUps we want to count
     *   }
     * })
    **/
    count<T extends SchoolSetUpCountArgs>(
      args?: Subset<T, SchoolSetUpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolSetUpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchoolSetUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSetUpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolSetUpAggregateArgs>(args: Subset<T, SchoolSetUpAggregateArgs>): Prisma.PrismaPromise<GetSchoolSetUpAggregateType<T>>

    /**
     * Group by SchoolSetUp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolSetUpGroupByArgs} args - Group by arguments.
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
      T extends SchoolSetUpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolSetUpGroupByArgs['orderBy'] }
        : { orderBy?: SchoolSetUpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolSetUpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolSetUpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchoolSetUp model
   */
  readonly fields: SchoolSetUpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchoolSetUp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolSetUpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SchoolSetUp model
   */
  interface SchoolSetUpFieldRefs {
    readonly id: FieldRef<"SchoolSetUp", 'String'>
    readonly systemId: FieldRef<"SchoolSetUp", 'String'>
    readonly school_name: FieldRef<"SchoolSetUp", 'String'>
    readonly support_Email: FieldRef<"SchoolSetUp", 'String'>
    readonly address: FieldRef<"SchoolSetUp", 'String'>
    readonly contact_Number: FieldRef<"SchoolSetUp", 'String'>
    readonly createdAt: FieldRef<"SchoolSetUp", 'DateTime'>
    readonly updatedAt: FieldRef<"SchoolSetUp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SchoolSetUp findUnique
   */
  export type SchoolSetUpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSetUp
     */
    select?: SchoolSetUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSetUp
     */
    omit?: SchoolSetUpOmit<ExtArgs> | null
    /**
     * Filter, which SchoolSetUp to fetch.
     */
    where: SchoolSetUpWhereUniqueInput
  }

  /**
   * SchoolSetUp findUniqueOrThrow
   */
  export type SchoolSetUpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSetUp
     */
    select?: SchoolSetUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSetUp
     */
    omit?: SchoolSetUpOmit<ExtArgs> | null
    /**
     * Filter, which SchoolSetUp to fetch.
     */
    where: SchoolSetUpWhereUniqueInput
  }

  /**
   * SchoolSetUp findFirst
   */
  export type SchoolSetUpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSetUp
     */
    select?: SchoolSetUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSetUp
     */
    omit?: SchoolSetUpOmit<ExtArgs> | null
    /**
     * Filter, which SchoolSetUp to fetch.
     */
    where?: SchoolSetUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolSetUps to fetch.
     */
    orderBy?: SchoolSetUpOrderByWithRelationInput | SchoolSetUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolSetUps.
     */
    cursor?: SchoolSetUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolSetUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolSetUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolSetUps.
     */
    distinct?: SchoolSetUpScalarFieldEnum | SchoolSetUpScalarFieldEnum[]
  }

  /**
   * SchoolSetUp findFirstOrThrow
   */
  export type SchoolSetUpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSetUp
     */
    select?: SchoolSetUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSetUp
     */
    omit?: SchoolSetUpOmit<ExtArgs> | null
    /**
     * Filter, which SchoolSetUp to fetch.
     */
    where?: SchoolSetUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolSetUps to fetch.
     */
    orderBy?: SchoolSetUpOrderByWithRelationInput | SchoolSetUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolSetUps.
     */
    cursor?: SchoolSetUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolSetUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolSetUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolSetUps.
     */
    distinct?: SchoolSetUpScalarFieldEnum | SchoolSetUpScalarFieldEnum[]
  }

  /**
   * SchoolSetUp findMany
   */
  export type SchoolSetUpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSetUp
     */
    select?: SchoolSetUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSetUp
     */
    omit?: SchoolSetUpOmit<ExtArgs> | null
    /**
     * Filter, which SchoolSetUps to fetch.
     */
    where?: SchoolSetUpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolSetUps to fetch.
     */
    orderBy?: SchoolSetUpOrderByWithRelationInput | SchoolSetUpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchoolSetUps.
     */
    cursor?: SchoolSetUpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolSetUps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolSetUps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolSetUps.
     */
    distinct?: SchoolSetUpScalarFieldEnum | SchoolSetUpScalarFieldEnum[]
  }

  /**
   * SchoolSetUp create
   */
  export type SchoolSetUpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSetUp
     */
    select?: SchoolSetUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSetUp
     */
    omit?: SchoolSetUpOmit<ExtArgs> | null
    /**
     * The data needed to create a SchoolSetUp.
     */
    data: XOR<SchoolSetUpCreateInput, SchoolSetUpUncheckedCreateInput>
  }

  /**
   * SchoolSetUp createMany
   */
  export type SchoolSetUpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolSetUps.
     */
    data: SchoolSetUpCreateManyInput | SchoolSetUpCreateManyInput[]
  }

  /**
   * SchoolSetUp createManyAndReturn
   */
  export type SchoolSetUpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSetUp
     */
    select?: SchoolSetUpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSetUp
     */
    omit?: SchoolSetUpOmit<ExtArgs> | null
    /**
     * The data used to create many SchoolSetUps.
     */
    data: SchoolSetUpCreateManyInput | SchoolSetUpCreateManyInput[]
  }

  /**
   * SchoolSetUp update
   */
  export type SchoolSetUpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSetUp
     */
    select?: SchoolSetUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSetUp
     */
    omit?: SchoolSetUpOmit<ExtArgs> | null
    /**
     * The data needed to update a SchoolSetUp.
     */
    data: XOR<SchoolSetUpUpdateInput, SchoolSetUpUncheckedUpdateInput>
    /**
     * Choose, which SchoolSetUp to update.
     */
    where: SchoolSetUpWhereUniqueInput
  }

  /**
   * SchoolSetUp updateMany
   */
  export type SchoolSetUpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolSetUps.
     */
    data: XOR<SchoolSetUpUpdateManyMutationInput, SchoolSetUpUncheckedUpdateManyInput>
    /**
     * Filter which SchoolSetUps to update
     */
    where?: SchoolSetUpWhereInput
    /**
     * Limit how many SchoolSetUps to update.
     */
    limit?: number
  }

  /**
   * SchoolSetUp updateManyAndReturn
   */
  export type SchoolSetUpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSetUp
     */
    select?: SchoolSetUpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSetUp
     */
    omit?: SchoolSetUpOmit<ExtArgs> | null
    /**
     * The data used to update SchoolSetUps.
     */
    data: XOR<SchoolSetUpUpdateManyMutationInput, SchoolSetUpUncheckedUpdateManyInput>
    /**
     * Filter which SchoolSetUps to update
     */
    where?: SchoolSetUpWhereInput
    /**
     * Limit how many SchoolSetUps to update.
     */
    limit?: number
  }

  /**
   * SchoolSetUp upsert
   */
  export type SchoolSetUpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSetUp
     */
    select?: SchoolSetUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSetUp
     */
    omit?: SchoolSetUpOmit<ExtArgs> | null
    /**
     * The filter to search for the SchoolSetUp to update in case it exists.
     */
    where: SchoolSetUpWhereUniqueInput
    /**
     * In case the SchoolSetUp found by the `where` argument doesn't exist, create a new SchoolSetUp with this data.
     */
    create: XOR<SchoolSetUpCreateInput, SchoolSetUpUncheckedCreateInput>
    /**
     * In case the SchoolSetUp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolSetUpUpdateInput, SchoolSetUpUncheckedUpdateInput>
  }

  /**
   * SchoolSetUp delete
   */
  export type SchoolSetUpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSetUp
     */
    select?: SchoolSetUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSetUp
     */
    omit?: SchoolSetUpOmit<ExtArgs> | null
    /**
     * Filter which SchoolSetUp to delete.
     */
    where: SchoolSetUpWhereUniqueInput
  }

  /**
   * SchoolSetUp deleteMany
   */
  export type SchoolSetUpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolSetUps to delete
     */
    where?: SchoolSetUpWhereInput
    /**
     * Limit how many SchoolSetUps to delete.
     */
    limit?: number
  }

  /**
   * SchoolSetUp without action
   */
  export type SchoolSetUpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolSetUp
     */
    select?: SchoolSetUpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SchoolSetUp
     */
    omit?: SchoolSetUpOmit<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    Total_amount: number | null
    Amount_paid: number | null
    Remaining_percentage: number | null
    remaining_amount: number | null
  }

  export type StudentSumAggregateOutputType = {
    Total_amount: number | null
    Amount_paid: number | null
    Remaining_percentage: number | null
    remaining_amount: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    mobile: string | null
    email: string | null
    packageId: string | null
    package_name: string | null
    Enrollment_status: $Enums.Enrollment_status | null
    Course_Start_date: Date | null
    Course_End_Date: Date | null
    Assigned_Instructor: string | null
    Total_amount: number | null
    Amount_paid: number | null
    Remaining_percentage: number | null
    remaining_amount: number | null
    Thank_you_msg: string | null
    Welcome_msg: string | null
    Remainder_msg: string | null
    Balance_remaining_date: Date | null
    Assigned_car_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mobile: string | null
    email: string | null
    packageId: string | null
    package_name: string | null
    Enrollment_status: $Enums.Enrollment_status | null
    Course_Start_date: Date | null
    Course_End_Date: Date | null
    Assigned_Instructor: string | null
    Total_amount: number | null
    Amount_paid: number | null
    Remaining_percentage: number | null
    remaining_amount: number | null
    Thank_you_msg: string | null
    Welcome_msg: string | null
    Remainder_msg: string | null
    Balance_remaining_date: Date | null
    Assigned_car_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    mobile: number
    email: number
    packageId: number
    package_name: number
    Enrollment_status: number
    Course_Start_date: number
    Course_End_Date: number
    Assigned_Instructor: number
    Total_amount: number
    Amount_paid: number
    Remaining_percentage: number
    remaining_amount: number
    Thank_you_msg: number
    Welcome_msg: number
    Remainder_msg: number
    Balance_remaining_date: number
    Assigned_car_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    Total_amount?: true
    Amount_paid?: true
    Remaining_percentage?: true
    remaining_amount?: true
  }

  export type StudentSumAggregateInputType = {
    Total_amount?: true
    Amount_paid?: true
    Remaining_percentage?: true
    remaining_amount?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    email?: true
    packageId?: true
    package_name?: true
    Enrollment_status?: true
    Course_Start_date?: true
    Course_End_Date?: true
    Assigned_Instructor?: true
    Total_amount?: true
    Amount_paid?: true
    Remaining_percentage?: true
    remaining_amount?: true
    Thank_you_msg?: true
    Welcome_msg?: true
    Remainder_msg?: true
    Balance_remaining_date?: true
    Assigned_car_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    email?: true
    packageId?: true
    package_name?: true
    Enrollment_status?: true
    Course_Start_date?: true
    Course_End_Date?: true
    Assigned_Instructor?: true
    Total_amount?: true
    Amount_paid?: true
    Remaining_percentage?: true
    remaining_amount?: true
    Thank_you_msg?: true
    Welcome_msg?: true
    Remainder_msg?: true
    Balance_remaining_date?: true
    Assigned_car_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    email?: true
    packageId?: true
    package_name?: true
    Enrollment_status?: true
    Course_Start_date?: true
    Course_End_Date?: true
    Assigned_Instructor?: true
    Total_amount?: true
    Amount_paid?: true
    Remaining_percentage?: true
    remaining_amount?: true
    Thank_you_msg?: true
    Welcome_msg?: true
    Remainder_msg?: true
    Balance_remaining_date?: true
    Assigned_car_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    mobile: string
    email: string
    packageId: string | null
    package_name: string | null
    Enrollment_status: $Enums.Enrollment_status
    Course_Start_date: Date | null
    Course_End_Date: Date | null
    Assigned_Instructor: string | null
    Total_amount: number
    Amount_paid: number
    Remaining_percentage: number
    remaining_amount: number
    Thank_you_msg: string
    Welcome_msg: string
    Remainder_msg: string
    Balance_remaining_date: Date | null
    Assigned_car_id: string
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    packageId?: boolean
    package_name?: boolean
    Enrollment_status?: boolean
    Course_Start_date?: boolean
    Course_End_Date?: boolean
    Assigned_Instructor?: boolean
    Total_amount?: boolean
    Amount_paid?: boolean
    Remaining_percentage?: boolean
    remaining_amount?: boolean
    Thank_you_msg?: boolean
    Welcome_msg?: boolean
    Remainder_msg?: boolean
    Balance_remaining_date?: boolean
    Assigned_car_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    packageId?: boolean
    package_name?: boolean
    Enrollment_status?: boolean
    Course_Start_date?: boolean
    Course_End_Date?: boolean
    Assigned_Instructor?: boolean
    Total_amount?: boolean
    Amount_paid?: boolean
    Remaining_percentage?: boolean
    remaining_amount?: boolean
    Thank_you_msg?: boolean
    Welcome_msg?: boolean
    Remainder_msg?: boolean
    Balance_remaining_date?: boolean
    Assigned_car_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    packageId?: boolean
    package_name?: boolean
    Enrollment_status?: boolean
    Course_Start_date?: boolean
    Course_End_Date?: boolean
    Assigned_Instructor?: boolean
    Total_amount?: boolean
    Amount_paid?: boolean
    Remaining_percentage?: boolean
    remaining_amount?: boolean
    Thank_you_msg?: boolean
    Welcome_msg?: boolean
    Remainder_msg?: boolean
    Balance_remaining_date?: boolean
    Assigned_car_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    packageId?: boolean
    package_name?: boolean
    Enrollment_status?: boolean
    Course_Start_date?: boolean
    Course_End_Date?: boolean
    Assigned_Instructor?: boolean
    Total_amount?: boolean
    Amount_paid?: boolean
    Remaining_percentage?: boolean
    remaining_amount?: boolean
    Thank_you_msg?: boolean
    Welcome_msg?: boolean
    Remainder_msg?: boolean
    Balance_remaining_date?: boolean
    Assigned_car_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mobile" | "email" | "packageId" | "package_name" | "Enrollment_status" | "Course_Start_date" | "Course_End_Date" | "Assigned_Instructor" | "Total_amount" | "Amount_paid" | "Remaining_percentage" | "remaining_amount" | "Thank_you_msg" | "Welcome_msg" | "Remainder_msg" | "Balance_remaining_date" | "Assigned_car_id" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mobile: string
      email: string
      packageId: string | null
      package_name: string | null
      Enrollment_status: $Enums.Enrollment_status
      Course_Start_date: Date | null
      Course_End_Date: Date | null
      Assigned_Instructor: string | null
      Total_amount: number
      Amount_paid: number
      Remaining_percentage: number
      remaining_amount: number
      Thank_you_msg: string
      Welcome_msg: string
      Remainder_msg: string
      Balance_remaining_date: Date | null
      Assigned_car_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly mobile: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly packageId: FieldRef<"Student", 'String'>
    readonly package_name: FieldRef<"Student", 'String'>
    readonly Enrollment_status: FieldRef<"Student", 'Enrollment_status'>
    readonly Course_Start_date: FieldRef<"Student", 'DateTime'>
    readonly Course_End_Date: FieldRef<"Student", 'DateTime'>
    readonly Assigned_Instructor: FieldRef<"Student", 'String'>
    readonly Total_amount: FieldRef<"Student", 'Int'>
    readonly Amount_paid: FieldRef<"Student", 'Int'>
    readonly Remaining_percentage: FieldRef<"Student", 'Int'>
    readonly remaining_amount: FieldRef<"Student", 'Int'>
    readonly Thank_you_msg: FieldRef<"Student", 'String'>
    readonly Welcome_msg: FieldRef<"Student", 'String'>
    readonly Remainder_msg: FieldRef<"Student", 'String'>
    readonly Balance_remaining_date: FieldRef<"Student", 'DateTime'>
    readonly Assigned_car_id: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PaymentTakenScalarFieldEnum: {
    id: 'id',
    paymentCycleId: 'paymentCycleId',
    amount: 'amount',
    takenAt: 'takenAt',
    note: 'note'
  };

  export type PaymentTakenScalarFieldEnum = (typeof PaymentTakenScalarFieldEnum)[keyof typeof PaymentTakenScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    instructorId: 'instructorId',
    date: 'date',
    status: 'status',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    name: 'name',
    transmission: 'transmission',
    assigned_instructor: 'assigned_instructor',
    car_year: 'car_year',
    car_Number: 'car_Number',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const SetupChecklistScalarFieldEnum: {
    id: 'id',
    schoolSetup: 'schoolSetup',
    instructorSetup: 'instructorSetup',
    carSetup: 'carSetup',
    packageSetup: 'packageSetup',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SetupChecklistScalarFieldEnum = (typeof SetupChecklistScalarFieldEnum)[keyof typeof SetupChecklistScalarFieldEnum]


  export const InstructorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mobile: 'mobile',
    licenseNumber: 'licenseNumber',
    jobType: 'jobType',
    joiningDate: 'joiningDate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstructorScalarFieldEnum = (typeof InstructorScalarFieldEnum)[keyof typeof InstructorScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    duration: 'duration',
    isActive: 'isActive'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const PaymentCycleScalarFieldEnum: {
    id: 'id',
    instructorId: 'instructorId',
    month: 'month',
    amountTaken: 'amountTaken',
    baseAmount: 'baseAmount',
    deductions: 'deductions',
    bonus: 'bonus',
    netAmount: 'netAmount',
    paidAt: 'paidAt',
    note: 'note',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentCycleScalarFieldEnum = (typeof PaymentCycleScalarFieldEnum)[keyof typeof PaymentCycleScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    Batch_time: 'Batch_time',
    Duration_time: 'Duration_time',
    Car_id: 'Car_id'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const SchoolSetUpScalarFieldEnum: {
    id: 'id',
    systemId: 'systemId',
    school_name: 'school_name',
    support_Email: 'support_Email',
    address: 'address',
    contact_Number: 'contact_Number',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolSetUpScalarFieldEnum = (typeof SchoolSetUpScalarFieldEnum)[keyof typeof SchoolSetUpScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mobile: 'mobile',
    email: 'email',
    packageId: 'packageId',
    package_name: 'package_name',
    Enrollment_status: 'Enrollment_status',
    Course_Start_date: 'Course_Start_date',
    Course_End_Date: 'Course_End_Date',
    Assigned_Instructor: 'Assigned_Instructor',
    Total_amount: 'Total_amount',
    Amount_paid: 'Amount_paid',
    Remaining_percentage: 'Remaining_percentage',
    remaining_amount: 'remaining_amount',
    Thank_you_msg: 'Thank_you_msg',
    Welcome_msg: 'Welcome_msg',
    Remainder_msg: 'Remainder_msg',
    Balance_remaining_date: 'Balance_remaining_date',
    Assigned_car_id: 'Assigned_car_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


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
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'JobType'
   */
  export type EnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'Enrollment_status'
   */
  export type EnumEnrollment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Enrollment_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PaymentTakenWhereInput = {
    AND?: PaymentTakenWhereInput | PaymentTakenWhereInput[]
    OR?: PaymentTakenWhereInput[]
    NOT?: PaymentTakenWhereInput | PaymentTakenWhereInput[]
    id?: StringFilter<"PaymentTaken"> | string
    paymentCycleId?: StringFilter<"PaymentTaken"> | string
    amount?: IntFilter<"PaymentTaken"> | number
    takenAt?: DateTimeFilter<"PaymentTaken"> | Date | string
    note?: StringFilter<"PaymentTaken"> | string
    paymentCycle?: XOR<PaymentCycleScalarRelationFilter, PaymentCycleWhereInput>
  }

  export type PaymentTakenOrderByWithRelationInput = {
    id?: SortOrder
    paymentCycleId?: SortOrder
    amount?: SortOrder
    takenAt?: SortOrder
    note?: SortOrder
    paymentCycle?: PaymentCycleOrderByWithRelationInput
  }

  export type PaymentTakenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentTakenWhereInput | PaymentTakenWhereInput[]
    OR?: PaymentTakenWhereInput[]
    NOT?: PaymentTakenWhereInput | PaymentTakenWhereInput[]
    paymentCycleId?: StringFilter<"PaymentTaken"> | string
    amount?: IntFilter<"PaymentTaken"> | number
    takenAt?: DateTimeFilter<"PaymentTaken"> | Date | string
    note?: StringFilter<"PaymentTaken"> | string
    paymentCycle?: XOR<PaymentCycleScalarRelationFilter, PaymentCycleWhereInput>
  }, "id">

  export type PaymentTakenOrderByWithAggregationInput = {
    id?: SortOrder
    paymentCycleId?: SortOrder
    amount?: SortOrder
    takenAt?: SortOrder
    note?: SortOrder
    _count?: PaymentTakenCountOrderByAggregateInput
    _avg?: PaymentTakenAvgOrderByAggregateInput
    _max?: PaymentTakenMaxOrderByAggregateInput
    _min?: PaymentTakenMinOrderByAggregateInput
    _sum?: PaymentTakenSumOrderByAggregateInput
  }

  export type PaymentTakenScalarWhereWithAggregatesInput = {
    AND?: PaymentTakenScalarWhereWithAggregatesInput | PaymentTakenScalarWhereWithAggregatesInput[]
    OR?: PaymentTakenScalarWhereWithAggregatesInput[]
    NOT?: PaymentTakenScalarWhereWithAggregatesInput | PaymentTakenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentTaken"> | string
    paymentCycleId?: StringWithAggregatesFilter<"PaymentTaken"> | string
    amount?: IntWithAggregatesFilter<"PaymentTaken"> | number
    takenAt?: DateTimeWithAggregatesFilter<"PaymentTaken"> | Date | string
    note?: StringWithAggregatesFilter<"PaymentTaken"> | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    instructorId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    note?: StringFilter<"Attendance"> | string
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    instructorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    instructorId_date?: AttendanceInstructorIdDateCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    instructorId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    note?: StringFilter<"Attendance"> | string
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
  }, "id" | "instructorId_date">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    instructorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    instructorId?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusWithAggregatesFilter<"Attendance"> | $Enums.AttendanceStatus
    note?: StringWithAggregatesFilter<"Attendance"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: StringFilter<"Car"> | string
    name?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    assigned_instructor?: StringFilter<"Car"> | string
    car_year?: StringFilter<"Car"> | string
    car_Number?: StringFilter<"Car"> | string
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    transmission?: SortOrder
    assigned_instructor?: SortOrder
    car_year?: SortOrder
    car_Number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    name?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    assigned_instructor?: StringFilter<"Car"> | string
    car_year?: StringFilter<"Car"> | string
    car_Number?: StringFilter<"Car"> | string
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
  }, "id">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    transmission?: SortOrder
    assigned_instructor?: SortOrder
    car_year?: SortOrder
    car_Number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Car"> | string
    name?: StringWithAggregatesFilter<"Car"> | string
    transmission?: StringWithAggregatesFilter<"Car"> | string
    assigned_instructor?: StringWithAggregatesFilter<"Car"> | string
    car_year?: StringWithAggregatesFilter<"Car"> | string
    car_Number?: StringWithAggregatesFilter<"Car"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
  }

  export type SetupChecklistWhereInput = {
    AND?: SetupChecklistWhereInput | SetupChecklistWhereInput[]
    OR?: SetupChecklistWhereInput[]
    NOT?: SetupChecklistWhereInput | SetupChecklistWhereInput[]
    id?: StringFilter<"SetupChecklist"> | string
    schoolSetup?: BoolFilter<"SetupChecklist"> | boolean
    instructorSetup?: BoolFilter<"SetupChecklist"> | boolean
    carSetup?: BoolFilter<"SetupChecklist"> | boolean
    packageSetup?: BoolFilter<"SetupChecklist"> | boolean
    createdAt?: DateTimeFilter<"SetupChecklist"> | Date | string
    updatedAt?: DateTimeFilter<"SetupChecklist"> | Date | string
  }

  export type SetupChecklistOrderByWithRelationInput = {
    id?: SortOrder
    schoolSetup?: SortOrder
    instructorSetup?: SortOrder
    carSetup?: SortOrder
    packageSetup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetupChecklistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SetupChecklistWhereInput | SetupChecklistWhereInput[]
    OR?: SetupChecklistWhereInput[]
    NOT?: SetupChecklistWhereInput | SetupChecklistWhereInput[]
    schoolSetup?: BoolFilter<"SetupChecklist"> | boolean
    instructorSetup?: BoolFilter<"SetupChecklist"> | boolean
    carSetup?: BoolFilter<"SetupChecklist"> | boolean
    packageSetup?: BoolFilter<"SetupChecklist"> | boolean
    createdAt?: DateTimeFilter<"SetupChecklist"> | Date | string
    updatedAt?: DateTimeFilter<"SetupChecklist"> | Date | string
  }, "id">

  export type SetupChecklistOrderByWithAggregationInput = {
    id?: SortOrder
    schoolSetup?: SortOrder
    instructorSetup?: SortOrder
    carSetup?: SortOrder
    packageSetup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SetupChecklistCountOrderByAggregateInput
    _max?: SetupChecklistMaxOrderByAggregateInput
    _min?: SetupChecklistMinOrderByAggregateInput
  }

  export type SetupChecklistScalarWhereWithAggregatesInput = {
    AND?: SetupChecklistScalarWhereWithAggregatesInput | SetupChecklistScalarWhereWithAggregatesInput[]
    OR?: SetupChecklistScalarWhereWithAggregatesInput[]
    NOT?: SetupChecklistScalarWhereWithAggregatesInput | SetupChecklistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SetupChecklist"> | string
    schoolSetup?: BoolWithAggregatesFilter<"SetupChecklist"> | boolean
    instructorSetup?: BoolWithAggregatesFilter<"SetupChecklist"> | boolean
    carSetup?: BoolWithAggregatesFilter<"SetupChecklist"> | boolean
    packageSetup?: BoolWithAggregatesFilter<"SetupChecklist"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SetupChecklist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SetupChecklist"> | Date | string
  }

  export type InstructorWhereInput = {
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    id?: StringFilter<"Instructor"> | string
    name?: StringFilter<"Instructor"> | string
    mobile?: StringFilter<"Instructor"> | string
    licenseNumber?: StringNullableFilter<"Instructor"> | string | null
    jobType?: EnumJobTypeFilter<"Instructor"> | $Enums.JobType
    joiningDate?: DateTimeNullableFilter<"Instructor"> | Date | string | null
    isActive?: BoolFilter<"Instructor"> | boolean
    createdAt?: DateTimeFilter<"Instructor"> | Date | string
    updatedAt?: DateTimeFilter<"Instructor"> | Date | string
    paymentCycles?: PaymentCycleListRelationFilter
  }

  export type InstructorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    jobType?: SortOrder
    joiningDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentCycles?: PaymentCycleOrderByRelationAggregateInput
  }

  export type InstructorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    name?: StringFilter<"Instructor"> | string
    mobile?: StringFilter<"Instructor"> | string
    licenseNumber?: StringNullableFilter<"Instructor"> | string | null
    jobType?: EnumJobTypeFilter<"Instructor"> | $Enums.JobType
    joiningDate?: DateTimeNullableFilter<"Instructor"> | Date | string | null
    isActive?: BoolFilter<"Instructor"> | boolean
    createdAt?: DateTimeFilter<"Instructor"> | Date | string
    updatedAt?: DateTimeFilter<"Instructor"> | Date | string
    paymentCycles?: PaymentCycleListRelationFilter
  }, "id">

  export type InstructorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    jobType?: SortOrder
    joiningDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstructorCountOrderByAggregateInput
    _max?: InstructorMaxOrderByAggregateInput
    _min?: InstructorMinOrderByAggregateInput
  }

  export type InstructorScalarWhereWithAggregatesInput = {
    AND?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    OR?: InstructorScalarWhereWithAggregatesInput[]
    NOT?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Instructor"> | string
    name?: StringWithAggregatesFilter<"Instructor"> | string
    mobile?: StringWithAggregatesFilter<"Instructor"> | string
    licenseNumber?: StringNullableWithAggregatesFilter<"Instructor"> | string | null
    jobType?: EnumJobTypeWithAggregatesFilter<"Instructor"> | $Enums.JobType
    joiningDate?: DateTimeNullableWithAggregatesFilter<"Instructor"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Instructor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Instructor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Instructor"> | Date | string
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: StringFilter<"Package"> | string
    name?: StringFilter<"Package"> | string
    price?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    duration?: IntFilter<"Package"> | number
    isActive?: BoolFilter<"Package"> | boolean
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    isActive?: SortOrder
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    name?: StringFilter<"Package"> | string
    price?: DecimalFilter<"Package"> | Decimal | DecimalJsLike | number | string
    duration?: IntFilter<"Package"> | number
    isActive?: BoolFilter<"Package"> | boolean
  }, "id">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    isActive?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _avg?: PackageAvgOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
    _sum?: PackageSumOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Package"> | string
    name?: StringWithAggregatesFilter<"Package"> | string
    price?: DecimalWithAggregatesFilter<"Package"> | Decimal | DecimalJsLike | number | string
    duration?: IntWithAggregatesFilter<"Package"> | number
    isActive?: BoolWithAggregatesFilter<"Package"> | boolean
  }

  export type PaymentCycleWhereInput = {
    AND?: PaymentCycleWhereInput | PaymentCycleWhereInput[]
    OR?: PaymentCycleWhereInput[]
    NOT?: PaymentCycleWhereInput | PaymentCycleWhereInput[]
    id?: StringFilter<"PaymentCycle"> | string
    instructorId?: StringFilter<"PaymentCycle"> | string
    month?: DateTimeFilter<"PaymentCycle"> | Date | string
    amountTaken?: IntFilter<"PaymentCycle"> | number
    baseAmount?: IntFilter<"PaymentCycle"> | number
    deductions?: IntFilter<"PaymentCycle"> | number
    bonus?: IntFilter<"PaymentCycle"> | number
    netAmount?: IntFilter<"PaymentCycle"> | number
    paidAt?: DateTimeFilter<"PaymentCycle"> | Date | string
    note?: StringFilter<"PaymentCycle"> | string
    status?: EnumPaymentStatusFilter<"PaymentCycle"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"PaymentCycle"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentCycle"> | Date | string
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
    paymentsTaken?: PaymentTakenListRelationFilter
  }

  export type PaymentCycleOrderByWithRelationInput = {
    id?: SortOrder
    instructorId?: SortOrder
    month?: SortOrder
    amountTaken?: SortOrder
    baseAmount?: SortOrder
    deductions?: SortOrder
    bonus?: SortOrder
    netAmount?: SortOrder
    paidAt?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructor?: InstructorOrderByWithRelationInput
    paymentsTaken?: PaymentTakenOrderByRelationAggregateInput
  }

  export type PaymentCycleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    instructorId_month?: PaymentCycleInstructorIdMonthCompoundUniqueInput
    AND?: PaymentCycleWhereInput | PaymentCycleWhereInput[]
    OR?: PaymentCycleWhereInput[]
    NOT?: PaymentCycleWhereInput | PaymentCycleWhereInput[]
    instructorId?: StringFilter<"PaymentCycle"> | string
    month?: DateTimeFilter<"PaymentCycle"> | Date | string
    amountTaken?: IntFilter<"PaymentCycle"> | number
    baseAmount?: IntFilter<"PaymentCycle"> | number
    deductions?: IntFilter<"PaymentCycle"> | number
    bonus?: IntFilter<"PaymentCycle"> | number
    netAmount?: IntFilter<"PaymentCycle"> | number
    paidAt?: DateTimeFilter<"PaymentCycle"> | Date | string
    note?: StringFilter<"PaymentCycle"> | string
    status?: EnumPaymentStatusFilter<"PaymentCycle"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"PaymentCycle"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentCycle"> | Date | string
    instructor?: XOR<InstructorScalarRelationFilter, InstructorWhereInput>
    paymentsTaken?: PaymentTakenListRelationFilter
  }, "id" | "instructorId_month">

  export type PaymentCycleOrderByWithAggregationInput = {
    id?: SortOrder
    instructorId?: SortOrder
    month?: SortOrder
    amountTaken?: SortOrder
    baseAmount?: SortOrder
    deductions?: SortOrder
    bonus?: SortOrder
    netAmount?: SortOrder
    paidAt?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCycleCountOrderByAggregateInput
    _avg?: PaymentCycleAvgOrderByAggregateInput
    _max?: PaymentCycleMaxOrderByAggregateInput
    _min?: PaymentCycleMinOrderByAggregateInput
    _sum?: PaymentCycleSumOrderByAggregateInput
  }

  export type PaymentCycleScalarWhereWithAggregatesInput = {
    AND?: PaymentCycleScalarWhereWithAggregatesInput | PaymentCycleScalarWhereWithAggregatesInput[]
    OR?: PaymentCycleScalarWhereWithAggregatesInput[]
    NOT?: PaymentCycleScalarWhereWithAggregatesInput | PaymentCycleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentCycle"> | string
    instructorId?: StringWithAggregatesFilter<"PaymentCycle"> | string
    month?: DateTimeWithAggregatesFilter<"PaymentCycle"> | Date | string
    amountTaken?: IntWithAggregatesFilter<"PaymentCycle"> | number
    baseAmount?: IntWithAggregatesFilter<"PaymentCycle"> | number
    deductions?: IntWithAggregatesFilter<"PaymentCycle"> | number
    bonus?: IntWithAggregatesFilter<"PaymentCycle"> | number
    netAmount?: IntWithAggregatesFilter<"PaymentCycle"> | number
    paidAt?: DateTimeWithAggregatesFilter<"PaymentCycle"> | Date | string
    note?: StringWithAggregatesFilter<"PaymentCycle"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"PaymentCycle"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"PaymentCycle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentCycle"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    student_id?: StringFilter<"Schedule"> | string
    Batch_time?: StringFilter<"Schedule"> | string
    Duration_time?: StringFilter<"Schedule"> | string
    Car_id?: StringFilter<"Schedule"> | string
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    Batch_time?: SortOrder
    Duration_time?: SortOrder
    Car_id?: SortOrder
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    student_id?: StringFilter<"Schedule"> | string
    Batch_time?: StringFilter<"Schedule"> | string
    Duration_time?: StringFilter<"Schedule"> | string
    Car_id?: StringFilter<"Schedule"> | string
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    Batch_time?: SortOrder
    Duration_time?: SortOrder
    Car_id?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    student_id?: StringWithAggregatesFilter<"Schedule"> | string
    Batch_time?: StringWithAggregatesFilter<"Schedule"> | string
    Duration_time?: StringWithAggregatesFilter<"Schedule"> | string
    Car_id?: StringWithAggregatesFilter<"Schedule"> | string
  }

  export type SchoolSetUpWhereInput = {
    AND?: SchoolSetUpWhereInput | SchoolSetUpWhereInput[]
    OR?: SchoolSetUpWhereInput[]
    NOT?: SchoolSetUpWhereInput | SchoolSetUpWhereInput[]
    id?: StringFilter<"SchoolSetUp"> | string
    systemId?: StringNullableFilter<"SchoolSetUp"> | string | null
    school_name?: StringFilter<"SchoolSetUp"> | string
    support_Email?: StringFilter<"SchoolSetUp"> | string
    address?: StringFilter<"SchoolSetUp"> | string
    contact_Number?: StringFilter<"SchoolSetUp"> | string
    createdAt?: DateTimeFilter<"SchoolSetUp"> | Date | string
    updatedAt?: DateTimeFilter<"SchoolSetUp"> | Date | string
  }

  export type SchoolSetUpOrderByWithRelationInput = {
    id?: SortOrder
    systemId?: SortOrderInput | SortOrder
    school_name?: SortOrder
    support_Email?: SortOrder
    address?: SortOrder
    contact_Number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolSetUpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchoolSetUpWhereInput | SchoolSetUpWhereInput[]
    OR?: SchoolSetUpWhereInput[]
    NOT?: SchoolSetUpWhereInput | SchoolSetUpWhereInput[]
    systemId?: StringNullableFilter<"SchoolSetUp"> | string | null
    school_name?: StringFilter<"SchoolSetUp"> | string
    support_Email?: StringFilter<"SchoolSetUp"> | string
    address?: StringFilter<"SchoolSetUp"> | string
    contact_Number?: StringFilter<"SchoolSetUp"> | string
    createdAt?: DateTimeFilter<"SchoolSetUp"> | Date | string
    updatedAt?: DateTimeFilter<"SchoolSetUp"> | Date | string
  }, "id">

  export type SchoolSetUpOrderByWithAggregationInput = {
    id?: SortOrder
    systemId?: SortOrderInput | SortOrder
    school_name?: SortOrder
    support_Email?: SortOrder
    address?: SortOrder
    contact_Number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolSetUpCountOrderByAggregateInput
    _max?: SchoolSetUpMaxOrderByAggregateInput
    _min?: SchoolSetUpMinOrderByAggregateInput
  }

  export type SchoolSetUpScalarWhereWithAggregatesInput = {
    AND?: SchoolSetUpScalarWhereWithAggregatesInput | SchoolSetUpScalarWhereWithAggregatesInput[]
    OR?: SchoolSetUpScalarWhereWithAggregatesInput[]
    NOT?: SchoolSetUpScalarWhereWithAggregatesInput | SchoolSetUpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SchoolSetUp"> | string
    systemId?: StringNullableWithAggregatesFilter<"SchoolSetUp"> | string | null
    school_name?: StringWithAggregatesFilter<"SchoolSetUp"> | string
    support_Email?: StringWithAggregatesFilter<"SchoolSetUp"> | string
    address?: StringWithAggregatesFilter<"SchoolSetUp"> | string
    contact_Number?: StringWithAggregatesFilter<"SchoolSetUp"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SchoolSetUp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SchoolSetUp"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    mobile?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    packageId?: StringNullableFilter<"Student"> | string | null
    package_name?: StringNullableFilter<"Student"> | string | null
    Enrollment_status?: EnumEnrollment_statusFilter<"Student"> | $Enums.Enrollment_status
    Course_Start_date?: DateTimeNullableFilter<"Student"> | Date | string | null
    Course_End_Date?: DateTimeNullableFilter<"Student"> | Date | string | null
    Assigned_Instructor?: StringNullableFilter<"Student"> | string | null
    Total_amount?: IntFilter<"Student"> | number
    Amount_paid?: IntFilter<"Student"> | number
    Remaining_percentage?: IntFilter<"Student"> | number
    remaining_amount?: IntFilter<"Student"> | number
    Thank_you_msg?: StringFilter<"Student"> | string
    Welcome_msg?: StringFilter<"Student"> | string
    Remainder_msg?: StringFilter<"Student"> | string
    Balance_remaining_date?: DateTimeNullableFilter<"Student"> | Date | string | null
    Assigned_car_id?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    packageId?: SortOrderInput | SortOrder
    package_name?: SortOrderInput | SortOrder
    Enrollment_status?: SortOrder
    Course_Start_date?: SortOrderInput | SortOrder
    Course_End_Date?: SortOrderInput | SortOrder
    Assigned_Instructor?: SortOrderInput | SortOrder
    Total_amount?: SortOrder
    Amount_paid?: SortOrder
    Remaining_percentage?: SortOrder
    remaining_amount?: SortOrder
    Thank_you_msg?: SortOrder
    Welcome_msg?: SortOrder
    Remainder_msg?: SortOrder
    Balance_remaining_date?: SortOrderInput | SortOrder
    Assigned_car_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    mobile?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    packageId?: StringNullableFilter<"Student"> | string | null
    package_name?: StringNullableFilter<"Student"> | string | null
    Enrollment_status?: EnumEnrollment_statusFilter<"Student"> | $Enums.Enrollment_status
    Course_Start_date?: DateTimeNullableFilter<"Student"> | Date | string | null
    Course_End_Date?: DateTimeNullableFilter<"Student"> | Date | string | null
    Assigned_Instructor?: StringNullableFilter<"Student"> | string | null
    Total_amount?: IntFilter<"Student"> | number
    Amount_paid?: IntFilter<"Student"> | number
    Remaining_percentage?: IntFilter<"Student"> | number
    remaining_amount?: IntFilter<"Student"> | number
    Thank_you_msg?: StringFilter<"Student"> | string
    Welcome_msg?: StringFilter<"Student"> | string
    Remainder_msg?: StringFilter<"Student"> | string
    Balance_remaining_date?: DateTimeNullableFilter<"Student"> | Date | string | null
    Assigned_car_id?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    packageId?: SortOrderInput | SortOrder
    package_name?: SortOrderInput | SortOrder
    Enrollment_status?: SortOrder
    Course_Start_date?: SortOrderInput | SortOrder
    Course_End_Date?: SortOrderInput | SortOrder
    Assigned_Instructor?: SortOrderInput | SortOrder
    Total_amount?: SortOrder
    Amount_paid?: SortOrder
    Remaining_percentage?: SortOrder
    remaining_amount?: SortOrder
    Thank_you_msg?: SortOrder
    Welcome_msg?: SortOrder
    Remainder_msg?: SortOrder
    Balance_remaining_date?: SortOrderInput | SortOrder
    Assigned_car_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    mobile?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    packageId?: StringNullableWithAggregatesFilter<"Student"> | string | null
    package_name?: StringNullableWithAggregatesFilter<"Student"> | string | null
    Enrollment_status?: EnumEnrollment_statusWithAggregatesFilter<"Student"> | $Enums.Enrollment_status
    Course_Start_date?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    Course_End_Date?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    Assigned_Instructor?: StringNullableWithAggregatesFilter<"Student"> | string | null
    Total_amount?: IntWithAggregatesFilter<"Student"> | number
    Amount_paid?: IntWithAggregatesFilter<"Student"> | number
    Remaining_percentage?: IntWithAggregatesFilter<"Student"> | number
    remaining_amount?: IntWithAggregatesFilter<"Student"> | number
    Thank_you_msg?: StringWithAggregatesFilter<"Student"> | string
    Welcome_msg?: StringWithAggregatesFilter<"Student"> | string
    Remainder_msg?: StringWithAggregatesFilter<"Student"> | string
    Balance_remaining_date?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    Assigned_car_id?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type PaymentTakenCreateInput = {
    id?: string
    amount: number
    takenAt?: Date | string
    note: string
    paymentCycle: PaymentCycleCreateNestedOneWithoutPaymentsTakenInput
  }

  export type PaymentTakenUncheckedCreateInput = {
    id?: string
    paymentCycleId: string
    amount: number
    takenAt?: Date | string
    note: string
  }

  export type PaymentTakenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    paymentCycle?: PaymentCycleUpdateOneRequiredWithoutPaymentsTakenNestedInput
  }

  export type PaymentTakenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentCycleId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentTakenCreateManyInput = {
    id?: string
    paymentCycleId: string
    amount: number
    takenAt?: Date | string
    note: string
  }

  export type PaymentTakenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentTakenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentCycleId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateInput = {
    id?: string
    instructorId: string
    date: Date | string
    status?: $Enums.AttendanceStatus
    note: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    instructorId: string
    date: Date | string
    status?: $Enums.AttendanceStatus
    note: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    instructorId: string
    date: Date | string
    status?: $Enums.AttendanceStatus
    note: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateInput = {
    id?: string
    name: string
    transmission: string
    assigned_instructor: string
    car_year: string
    car_Number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUncheckedCreateInput = {
    id?: string
    name: string
    transmission: string
    assigned_instructor: string
    car_year: string
    car_Number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    assigned_instructor?: StringFieldUpdateOperationsInput | string
    car_year?: StringFieldUpdateOperationsInput | string
    car_Number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    assigned_instructor?: StringFieldUpdateOperationsInput | string
    car_year?: StringFieldUpdateOperationsInput | string
    car_Number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateManyInput = {
    id?: string
    name: string
    transmission: string
    assigned_instructor: string
    car_year: string
    car_Number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    assigned_instructor?: StringFieldUpdateOperationsInput | string
    car_year?: StringFieldUpdateOperationsInput | string
    car_Number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    assigned_instructor?: StringFieldUpdateOperationsInput | string
    car_year?: StringFieldUpdateOperationsInput | string
    car_Number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetupChecklistCreateInput = {
    id?: string
    schoolSetup?: boolean
    instructorSetup?: boolean
    carSetup?: boolean
    packageSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetupChecklistUncheckedCreateInput = {
    id?: string
    schoolSetup?: boolean
    instructorSetup?: boolean
    carSetup?: boolean
    packageSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetupChecklistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolSetup?: BoolFieldUpdateOperationsInput | boolean
    instructorSetup?: BoolFieldUpdateOperationsInput | boolean
    carSetup?: BoolFieldUpdateOperationsInput | boolean
    packageSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetupChecklistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolSetup?: BoolFieldUpdateOperationsInput | boolean
    instructorSetup?: BoolFieldUpdateOperationsInput | boolean
    carSetup?: BoolFieldUpdateOperationsInput | boolean
    packageSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetupChecklistCreateManyInput = {
    id?: string
    schoolSetup?: boolean
    instructorSetup?: boolean
    carSetup?: boolean
    packageSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SetupChecklistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolSetup?: BoolFieldUpdateOperationsInput | boolean
    instructorSetup?: BoolFieldUpdateOperationsInput | boolean
    carSetup?: BoolFieldUpdateOperationsInput | boolean
    packageSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SetupChecklistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolSetup?: BoolFieldUpdateOperationsInput | boolean
    instructorSetup?: BoolFieldUpdateOperationsInput | boolean
    carSetup?: BoolFieldUpdateOperationsInput | boolean
    packageSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorCreateInput = {
    id?: string
    name: string
    mobile: string
    licenseNumber?: string | null
    jobType?: $Enums.JobType
    joiningDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentCycles?: PaymentCycleCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUncheckedCreateInput = {
    id?: string
    name: string
    mobile: string
    licenseNumber?: string | null
    jobType?: $Enums.JobType
    joiningDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentCycles?: PaymentCycleUncheckedCreateNestedManyWithoutInstructorInput
  }

  export type InstructorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentCycles?: PaymentCycleUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentCycles?: PaymentCycleUncheckedUpdateManyWithoutInstructorNestedInput
  }

  export type InstructorCreateManyInput = {
    id?: string
    name: string
    mobile: string
    licenseNumber?: string | null
    jobType?: $Enums.JobType
    joiningDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    isActive?: boolean
  }

  export type PackageUncheckedCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    isActive?: boolean
  }

  export type PackageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PackageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PackageCreateManyInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    isActive?: boolean
  }

  export type PackageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PackageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentCycleCreateInput = {
    id?: string
    month: Date | string
    amountTaken?: number
    baseAmount: number
    deductions: number
    bonus: number
    netAmount: number
    paidAt: Date | string
    note: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: InstructorCreateNestedOneWithoutPaymentCyclesInput
    paymentsTaken?: PaymentTakenCreateNestedManyWithoutPaymentCycleInput
  }

  export type PaymentCycleUncheckedCreateInput = {
    id?: string
    instructorId: string
    month: Date | string
    amountTaken?: number
    baseAmount: number
    deductions: number
    bonus: number
    netAmount: number
    paidAt: Date | string
    note: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentsTaken?: PaymentTakenUncheckedCreateNestedManyWithoutPaymentCycleInput
  }

  export type PaymentCycleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amountTaken?: IntFieldUpdateOperationsInput | number
    baseAmount?: IntFieldUpdateOperationsInput | number
    deductions?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    netAmount?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: InstructorUpdateOneRequiredWithoutPaymentCyclesNestedInput
    paymentsTaken?: PaymentTakenUpdateManyWithoutPaymentCycleNestedInput
  }

  export type PaymentCycleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amountTaken?: IntFieldUpdateOperationsInput | number
    baseAmount?: IntFieldUpdateOperationsInput | number
    deductions?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    netAmount?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentsTaken?: PaymentTakenUncheckedUpdateManyWithoutPaymentCycleNestedInput
  }

  export type PaymentCycleCreateManyInput = {
    id?: string
    instructorId: string
    month: Date | string
    amountTaken?: number
    baseAmount: number
    deductions: number
    bonus: number
    netAmount: number
    paidAt: Date | string
    note: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCycleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amountTaken?: IntFieldUpdateOperationsInput | number
    baseAmount?: IntFieldUpdateOperationsInput | number
    deductions?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    netAmount?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCycleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amountTaken?: IntFieldUpdateOperationsInput | number
    baseAmount?: IntFieldUpdateOperationsInput | number
    deductions?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    netAmount?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    id?: string
    student_id: string
    Batch_time: string
    Duration_time: string
    Car_id: string
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    student_id: string
    Batch_time: string
    Duration_time: string
    Car_id: string
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    Batch_time?: StringFieldUpdateOperationsInput | string
    Duration_time?: StringFieldUpdateOperationsInput | string
    Car_id?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    Batch_time?: StringFieldUpdateOperationsInput | string
    Duration_time?: StringFieldUpdateOperationsInput | string
    Car_id?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateManyInput = {
    id?: string
    student_id: string
    Batch_time: string
    Duration_time: string
    Car_id: string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    Batch_time?: StringFieldUpdateOperationsInput | string
    Duration_time?: StringFieldUpdateOperationsInput | string
    Car_id?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    Batch_time?: StringFieldUpdateOperationsInput | string
    Duration_time?: StringFieldUpdateOperationsInput | string
    Car_id?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolSetUpCreateInput = {
    id?: string
    systemId?: string | null
    school_name: string
    support_Email: string
    address: string
    contact_Number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolSetUpUncheckedCreateInput = {
    id?: string
    systemId?: string | null
    school_name: string
    support_Email: string
    address: string
    contact_Number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolSetUpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemId?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: StringFieldUpdateOperationsInput | string
    support_Email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_Number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolSetUpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemId?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: StringFieldUpdateOperationsInput | string
    support_Email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_Number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolSetUpCreateManyInput = {
    id?: string
    systemId?: string | null
    school_name: string
    support_Email: string
    address: string
    contact_Number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolSetUpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemId?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: StringFieldUpdateOperationsInput | string
    support_Email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_Number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolSetUpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemId?: NullableStringFieldUpdateOperationsInput | string | null
    school_name?: StringFieldUpdateOperationsInput | string
    support_Email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contact_Number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    mobile: string
    email: string
    packageId?: string | null
    package_name?: string | null
    Enrollment_status?: $Enums.Enrollment_status
    Course_Start_date?: Date | string | null
    Course_End_Date?: Date | string | null
    Assigned_Instructor?: string | null
    Total_amount: number
    Amount_paid: number
    Remaining_percentage: number
    remaining_amount: number
    Thank_you_msg: string
    Welcome_msg: string
    Remainder_msg: string
    Balance_remaining_date?: Date | string | null
    Assigned_car_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    mobile: string
    email: string
    packageId?: string | null
    package_name?: string | null
    Enrollment_status?: $Enums.Enrollment_status
    Course_Start_date?: Date | string | null
    Course_End_Date?: Date | string | null
    Assigned_Instructor?: string | null
    Total_amount: number
    Amount_paid: number
    Remaining_percentage: number
    remaining_amount: number
    Thank_you_msg: string
    Welcome_msg: string
    Remainder_msg: string
    Balance_remaining_date?: Date | string | null
    Assigned_car_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    package_name?: NullableStringFieldUpdateOperationsInput | string | null
    Enrollment_status?: EnumEnrollment_statusFieldUpdateOperationsInput | $Enums.Enrollment_status
    Course_Start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course_End_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Assigned_Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Total_amount?: IntFieldUpdateOperationsInput | number
    Amount_paid?: IntFieldUpdateOperationsInput | number
    Remaining_percentage?: IntFieldUpdateOperationsInput | number
    remaining_amount?: IntFieldUpdateOperationsInput | number
    Thank_you_msg?: StringFieldUpdateOperationsInput | string
    Welcome_msg?: StringFieldUpdateOperationsInput | string
    Remainder_msg?: StringFieldUpdateOperationsInput | string
    Balance_remaining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Assigned_car_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    package_name?: NullableStringFieldUpdateOperationsInput | string | null
    Enrollment_status?: EnumEnrollment_statusFieldUpdateOperationsInput | $Enums.Enrollment_status
    Course_Start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course_End_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Assigned_Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Total_amount?: IntFieldUpdateOperationsInput | number
    Amount_paid?: IntFieldUpdateOperationsInput | number
    Remaining_percentage?: IntFieldUpdateOperationsInput | number
    remaining_amount?: IntFieldUpdateOperationsInput | number
    Thank_you_msg?: StringFieldUpdateOperationsInput | string
    Welcome_msg?: StringFieldUpdateOperationsInput | string
    Remainder_msg?: StringFieldUpdateOperationsInput | string
    Balance_remaining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Assigned_car_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    mobile: string
    email: string
    packageId?: string | null
    package_name?: string | null
    Enrollment_status?: $Enums.Enrollment_status
    Course_Start_date?: Date | string | null
    Course_End_Date?: Date | string | null
    Assigned_Instructor?: string | null
    Total_amount: number
    Amount_paid: number
    Remaining_percentage: number
    remaining_amount: number
    Thank_you_msg: string
    Welcome_msg: string
    Remainder_msg: string
    Balance_remaining_date?: Date | string | null
    Assigned_car_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    package_name?: NullableStringFieldUpdateOperationsInput | string | null
    Enrollment_status?: EnumEnrollment_statusFieldUpdateOperationsInput | $Enums.Enrollment_status
    Course_Start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course_End_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Assigned_Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Total_amount?: IntFieldUpdateOperationsInput | number
    Amount_paid?: IntFieldUpdateOperationsInput | number
    Remaining_percentage?: IntFieldUpdateOperationsInput | number
    remaining_amount?: IntFieldUpdateOperationsInput | number
    Thank_you_msg?: StringFieldUpdateOperationsInput | string
    Welcome_msg?: StringFieldUpdateOperationsInput | string
    Remainder_msg?: StringFieldUpdateOperationsInput | string
    Balance_remaining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Assigned_car_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    packageId?: NullableStringFieldUpdateOperationsInput | string | null
    package_name?: NullableStringFieldUpdateOperationsInput | string | null
    Enrollment_status?: EnumEnrollment_statusFieldUpdateOperationsInput | $Enums.Enrollment_status
    Course_Start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Course_End_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Assigned_Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Total_amount?: IntFieldUpdateOperationsInput | number
    Amount_paid?: IntFieldUpdateOperationsInput | number
    Remaining_percentage?: IntFieldUpdateOperationsInput | number
    remaining_amount?: IntFieldUpdateOperationsInput | number
    Thank_you_msg?: StringFieldUpdateOperationsInput | string
    Welcome_msg?: StringFieldUpdateOperationsInput | string
    Remainder_msg?: StringFieldUpdateOperationsInput | string
    Balance_remaining_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Assigned_car_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PaymentCycleScalarRelationFilter = {
    is?: PaymentCycleWhereInput
    isNot?: PaymentCycleWhereInput
  }

  export type PaymentTakenCountOrderByAggregateInput = {
    id?: SortOrder
    paymentCycleId?: SortOrder
    amount?: SortOrder
    takenAt?: SortOrder
    note?: SortOrder
  }

  export type PaymentTakenAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentTakenMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentCycleId?: SortOrder
    amount?: SortOrder
    takenAt?: SortOrder
    note?: SortOrder
  }

  export type PaymentTakenMinOrderByAggregateInput = {
    id?: SortOrder
    paymentCycleId?: SortOrder
    amount?: SortOrder
    takenAt?: SortOrder
    note?: SortOrder
  }

  export type PaymentTakenSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type AttendanceInstructorIdDateCompoundUniqueInput = {
    instructorId: string
    date: Date | string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    transmission?: SortOrder
    assigned_instructor?: SortOrder
    car_year?: SortOrder
    car_Number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    transmission?: SortOrder
    assigned_instructor?: SortOrder
    car_year?: SortOrder
    car_Number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    transmission?: SortOrder
    assigned_instructor?: SortOrder
    car_year?: SortOrder
    car_Number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SetupChecklistCountOrderByAggregateInput = {
    id?: SortOrder
    schoolSetup?: SortOrder
    instructorSetup?: SortOrder
    carSetup?: SortOrder
    packageSetup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetupChecklistMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolSetup?: SortOrder
    instructorSetup?: SortOrder
    carSetup?: SortOrder
    packageSetup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SetupChecklistMinOrderByAggregateInput = {
    id?: SortOrder
    schoolSetup?: SortOrder
    instructorSetup?: SortOrder
    carSetup?: SortOrder
    packageSetup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[]
    notIn?: $Enums.JobType[]
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PaymentCycleListRelationFilter = {
    every?: PaymentCycleWhereInput
    some?: PaymentCycleWhereInput
    none?: PaymentCycleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentCycleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    licenseNumber?: SortOrder
    jobType?: SortOrder
    joiningDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    licenseNumber?: SortOrder
    jobType?: SortOrder
    joiningDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    licenseNumber?: SortOrder
    jobType?: SortOrder
    joiningDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[]
    notIn?: $Enums.JobType[]
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    isActive?: SortOrder
  }

  export type PackageAvgOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    isActive?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    isActive?: SortOrder
  }

  export type PackageSumOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type InstructorScalarRelationFilter = {
    is?: InstructorWhereInput
    isNot?: InstructorWhereInput
  }

  export type PaymentTakenListRelationFilter = {
    every?: PaymentTakenWhereInput
    some?: PaymentTakenWhereInput
    none?: PaymentTakenWhereInput
  }

  export type PaymentTakenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentCycleInstructorIdMonthCompoundUniqueInput = {
    instructorId: string
    month: Date | string
  }

  export type PaymentCycleCountOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    month?: SortOrder
    amountTaken?: SortOrder
    baseAmount?: SortOrder
    deductions?: SortOrder
    bonus?: SortOrder
    netAmount?: SortOrder
    paidAt?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentCycleAvgOrderByAggregateInput = {
    amountTaken?: SortOrder
    baseAmount?: SortOrder
    deductions?: SortOrder
    bonus?: SortOrder
    netAmount?: SortOrder
  }

  export type PaymentCycleMaxOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    month?: SortOrder
    amountTaken?: SortOrder
    baseAmount?: SortOrder
    deductions?: SortOrder
    bonus?: SortOrder
    netAmount?: SortOrder
    paidAt?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentCycleMinOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    month?: SortOrder
    amountTaken?: SortOrder
    baseAmount?: SortOrder
    deductions?: SortOrder
    bonus?: SortOrder
    netAmount?: SortOrder
    paidAt?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentCycleSumOrderByAggregateInput = {
    amountTaken?: SortOrder
    baseAmount?: SortOrder
    deductions?: SortOrder
    bonus?: SortOrder
    netAmount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    Batch_time?: SortOrder
    Duration_time?: SortOrder
    Car_id?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    Batch_time?: SortOrder
    Duration_time?: SortOrder
    Car_id?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    Batch_time?: SortOrder
    Duration_time?: SortOrder
    Car_id?: SortOrder
  }

  export type SchoolSetUpCountOrderByAggregateInput = {
    id?: SortOrder
    systemId?: SortOrder
    school_name?: SortOrder
    support_Email?: SortOrder
    address?: SortOrder
    contact_Number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolSetUpMaxOrderByAggregateInput = {
    id?: SortOrder
    systemId?: SortOrder
    school_name?: SortOrder
    support_Email?: SortOrder
    address?: SortOrder
    contact_Number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolSetUpMinOrderByAggregateInput = {
    id?: SortOrder
    systemId?: SortOrder
    school_name?: SortOrder
    support_Email?: SortOrder
    address?: SortOrder
    contact_Number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEnrollment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Enrollment_status | EnumEnrollment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Enrollment_status[]
    notIn?: $Enums.Enrollment_status[]
    not?: NestedEnumEnrollment_statusFilter<$PrismaModel> | $Enums.Enrollment_status
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    packageId?: SortOrder
    package_name?: SortOrder
    Enrollment_status?: SortOrder
    Course_Start_date?: SortOrder
    Course_End_Date?: SortOrder
    Assigned_Instructor?: SortOrder
    Total_amount?: SortOrder
    Amount_paid?: SortOrder
    Remaining_percentage?: SortOrder
    remaining_amount?: SortOrder
    Thank_you_msg?: SortOrder
    Welcome_msg?: SortOrder
    Remainder_msg?: SortOrder
    Balance_remaining_date?: SortOrder
    Assigned_car_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    Total_amount?: SortOrder
    Amount_paid?: SortOrder
    Remaining_percentage?: SortOrder
    remaining_amount?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    packageId?: SortOrder
    package_name?: SortOrder
    Enrollment_status?: SortOrder
    Course_Start_date?: SortOrder
    Course_End_Date?: SortOrder
    Assigned_Instructor?: SortOrder
    Total_amount?: SortOrder
    Amount_paid?: SortOrder
    Remaining_percentage?: SortOrder
    remaining_amount?: SortOrder
    Thank_you_msg?: SortOrder
    Welcome_msg?: SortOrder
    Remainder_msg?: SortOrder
    Balance_remaining_date?: SortOrder
    Assigned_car_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    packageId?: SortOrder
    package_name?: SortOrder
    Enrollment_status?: SortOrder
    Course_Start_date?: SortOrder
    Course_End_Date?: SortOrder
    Assigned_Instructor?: SortOrder
    Total_amount?: SortOrder
    Amount_paid?: SortOrder
    Remaining_percentage?: SortOrder
    remaining_amount?: SortOrder
    Thank_you_msg?: SortOrder
    Welcome_msg?: SortOrder
    Remainder_msg?: SortOrder
    Balance_remaining_date?: SortOrder
    Assigned_car_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    Total_amount?: SortOrder
    Amount_paid?: SortOrder
    Remaining_percentage?: SortOrder
    remaining_amount?: SortOrder
  }

  export type EnumEnrollment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Enrollment_status | EnumEnrollment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Enrollment_status[]
    notIn?: $Enums.Enrollment_status[]
    not?: NestedEnumEnrollment_statusWithAggregatesFilter<$PrismaModel> | $Enums.Enrollment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollment_statusFilter<$PrismaModel>
    _max?: NestedEnumEnrollment_statusFilter<$PrismaModel>
  }

  export type PaymentCycleCreateNestedOneWithoutPaymentsTakenInput = {
    create?: XOR<PaymentCycleCreateWithoutPaymentsTakenInput, PaymentCycleUncheckedCreateWithoutPaymentsTakenInput>
    connectOrCreate?: PaymentCycleCreateOrConnectWithoutPaymentsTakenInput
    connect?: PaymentCycleWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PaymentCycleUpdateOneRequiredWithoutPaymentsTakenNestedInput = {
    create?: XOR<PaymentCycleCreateWithoutPaymentsTakenInput, PaymentCycleUncheckedCreateWithoutPaymentsTakenInput>
    connectOrCreate?: PaymentCycleCreateOrConnectWithoutPaymentsTakenInput
    upsert?: PaymentCycleUpsertWithoutPaymentsTakenInput
    connect?: PaymentCycleWhereUniqueInput
    update?: XOR<XOR<PaymentCycleUpdateToOneWithWhereWithoutPaymentsTakenInput, PaymentCycleUpdateWithoutPaymentsTakenInput>, PaymentCycleUncheckedUpdateWithoutPaymentsTakenInput>
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PaymentCycleCreateNestedManyWithoutInstructorInput = {
    create?: XOR<PaymentCycleCreateWithoutInstructorInput, PaymentCycleUncheckedCreateWithoutInstructorInput> | PaymentCycleCreateWithoutInstructorInput[] | PaymentCycleUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: PaymentCycleCreateOrConnectWithoutInstructorInput | PaymentCycleCreateOrConnectWithoutInstructorInput[]
    createMany?: PaymentCycleCreateManyInstructorInputEnvelope
    connect?: PaymentCycleWhereUniqueInput | PaymentCycleWhereUniqueInput[]
  }

  export type PaymentCycleUncheckedCreateNestedManyWithoutInstructorInput = {
    create?: XOR<PaymentCycleCreateWithoutInstructorInput, PaymentCycleUncheckedCreateWithoutInstructorInput> | PaymentCycleCreateWithoutInstructorInput[] | PaymentCycleUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: PaymentCycleCreateOrConnectWithoutInstructorInput | PaymentCycleCreateOrConnectWithoutInstructorInput[]
    createMany?: PaymentCycleCreateManyInstructorInputEnvelope
    connect?: PaymentCycleWhereUniqueInput | PaymentCycleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumJobTypeFieldUpdateOperationsInput = {
    set?: $Enums.JobType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PaymentCycleUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<PaymentCycleCreateWithoutInstructorInput, PaymentCycleUncheckedCreateWithoutInstructorInput> | PaymentCycleCreateWithoutInstructorInput[] | PaymentCycleUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: PaymentCycleCreateOrConnectWithoutInstructorInput | PaymentCycleCreateOrConnectWithoutInstructorInput[]
    upsert?: PaymentCycleUpsertWithWhereUniqueWithoutInstructorInput | PaymentCycleUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: PaymentCycleCreateManyInstructorInputEnvelope
    set?: PaymentCycleWhereUniqueInput | PaymentCycleWhereUniqueInput[]
    disconnect?: PaymentCycleWhereUniqueInput | PaymentCycleWhereUniqueInput[]
    delete?: PaymentCycleWhereUniqueInput | PaymentCycleWhereUniqueInput[]
    connect?: PaymentCycleWhereUniqueInput | PaymentCycleWhereUniqueInput[]
    update?: PaymentCycleUpdateWithWhereUniqueWithoutInstructorInput | PaymentCycleUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: PaymentCycleUpdateManyWithWhereWithoutInstructorInput | PaymentCycleUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: PaymentCycleScalarWhereInput | PaymentCycleScalarWhereInput[]
  }

  export type PaymentCycleUncheckedUpdateManyWithoutInstructorNestedInput = {
    create?: XOR<PaymentCycleCreateWithoutInstructorInput, PaymentCycleUncheckedCreateWithoutInstructorInput> | PaymentCycleCreateWithoutInstructorInput[] | PaymentCycleUncheckedCreateWithoutInstructorInput[]
    connectOrCreate?: PaymentCycleCreateOrConnectWithoutInstructorInput | PaymentCycleCreateOrConnectWithoutInstructorInput[]
    upsert?: PaymentCycleUpsertWithWhereUniqueWithoutInstructorInput | PaymentCycleUpsertWithWhereUniqueWithoutInstructorInput[]
    createMany?: PaymentCycleCreateManyInstructorInputEnvelope
    set?: PaymentCycleWhereUniqueInput | PaymentCycleWhereUniqueInput[]
    disconnect?: PaymentCycleWhereUniqueInput | PaymentCycleWhereUniqueInput[]
    delete?: PaymentCycleWhereUniqueInput | PaymentCycleWhereUniqueInput[]
    connect?: PaymentCycleWhereUniqueInput | PaymentCycleWhereUniqueInput[]
    update?: PaymentCycleUpdateWithWhereUniqueWithoutInstructorInput | PaymentCycleUpdateWithWhereUniqueWithoutInstructorInput[]
    updateMany?: PaymentCycleUpdateManyWithWhereWithoutInstructorInput | PaymentCycleUpdateManyWithWhereWithoutInstructorInput[]
    deleteMany?: PaymentCycleScalarWhereInput | PaymentCycleScalarWhereInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type InstructorCreateNestedOneWithoutPaymentCyclesInput = {
    create?: XOR<InstructorCreateWithoutPaymentCyclesInput, InstructorUncheckedCreateWithoutPaymentCyclesInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutPaymentCyclesInput
    connect?: InstructorWhereUniqueInput
  }

  export type PaymentTakenCreateNestedManyWithoutPaymentCycleInput = {
    create?: XOR<PaymentTakenCreateWithoutPaymentCycleInput, PaymentTakenUncheckedCreateWithoutPaymentCycleInput> | PaymentTakenCreateWithoutPaymentCycleInput[] | PaymentTakenUncheckedCreateWithoutPaymentCycleInput[]
    connectOrCreate?: PaymentTakenCreateOrConnectWithoutPaymentCycleInput | PaymentTakenCreateOrConnectWithoutPaymentCycleInput[]
    createMany?: PaymentTakenCreateManyPaymentCycleInputEnvelope
    connect?: PaymentTakenWhereUniqueInput | PaymentTakenWhereUniqueInput[]
  }

  export type PaymentTakenUncheckedCreateNestedManyWithoutPaymentCycleInput = {
    create?: XOR<PaymentTakenCreateWithoutPaymentCycleInput, PaymentTakenUncheckedCreateWithoutPaymentCycleInput> | PaymentTakenCreateWithoutPaymentCycleInput[] | PaymentTakenUncheckedCreateWithoutPaymentCycleInput[]
    connectOrCreate?: PaymentTakenCreateOrConnectWithoutPaymentCycleInput | PaymentTakenCreateOrConnectWithoutPaymentCycleInput[]
    createMany?: PaymentTakenCreateManyPaymentCycleInputEnvelope
    connect?: PaymentTakenWhereUniqueInput | PaymentTakenWhereUniqueInput[]
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type InstructorUpdateOneRequiredWithoutPaymentCyclesNestedInput = {
    create?: XOR<InstructorCreateWithoutPaymentCyclesInput, InstructorUncheckedCreateWithoutPaymentCyclesInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutPaymentCyclesInput
    upsert?: InstructorUpsertWithoutPaymentCyclesInput
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutPaymentCyclesInput, InstructorUpdateWithoutPaymentCyclesInput>, InstructorUncheckedUpdateWithoutPaymentCyclesInput>
  }

  export type PaymentTakenUpdateManyWithoutPaymentCycleNestedInput = {
    create?: XOR<PaymentTakenCreateWithoutPaymentCycleInput, PaymentTakenUncheckedCreateWithoutPaymentCycleInput> | PaymentTakenCreateWithoutPaymentCycleInput[] | PaymentTakenUncheckedCreateWithoutPaymentCycleInput[]
    connectOrCreate?: PaymentTakenCreateOrConnectWithoutPaymentCycleInput | PaymentTakenCreateOrConnectWithoutPaymentCycleInput[]
    upsert?: PaymentTakenUpsertWithWhereUniqueWithoutPaymentCycleInput | PaymentTakenUpsertWithWhereUniqueWithoutPaymentCycleInput[]
    createMany?: PaymentTakenCreateManyPaymentCycleInputEnvelope
    set?: PaymentTakenWhereUniqueInput | PaymentTakenWhereUniqueInput[]
    disconnect?: PaymentTakenWhereUniqueInput | PaymentTakenWhereUniqueInput[]
    delete?: PaymentTakenWhereUniqueInput | PaymentTakenWhereUniqueInput[]
    connect?: PaymentTakenWhereUniqueInput | PaymentTakenWhereUniqueInput[]
    update?: PaymentTakenUpdateWithWhereUniqueWithoutPaymentCycleInput | PaymentTakenUpdateWithWhereUniqueWithoutPaymentCycleInput[]
    updateMany?: PaymentTakenUpdateManyWithWhereWithoutPaymentCycleInput | PaymentTakenUpdateManyWithWhereWithoutPaymentCycleInput[]
    deleteMany?: PaymentTakenScalarWhereInput | PaymentTakenScalarWhereInput[]
  }

  export type PaymentTakenUncheckedUpdateManyWithoutPaymentCycleNestedInput = {
    create?: XOR<PaymentTakenCreateWithoutPaymentCycleInput, PaymentTakenUncheckedCreateWithoutPaymentCycleInput> | PaymentTakenCreateWithoutPaymentCycleInput[] | PaymentTakenUncheckedCreateWithoutPaymentCycleInput[]
    connectOrCreate?: PaymentTakenCreateOrConnectWithoutPaymentCycleInput | PaymentTakenCreateOrConnectWithoutPaymentCycleInput[]
    upsert?: PaymentTakenUpsertWithWhereUniqueWithoutPaymentCycleInput | PaymentTakenUpsertWithWhereUniqueWithoutPaymentCycleInput[]
    createMany?: PaymentTakenCreateManyPaymentCycleInputEnvelope
    set?: PaymentTakenWhereUniqueInput | PaymentTakenWhereUniqueInput[]
    disconnect?: PaymentTakenWhereUniqueInput | PaymentTakenWhereUniqueInput[]
    delete?: PaymentTakenWhereUniqueInput | PaymentTakenWhereUniqueInput[]
    connect?: PaymentTakenWhereUniqueInput | PaymentTakenWhereUniqueInput[]
    update?: PaymentTakenUpdateWithWhereUniqueWithoutPaymentCycleInput | PaymentTakenUpdateWithWhereUniqueWithoutPaymentCycleInput[]
    updateMany?: PaymentTakenUpdateManyWithWhereWithoutPaymentCycleInput | PaymentTakenUpdateManyWithWhereWithoutPaymentCycleInput[]
    deleteMany?: PaymentTakenScalarWhereInput | PaymentTakenScalarWhereInput[]
  }

  export type EnumEnrollment_statusFieldUpdateOperationsInput = {
    set?: $Enums.Enrollment_status
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

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[]
    notIn?: $Enums.JobType[]
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[]
    notIn?: $Enums.JobType[]
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumEnrollment_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.Enrollment_status | EnumEnrollment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Enrollment_status[]
    notIn?: $Enums.Enrollment_status[]
    not?: NestedEnumEnrollment_statusFilter<$PrismaModel> | $Enums.Enrollment_status
  }

  export type NestedEnumEnrollment_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Enrollment_status | EnumEnrollment_statusFieldRefInput<$PrismaModel>
    in?: $Enums.Enrollment_status[]
    notIn?: $Enums.Enrollment_status[]
    not?: NestedEnumEnrollment_statusWithAggregatesFilter<$PrismaModel> | $Enums.Enrollment_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollment_statusFilter<$PrismaModel>
    _max?: NestedEnumEnrollment_statusFilter<$PrismaModel>
  }

  export type PaymentCycleCreateWithoutPaymentsTakenInput = {
    id?: string
    month: Date | string
    amountTaken?: number
    baseAmount: number
    deductions: number
    bonus: number
    netAmount: number
    paidAt: Date | string
    note: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    instructor: InstructorCreateNestedOneWithoutPaymentCyclesInput
  }

  export type PaymentCycleUncheckedCreateWithoutPaymentsTakenInput = {
    id?: string
    instructorId: string
    month: Date | string
    amountTaken?: number
    baseAmount: number
    deductions: number
    bonus: number
    netAmount: number
    paidAt: Date | string
    note: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCycleCreateOrConnectWithoutPaymentsTakenInput = {
    where: PaymentCycleWhereUniqueInput
    create: XOR<PaymentCycleCreateWithoutPaymentsTakenInput, PaymentCycleUncheckedCreateWithoutPaymentsTakenInput>
  }

  export type PaymentCycleUpsertWithoutPaymentsTakenInput = {
    update: XOR<PaymentCycleUpdateWithoutPaymentsTakenInput, PaymentCycleUncheckedUpdateWithoutPaymentsTakenInput>
    create: XOR<PaymentCycleCreateWithoutPaymentsTakenInput, PaymentCycleUncheckedCreateWithoutPaymentsTakenInput>
    where?: PaymentCycleWhereInput
  }

  export type PaymentCycleUpdateToOneWithWhereWithoutPaymentsTakenInput = {
    where?: PaymentCycleWhereInput
    data: XOR<PaymentCycleUpdateWithoutPaymentsTakenInput, PaymentCycleUncheckedUpdateWithoutPaymentsTakenInput>
  }

  export type PaymentCycleUpdateWithoutPaymentsTakenInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amountTaken?: IntFieldUpdateOperationsInput | number
    baseAmount?: IntFieldUpdateOperationsInput | number
    deductions?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    netAmount?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: InstructorUpdateOneRequiredWithoutPaymentCyclesNestedInput
  }

  export type PaymentCycleUncheckedUpdateWithoutPaymentsTakenInput = {
    id?: StringFieldUpdateOperationsInput | string
    instructorId?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amountTaken?: IntFieldUpdateOperationsInput | number
    baseAmount?: IntFieldUpdateOperationsInput | number
    deductions?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    netAmount?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCycleCreateWithoutInstructorInput = {
    id?: string
    month: Date | string
    amountTaken?: number
    baseAmount: number
    deductions: number
    bonus: number
    netAmount: number
    paidAt: Date | string
    note: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentsTaken?: PaymentTakenCreateNestedManyWithoutPaymentCycleInput
  }

  export type PaymentCycleUncheckedCreateWithoutInstructorInput = {
    id?: string
    month: Date | string
    amountTaken?: number
    baseAmount: number
    deductions: number
    bonus: number
    netAmount: number
    paidAt: Date | string
    note: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentsTaken?: PaymentTakenUncheckedCreateNestedManyWithoutPaymentCycleInput
  }

  export type PaymentCycleCreateOrConnectWithoutInstructorInput = {
    where: PaymentCycleWhereUniqueInput
    create: XOR<PaymentCycleCreateWithoutInstructorInput, PaymentCycleUncheckedCreateWithoutInstructorInput>
  }

  export type PaymentCycleCreateManyInstructorInputEnvelope = {
    data: PaymentCycleCreateManyInstructorInput | PaymentCycleCreateManyInstructorInput[]
  }

  export type PaymentCycleUpsertWithWhereUniqueWithoutInstructorInput = {
    where: PaymentCycleWhereUniqueInput
    update: XOR<PaymentCycleUpdateWithoutInstructorInput, PaymentCycleUncheckedUpdateWithoutInstructorInput>
    create: XOR<PaymentCycleCreateWithoutInstructorInput, PaymentCycleUncheckedCreateWithoutInstructorInput>
  }

  export type PaymentCycleUpdateWithWhereUniqueWithoutInstructorInput = {
    where: PaymentCycleWhereUniqueInput
    data: XOR<PaymentCycleUpdateWithoutInstructorInput, PaymentCycleUncheckedUpdateWithoutInstructorInput>
  }

  export type PaymentCycleUpdateManyWithWhereWithoutInstructorInput = {
    where: PaymentCycleScalarWhereInput
    data: XOR<PaymentCycleUpdateManyMutationInput, PaymentCycleUncheckedUpdateManyWithoutInstructorInput>
  }

  export type PaymentCycleScalarWhereInput = {
    AND?: PaymentCycleScalarWhereInput | PaymentCycleScalarWhereInput[]
    OR?: PaymentCycleScalarWhereInput[]
    NOT?: PaymentCycleScalarWhereInput | PaymentCycleScalarWhereInput[]
    id?: StringFilter<"PaymentCycle"> | string
    instructorId?: StringFilter<"PaymentCycle"> | string
    month?: DateTimeFilter<"PaymentCycle"> | Date | string
    amountTaken?: IntFilter<"PaymentCycle"> | number
    baseAmount?: IntFilter<"PaymentCycle"> | number
    deductions?: IntFilter<"PaymentCycle"> | number
    bonus?: IntFilter<"PaymentCycle"> | number
    netAmount?: IntFilter<"PaymentCycle"> | number
    paidAt?: DateTimeFilter<"PaymentCycle"> | Date | string
    note?: StringFilter<"PaymentCycle"> | string
    status?: EnumPaymentStatusFilter<"PaymentCycle"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"PaymentCycle"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentCycle"> | Date | string
  }

  export type InstructorCreateWithoutPaymentCyclesInput = {
    id?: string
    name: string
    mobile: string
    licenseNumber?: string | null
    jobType?: $Enums.JobType
    joiningDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorUncheckedCreateWithoutPaymentCyclesInput = {
    id?: string
    name: string
    mobile: string
    licenseNumber?: string | null
    jobType?: $Enums.JobType
    joiningDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorCreateOrConnectWithoutPaymentCyclesInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutPaymentCyclesInput, InstructorUncheckedCreateWithoutPaymentCyclesInput>
  }

  export type PaymentTakenCreateWithoutPaymentCycleInput = {
    id?: string
    amount: number
    takenAt?: Date | string
    note: string
  }

  export type PaymentTakenUncheckedCreateWithoutPaymentCycleInput = {
    id?: string
    amount: number
    takenAt?: Date | string
    note: string
  }

  export type PaymentTakenCreateOrConnectWithoutPaymentCycleInput = {
    where: PaymentTakenWhereUniqueInput
    create: XOR<PaymentTakenCreateWithoutPaymentCycleInput, PaymentTakenUncheckedCreateWithoutPaymentCycleInput>
  }

  export type PaymentTakenCreateManyPaymentCycleInputEnvelope = {
    data: PaymentTakenCreateManyPaymentCycleInput | PaymentTakenCreateManyPaymentCycleInput[]
  }

  export type InstructorUpsertWithoutPaymentCyclesInput = {
    update: XOR<InstructorUpdateWithoutPaymentCyclesInput, InstructorUncheckedUpdateWithoutPaymentCyclesInput>
    create: XOR<InstructorCreateWithoutPaymentCyclesInput, InstructorUncheckedCreateWithoutPaymentCyclesInput>
    where?: InstructorWhereInput
  }

  export type InstructorUpdateToOneWithWhereWithoutPaymentCyclesInput = {
    where?: InstructorWhereInput
    data: XOR<InstructorUpdateWithoutPaymentCyclesInput, InstructorUncheckedUpdateWithoutPaymentCyclesInput>
  }

  export type InstructorUpdateWithoutPaymentCyclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorUncheckedUpdateWithoutPaymentCyclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    jobType?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTakenUpsertWithWhereUniqueWithoutPaymentCycleInput = {
    where: PaymentTakenWhereUniqueInput
    update: XOR<PaymentTakenUpdateWithoutPaymentCycleInput, PaymentTakenUncheckedUpdateWithoutPaymentCycleInput>
    create: XOR<PaymentTakenCreateWithoutPaymentCycleInput, PaymentTakenUncheckedCreateWithoutPaymentCycleInput>
  }

  export type PaymentTakenUpdateWithWhereUniqueWithoutPaymentCycleInput = {
    where: PaymentTakenWhereUniqueInput
    data: XOR<PaymentTakenUpdateWithoutPaymentCycleInput, PaymentTakenUncheckedUpdateWithoutPaymentCycleInput>
  }

  export type PaymentTakenUpdateManyWithWhereWithoutPaymentCycleInput = {
    where: PaymentTakenScalarWhereInput
    data: XOR<PaymentTakenUpdateManyMutationInput, PaymentTakenUncheckedUpdateManyWithoutPaymentCycleInput>
  }

  export type PaymentTakenScalarWhereInput = {
    AND?: PaymentTakenScalarWhereInput | PaymentTakenScalarWhereInput[]
    OR?: PaymentTakenScalarWhereInput[]
    NOT?: PaymentTakenScalarWhereInput | PaymentTakenScalarWhereInput[]
    id?: StringFilter<"PaymentTaken"> | string
    paymentCycleId?: StringFilter<"PaymentTaken"> | string
    amount?: IntFilter<"PaymentTaken"> | number
    takenAt?: DateTimeFilter<"PaymentTaken"> | Date | string
    note?: StringFilter<"PaymentTaken"> | string
  }

  export type PaymentCycleCreateManyInstructorInput = {
    id?: string
    month: Date | string
    amountTaken?: number
    baseAmount: number
    deductions: number
    bonus: number
    netAmount: number
    paidAt: Date | string
    note: string
    status?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCycleUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amountTaken?: IntFieldUpdateOperationsInput | number
    baseAmount?: IntFieldUpdateOperationsInput | number
    deductions?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    netAmount?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentsTaken?: PaymentTakenUpdateManyWithoutPaymentCycleNestedInput
  }

  export type PaymentCycleUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amountTaken?: IntFieldUpdateOperationsInput | number
    baseAmount?: IntFieldUpdateOperationsInput | number
    deductions?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    netAmount?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentsTaken?: PaymentTakenUncheckedUpdateManyWithoutPaymentCycleNestedInput
  }

  export type PaymentCycleUncheckedUpdateManyWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    amountTaken?: IntFieldUpdateOperationsInput | number
    baseAmount?: IntFieldUpdateOperationsInput | number
    deductions?: IntFieldUpdateOperationsInput | number
    bonus?: IntFieldUpdateOperationsInput | number
    netAmount?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentTakenCreateManyPaymentCycleInput = {
    id?: string
    amount: number
    takenAt?: Date | string
    note: string
  }

  export type PaymentTakenUpdateWithoutPaymentCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentTakenUncheckedUpdateWithoutPaymentCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentTakenUncheckedUpdateManyWithoutPaymentCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    takenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: StringFieldUpdateOperationsInput | string
  }



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