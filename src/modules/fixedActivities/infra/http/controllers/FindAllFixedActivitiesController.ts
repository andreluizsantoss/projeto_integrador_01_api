import { FindAllFixedActivitiesService } from '@fixedActivities/services/FindAllFixedActivitiesService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default class FindAllFixedActivitiesController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(FindAllFixedActivitiesService)
      const result = await service.execute()
      return response.json(result)
    } catch (err) {
      throw err
    }
  }
}
