import { IPatientBenefit } from '../models/IPatientBenefit'
import { IPatientBenefitDTO } from '../models/IPatientBenefitDTO'
import { IRegisterPatientBenefit } from '../models/IRegisterPatientBenefit'
import { IUpdatePatientBenefit } from '../models/IUpdatePatientBenefit'

export interface IPatientBenefitsRepository {
  findAllPatientBenefits(): Promise<IPatientBenefit[]>
  findPatientBenefitByCodigo(id: number): Promise<IPatientBenefit | null>
  registerPatientBenefit(
    data: IRegisterPatientBenefit,
  ): Promise<IPatientBenefitDTO | null>
  updatePatientBenefit(
    data: IUpdatePatientBenefit,
  ): Promise<IPatientBenefitDTO | null>
  deletePatientBenefit(id: number): Promise<void>
}
