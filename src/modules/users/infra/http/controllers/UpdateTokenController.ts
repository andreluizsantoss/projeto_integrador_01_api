import { RefreshTokenInvalidError } from '@shared/errors/RefreshTokenInvalidError'
import { RefreshTokenRequiredError } from '@shared/errors/RefreshTokenRequiredError'
import { UserNotFoundError } from '@shared/errors/UserNotFoundError'
import { UserNotPermissionError } from '@shared/errors/UserNotPermissionError'
import { UpdateTokenService } from '@users/services/UpdateTokenService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class UpdateTokenController {
  public async update(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      refreshToken: z.string(),
    })
    const user_id = request.user.id
    const { refreshToken } = bodySchema.parse(request.body)
    if (!refreshToken) {
      return response.status(403).json({ message: 'Invalid refresh token.' })
    }
    try {
      const service = container.resolve(UpdateTokenService)
      const { access_token, refresh_token } = await service.execute({
        userId: user_id,
        refreshToken: refreshToken,
      })
      return response.status(201).json({
        access_token,
        refresh_token,
      })
    } catch (err) {
      if (err instanceof UserNotFoundError) {
        return response.status(403).send({ message: err.message })
      }
      if (err instanceof UserNotPermissionError) {
        return response.status(403).send({ message: err.message })
      }
      if (err instanceof RefreshTokenRequiredError) {
        return response.status(403).send({ message: err.message })
      }
      if (err instanceof RefreshTokenInvalidError) {
        return response.status(403).send({ message: err.message })
      }
      throw err
    }
  }
}
