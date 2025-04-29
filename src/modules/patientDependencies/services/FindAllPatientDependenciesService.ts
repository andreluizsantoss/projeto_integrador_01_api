import { IPatientDependencieResponse } from '@patientDependencies/domain/models/IPatientDependencieResponse'
import { IPatientDependenciesRepository } from '@patientDependencies/domain/repositories/IPatientDependenciesRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllPatientDependenciesService {
  constructor(
    @inject('PatientDependenciesRepository')
    private patientDependenciesRepository: IPatientDependenciesRepository,
  ) {}

  async execute(): Promise<IPatientDependencieResponse[]> {
    const result =
      await this.patientDependenciesRepository.findAllPatientDependencies()
    return result
  }
}
