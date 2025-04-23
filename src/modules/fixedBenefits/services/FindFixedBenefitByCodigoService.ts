import { IFixedBenefit } from '@fixedBenefits/domain/models/IFixedBenefit'
import { IShowFixedBenefitByCodigo } from '@fixedBenefits/domain/models/IShowFixedBenefitByCodigo'
import { IFixedBenefitsRepository } from '@fixedBenefits/domain/repositories/IFixedBenefitsRepository'
import { FixedBenefitNotFoundError } from '@shared/errors/FixedBenefitNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindFixedBenefitByCodigoService {
  constructor(
    @inject('FixedBenefitsRepository')
    private fixedBenefitsRepository: IFixedBenefitsRepository,
  ) {}

  async execute({
    codigo,
  }: IShowFixedBenefitByCodigo): Promise<IFixedBenefit | null> {
    const result =
      await this.fixedBenefitsRepository.findFixedBenefitByCodigo(codigo)
    if (!result) {
      throw new FixedBenefitNotFoundError()
    }
    return result
  }
}
