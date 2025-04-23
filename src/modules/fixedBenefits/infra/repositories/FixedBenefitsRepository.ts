import { IFixedBenefit } from '@fixedBenefits/domain/models/IFixedBenefit'
import { IFixedBenefitsRepository } from '@fixedBenefits/domain/repositories/IFixedBenefitsRepository'
import { prisma } from '@shared/infra/http/lib/prisma'

export class FixedBenefitsRepository implements IFixedBenefitsRepository {
  async findAllFixedBenefits(): Promise<IFixedBenefit[]> {
    const fixedBenefits = await prisma.beneficiosfixos.findMany({
      orderBy: {
        descricao: 'desc',
      },
    })
    return fixedBenefits
  }

  async findFixedBenefitByCodigo(
    codigo: string,
  ): Promise<IFixedBenefit | null> {
    const fixedBenefit = await prisma.beneficiosfixos.findUnique({
      where: {
        codigo: codigo,
      },
    })
    return fixedBenefit
  }

  async registerFixedBenefit(descricao: string): Promise<IFixedBenefit | null> {
    const getNextCode = async (tableName: string, columnName: string) => {
      const lastRecord = await prisma[tableName].findFirst({
        orderBy: {
          [columnName]: 'desc',
        },
        select: {
          [columnName]: true,
        },
      })
      if (lastRecord && lastRecord[columnName]) {
        const numericPart =
          parseInt(lastRecord[columnName].substring(1), 10) + 1
        const paddedPart = numericPart.toString().padStart(2, '0')
        return `B${paddedPart}`
      } else {
        return 'B01'
      }
    }

    const nextFixedBenefitCode = await getNextCode('beneficiosfixos', 'codigo')

    const fixedBenefit = await prisma.beneficiosfixos.create({
      data: {
        codigo: nextFixedBenefitCode,
        descricao: descricao,
      },
    })
    return fixedBenefit
  }

  async updateFixedBenefit(
    codigo: string,
    descricao: string,
  ): Promise<IFixedBenefit | null> {
    const fixedBenefit = await prisma.beneficiosfixos.update({
      where: {
        codigo: codigo,
      },
      data: {
        descricao: descricao,
      },
    })
    return fixedBenefit
  }

  async deleteFixedBenefit(codigo: string): Promise<void> {
    await prisma.beneficiosfixos.delete({
      where: {
        codigo: codigo,
      },
    })
  }
}
