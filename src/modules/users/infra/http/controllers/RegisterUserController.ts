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
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .max(32, 'A senha deve ter no máximo 32 caracteres')
        .regex(/^\S+$/, 'A senha não pode conter espaços'),
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
