import { IPatientDependencie } from '../models/IPatientDependencie'
import { IPatientDependencieDTO } from '../models/IPatientDependencieDTO'
import { IRegisterPatientDependencie } from '../models/IRegisterPatientDependencie'
import { IUpdatePatientDependencie } from '../models/IUpdatePatientDependencie'

export interface IPatientDependenciesRepository {
  findAllPatientDependencies(): Promise<IPatientDependencie[]>
  findPatientDependencieByCodigo(
    id: number,
  ): Promise<IPatientDependencie | null>
  registerPatientDependencie(
    data: IRegisterPatientDependencie,
  ): Promise<IPatientDependencieDTO | null>
  updatePatientDependencie(
    data: IUpdatePatientDependencie,
  ): Promise<IPatientDependencieDTO | null>
  deletePatientDependencie(id: number): Promise<void>
}
