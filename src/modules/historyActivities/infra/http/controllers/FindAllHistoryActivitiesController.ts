import { FindAllHistoryActivitiesService } from '@historyActivities/services/FindAllHistoryActivitiesService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default class FindAllHistoryActivitiesController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(FindAllHistoryActivitiesService)
      const result = await service.execute()
      return response.json(result)
    } catch (err) {
      throw err
    }
  }
}
