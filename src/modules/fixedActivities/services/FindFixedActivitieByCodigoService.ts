import { IFixedActivitie } from '@fixedActivities/domain/models/IFixedActivitie'
import { IShowFixedActivitieByCodigo } from '@fixedActivities/domain/models/IShowFixedActivitieByCodigo'
import { IFixedActivitiesRepository } from '@fixedActivities/domain/repositories/IFixedActivitiesRepository'
import { FixedActivitieNotFoundError } from '@shared/errors/FixedActivitieNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindFixedActivitieByCodigoService {
  constructor(
    @inject('FixedActivitiesRepository')
    private fixedActivitiesRepository: IFixedActivitiesRepository,
  ) {}

  async execute({
    codigo,
  }: IShowFixedActivitieByCodigo): Promise<IFixedActivitie | null> {
    const result =
      await this.fixedActivitiesRepository.findFixedActivitieByCodigo(codigo)
    if (!result) {
      throw new FixedActivitieNotFoundError()
    }
    return result
  }
}
