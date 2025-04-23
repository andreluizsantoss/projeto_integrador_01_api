import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'
import { FindFixedActivitieByCodigoService } from '../../../services/FindFixedActivitieByCodigoService'
import { FixedActivitieNotFoundError } from '@shared/errors/FixedActivitieNotFoundError'

export default class FindFixedActivitieByCodigoController {
  public async show(request: Request, response: Response): Promise<Response> {
    const querySchema = z.object({
      codigo: z.string(),
    })
    const { codigo } = querySchema.parse(request.query)
    try {
      const service = container.resolve(FindFixedActivitieByCodigoService)
      const fixedActivitie = await service.execute({ codigo })
      return response.json(fixedActivitie)
    } catch (err) {
      if (err instanceof FixedActivitieNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
