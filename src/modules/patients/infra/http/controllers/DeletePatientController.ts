import { DeletePatientService } from '@patients/services/DeletePatientService'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class DeletePatientController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const querySchema = z.object({
      id: z.string(),
    })
    const { id } = querySchema.parse(request.query)
    try {
      const service = container.resolve(DeletePatientService)
      await service.execute({
        id: Number(id),
      })
      return response.status(200).send()
    } catch (err) {
      if (err instanceof PatientNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      if (
        err instanceof Error &&
        err.message.includes('Foreign key constraint violated')
      ) {
        return response.status(400).send({
          message:
            'This record could not be removed because it is being referenced by another record.',
        })
      }
      throw err
    }
  }
}
