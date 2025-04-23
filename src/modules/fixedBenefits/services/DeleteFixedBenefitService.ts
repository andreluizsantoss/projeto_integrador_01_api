import { IDeleteFixedBenefit } from '@fixedBenefits/domain/models/IDeleteFixedBenefit'
import { IFixedBenefitsRepository } from '@fixedBenefits/domain/repositories/IFixedBenefitsRepository'
import { FixedBenefitNotFoundError } from '@shared/errors/FixedBenefitNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeleteFixedBenefitService {
  constructor(
    @inject('FixedBenefitsRepository')
    private fixedBenefitsRepository: IFixedBenefitsRepository,
  ) {}

  async execute({ codigo }: IDeleteFixedBenefit): Promise<void> {
    const result =
      await this.fixedBenefitsRepository.findFixedBenefitByCodigo(codigo)

    if (!result) {
      throw new FixedBenefitNotFoundError()
    }

    await this.fixedBenefitsRepository.deleteFixedBenefit(codigo)
  }
}
