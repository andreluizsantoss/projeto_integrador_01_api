import { IFixedDependencie } from '@fixedDependencies/domain/models/IFixedDependencie'
import { IShowFixedDependencieByCodigo } from '@fixedDependencies/domain/models/IShowFixedDependencieByCodigo'
import { IFixedDependenciesRepository } from '@fixedDependencies/domain/repositories/IFixedDependenciesRepository'
import { FixedDependencieNotFoundError } from '@shared/errors/FixedDependencieNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindFixedDependencieByCodigoService {
  constructor(
    @inject('FixedDependenciesRepository')
    private fixedDependenciesRepository: IFixedDependenciesRepository,
  ) {}

  async execute({
    codigo,
  }: IShowFixedDependencieByCodigo): Promise<IFixedDependencie | null> {
    const result =
      await this.fixedDependenciesRepository.findFixedDependencieByCodigo(
        codigo,
      )
    if (!result) {
      throw new FixedDependencieNotFoundError()
    }
    return result
  }
}
