import { UpdateFixedBenefitService } from '@fixedBenefits/services/UpdateFixedBenefitService'
import { FixedBenefitNotFoundError } from '@shared/errors/FixedBenefitNotFoundError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class UpdateFixedBenefitController {
  public async update(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      codigo: z.string(),
      descricao: z.string(),
    })
    const { codigo, descricao } = bodySchema.parse(request.body)
    try {
      const service = container.resolve(UpdateFixedBenefitService)
      const result = await service.execute({
        codigo,
        descricao,
      })
      return response.json(result)
    } catch (err) {
      if (err instanceof FixedBenefitNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
