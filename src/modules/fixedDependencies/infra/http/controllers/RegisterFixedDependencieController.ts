import { RegisterFixedDependencieService } from '@fixedDependencies/services/RegisterFixedDependencieService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class RegisterFixedDependencieController {
  public async create(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      descricao: z.string(),
    })
    const { descricao } = bodySchema.parse(request.body)
    try {
      const service = container.resolve(RegisterFixedDependencieService)
      const result = await service.execute({
        descricao,
      })
      return response.json(result)
    } catch (err) {
      throw err
    }
  }
}
