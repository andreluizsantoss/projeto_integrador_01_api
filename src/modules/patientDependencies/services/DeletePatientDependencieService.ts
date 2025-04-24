import { IDeletePatientDependencie } from '@patientDependencies/domain/models/IDeletePatientDependencie'
import { IPatientDependenciesRepository } from '@patientDependencies/domain/repositories/IPatientDependenciesRepository'
import { PatientDependencieNotFoundError } from '@shared/errors/PatientDependencieNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeletePatientDependencieService {
  constructor(
    @inject('PatientDependenciesRepository')
    private patientDependenciesRepository: IPatientDependenciesRepository,
  ) {}

  async execute({ id }: IDeletePatientDependencie): Promise<void> {
    const result =
      await this.patientDependenciesRepository.findPatientDependencieByCodigo(
        id,
      )

    if (!result) {
      throw new PatientDependencieNotFoundError()
    }

    await this.patientDependenciesRepository.deletePatientDependencie(id)
  }
}
