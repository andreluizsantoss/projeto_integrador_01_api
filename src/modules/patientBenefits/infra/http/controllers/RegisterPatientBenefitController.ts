import { RegisterPatientBenefitService } from '@patientBenefits/services/RegisterPatientBenefitService'
import { FixedBenefitNotFoundError } from '@shared/errors/FixedBenefitNotFoundError'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class RegisterPatientBenefitController {
  public async create(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      cadastro_id: z.string(),
      codigo_beneficio: z.string(),
    })
    const { cadastro_id, codigo_beneficio } = bodySchema.parse(request.body)
    try {
      const service = container.resolve(RegisterPatientBenefitService)
      const result = await service.execute({
        cadastro_id: Number(cadastro_id),
        codigo_beneficio,
      })
      return response.json(result)
    } catch (err) {
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
