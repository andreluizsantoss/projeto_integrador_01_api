import { IFixedDependencie } from '@fixedDependencies/domain/models/IFixedDependencie'
import { IRegisterFixedDependencie } from '@fixedDependencies/domain/models/IRegisterFixedDependencie'
import { IFixedDependenciesRepository } from '@fixedDependencies/domain/repositories/IFixedDependenciesRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class RegisterFixedDependencieService {
  constructor(
    @inject('FixedDependenciesRepository')
    private fixedDependenciesRepository: IFixedDependenciesRepository,
  ) {}

  async execute({
    descricao,
  }: IRegisterFixedDependencie): Promise<IFixedDependencie | null> {
    const fixedDependencie =
      await this.fixedDependenciesRepository.registerFixedDependencie(descricao)
    return fixedDependencie
  }
}
