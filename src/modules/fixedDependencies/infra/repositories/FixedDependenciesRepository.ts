import { IFixedDependencie } from '@fixedDependencies/domain/models/IFixedDependencie'
import { IFixedDependenciesRepository } from '@fixedDependencies/domain/repositories/IFixedDependenciesRepository'
import { prisma } from '@shared/infra/http/lib/prisma'

export class FixedDependenciesRepository
  implements IFixedDependenciesRepository
{
  async findAllFixedDependencies(): Promise<IFixedDependencie[]> {
    const fixedDependencies = await prisma.dependenciasfixas.findMany({
      orderBy: {
        descricao: 'desc',
      },
    })
    return fixedDependencies
  }

  async findFixedDependencieByCodigo(
    codigo: string,
  ): Promise<IFixedDependencie | null> {
    const fixedDependencie = await prisma.dependenciasfixas.findUnique({
      where: {
        codigo: codigo,
      },
    })
    return fixedDependencie
  }

  async registerFixedDependencie(
    descricao: string,
  ): Promise<IFixedDependencie | null> {
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
        return `D${paddedPart}`
      } else {
        return 'D01'
      }
    }

    const nextFixedDependencieCode = await getNextCode(
      'dependenciasfixas',
      'codigo',
    )

    const fixedDependencie = await prisma.dependenciasfixas.create({
      data: {
        codigo: nextFixedDependencieCode,
        descricao: descricao,
      },
    })
    return fixedDependencie
  }

  async updateFixedDependencie(
    codigo: string,
    descricao: string,
  ): Promise<IFixedDependencie | null> {
    const fixedDependencie = await prisma.dependenciasfixas.update({
      where: {
        codigo: codigo,
      },
      data: {
        descricao: descricao,
      },
    })
    return fixedDependencie
  }

  async deleteFixedDependencie(codigo: string): Promise<void> {
    await prisma.dependenciasfixas.delete({
      where: {
        codigo: codigo,
      },
    })
  }
}
