import { inject, injectable } from 'tsyringe'
import { IFixedActivitiesRepository } from '../domain/repositories/IFixedActivitiesRepository'
import { IShowFixedActivitieByCodigo } from '../domain/models/IShowFixedActivitieByCodigo'
import { IFixedActivities } from '../domain/models/IFixedActivities'
import { FixedActivitieNotFoundError } from '@shared/errors/FixedActivitieNotFoundError'

@injectable()
export class FindFixedActivitieByCodigoService {
  constructor(
    @inject('FixedActivitiesRepository')
    private fixedActivitiesRepository: IFixedActivitiesRepository,
  ) {}

  async execute({
    codigo,
  }: IShowFixedActivitieByCodigo): Promise<IFixedActivities | null> {
    const result =
      await this.fixedActivitiesRepository.findByCodigoFixedActivities(codigo)
    if (!result) {
      throw new FixedActivitieNotFoundError()
    }
    return result
  }
}
