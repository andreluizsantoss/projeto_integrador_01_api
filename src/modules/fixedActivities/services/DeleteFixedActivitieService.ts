import { IDeleteFixedActivitie } from '@fixedActivities/domain/models/IDeleteFixedActivitie'
import { IFixedActivitiesRepository } from '@fixedActivities/domain/repositories/IFixedActivitiesRepository'
import { FixedActivitieNotFoundError } from '@shared/errors/FixedActivitieNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeleteFixedActivitieService {
  constructor(
    @inject('FixedActivitiesRepository')
    private fixedActivitiesRepository: IFixedActivitiesRepository,
  ) {}

  async execute({ codigo }: IDeleteFixedActivitie): Promise<void> {
    const result =
      await this.fixedActivitiesRepository.findFixedActivitieByCodigo(codigo)

    if (!result) {
      throw new FixedActivitieNotFoundError()
    }

    await this.fixedActivitiesRepository.deleteFixedActivitie(codigo)
  }
}
