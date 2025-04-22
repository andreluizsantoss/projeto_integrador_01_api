import { container } from 'tsyringe'
import { InvalidCredentialsError } from '@shared/errors/InvalidCredentialsError'
import { UserNotFoundError } from '@shared/errors/UserNotFoundError'
import { UserNotLoginError } from '@shared/errors/UserNotLoginError'
import { AuthenticateService } from '@users/services/AuthenticateService'
import { Request, Response } from 'express'
import { z } from 'zod'
import { UserNotPermissionError } from '@shared/errors/user_not_permission_error'

export default class AuthenticateController {
  public async session(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const bodySchema = z.object({
      username: z.string(),
      password: z.string().min(8),
    })

    const { username, password } = bodySchema.parse(request.body)

    try {
      const authenticateService = container.resolve(AuthenticateService)
      const { access_token, refresh_token } = await authenticateService.execute(
        {
          username,
          password,
        },
      )
      return response.status(200).send({
        access_token,
        refresh_token,
      })
    } catch (err) {
      if (err instanceof InvalidCredentialsError) {
        return response.status(400).send({ message: err.message })
      }
      if (err instanceof UserNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      if (err instanceof UserNotPermissionError) {
        return response.status(400).send({ message: err.message })
      }
      if (err instanceof UserNotLoginError) {
        return response.status(403).send({ message: err.message })
      }
      throw err
    }
  }
}
