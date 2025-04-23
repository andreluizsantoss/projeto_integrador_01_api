import { inject, injectable } from 'tsyringe'
import { IRegisterFixedActivitie } from '../domain/models/IRegisterFixedActivitie'
import { IFixedActivities } from '../domain/models/IFixedActivities'
import { IFixedActivitiesRepository } from '../domain/repositories/IFixedActivitiesRepository'

@injectable()
export class RegisterFixedActivitieService {
  constructor(
    @inject('FixedActivitiesRepository')
    private fixedActivitiesRepository: IFixedActivitiesRepository,
  ) {}

  async execute({
    descricao,
  }: IRegisterFixedActivitie): Promise<IFixedActivities | null> {
    const fixedActivitie =
      await this.fixedActivitiesRepository.registerFixedActivitie(descricao)
    return fixedActivitie
  }
}
