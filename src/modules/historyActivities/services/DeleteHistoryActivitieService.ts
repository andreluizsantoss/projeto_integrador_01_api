import { IDeleteHistoryActivitie } from '@historyActivities/domain/models/IDeleteHistoryActivitie'
import { IHistoryActivitiesRepository } from '@historyActivities/domain/repositories/IHistoryActivitiesRepository'
import { HistoryActivitieNotFoundError } from '@shared/errors/HistoryActivitieNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeleteHistoryActivitieService {
  constructor(
    @inject('HistoryActivitiesRepository')
    private historyActivitiesRepository: IHistoryActivitiesRepository,
  ) {}

  async execute({ id }: IDeleteHistoryActivitie): Promise<void> {
    const result =
      await this.historyActivitiesRepository.findHistoryActivitieByCodigo(id)

    if (!result) {
      throw new HistoryActivitieNotFoundError()
    }

    await this.historyActivitiesRepository.deleteHistoryActivitie(id)
  }
}
