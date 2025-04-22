import { UserNotFoundError } from '@shared/errors/UserNotFoundError'
import { UserNotPermissionError } from '@shared/errors/UserNotPermissionError'
import { FindByTokenService } from '@users/services/FindByTokenService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default class FindByTokenController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id
    try {
      const service = container.resolve(FindByTokenService)
      const user = await service.execute({ id: user_id })
      return response.json({
        ...user,
        usuario: undefined,
        senha: undefined,
        refresh_token: undefined,
      })
    } catch (err) {
      if (err instanceof UserNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      if (err instanceof UserNotPermissionError) {
        return response.status(403).send({ message: err.message })
      }
      throw err
    }
  }
}
