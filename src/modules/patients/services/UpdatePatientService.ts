import { IPatient } from '@patients/domain/models/IPatient'
import { IPatientDTO } from '@patients/domain/models/IPatientDTO'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { CodeUserAlreadyExistsError } from '@shared/errors/CodeUserAlreadyExistsError'
import { DocumentAlreadyExistsError } from '@shared/errors/DocumentAlreadyExistsError'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { UniqueConstraintError } from '@shared/errors/UniqueConstraintError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdatePatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  async execute(patient: IPatient): Promise<IPatientDTO | null> {
    const result = await this.patientsRepository.findPatientByCodigo(patient.id)

    if (!result) {
      throw new PatientNotFoundError()
    }

    const conflictingPatient =
      await this.patientsRepository.findPatientByDocumentOrCodeUser(
        patient.documento,
        patient.codigo_usuario,
        patient.id,
      )

    if (conflictingPatient) {
      if (conflictingPatient.documento === patient.documento) {
        throw new DocumentAlreadyExistsError()
      }
      if (conflictingPatient.codigo_usuario === patient.codigo_usuario) {
        throw new CodeUserAlreadyExistsError()
      }
    }

    try {
      const data = await this.patientsRepository.updatePatient(patient)
      return data
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === 'P2002'
      ) {
        let fieldName = 'campo'
        if (err.meta?.target) {
          if (Array.isArray(err.meta.target) && err.meta.target.length > 0) {
            fieldName = String(err.meta.target[0])
          } else if (typeof err.meta.target === 'string') {
            fieldName = err.meta.target
          }
        }
        if (fieldName.endsWith('_UNIQUE')) {
          fieldName = fieldName.replace('_UNIQUE', '')
        }
        switch (fieldName) {
          case 'documento':
            throw new DocumentAlreadyExistsError()
          case 'codigo_usuario':
            throw new CodeUserAlreadyExistsError()
          default:
            throw new UniqueConstraintError(fieldName)
        }
      }
      throw err
    }
  }
}
