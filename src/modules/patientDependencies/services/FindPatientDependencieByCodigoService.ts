import { IPatientDependencieResponse } from '@patientDependencies/domain/models/IPatientDependencieResponse'
import { IShowPatientDependencieByCodigo } from '@patientDependencies/domain/models/IShowPatientDependencieByCodigo'
import { IPatientDependenciesRepository } from '@patientDependencies/domain/repositories/IPatientDependenciesRepository'
import { PatientDependencieNotFoundError } from '@shared/errors/PatientDependencieNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindPatientDependencieByCodigoService {
  constructor(
    @inject('PatientDependenciesRepository')
    private patientDependenciesRepository: IPatientDependenciesRepository,
  ) {}

  async execute({
    id,
  }: IShowPatientDependencieByCodigo): Promise<IPatientDependencieResponse | null> {
    const result =
      await this.patientDependenciesRepository.findPatientDependencieByCodigo(
        id,
      )
    if (!result) {
      throw new PatientDependencieNotFoundError()
    }
    return result
  }
}
