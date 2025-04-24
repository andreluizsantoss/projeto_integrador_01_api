import { RegisterPatientService } from '@patients/services/RegisterPatientService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

import {
  cadastro_sexo,
  cadastro_status,
  cadastro_tipo_documento,
  Prisma,
} from '@prisma/client'

const estadoCivilMap = {
  Solteiro: 'Solteiro',
  Casado: 'Casado',
  Divorciado: 'Divorciado',
  Viúvo: 'Viuvo',
  Outro: 'Outro',
} as const

import { Decimal } from '@prisma/client/runtime/library'

export default class RegisterPatientController {
  public async create(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      nome: z.string(),
      idade: z.number(),
      documento: z.string(),
      data_nascimento: z.coerce.date(),
      sexo: z.enum(
        Object.values(cadastro_sexo) as [cadastro_sexo, ...cadastro_sexo[]],
      ),
      estado_civil: z.enum([
        'Solteiro',
        'Casado',
        'Divorciado',
        'Viúvo',
        'Outro',
      ]),
      profissao: z.string().nullable().optional(),
      morador_rua: z.boolean().nullable().optional(),
      status: z.enum(
        Object.values(cadastro_status) as [
          cadastro_status,
          ...cadastro_status[],
        ],
      ),
      cor_olhos: z.string().nullable().optional(),
      cor_cabelo: z.string().nullable().optional(),
      altura: z.string().nullable().optional(),
      peso: z.string().nullable().optional(),
      etnia: z.string().nullable().optional(),
      tipo_documento: z.enum(
        Object.values(cadastro_tipo_documento) as [
          cadastro_tipo_documento,
          ...cadastro_tipo_documento[],
        ],
      ),
    })
    const {
      nome,
      idade,
      documento,
      data_nascimento,
      sexo,
      estado_civil,
      profissao,
      morador_rua,
      status,
      cor_olhos,
      cor_cabelo,
      altura,
      peso,
      etnia,
      tipo_documento,
    } = bodySchema.parse(request.body)
    const estadoCivilEnum =
      estadoCivilMap[estado_civil as keyof typeof estadoCivilMap]
    try {
      const service = container.resolve(RegisterPatientService)
      const result = await service.execute({
        nome,
        idade,
        documento,
        data_nascimento,
        sexo,
        estado_civil: estadoCivilEnum,
        profissao,
        morador_rua,
        status,
        cor_olhos,
        cor_cabelo,
        altura: altura ? new Decimal(altura) : null,
        peso: peso ? new Decimal(peso) : null,
        etnia,
        tipo_documento,
      })
      return response.json(result)
    } catch (err) {
      if (
        err instanceof Error &&
        err.message.includes('O documento deve conter apenas números!')
      ) {
        return response.status(400).send({
          message: 'The document must contain only numbers !',
        })
      }
      const target = err.meta?.target as string[] | undefined
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2002' &&
        target?.includes('documento')
      ) {
        return response.status(400).send({
          message: 'The document is already registered in the database!',
        })
      }
      throw err
    }
  }
}
