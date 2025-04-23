import { UpdateFixedDependencieService } from '@fixedDependencies/services/UpdateFixedDependencieService'
import { FixedDependencieNotFoundError } from '@shared/errors/FixedDependencieNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class UpdateFixedDependencieController {
  public async update(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      codigo: z.string(),
      descricao: z.string(),
    })
    const { codigo, descricao } = bodySchema.parse(request.body)
    try {
      const service = container.resolve(UpdateFixedDependencieService)
      const result = await service.execute({
        codigo,
        descricao,
      })
      return response.json(result)
    } catch (err) {
      if (err instanceof FixedDependencieNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
