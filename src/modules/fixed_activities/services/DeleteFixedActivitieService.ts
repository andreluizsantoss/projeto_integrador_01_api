import { inject, injectable } from 'tsyringe'
import { IFixedActivitiesRepository } from '../domain/repositories/IFixedActivitiesRepository'
import { FixedActivitieNotFoundError } from '@shared/errors/FixedActivitieNotFoundError'
import { IDeleteFixedActivitie } from '../domain/models/IDeleteFixedActivitie'

@injectable()
export class DeleteFixedActivitieService {
  constructor(
    @inject('FixedActivitiesRepository')
    private fixedActivitiesRepository: IFixedActivitiesRepository,
  ) {}

  async execute({ codigo }: IDeleteFixedActivitie): Promise<void> {
    const result =
      await this.fixedActivitiesRepository.findByCodigoFixedActivities(codigo)

    if (!result) {
      throw new FixedActivitieNotFoundError()
    }

    await this.fixedActivitiesRepository.deleteFixedActivitie(codigo)
  }
}
