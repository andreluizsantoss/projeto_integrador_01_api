import { IDeletePatient } from '@patients/domain/models/IDeletePatient'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeletePatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  async execute({ id }: IDeletePatient): Promise<void> {
    const result = await this.patientsRepository.findPatientByCodigo(id)

    if (!result) {
      throw new PatientNotFoundError()
    }

    await this.patientsRepository.deletePatient(id)
  }
}
