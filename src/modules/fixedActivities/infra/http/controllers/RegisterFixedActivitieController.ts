import { RegisterFixedActivitieService } from '@fixedActivities/services/RegisterFixedActivitieService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class RegisterFixedActivitieController {
  public async create(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      descricao: z.string(),
    })
    const { descricao } = bodySchema.parse(request.body)
    try {
      const service = container.resolve(RegisterFixedActivitieService)
      const result = await service.execute({
        descricao,
      })
      return response.json(result)
    } catch (err) {
      throw err
    }
  }
}
