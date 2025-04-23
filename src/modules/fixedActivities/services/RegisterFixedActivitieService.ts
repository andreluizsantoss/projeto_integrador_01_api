import { IFixedActivitie } from '@fixedActivities/domain/models/IFixedActivitie'
import { IRegisterFixedActivitie } from '@fixedActivities/domain/models/IRegisterFixedActivitie'
import { IFixedActivitiesRepository } from '@fixedActivities/domain/repositories/IFixedActivitiesRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class RegisterFixedActivitieService {
  constructor(
    @inject('FixedActivitiesRepository')
    private fixedActivitiesRepository: IFixedActivitiesRepository,
  ) {}

  async execute({
    descricao,
  }: IRegisterFixedActivitie): Promise<IFixedActivitie | null> {
    const fixedActivitie =
      await this.fixedActivitiesRepository.registerFixedActivitie(descricao)
    return fixedActivitie
  }
}
