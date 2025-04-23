import { inject, injectable } from 'tsyringe'
import { IFixedActivitiesRepository } from '../domain/repositories/IFixedActivitiesRepository'
import { IUpdateFixedActivitie } from '../domain/models/IUpdateFixedActivitie'
import { IFixedActivities } from '../domain/models/IFixedActivities'
import { FixedActivitieNotFoundError } from '@shared/errors/FixedActivitieNotFoundError'

@injectable()
export class UpdateFixedActivitieService {
  constructor(
    @inject('FixedActivitiesRepository')
    private fixedActivitiesRepository: IFixedActivitiesRepository,
  ) {}

  async execute({
    codigo,
    descricao,
  }: IUpdateFixedActivitie): Promise<IFixedActivities | null> {
    const result =
      await this.fixedActivitiesRepository.findByCodigoFixedActivities(codigo)

    if (!result) {
      throw new FixedActivitieNotFoundError()
    }

    const fixedActivitie =
      await this.fixedActivitiesRepository.updateFixedActivitie(
        codigo,
        descricao,
      )

    return fixedActivitie
  }
}
