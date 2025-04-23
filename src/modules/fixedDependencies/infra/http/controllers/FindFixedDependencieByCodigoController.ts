import { FindFixedDependencieByCodigoService } from '@fixedDependencies/services/FindFixedDependencieByCodigoService'
import { FixedDependencieNotFoundError } from '@shared/errors/FixedDependencieNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class FindFixedDependencieByCodigoController {
  public async show(request: Request, response: Response): Promise<Response> {
    const querySchema = z.object({
      codigo: z.string(),
    })
    const { codigo } = querySchema.parse(request.query)
    try {
      const service = container.resolve(FindFixedDependencieByCodigoService)
      const result = await service.execute({ codigo })
      return response.json(result)
    } catch (err) {
      if (err instanceof FixedDependencieNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
