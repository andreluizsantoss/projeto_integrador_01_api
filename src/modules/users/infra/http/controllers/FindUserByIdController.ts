import { UserNotFoundError } from '@shared/errors/UserNotFoundError'
import { FindUserByIdService } from '@users/services/FindUserByIdService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class FindUserByIdController {
  public async show(request: Request, response: Response): Promise<Response> {
    const querySchema = z.object({
      id: z.string(),
    })
    const { id } = querySchema.parse(request.query)
    try {
      const service = container.resolve(FindUserByIdService)
      const user = await service.execute({ id })
      return response.json({
        ...user,
        senha: undefined,
        refresh_token: undefined,
      })
    } catch (err) {
      if (err instanceof UserNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
