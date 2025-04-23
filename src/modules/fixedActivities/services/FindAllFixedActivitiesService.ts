import { IFixedActivitie } from '@fixedActivities/domain/models/IFixedActivitie'
import { IFixedActivitiesRepository } from '@fixedActivities/domain/repositories/IFixedActivitiesRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllFixedActivitiesService {
  constructor(
    @inject('FixedActivitiesRepository')
    private fixedActivitiesRepository: IFixedActivitiesRepository,
  ) {}

  async execute(): Promise<IFixedActivitie[]> {
    const result = await this.fixedActivitiesRepository.findAllFixedActivities()
    return result
  }
}
