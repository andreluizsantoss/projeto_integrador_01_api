import { IHistoryActivitie } from '@historyActivities/domain/models/IHistoryActivitie'
import { IShowHistoryActivitieByCodigo } from '@historyActivities/domain/models/IShowHistoryActivitieByCodigo'
import { IHistoryActivitiesRepository } from '@historyActivities/domain/repositories/IHistoryActivitiesRepository'
import { HistoryActivitieNotFoundError } from '@shared/errors/HistoryActivitieNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindHistoryActivitieByCodigoService {
  constructor(
    @inject('HistoryActivitiesRepository')
    private historyActivitiesRepository: IHistoryActivitiesRepository,
  ) {}

  async execute({
    id,
  }: IShowHistoryActivitieByCodigo): Promise<IHistoryActivitie | null> {
    const result =
      await this.historyActivitiesRepository.findHistoryActivitieByCodigo(id)
    if (!result) {
      throw new HistoryActivitieNotFoundError()
    }
    return result
  }
}
