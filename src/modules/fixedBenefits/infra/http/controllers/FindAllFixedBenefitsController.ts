import { FindAllFixedBenefitsService } from '@fixedBenefits/services/FindAllFixedBenefitsService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default class FindAllFixedBenefitsController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(FindAllFixedBenefitsService)
      const result = await service.execute()
      return response.json(result)
    } catch (err) {
      throw err
    }
  }
}
