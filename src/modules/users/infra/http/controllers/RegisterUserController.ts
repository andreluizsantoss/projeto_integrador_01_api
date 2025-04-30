import { UserAlreadyExistsError } from '@shared/errors/UserAlreadyExistsError'
import { RegisterUserService } from '@users/services/RegisterUserService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { z } from 'zod'

export default class RegisterUserController {
  public async register(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const bodySchema = z.object({
      nome: z.string(),
      usuario: z.string(),
      senha: z
        .string()
        .min(8, 'Password must be at least 8 characters long.')
        .max(32, 'Password must be a maximum of 32 characters long.')
        .regex(/^\S+$/, 'Password cannot contain spaces.'),
    })
    const { nome, usuario, senha } = bodySchema.parse(request.body)

    try {
      const service = container.resolve(RegisterUserService)
      await service.execute({
        nome,
        usuario,
        senha,
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
