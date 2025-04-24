import { FindAllPatientsService } from '@patients/services/FindAllPatientsService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

const estadoCivilReverseMap = {
  Solteiro: 'Solteiro',
  Casado: 'Casado',
  Divorciado: 'Divorciado',
  Viuvo: 'Viúvo',
  Outro: 'Outro',
} as const

function formatPaciente(paciente: any) {
  return {
    ...paciente,
    estado_civil:
      estadoCivilReverseMap[
        paciente.estado_civil as keyof typeof estadoCivilReverseMap
      ],
  }
}

export default class FindAllPatientsController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(FindAllPatientsService)
      const result = await service.execute()
      const resultFormatado = result.map(formatPaciente)
      return response.json(resultFormatado)
    } catch (err) {
      throw err
    }
  }
}
