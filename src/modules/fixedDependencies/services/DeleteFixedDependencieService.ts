import { IDeleteFixedDependencie } from '@fixedDependencies/domain/models/IDeleteFixedDependencie'
import { IFixedDependenciesRepository } from '@fixedDependencies/domain/repositories/IFixedDependenciesRepository'
import { FixedDependencieNotFoundError } from '@shared/errors/FixedDependencieNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeleteFixedDependencieService {
  constructor(
    @inject('FixedDependenciesRepository')
    private fixedDependenciesRepository: IFixedDependenciesRepository,
  ) {}

  async execute({ codigo }: IDeleteFixedDependencie): Promise<void> {
    const result =
      await this.fixedDependenciesRepository.findFixedDependencieByCodigo(
        codigo,
      )

    if (!result) {
      throw new FixedDependencieNotFoundError()
    }

    await this.fixedDependenciesRepository.deleteFixedDependencie(codigo)
  }
}
