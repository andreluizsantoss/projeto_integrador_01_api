import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindAllFixedActivitiesService } from '../../../services/FindAllFixedActivitiesService'

export default class FindAllFixedActivitiesController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(FindAllFixedActivitiesService)
      const vehicles = await service.execute()
      return response.json(vehicles)
    } catch (err) {
      throw err
    }
  }
}
