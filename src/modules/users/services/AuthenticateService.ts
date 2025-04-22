import { inject, injectable } from 'tsyringe'
import { InvalidCredentialsError } from '@shared/errors/InvalidCredentialsError'
import { IAuthenticateResponse } from '@users/domain/models/IAuthenticateResponse'
import { IAuthenticateUser } from '@users/domain/models/IAuthenticateUser'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import jwtConfig from '@config/auth'
import { sign } from 'jsonwebtoken'
import { UserNotPermissionError } from '@shared/errors/user_not_permission_error'

@injectable()
export class AuthenticateService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    username,
    password,
  }: IAuthenticateUser): Promise<IAuthenticateResponse> {
    const user = await this.usersRepository.findByUsername(username)
    if (!user) {
      throw new InvalidCredentialsError()
    }

    if (user.status != 'ATIVO') {
      throw new UserNotPermissionError()
    }

    if (password != user.senha) {
      throw new InvalidCredentialsError()
    }

    const access_token = sign({}, jwtConfig.jwt.secret, {
      subject: user.id.toString(),
      expiresIn: jwtConfig.jwt.expiresIn,
      issuer: 'sos-soro-pi-01',
    })

    const refresh_token = sign({}, jwtConfig.refreshToken.secret, {
      subject: user.id.toString(),
      expiresIn: jwtConfig.refreshToken.expiresIn,
      notBefore: jwtConfig.refreshToken.notBefore,
      issuer: 'sos-soro-pi-01',
    })

    user.refresh_token = refresh_token

    await this.usersRepository.autenthicateUser(user)

    return { access_token, refresh_token }
  }
}
