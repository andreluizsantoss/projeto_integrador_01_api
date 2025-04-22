export class UserNotLoginError extends Error {
  constructor() {
    super('User does not have permission to access the application.')
  }
}
