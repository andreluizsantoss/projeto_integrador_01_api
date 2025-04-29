import { IHistoryActivitie } from '@historyActivities/domain/models/IHistoryActivitie'
import { IHistoryActivitieResponse } from '@historyActivities/domain/models/IHistoryActivitieResponse'
import { IHistoryActivitiesRepository } from '@historyActivities/domain/repositories/IHistoryActivitiesRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllHistoryActivitiesService {
  constructor(
    @inject('HistoryActivitiesRepository')
    private historyActivitiesRepository: IHistoryActivitiesRepository,
  ) {}

  async execute(): Promise<IHistoryActivitieResponse[]> {
    const result =
      await this.historyActivitiesRepository.findAllHistoryActivities()
    return result
  }
}
