import { RegisterHistoryActivitieService } from '@historyActivities/services/RegisterHistoryActivitieService'
import { FixedActivitieNotFoundError } from '@shared/errors/FixedActivitieNotFoundError'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class RegisterHistoryActivitieController {
  public async create(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      cadastro_id: z.string(),
      codigo_atividade: z.string(),
    })
    const { cadastro_id, codigo_atividade } = bodySchema.parse(request.body)
    try {
      const service = container.resolve(RegisterHistoryActivitieService)
      const result = await service.execute({
        cadastro_id: Number(cadastro_id),
        codigo_atividade,
      })
      return response.json(result)
    } catch (err) {
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
