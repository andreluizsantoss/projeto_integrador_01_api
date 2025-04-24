import { FindPatientByCodigoService } from '@patients/services/FindPatientByCodigoService'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

const estadoCivilReverseMap = {
  Solteiro: 'Solteiro',
  Casado: 'Casado',
  Divorciado: 'Divorciado',
  Viuvo: 'Viúvo',
  Outro: 'Outro',
} as const

export default class FindPatientByCodigoController {
  public async show(request: Request, response: Response): Promise<Response> {
    const querySchema = z.object({
      id: z.string(),
    })
    const { id } = querySchema.parse(request.query)
    try {
      const service = container.resolve(FindPatientByCodigoService)
      const result = await service.execute({ id: Number(id) })
      return response.json({
        ...result,
        estado_civil:
          estadoCivilReverseMap[
            result.estado_civil as keyof typeof estadoCivilReverseMap
          ],
      })
    } catch (err) {
      if (err instanceof PatientNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
