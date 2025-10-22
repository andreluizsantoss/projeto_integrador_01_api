import { UserAlreadyExistsError } from '@shared/errors/UserAlreadyExistsError'
import { RegisterUserService } from '@users/services/RegisterUserService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

import { cadastro_status, usuario_perfil } from '@prisma/client'

export default class RegisterUserController {
  public async register(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const bodySchema = z.object({
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
    const { status, nome_completo, usuario, senha, email, perfil } =
      bodySchema.parse(request.body)

    try {
      const service = container.resolve(RegisterUserService)
      await service.execute({
        status,
        nome_completo,
        usuario,
        senha,
        email,
        perfil,
      })
      return response.status(204).send()
    } catch (err) {
      if (err instanceof UserAlreadyExistsError) {
        return response.status(400).send({ message: err.message })
      }
      throw err
    }
  }
}
