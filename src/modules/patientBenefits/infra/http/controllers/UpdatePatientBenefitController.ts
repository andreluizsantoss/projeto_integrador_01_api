import { UpdatePatientBenefitService } from '@patientBenefits/services/UpdatePatientBenefitService'
import { FixedBenefitNotFoundError } from '@shared/errors/FixedBenefitNotFoundError'
import { PatientBenefitNotFoundError } from '@shared/errors/PatientBenefitNotFoundError'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class UpdatePatientBenefitController {
  public async update(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      id: z.string(),
      cadastro_id: z.string(),
      codigo_beneficio: z.string(),
    })
    const { id, cadastro_id, codigo_beneficio } = bodySchema.parse(request.body)
    try {
      const service = container.resolve(UpdatePatientBenefitService)
      const result = await service.execute({
        id: Number(id),
        cadastro_id: Number(cadastro_id),
        codigo_beneficio,
      })
      return response.json(result)
    } catch (err) {
      if (err instanceof PatientBenefitNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      if (err instanceof PatientNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      if (err instanceof FixedBenefitNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
