import { IFixedBenefit } from '@fixedBenefits/domain/models/IFixedBenefit'
import { IFixedBenefitsRepository } from '@fixedBenefits/domain/repositories/IFixedBenefitsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllFixedBenefitsService {
  constructor(
    @inject('FixedBenefitsRepository')
    private fixedBenefitsRepository: IFixedBenefitsRepository,
  ) {}

  async execute(): Promise<IFixedBenefit[]> {
    const result = await this.fixedBenefitsRepository.findAllFixedBenefits()
    return result
  }
}
