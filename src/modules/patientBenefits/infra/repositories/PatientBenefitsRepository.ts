import { IPatientBenefit } from '@patientBenefits/domain/models/IPatientBenefit'
import { IPatientBenefitDTO } from '@patientBenefits/domain/models/IPatientBenefitDTO'
import { IRegisterPatientBenefit } from '@patientBenefits/domain/models/IRegisterPatientBenefit'
import { IUpdatePatientBenefit } from '@patientBenefits/domain/models/IUpdatePatientBenefit'
import { IPatientBenefitsRepository } from '@patientBenefits/domain/repositories/IPatientBenefitsRepository'
import { prisma } from '@shared/infra/http/lib/prisma'

export class PatientBenefitsRepository implements IPatientBenefitsRepository {
  async findAllPatientBenefits(): Promise<IPatientBenefit[]> {
    const patientBenefits = await prisma.beneficiospaciente.findMany({
      orderBy: {
        id: 'desc',
      },
    })
    return patientBenefits
  }

  async findPatientBenefitByCodigo(
    id: number,
  ): Promise<IPatientBenefit | null> {
    const patientBenefit = await prisma.beneficiospaciente.findUnique({
      where: {
        id: id,
      },
    })
    return patientBenefit
  }

  async registerPatientBenefit(
    data: IRegisterPatientBenefit,
  ): Promise<IPatientBenefitDTO | null> {
    const patientBenefit = await prisma.beneficiospaciente.create({
      data: data,
    })
    return patientBenefit
  }

  async updatePatientBenefit(
    data: IUpdatePatientBenefit,
  ): Promise<IPatientBenefitDTO | null> {
    const patientBenefit = await prisma.beneficiospaciente.update({
      where: {
        id: data.id,
      },
      data: data,
    })
    return patientBenefit
  }

  async deletePatientBenefit(id: number): Promise<void> {
    await prisma.beneficiospaciente.delete({
      where: {
        id: id,
      },
    })
  }
}
