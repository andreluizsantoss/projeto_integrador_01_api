import { IPatientDependencie } from '@patientDependencies/domain/models/IPatientDependencie'
import { IPatientDependenciesRepository } from '@patientDependencies/domain/repositories/IPatientDependenciesRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllPatientDependenciesService {
  constructor(
    @inject('PatientDependenciesRepository')
    private patientDependenciesRepository: IPatientDependenciesRepository,
  ) {}

  async execute(): Promise<IPatientDependencie[]> {
    const result =
      await this.patientDependenciesRepository.findAllPatientDependencies()
    return result
  }
}
