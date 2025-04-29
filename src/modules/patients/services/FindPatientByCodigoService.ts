import { IPatientDTO } from '@patients/domain/models/IPatientDTO'
import { IShowPatientByCodigo } from '@patients/domain/models/IShowPatientByCodigo'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindPatientByCodigoService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  async execute({ id }: IShowPatientByCodigo): Promise<IPatientDTO | null> {
    const result = await this.patientsRepository.findPatientByCodigo(id)
    if (!result) {
      throw new PatientNotFoundError()
    }
    return result
  }
}
