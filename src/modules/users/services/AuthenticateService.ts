import { sign } from 'jsonwebtoken'
import jwtConfig from '@config/auth'
import { inject, injectable } from 'tsyringe'
import { IAuthenticateResponse } from '@users/domain/models/IAuthenticateResponse'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import { IAuthenticateUser } from '@users/domain/models/IAuthenticateUser'
import { InvalidCredentialsError } from '@shared/errors/InvalidCredentialsError'
import { UserNotLoginError } from '@shared/errors/UserNotLoginError'

@injectable()
export class AuthenticateService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    cpf,
    senha,
    iosDeviceToken,
    androidDeviceToken,
  }: IAuthenticateUser): Promise<IAuthenticateResponse> {
    const user = await this.usersRepository.findByCPF(cpf)
    if (!user) {
      throw new InvalidCredentialsError()
    }
    const isLoginAccess = user.login
    if (isLoginAccess === 'NÃO') {
      throw new UserNotLoginError()
    }

    if (senha != user.senha) {
      throw new InvalidCredentialsError()
    }

    const access_token = sign({}, jwtConfig.jwt.secret, {
      subject: user.codigo.toString(),
      expiresIn: jwtConfig.jwt.expiresIn,
      issuer: 'softmulti-ilpi-concierge',
    })

    const refresh_token = sign({}, jwtConfig.refreshToken.secret, {
      subject: user.codigo.toString(),
      expiresIn: jwtConfig.refreshToken.expiresIn,
      notBefore: jwtConfig.refreshToken.notBefore,
      issuer: 'softmulti-ilpi-concierge',
    })

    user.refresh_token = refresh_token
    user.ios_token = iosDeviceToken
    user.android_token = androidDeviceToken

    await this.usersRepository.autenthicateUser(user)

    return { access_token, refresh_token }
  }
}
