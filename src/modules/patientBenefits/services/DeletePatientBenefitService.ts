import { IDeletePatientBenefit } from '@patientBenefits/domain/models/IDeletePatientBenefit'
import { IPatientBenefitsRepository } from '@patientBenefits/domain/repositories/IPatientBenefitsRepository'
import { PatientBenefitNotFoundError } from '@shared/errors/PatientBenefitNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeletePatientBenefitService {
  constructor(
    @inject('PatientBenefitsRepository')
    private patientBenefitsRepository: IPatientBenefitsRepository,
  ) {}

  async execute({ id }: IDeletePatientBenefit): Promise<void> {
    const result =
      await this.patientBenefitsRepository.findPatientBenefitByCodigo(id)

    if (!result) {
      throw new PatientBenefitNotFoundError()
    }

    await this.patientBenefitsRepository.deletePatientBenefit(id)
  }
}
