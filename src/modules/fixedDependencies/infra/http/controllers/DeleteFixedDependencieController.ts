import { DeleteFixedDependencieService } from '@fixedDependencies/services/DeleteFixedDependencieService'
import { FixedDependencieNotFoundError } from '@shared/errors/FixedDependencieNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class DeleteFixedDependencieController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const querySchema = z.object({
      codigo: z.string(),
    })
    const { codigo } = querySchema.parse(request.query)
    try {
      const service = container.resolve(DeleteFixedDependencieService)
      await service.execute({
        codigo,
      })
      return response.status(200).send()
    } catch (err) {
      if (err instanceof FixedDependencieNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      if (
        err instanceof Error &&
        err.message.includes('Foreign key constraint violated')
      ) {
        return response.status(400).send({
          message:
            'This record could not be removed because it is being referenced by another record.',
        })
      }
      throw err
    }
  }
}
