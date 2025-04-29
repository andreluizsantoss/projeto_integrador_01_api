import { IPatientDependencieResponse } from '../models/IPatientDependencieResponse'
import { IRegisterPatientDependencie } from '../models/IRegisterPatientDependencie'
import { IUpdatePatientDependencie } from '../models/IUpdatePatientDependencie'

export interface IPatientDependenciesRepository {
  findAllPatientDependencies(): Promise<IPatientDependencieResponse[]>
  findPatientDependencieByCodigo(
    id: number,
  ): Promise<IPatientDependencieResponse | null>
  registerPatientDependencie(
    data: IRegisterPatientDependencie,
  ): Promise<IPatientDependencieResponse | null>
  updatePatientDependencie(
    data: IUpdatePatientDependencie,
  ): Promise<IPatientDependencieResponse | null>
  deletePatientDependencie(id: number): Promise<void>
}
