import { IHistoryActivitie } from '@historyActivities/domain/models/IHistoryActivitie'
import { IHistoryActivitieDTO } from '@historyActivities/domain/models/IHistoryActivitieDTO'
import { IRegisterHistoryActivitie } from '@historyActivities/domain/models/IRegisterHistoryActivitie'
import { IUpdateHistoryActivitie } from '@historyActivities/domain/models/IUpdateHistoryActivitie'
import { IHistoryActivitiesRepository } from '@historyActivities/domain/repositories/IHistoryActivitiesRepository'
import { prisma } from '@shared/infra/http/lib/prisma'

export class HistoryActivitiesRepository
  implements IHistoryActivitiesRepository
{
  async findAllHistoryActivities(): Promise<IHistoryActivitie[]> {
    const historyActivities = await prisma.historicoatividades.findMany({
      orderBy: {
        id: 'desc',
      },
    })
    return historyActivities
  }

  async findHistoryActivitieByCodigo(
    id: number,
  ): Promise<IHistoryActivitie | null> {
    const historyActivitie = await prisma.historicoatividades.findUnique({
      where: {
        id: id,
      },
    })
    return historyActivitie
  }

  async registerHistoryActivitie(
    data: IRegisterHistoryActivitie,
  ): Promise<IHistoryActivitieDTO | null> {
    const now = new Date()
    const historyActivitie = await prisma.historicoatividades.create({
      data: {
        cadastro_id: data.cadastro_id,
        codigo_atividade: data.codigo_atividade,
        data_atendimento: now,
      },
    })
    return historyActivitie
  }

  async updateHistoryActivitie(
    data: IUpdateHistoryActivitie,
  ): Promise<IHistoryActivitieDTO | null> {
    const now = new Date()
    const historyActivitie = await prisma.historicoatividades.update({
      where: {
        id: data.id,
      },
      data: {
        cadastro_id: data.cadastro_id,
        codigo_atividade: data.codigo_atividade,
        data_atendimento: now,
      },
    })
    return historyActivitie
  }

  async deleteHistoryActivitie(id: number): Promise<void> {
    await prisma.historicoatividades.delete({
      where: {
        id: id,
      },
    })
  }
}
