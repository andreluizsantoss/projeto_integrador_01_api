import { UpdatePatientDependencieService } from '@patientDependencies/services/UpdatePatientDependencieService'
import { FixedDependencieNotFoundError } from '@shared/errors/FixedDependencieNotFoundError'
import { PatientDependencieNotFoundError } from '@shared/errors/PatientDependencieNotFoundError'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class UpdatePatientDependencieController {
  public async update(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      id: z.string(),
      cadastro_id: z.string(),
      codigo_dependencia: z.string(),
    })
    const { id, cadastro_id, codigo_dependencia } = bodySchema.parse(
      request.body,
    )
    try {
      const service = container.resolve(UpdatePatientDependencieService)
      const result = await service.execute({
        id: Number(id),
        cadastro_id: Number(cadastro_id),
        codigo_dependencia,
      })
      return response.json(result)
    } catch (err) {
      if (err instanceof PatientDependencieNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
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
