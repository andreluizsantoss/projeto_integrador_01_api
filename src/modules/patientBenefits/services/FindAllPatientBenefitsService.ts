import { IPatientBenefitResponse } from '@patientBenefits/domain/models/IPatientBenefitResponse'
import { IPatientBenefitsRepository } from '@patientBenefits/domain/repositories/IPatientBenefitsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllPatientBenefitsService {
  constructor(
    @inject('PatientBenefitsRepository')
    private patientBenefitsRepository: IPatientBenefitsRepository,
  ) {}

  async execute(): Promise<IPatientBenefitResponse[]> {
    const result = await this.patientBenefitsRepository.findAllPatientBenefits()
    return result
  }
}
