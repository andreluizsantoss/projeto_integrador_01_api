import { IFixedBenefitsRepository } from '@fixedBenefits/domain/repositories/IFixedBenefitsRepository'
import { IPatientBenefitDTO } from '@patientBenefits/domain/models/IPatientBenefitDTO'
import { IUpdatePatientBenefit } from '@patientBenefits/domain/models/IUpdatePatientBenefit'
import { IPatientBenefitsRepository } from '@patientBenefits/domain/repositories/IPatientBenefitsRepository'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { FixedBenefitNotFoundError } from '@shared/errors/FixedBenefitNotFoundError'
import { PatientBenefitNotFoundError } from '@shared/errors/PatientBenefitNotFoundError'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdatePatientBenefitService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,

    @inject('FixedBenefitsRepository')
    private fixedBenefitsRepository: IFixedBenefitsRepository,

    @inject('PatientBenefitsRepository')
    private patientBenefitsRepository: IPatientBenefitsRepository,
  ) {}

  async execute(
    data: IUpdatePatientBenefit,
  ): Promise<IPatientBenefitDTO | null> {
    const result =
      await this.patientBenefitsRepository.findPatientBenefitByCodigo(data.id)

    if (!result) {
      throw new PatientBenefitNotFoundError()
    }

    const resultPatient = await this.patientsRepository.findPatientByCodigo(
      data.cadastro_id,
    )

    if (!resultPatient) {
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
      await this.patientBenefitsRepository.updatePatientBenefit(data)

    return patientBenefit
  }
}
