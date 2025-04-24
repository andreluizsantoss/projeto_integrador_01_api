import { IPatientBenefit } from '@patientBenefits/domain/models/IPatientBenefit'
import { IPatientBenefitsRepository } from '@patientBenefits/domain/repositories/IPatientBenefitsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllPatientBenefitsService {
  constructor(
    @inject('PatientBenefitsRepository')
    private patientBenefitsRepository: IPatientBenefitsRepository,
  ) {}

  async execute(): Promise<IPatientBenefit[]> {
    const result = await this.patientBenefitsRepository.findAllPatientBenefits()
    return result
  }
}
