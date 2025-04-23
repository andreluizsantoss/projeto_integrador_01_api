import { IFixedDependencie } from '@fixedDependencies/domain/models/IFixedDependencie'
import { IUpdateFixedDependencie } from '@fixedDependencies/domain/models/IUpdateFixedDependencie'
import { IFixedDependenciesRepository } from '@fixedDependencies/domain/repositories/IFixedDependenciesRepository'
import { FixedDependencieNotFoundError } from '@shared/errors/FixedDependencieNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateFixedDependencieService {
  constructor(
    @inject('FixedDependenciesRepository')
    private fixedDependenciesRepository: IFixedDependenciesRepository,
  ) {}

  async execute({
    codigo,
    descricao,
  }: IUpdateFixedDependencie): Promise<IFixedDependencie | null> {
    const result =
      await this.fixedDependenciesRepository.findFixedDependencieByCodigo(
        codigo,
      )

    if (!result) {
      throw new FixedDependencieNotFoundError()
    }

    const fixedDependencie =
      await this.fixedDependenciesRepository.updateFixedDependencie(
        codigo,
        descricao,
      )

    return fixedDependencie
  }
}
