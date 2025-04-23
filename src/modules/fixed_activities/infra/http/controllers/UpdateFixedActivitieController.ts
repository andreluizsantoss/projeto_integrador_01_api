import { FixedActivitieNotFoundError } from '@shared/errors/FixedActivitieNotFoundError'
import { Request, Response } from 'express'
import { UpdateFixedActivitieService } from 'src/modules/fixed_activities/services/UpdateFixedActivitieService'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class UpdateFixedActivitieController {
  public async update(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      codigo: z.string(),
      descricao: z.string(),
    })
    const { codigo, descricao } = bodySchema.parse(request.body)
    try {
      const service = container.resolve(UpdateFixedActivitieService)
      const fixedActivitie = await service.execute({
        codigo,
        descricao,
      })
      return response.json(fixedActivitie)
    } catch (err) {
      if (err instanceof FixedActivitieNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
