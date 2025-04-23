import { IFixedActivitie } from '@fixedActivities/domain/models/IFixedActivitie'
import { IUpdateFixedActivitie } from '@fixedActivities/domain/models/IUpdateFixedActivitie'
import { IFixedActivitiesRepository } from '@fixedActivities/domain/repositories/IFixedActivitiesRepository'
import { FixedActivitieNotFoundError } from '@shared/errors/FixedActivitieNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateFixedActivitieService {
  constructor(
    @inject('FixedActivitiesRepository')
    private fixedActivitiesRepository: IFixedActivitiesRepository,
  ) {}

  async execute({
    codigo,
    descricao,
  }: IUpdateFixedActivitie): Promise<IFixedActivitie | null> {
    const result =
      await this.fixedActivitiesRepository.findFixedActivitieByCodigo(codigo)

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
