import { FindHistoryActivitieByCodigoService } from '@historyActivities/services/FindHistoryActivitieByCodigoService'
import { HistoryActivitieNotFoundError } from '@shared/errors/HistoryActivitieNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class FindHistoryActivitieByCodigoController {
  public async show(request: Request, response: Response): Promise<Response> {
    const querySchema = z.object({
      id: z.string(),
    })
    const { id } = querySchema.parse(request.query)
    try {
      const service = container.resolve(FindHistoryActivitieByCodigoService)
      const result = await service.execute({ id: Number(id) })
      return response.json(result)
    } catch (err) {
      if (err instanceof HistoryActivitieNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
