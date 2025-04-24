import { IFixedDependenciesRepository } from '@fixedDependencies/domain/repositories/IFixedDependenciesRepository'
import { IPatientDependencieDTO } from '@patientDependencies/domain/models/IPatientDependencieDTO'
import { IRegisterPatientDependencie } from '@patientDependencies/domain/models/IRegisterPatientDependencie'
import { IPatientDependenciesRepository } from '@patientDependencies/domain/repositories/IPatientDependenciesRepository'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { FixedDependencieNotFoundError } from '@shared/errors/FixedDependencieNotFoundError'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class RegisterPatientDependencieService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,

    @inject('FixedDependenciesRepository')
    private fixedDependenciesRepository: IFixedDependenciesRepository,

    @inject('PatientDependenciesRepository')
    private patientDependenciesRepository: IPatientDependenciesRepository,
  ) {}

  async execute(
    data: IRegisterPatientDependencie,
  ): Promise<IPatientDependencieDTO | null> {
    const result = await this.patientsRepository.findPatientByCodigo(
      data.cadastro_id,
    )

    if (!result) {
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
      await this.patientDependenciesRepository.registerPatientDependencie(data)
    return patientDependencie
  }
}
