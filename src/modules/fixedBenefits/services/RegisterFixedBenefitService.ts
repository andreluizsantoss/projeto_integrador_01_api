import { IFixedBenefit } from '@fixedBenefits/domain/models/IFixedBenefit'
import { IRegisterFixedBenefit } from '@fixedBenefits/domain/models/IRegisterFixedBenefit'
import { IFixedBenefitsRepository } from '@fixedBenefits/domain/repositories/IFixedBenefitsRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class RegisterFixedBenefitService {
  constructor(
    @inject('FixedBenefitsRepository')
    private fixedBenefitsRepository: IFixedBenefitsRepository,
  ) {}

  async execute({
    descricao,
  }: IRegisterFixedBenefit): Promise<IFixedBenefit | null> {
    const fixedBenefit =
      await this.fixedBenefitsRepository.registerFixedBenefit(descricao)
    return fixedBenefit
  }
}
