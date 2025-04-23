import { FindFixedActivitieByCodigoService } from '@fixedActivities/services/FindFixedActivitieByCodigoService'
import { FixedActivitieNotFoundError } from '@shared/errors/FixedActivitieNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class FindFixedActivitieByCodigoController {
  public async show(request: Request, response: Response): Promise<Response> {
    const querySchema = z.object({
      codigo: z.string(),
    })
    const { codigo } = querySchema.parse(request.query)
    try {
      const service = container.resolve(FindFixedActivitieByCodigoService)
      const result = await service.execute({ codigo })
      return response.json(result)
    } catch (err) {
      if (err instanceof FixedActivitieNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
