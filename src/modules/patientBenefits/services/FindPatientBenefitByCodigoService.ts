import { IPatientBenefit } from '@patientBenefits/domain/models/IPatientBenefit'
import { IShowPatientBenefitByCodigo } from '@patientBenefits/domain/models/IShowPatientBenefitByCodigo'
import { IPatientBenefitsRepository } from '@patientBenefits/domain/repositories/IPatientBenefitsRepository'
import { PatientBenefitNotFoundError } from '@shared/errors/PatientBenefitNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindPatientBenefitByCodigoService {
  constructor(
    @inject('PatientBenefitsRepository')
    private patientBenefitsRepository: IPatientBenefitsRepository,
  ) {}

  async execute({
    id,
  }: IShowPatientBenefitByCodigo): Promise<IPatientBenefit | null> {
    const result =
      await this.patientBenefitsRepository.findPatientBenefitByCodigo(id)
    if (!result) {
      throw new PatientBenefitNotFoundError()
    }
    return result
  }
}
