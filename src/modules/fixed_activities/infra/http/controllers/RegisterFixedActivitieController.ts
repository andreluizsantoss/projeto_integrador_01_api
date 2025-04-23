import { Request, Response } from 'express'
import { RegisterFixedActivitieService } from 'src/modules/fixed_activities/services/RegisterFixedActivitieService'
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
      const fixedActivitie = await service.execute({
        descricao,
      })
      return response.json(fixedActivitie)
    } catch (err) {
      throw err
    }
  }
}
