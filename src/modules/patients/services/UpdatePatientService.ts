import { IPatient } from '@patients/domain/models/IPatient'
import { IPatientDTO } from '@patients/domain/models/IPatientDTO'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdatePatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  async execute(patient: IPatient): Promise<IPatientDTO | null> {
    const result = await this.patientsRepository.findPatientByCodigo(patient.id)

    if (!result) {
      throw new PatientNotFoundError()
    }

    const data = await this.patientsRepository.updatePatient(patient)

    return data
  }
}
