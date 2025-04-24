import { FindAllPatientDependenciesService } from '@patientDependencies/services/FindAllPatientDependenciesService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default class FindAllPatientDependenciesController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(FindAllPatientDependenciesService)
      const result = await service.execute()
      return response.json(result)
    } catch (err) {
      throw err
    }
  }
}
