import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

import { cadastro_status } from '@prisma/client'
import { UpdateUserService } from '@users/services/UpdateUserService'
import { UserAlreadyExistsError } from '@shared/errors/UserAlreadyExistsError'
import { UserNotFoundError } from '@shared/errors/UserNotFoundError'

export default class UpdateUserController {
  public async update(request: Request, response: Response): Promise<Response> {
    const bodySchema = z.object({
      id: z.string(),
      nome: z.string(),
      usuario: z.string(),
      senha: z
        .string()
        .min(8, 'Password must be at least 8 characters long.')
        .max(32, 'Password must be a maximum of 32 characters long.')
        .regex(/^\S+$/, 'Password cannot contain spaces.'),
      status: z.enum(
        Object.values(cadastro_status) as [
          cadastro_status,
          ...cadastro_status[],
        ],
      ),
    })
    const { id, nome, usuario, senha, status } = bodySchema.parse(request.body)

    try {
      const service = container.resolve(UpdateUserService)
      await service.execute({
        id: Number(id),
        nome,
        usuario,
        senha,
        status,
      })
      return response.status(204).send()
    } catch (err) {
      if (err instanceof UserNotFoundError) {
        return response.status(400).send({ message: err.message })
      }
      if (err instanceof UserAlreadyExistsError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
