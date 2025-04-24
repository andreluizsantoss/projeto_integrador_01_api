import { IPatient } from '@patients/domain/models/IPatient'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllPatientsService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  async execute(): Promise<IPatient[]> {
    const result = await this.patientsRepository.findAllPatients()
    return result
  }
}
