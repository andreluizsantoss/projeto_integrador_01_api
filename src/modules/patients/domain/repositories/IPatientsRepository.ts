import { IPatient } from '../models/IPatient'
import { IPatientDTO } from '../models/IPatientDTO'
import { IRegisterPatient } from '../models/IRegisterPatient'

export interface IPatientsRepository {
  findAllPatients(): Promise<IPatient[]>
  findPatientByCodigo(id: number): Promise<IPatient | null>
  registerPatient(patient: IRegisterPatient): Promise<IPatientDTO | null>
  updatePatient(patient: IPatient): Promise<IPatientDTO | null>
  deletePatient(id: number): Promise<void>
}
