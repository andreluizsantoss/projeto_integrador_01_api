import { IHistoryActivitie } from '@historyActivities/domain/models/IHistoryActivitie'
import { IHistoryActivitiesRepository } from '@historyActivities/domain/repositories/IHistoryActivitiesRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllHistoryActivitiesService {
  constructor(
    @inject('HistoryActivitiesRepository')
    private historyActivitiesRepository: IHistoryActivitiesRepository,
  ) {}

  async execute(): Promise<IHistoryActivitie[]> {
    const result =
      await this.historyActivitiesRepository.findAllHistoryActivities()
    return result
  }
}
