import { RegisterFixedBenefitService } from '@fixedBenefits/services/RegisterFixedBenefitService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class RegisterFixedBenefitController {
  public async create(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      descricao: z.string(),
    })
    const { descricao } = bodySchema.parse(request.body)
    try {
      const service = container.resolve(RegisterFixedBenefitService)
      const result = await service.execute({
        descricao,
      })
      return response.json(result)
    } catch (err) {
      throw err
    }
  }
}
