import { IPatientDTO } from '@patients/domain/models/IPatientDTO'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllPatientsService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  async execute(): Promise<IPatientDTO[]> {
    const result = await this.patientsRepository.findAllPatients()
    return result
  }
}
