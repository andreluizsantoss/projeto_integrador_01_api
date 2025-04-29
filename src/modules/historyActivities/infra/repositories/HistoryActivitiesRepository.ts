import { IHistoryActivitie } from '@historyActivities/domain/models/IHistoryActivitie'
import { IHistoryActivitieDTO } from '@historyActivities/domain/models/IHistoryActivitieDTO'
import { IHistoryActivitieResponse } from '@historyActivities/domain/models/IHistoryActivitieResponse'
import { IRegisterHistoryActivitie } from '@historyActivities/domain/models/IRegisterHistoryActivitie'
import { IUpdateHistoryActivitie } from '@historyActivities/domain/models/IUpdateHistoryActivitie'
import { IHistoryActivitiesRepository } from '@historyActivities/domain/repositories/IHistoryActivitiesRepository'
import { prisma } from '@shared/infra/http/lib/prisma'

export class HistoryActivitiesRepository
  implements IHistoryActivitiesRepository
{
  async findAllHistoryActivities(): Promise<IHistoryActivitieResponse[]> {
    const historyActivities = await prisma.historicoatividades.findMany({
      orderBy: {
        id: 'asc',
      },
      include: {
        cadastro: {
          select: {
            id: true,
            nome: true,
          },
        },
        atividadesfixas: {
          select: {
            codigo: true,
            descricao: true,
          },
        },
      },
    })

    return historyActivities.map(item => ({
      id: item.id,
      paciente: {
        id: item.cadastro.id,
        nome: item.cadastro.nome,
      },
      atividade: {
        codigo: item.atividadesfixas.codigo,
        descricao: item.atividadesfixas.descricao,
      },
      data_atendimento: item.data_atendimento,
    }))
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
  ): Promise<IHistoryActivitieResponse | null> {
    const now = new Date()
    const historyActivitie = await prisma.historicoatividades.create({
      data: {
        cadastro_id: data.cadastro_id,
        codigo_atividade: data.codigo_atividade,
        data_atendimento: now,
      },
    })

    const cadastro = await prisma.cadastro.findUnique({
      where: { id: historyActivitie.cadastro_id },
    })

    const atividade = await prisma.atividadesfixas.findUnique({
      where: { codigo: historyActivitie.codigo_atividade },
    })

    return {
      id: historyActivitie.id,
      paciente: {
        id: cadastro?.id ?? 0,
        nome: cadastro?.nome ?? 'Desconhecido',
      },
      atividade: {
        codigo: atividade?.codigo ?? 'Desconhecido',
        descricao: atividade?.descricao ?? 'Sem descrição',
      },
      data_atendimento: historyActivitie.data_atendimento,
    }
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
