import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import { decode, sign } from 'jsonwebtoken'
import jwtConfig from '@config/auth'
import { inject, injectable } from 'tsyringe'
import { IAuthenticateResponse } from '@users/domain/models/IAuthenticateResponse'
import { ICreateAccessAndRefreshToken } from '@users/domain/models/ICreateRefreshToken'
import { UserNotFoundError } from '@shared/errors/UserNotFoundError'
import { RefreshTokenRequiredError } from '@shared/errors/RefreshTokenRequiredError'
import { RefreshTokenInvalidError } from '@shared/errors/RefreshTokenInvalidError'
import { UserNotPermissionError } from '@shared/errors/UserNotPermissionError'

type JwtPayloadProps = {
  exp: number
  nbf: number
}

@injectable()
export class UpdateTokenService {
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
    if (user.status != 'ATIVO') {
      throw new UserNotPermissionError()
    }
    if (!user.refresh_token) {
      throw new RefreshTokenRequiredError()
    }
    if (user.refresh_token !== refreshToken) {
      throw new RefreshTokenInvalidError()
    }

    const decodedRefreshToken = decode(refreshToken)
    const { exp, nbf } = decodedRefreshToken as JwtPayloadProps

    const dateNow = new Date().getTime()

    const dateExpNow = dateNow
      .toString()
      .substring(0, dateNow.toString().length - 3)

    if (nbf > parseInt(dateExpNow)) {
      throw new RefreshTokenInvalidError()
    }

    if (exp < parseInt(dateExpNow)) {
      throw new RefreshTokenInvalidError()
    }

    const newAcessToken = sign({}, jwtConfig.jwt.secret, {
      subject: user.id.toString(),
      expiresIn: jwtConfig.jwt.expiresIn,
      issuer: 'sos-soro-pi-01',
    })

    const newRefreshToken = sign({}, jwtConfig.refreshToken.secret, {
      subject: user.id.toString(),
      expiresIn: jwtConfig.refreshToken.expiresIn,
      notBefore: jwtConfig.refreshToken.notBefore,
      issuer: 'sos-soro-pi-01',
    })

    await this.usersRepository.updateRefreshToken({
      id: user.id,
      refresh_token: newRefreshToken,
    })

    return {
      access_token: newAcessToken,
      refresh_token: newRefreshToken,
    }
  }
}
