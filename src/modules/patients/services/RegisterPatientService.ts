import { IPatientDTO } from '@patients/domain/models/IPatientDTO'
import { IRegisterPatient } from '@patients/domain/models/IRegisterPatient'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class RegisterPatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  async execute(patient: IRegisterPatient): Promise<IPatientDTO | null> {
    const result = await this.patientsRepository.registerPatient(patient)
    return result
  }
}
