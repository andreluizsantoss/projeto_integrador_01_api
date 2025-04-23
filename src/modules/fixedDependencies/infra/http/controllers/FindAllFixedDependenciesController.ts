import { FindAllFixedDependenciesService } from '@fixedDependencies/services/FindAllFixedDependenciesService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default class FindAllFixedDependenciesController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(FindAllFixedDependenciesService)
      const result = await service.execute()
      return response.json(result)
    } catch (err) {
      throw err
    }
  }
}
