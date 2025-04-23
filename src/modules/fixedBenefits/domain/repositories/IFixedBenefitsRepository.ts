import { IFixedBenefit } from '../models/IFixedBenefit'

export interface IFixedBenefitsRepository {
  findAllFixedBenefits(): Promise<IFixedBenefit[]>
  findFixedBenefitByCodigo(codigo: string): Promise<IFixedBenefit | null>
  registerFixedBenefit(descricao: string): Promise<IFixedBenefit | null>
  updateFixedBenefit(
    codigo: string,
    descricao: string,
  ): Promise<IFixedBenefit | null>
  deleteFixedBenefit(codigo: string): Promise<void>
}
