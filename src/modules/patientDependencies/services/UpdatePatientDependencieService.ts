import { IFixedDependenciesRepository } from '@fixedDependencies/domain/repositories/IFixedDependenciesRepository'
import { IPatientDependencieResponse } from '@patientDependencies/domain/models/IPatientDependencieResponse'
import { IUpdatePatientDependencie } from '@patientDependencies/domain/models/IUpdatePatientDependencie'
import { IPatientDependenciesRepository } from '@patientDependencies/domain/repositories/IPatientDependenciesRepository'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { FixedDependencieNotFoundError } from '@shared/errors/FixedDependencieNotFoundError'
import { PatientDependencieNotFoundError } from '@shared/errors/PatientDependencieNotFoundError'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdatePatientDependencieService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,

    @inject('FixedDependenciesRepository')
    private fixedDependenciesRepository: IFixedDependenciesRepository,

    @inject('PatientDependenciesRepository')
    private patientDependenciesRepository: IPatientDependenciesRepository,
  ) {}

  async execute(
    data: IUpdatePatientDependencie,
  ): Promise<IPatientDependencieResponse | null> {
    const result =
      await this.patientDependenciesRepository.findPatientDependencieByCodigo(
        data.id,
      )

    if (!result) {
      throw new PatientDependencieNotFoundError()
    }

    const resultPatient = await this.patientsRepository.findPatientByCodigo(
      data.cadastro_id,
    )

    if (!resultPatient) {
      throw new PatientNotFoundError()
    }

    const resultDependencie =
      await this.fixedDependenciesRepository.findFixedDependencieByCodigo(
        data.codigo_dependencia,
      )

    if (!resultDependencie) {
      throw new FixedDependencieNotFoundError()
    }

    const patientDependencie =
      await this.patientDependenciesRepository.updatePatientDependencie(data)

    return patientDependencie
  }
}
