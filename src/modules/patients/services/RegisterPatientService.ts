import { IPatientDTO } from '@patients/domain/models/IPatientDTO'
import { IRegisterPatient } from '@patients/domain/models/IRegisterPatient'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { CodeUserAlreadyExistsError } from '@shared/errors/CodeUserAlreadyExistsError'
import { DocumentAlreadyExistsError } from '@shared/errors/DocumentAlreadyExistsError'
import { UniqueConstraintError } from '@shared/errors/UniqueConstraintError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class RegisterPatientService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,
  ) {}

  async execute(patient: IRegisterPatient): Promise<IPatientDTO | null> {
    try {
      const result = await this.patientsRepository.registerPatient(patient)
      return result
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
