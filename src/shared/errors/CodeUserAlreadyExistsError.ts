export class CodeUserAlreadyExistsError extends Error {
  constructor() {
    super('Code user already exists.')
  }
}
