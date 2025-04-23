import { IFixedActivitie } from '../models/IFixedActivitie'

export interface IFixedActivitiesRepository {
  findAllFixedActivities(): Promise<IFixedActivitie[]>
  findFixedActivitieByCodigo(codigo: string): Promise<IFixedActivitie | null>
  registerFixedActivitie(descricao: string): Promise<IFixedActivitie | null>
  updateFixedActivitie(
    codigo: string,
    descricao: string,
  ): Promise<IFixedActivitie | null>
  deleteFixedActivitie(codigo: string): Promise<void>
}
