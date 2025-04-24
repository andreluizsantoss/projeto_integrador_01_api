import { IFixedBenefitsRepository } from '@fixedBenefits/domain/repositories/IFixedBenefitsRepository'
import { IPatientBenefitDTO } from '@patientBenefits/domain/models/IPatientBenefitDTO'
import { IRegisterPatientBenefit } from '@patientBenefits/domain/models/IRegisterPatientBenefit'
import { IPatientBenefitsRepository } from '@patientBenefits/domain/repositories/IPatientBenefitsRepository'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { FixedBenefitNotFoundError } from '@shared/errors/FixedBenefitNotFoundError'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class RegisterPatientBenefitService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,

    @inject('FixedBenefitsRepository')
    private fixedBenefitsRepository: IFixedBenefitsRepository,

    @inject('PatientBenefitsRepository')
    private patientBenefitsRepository: IPatientBenefitsRepository,
  ) {}

  async execute(
    data: IRegisterPatientBenefit,
  ): Promise<IPatientBenefitDTO | null> {
    const result = await this.patientsRepository.findPatientByCodigo(
      data.cadastro_id,
    )

    if (!result) {
      throw new PatientNotFoundError()
    }

    const resultBenefit =
      await this.fixedBenefitsRepository.findFixedBenefitByCodigo(
        data.codigo_beneficio,
      )

    if (!resultBenefit) {
      throw new FixedBenefitNotFoundError()
    }

    const patientBenefit =
      await this.patientBenefitsRepository.registerPatientBenefit(data)
    return patientBenefit
  }
}
