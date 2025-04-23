import { prisma } from '@shared/infra/http/lib/prisma'
import { IFixedActivitiesRepository } from '../../domain/repositories/IFixedActivitiesRepository'
import { IFixedActivities } from '../../domain/models/IFixedActivities'

export class FixedActivitiesRepository implements IFixedActivitiesRepository {
  async findAllFixedActivities(): Promise<IFixedActivities[]> {
    const fixedActivities = await prisma.atividadesfixas.findMany({
      orderBy: {
        descricao: 'desc',
      },
    })
    return fixedActivities
  }

  async findByCodigoFixedActivities(
    codigo: string,
  ): Promise<IFixedActivities | null> {
    const fixedActivitie = await prisma.atividadesfixas.findUnique({
      where: {
        codigo: codigo,
      },
    })
    return fixedActivitie
  }

  async registerFixedActivitie(
    descricao: string,
  ): Promise<IFixedActivities | null> {
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
        return `U${numericPart}`
      } else {
        return 'U01'
      }
    }

    const nextFixedActivitieCode = await getNextCode(
      'atividadesfixas',
      'codigo',
    )

    const fixedActivitie = await prisma.atividadesfixas.create({
      data: {
        codigo: nextFixedActivitieCode,
        descricao: descricao,
      },
    })
    return fixedActivitie
  }

  async updateFixedActivitie(
    codigo: string,
    descricao: string,
  ): Promise<IFixedActivities | null> {
    const fixedActivitie = await prisma.atividadesfixas.update({
      where: {
        codigo: codigo,
      },
      data: {
        descricao: descricao,
      },
    })
    return fixedActivitie
  }

  async deleteFixedActivitie(codigo: string): Promise<void> {
    await prisma.atividadesfixas.delete({
      where: {
        codigo: codigo,
      },
    })
  }
}
