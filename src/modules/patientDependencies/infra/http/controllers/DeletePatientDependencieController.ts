import { DeletePatientDependencieService } from '@patientDependencies/services/DeletePatientDependencieService'
import { PatientDependencieNotFoundError } from '@shared/errors/PatientDependencieNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class DeletePatientDependencieController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const querySchema = z.object({
      id: z.string(),
    })
    const { id } = querySchema.parse(request.query)
    try {
      const service = container.resolve(DeletePatientDependencieService)
      await service.execute({
        id: Number(id),
      })
      return response.status(200).send()
    } catch (err) {
      if (err instanceof PatientDependencieNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
