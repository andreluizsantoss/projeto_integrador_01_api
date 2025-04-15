import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import { decode, sign } from 'jsonwebtoken'
import jwtConfig from '@config/auth'
import { inject, injectable } from 'tsyringe'
import { IAuthenticateResponse } from '@users/domain/models/IAuthenticateResponse'
import { ICreateAccessAndRefreshToken } from '@users/domain/models/ICreateRefreshToken'
import { UserNotFoundError } from '@shared/errors/UserNotFoundError'
import { RefreshTokenRequiredError } from '@shared/errors/RefreshTokenRequiredError'
import { RefreshTokenInvalidError } from '@shared/errors/RefreshTokenInvalidError'
import { UserNotLoginError } from '@shared/errors/UserNotLoginError'

type JwtPayloadProps = {
  exp: number
  nbf: number
}

@injectable()
export class UpdateTokensService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    userId,
    refreshToken,
  }: ICreateAccessAndRefreshToken): Promise<IAuthenticateResponse> {
    const user = await this.usersRepository.findById(userId)
    if (!user) {
      throw new UserNotFoundError()
    }
    if (user.login === 'NÃO') {
      throw new UserNotLoginError()
    }
    if (!user.refresh_token) {
      throw new RefreshTokenRequiredError()
    }
    if (user.refresh_token !== refreshToken) {
      throw new RefreshTokenInvalidError()
    }

    // Decode do Refresh Token
    const decodedRefreshToken = decode(refreshToken)
    const { exp, nbf } = decodedRefreshToken as JwtPayloadProps

    // Data - Hora de hoje
    const dateNow = new Date().getTime()

    // Retiro os 3 ultimos caracteres
    const dateExpNow = dateNow
      .toString()
      .substring(0, dateNow.toString().length - 3)

    // Verifico se o Refresh Token já pode ser usado (NotBefore)
    if (nbf > parseInt(dateExpNow)) {
      throw new RefreshTokenInvalidError()
    }

    // Verifico se o Refresh Token não esta expirado (expireIn)
    if (exp < parseInt(dateExpNow)) {
      throw new RefreshTokenInvalidError()
    }

    const newAcessToken = sign({}, jwtConfig.jwt.secret, {
      subject: user.codigo.toString(),
      expiresIn: jwtConfig.jwt.expiresIn,
      issuer: 'softmulti-ilpi-concierge',
    })

    const newRefreshToken = sign({}, jwtConfig.refreshToken.secret, {
      subject: user.codigo.toString(),
      expiresIn: jwtConfig.refreshToken.expiresIn,
      notBefore: jwtConfig.refreshToken.notBefore,
      issuer: 'softmulti-ilpi-concierge',
    })

    await this.usersRepository.updateRefreshToken({
      codigo: user.codigo,
      refresh_token: newRefreshToken,
    })

    return {
      access_token: newAcessToken,
      refresh_token: newRefreshToken,
    }
  }
}
