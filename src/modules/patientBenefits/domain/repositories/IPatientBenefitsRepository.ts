import { IPatientBenefit } from '../models/IPatientBenefit'
import { IPatientBenefitDTO } from '../models/IPatientBenefitDTO'
import { IPatientBenefitResponse } from '../models/IPatientBenefitResponse'
import { IRegisterPatientBenefit } from '../models/IRegisterPatientBenefit'
import { IUpdatePatientBenefit } from '../models/IUpdatePatientBenefit'

export interface IPatientBenefitsRepository {
  findAllPatientBenefits(): Promise<IPatientBenefitResponse[]>
  findPatientBenefitByCodigo(
    id: number,
  ): Promise<IPatientBenefitResponse | null>
  registerPatientBenefit(
    data: IRegisterPatientBenefit,
  ): Promise<IPatientBenefitResponse | null>
  updatePatientBenefit(
    data: IUpdatePatientBenefit,
  ): Promise<IPatientBenefitDTO | null>
  deletePatientBenefit(id: number): Promise<void>
}
