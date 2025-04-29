import { UserNotFoundError } from '@shared/errors/UserNotFoundError'
import { DeleteUserService } from '@users/services/DeleteUserService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class DeleteUserController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const querySchema = z.object({
      id: z.string(),
    })
    const { id } = querySchema.parse(request.query)
    try {
      const service = container.resolve(DeleteUserService)
      await service.execute({
        id,
      })
      return response.status(200).send()
    } catch (err) {
      if (err instanceof UserNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
