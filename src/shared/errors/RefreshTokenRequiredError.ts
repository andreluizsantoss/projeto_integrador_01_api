export class RefreshTokenRequiredError extends Error {
  constructor() {
    super('Refresh token is required.')
  }
}
