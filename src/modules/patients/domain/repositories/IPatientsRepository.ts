import { IPatient } from '../models/IPatient'
import { IPatientDTO } from '../models/IPatientDTO'
import { IRegisterPatient } from '../models/IRegisterPatient'

export interface IPatientsRepository {
  findAllPatients(): Promise<IPatientDTO[]>
  findPatientByCodigo(id: number): Promise<IPatientDTO | null>
  registerPatient(patient: IRegisterPatient): Promise<IPatientDTO | null>
  updatePatient(patient: IPatient): Promise<IPatientDTO | null>
  deletePatient(id: number): Promise<void>
  findPatientByDocumentOrCodeUser(
    documento: string,
    codigo_usuario: string,
    excludeId: number,
  ): Promise<IPatientDTO | null>
}
