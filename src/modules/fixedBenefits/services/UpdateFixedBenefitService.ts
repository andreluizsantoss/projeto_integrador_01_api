import { IFixedBenefit } from '@fixedBenefits/domain/models/IFixedBenefit'
import { IUpdateFixedBenefit } from '@fixedBenefits/domain/models/IUpdateFixedBenefit'
import { IFixedBenefitsRepository } from '@fixedBenefits/domain/repositories/IFixedBenefitsRepository'
import { FixedBenefitNotFoundError } from '@shared/errors/FixedBenefitNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateFixedBenefitService {
  constructor(
    @inject('FixedBenefitsRepository')
    private fixedBenefitsRepository: IFixedBenefitsRepository,
  ) {}

  async execute({
    codigo,
    descricao,
  }: IUpdateFixedBenefit): Promise<IFixedBenefit | null> {
    const result =
      await this.fixedBenefitsRepository.findFixedBenefitByCodigo(codigo)

    if (!result) {
      throw new FixedBenefitNotFoundError()
    }

    const fixedBenefit = await this.fixedBenefitsRepository.updateFixedBenefit(
      codigo,
      descricao,
    )

    return fixedBenefit
  }
}
