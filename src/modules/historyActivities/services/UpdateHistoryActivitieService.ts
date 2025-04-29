import { IFixedActivitiesRepository } from '@fixedActivities/domain/repositories/IFixedActivitiesRepository'
import { IHistoryActivitieResponse } from '@historyActivities/domain/models/IHistoryActivitieResponse'
import { IUpdateHistoryActivitie } from '@historyActivities/domain/models/IUpdateHistoryActivitie'
import { IHistoryActivitiesRepository } from '@historyActivities/domain/repositories/IHistoryActivitiesRepository'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { FixedActivitieNotFoundError } from '@shared/errors/FixedActivitieNotFoundError'
import { HistoryActivitieNotFoundError } from '@shared/errors/HistoryActivitieNotFoundError'
import { PatientNotFoundError } from '@shared/errors/PatientNotFoundError'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateHistoryActivitieService {
  constructor(
    @inject('PatientsRepository')
    private patientsRepository: IPatientsRepository,

    @inject('FixedActivitiesRepository')
    private fixedActivitiesRepository: IFixedActivitiesRepository,

    @inject('HistoryActivitiesRepository')
    private historyActivitiesRepository: IHistoryActivitiesRepository,
  ) {}

  async execute(
    data: IUpdateHistoryActivitie,
  ): Promise<IHistoryActivitieResponse | null> {
    const result =
      await this.historyActivitiesRepository.findHistoryActivitieByCodigo(
        data.id,
      )

    if (!result) {
      throw new HistoryActivitieNotFoundError()
    }

    const resultPatient = await this.patientsRepository.findPatientByCodigo(
      data.cadastro_id,
    )

    if (!resultPatient) {
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
      await this.historyActivitiesRepository.updateHistoryActivitie(data)

    return historyActivitie
  }
}
