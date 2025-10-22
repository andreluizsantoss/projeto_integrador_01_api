import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

import { UpdateUserService } from '@users/services/UpdateUserService'
import { UserAlreadyExistsError } from '@shared/errors/UserAlreadyExistsError'
import { UserNotFoundError } from '@shared/errors/UserNotFoundError'

import { cadastro_status, usuario_perfil } from '@prisma/client'
import { DocumentAlreadyExistsError } from '@shared/errors/DocumentAlreadyExistsError'
import { CodeUserAlreadyExistsError } from '@shared/errors/CodeUserAlreadyExistsError'
import { UniqueConstraintError } from '@shared/errors/UniqueConstraintError'

export default class UpdateUserController {
  public async update(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      id: z.string(),
      status: z.enum(
        Object.values(cadastro_status) as [
          cadastro_status,
          ...cadastro_status[],
        ],
      ),
      nome_completo: z.string(),
      usuario: z.string(),
      senha: z
        .string()
        .min(8, 'Password must be at least 8 characters long.')
        .max(32, 'Password must be a maximum of 32 characters long.')
        .regex(/^\S+$/, 'Password cannot contain spaces.'),
      email: z.string().email(),
      perfil: z.enum(
        Object.values(usuario_perfil) as [usuario_perfil, ...usuario_perfil[]],
      ),
    })
    const { id, status, nome_completo, usuario, senha, email, perfil } =
      bodySchema.parse(request.body)

    try {
      const service = container.resolve(UpdateUserService)
      await service.execute({
        id: Number(id),
        status,
        nome_completo,
        usuario,
        senha,
        email,
        perfil,
      })
      return response.status(204).send()
    } catch (err) {
      if (err instanceof UserNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      if (err instanceof UserAlreadyExistsError) {
        return response.status(400).send({ message: err.message })
      }
      if (
        err instanceof DocumentAlreadyExistsError ||
        err instanceof CodeUserAlreadyExistsError ||
        err instanceof UniqueConstraintError
      ) {
        return response.status(409).json({ message: err.message })
      }
      throw err
    }
  }
}
