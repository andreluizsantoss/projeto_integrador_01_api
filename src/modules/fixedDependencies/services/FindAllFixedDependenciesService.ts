import { IFixedDependencie } from '@fixedDependencies/domain/models/IFixedDependencie'
import { IFixedDependenciesRepository } from '@fixedDependencies/domain/repositories/IFixedDependenciesRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllFixedDependenciesService {
  constructor(
    @inject('FixedDependenciesRepository')
    private fixedDependenciesRepository: IFixedDependenciesRepository,
  ) {}

  async execute(): Promise<IFixedDependencie[]> {
    const result =
      await this.fixedDependenciesRepository.findAllFixedDependencies()
    return result
  }
}
