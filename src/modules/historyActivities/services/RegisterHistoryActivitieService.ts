import { IFixedActivitiesRepository } from '@fixedActivities/domain/repositories/IFixedActivitiesRepository'
import { IHistoryActivitieResponse } from '@historyActivities/domain/models/IHistoryActivitieResponse'
import { IRegisterHistoryActivitie } from '@historyActivities/domain/models/IRegisterHistoryActivitie'
import { IHistoryActivitiesRepository } from '@historyActivities/domain/repositories/IHistoryActivitiesRepository'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { FixedActivitieNotFoundError } from '@shared/errors/FixedActivitieNotFoundError'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class RegisterHistoryActivitieService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,

    @inject('FixedActivitiesRepository')
    private fixedActivitiesRepository: IFixedActivitiesRepository,

    @inject('HistoryActivitiesRepository')
    private historyActivitiesRepository: IHistoryActivitiesRepository,
  ) {}

  async execute(
    data: IRegisterHistoryActivitie,
  ): Promise<IHistoryActivitieResponse | null> {
    const result = await this.patientsRepository.findPatientByCodigo(
      data.cadastro_id,
    )

    if (!result) {
      throw new PatientNotFoundError()
    }

    const resultActivitie =
      await this.fixedActivitiesRepository.findFixedActivitieByCodigo(
        data.codigo_atividade,
      )

    if (!resultActivitie) {
      throw new FixedActivitieNotFoundError()
    }

    const historyActivitie =
      await this.historyActivitiesRepository.registerHistoryActivitie(data)
    return historyActivitie
  }
}
