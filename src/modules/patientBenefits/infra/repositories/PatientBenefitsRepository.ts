import { IPatientBenefit } from '@patientBenefits/domain/models/IPatientBenefit'
import { IPatientBenefitDTO } from '@patientBenefits/domain/models/IPatientBenefitDTO'
import { IPatientBenefitResponse } from '@patientBenefits/domain/models/IPatientBenefitResponse'
import { IRegisterPatientBenefit } from '@patientBenefits/domain/models/IRegisterPatientBenefit'
import { IUpdatePatientBenefit } from '@patientBenefits/domain/models/IUpdatePatientBenefit'
import { IPatientBenefitsRepository } from '@patientBenefits/domain/repositories/IPatientBenefitsRepository'
import { prisma } from '@shared/infra/http/lib/prisma'

export class PatientBenefitsRepository implements IPatientBenefitsRepository {
  async findAllPatientBenefits(): Promise<IPatientBenefitResponse[]> {
    const patientBenefits = await prisma.beneficiospaciente.findMany({
      orderBy: {
        id: 'asc',
      },
    })

    const patientBenefitsWithDetails = await Promise.all(
      patientBenefits.map(async benefit => {
        const cadastro = await prisma.cadastro.findUnique({
          where: { id: benefit.cadastro_id },
        })

        const beneficio = await prisma.beneficiosfixos.findUnique({
          where: { codigo: benefit.codigo_beneficio },
        })

        return {
          id: benefit.id,
          paciente: {
            id: cadastro?.id ?? 0,
            nome: cadastro?.nome ?? 'Desconhecido',
          },
          beneficio: {
            codigo: beneficio?.codigo ?? 'Desconhecido',
            descricao: beneficio?.descricao ?? 'Sem descrição',
          },
        }
      }),
    )

    return patientBenefitsWithDetails
  }

  async findPatientBenefitByCodigo(
    id: number,
  ): Promise<IPatientBenefitResponse | null> {
    const patientBenefit = await prisma.beneficiospaciente.findUnique({
      where: {
        id: id,
      },
    })

    if (!patientBenefit) {
      return null
    }

    const cadastro = await prisma.cadastro.findUnique({
      where: { id: patientBenefit.cadastro_id },
    })

    const beneficio = await prisma.beneficiosfixos.findUnique({
      where: { codigo: patientBenefit.codigo_beneficio },
    })

    return {
      id: patientBenefit.id,
      paciente: {
        id: cadastro?.id ?? 0,
        nome: cadastro?.nome ?? 'Desconhecido',
      },
      beneficio: {
        codigo: beneficio?.codigo ?? 'Desconhecido',
        descricao: beneficio?.descricao ?? 'Sem descrição',
      },
    }
  }

  async registerPatientBenefit(
    data: IRegisterPatientBenefit,
  ): Promise<IPatientBenefitResponse | null> {
    const patientBenefit = await prisma.beneficiospaciente.create({
      data: data,
    })

    const cadastro = await prisma.cadastro.findUnique({
      where: { id: patientBenefit.cadastro_id },
    })

    const beneficio = await prisma.beneficiosfixos.findUnique({
      where: { codigo: patientBenefit.codigo_beneficio },
    })

    return {
      id: patientBenefit.id,
      paciente: {
        id: cadastro?.id ?? 0,
        nome: cadastro?.nome ?? 'Desconhecido',
      },
      beneficio: {
        codigo: beneficio?.codigo ?? 'Desconhecido',
        descricao: beneficio?.descricao ?? 'Sem descrição',
      },
    }
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
