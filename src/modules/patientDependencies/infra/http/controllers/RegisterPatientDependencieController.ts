import { RegisterPatientDependencieService } from '@patientDependencies/services/RegisterPatientDependencieService'
import { FixedDependencieNotFoundError } from '@shared/errors/FixedDependencieNotFoundError'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class RegisterPatientDependencieController {
  public async create(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      cadastro_id: z.string(),
      codigo_dependencia: z.string(),
    })
    const { cadastro_id, codigo_dependencia } = bodySchema.parse(request.body)
    try {
      const service = container.resolve(RegisterPatientDependencieService)
      const result = await service.execute({
        cadastro_id: Number(cadastro_id),
        codigo_dependencia,
      })
      return response.json(result)
    } catch (err) {
      if (err instanceof PatientNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      if (err instanceof FixedDependencieNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
