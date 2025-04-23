import { IFixedActivities } from '../models/IFixedActivities'

export interface IFixedActivitiesRepository {
  findAllFixedActivities(): Promise<IFixedActivities[]>
  findByCodigoFixedActivities(codigo: string): Promise<IFixedActivities | null>
  registerFixedActivitie(descricao: string): Promise<IFixedActivities | null>
  updateFixedActivitie(
    codigo: string,
    descricao: string,
  ): Promise<IFixedActivities | null>
  deleteFixedActivitie(codigo: string): Promise<void>
}
