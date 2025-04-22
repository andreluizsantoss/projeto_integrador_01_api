export class UserNotPermissionError extends Error {
  constructor() {
    super('User does not have access permission.')
  }
}
