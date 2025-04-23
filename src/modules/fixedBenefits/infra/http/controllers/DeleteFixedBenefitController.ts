import { DeleteFixedBenefitService } from '@fixedBenefits/services/DeleteFixedBenefitService'
import { FixedBenefitNotFoundError } from '@shared/errors/FixedBenefitNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class DeleteFixedBenefitController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const querySchema = z.object({
      codigo: z.string(),
    })
    const { codigo } = querySchema.parse(request.query)
    try {
      const service = container.resolve(DeleteFixedBenefitService)
      await service.execute({
        codigo,
      })
      return response.status(200).send()
    } catch (err) {
      if (err instanceof FixedBenefitNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
