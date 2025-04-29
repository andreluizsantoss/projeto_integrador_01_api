import { IHistoryActivitie } from '../models/IHistoryActivitie'
import { IHistoryActivitieDTO } from '../models/IHistoryActivitieDTO'
import { IHistoryActivitieResponse } from '../models/IHistoryActivitieResponse'
import { IRegisterHistoryActivitie } from '../models/IRegisterHistoryActivitie'
import { IUpdateHistoryActivitie } from '../models/IUpdateHistoryActivitie'

export interface IHistoryActivitiesRepository {
  findAllHistoryActivities(): Promise<IHistoryActivitieResponse[]>
  findHistoryActivitieByCodigo(id: number): Promise<IHistoryActivitie | null>
  registerHistoryActivitie(
    data: IRegisterHistoryActivitie,
  ): Promise<IHistoryActivitieResponse | null>
  updateHistoryActivitie(
    data: IUpdateHistoryActivitie,
  ): Promise<IHistoryActivitieDTO | null>
  deleteHistoryActivitie(id: number): Promise<void>
}
