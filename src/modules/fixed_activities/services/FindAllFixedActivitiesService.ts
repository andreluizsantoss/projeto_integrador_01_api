import { inject, injectable } from 'tsyringe'
import { IFixedActivities } from '../domain/models/IFixedActivities'
import { IFixedActivitiesRepository } from '../domain/repositories/IFixedActivitiesRepository'

@injectable()
export class FindAllFixedActivitiesService {
  constructor(
    @inject('FixedActivitiesRepository')
    private fixedActivitiesRepository: IFixedActivitiesRepository,
  ) {}

  async execute(): Promise<IFixedActivities[]> {
    const result = await this.fixedActivitiesRepository.findAllFixedActivities()
    return result
  }
}
