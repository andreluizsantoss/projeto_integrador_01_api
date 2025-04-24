import { UpdateHistoryActivitieService } from '@historyActivities/services/UpdateHistoryActivitieService'
import { FixedActivitieNotFoundError } from '@shared/errors/FixedActivitieNotFoundError'
import { HistoryActivitieNotFoundError } from '@shared/errors/HistoryActivitieNotFoundError'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class UpdateHistoryActivitieController {
  public async update(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      id: z.string(),
      cadastro_id: z.string(),
      codigo_atividade: z.string(),
    })
    const { id, cadastro_id, codigo_atividade } = bodySchema.parse(request.body)
    try {
      const service = container.resolve(UpdateHistoryActivitieService)
      const result = await service.execute({
        id: Number(id),
        cadastro_id: Number(cadastro_id),
        codigo_atividade,
      })
      return response.json(result)
    } catch (err) {
      if (err instanceof HistoryActivitieNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      if (err instanceof PatientNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      if (err instanceof FixedActivitieNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
