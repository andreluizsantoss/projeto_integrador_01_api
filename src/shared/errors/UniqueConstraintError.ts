export class UniqueConstraintError extends Error {
  constructor(fieldName: string) {
    super(`The field already exists.`)
  }
}
