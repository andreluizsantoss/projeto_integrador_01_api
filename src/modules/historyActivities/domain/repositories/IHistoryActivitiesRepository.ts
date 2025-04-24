import { IHistoryActivitie } from '../models/IHistoryActivitie'
import { IHistoryActivitieDTO } from '../models/IHistoryActivitieDTO'
import { IRegisterHistoryActivitie } from '../models/IRegisterHistoryActivitie'
import { IUpdateHistoryActivitie } from '../models/IUpdateHistoryActivitie'

export interface IHistoryActivitiesRepository {
  findAllHistoryActivities(): Promise<IHistoryActivitie[]>
  findHistoryActivitieByCodigo(id: number): Promise<IHistoryActivitie | null>
  registerHistoryActivitie(
    data: IRegisterHistoryActivitie,
  ): Promise<IHistoryActivitieDTO | null>
  updateHistoryActivitie(
    data: IUpdateHistoryActivitie,
  ): Promise<IHistoryActivitieDTO | null>
  deleteHistoryActivitie(id: number): Promise<void>
}
