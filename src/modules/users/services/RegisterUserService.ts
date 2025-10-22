import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { EmailAlreadyExistsError } from '@shared/errors/EmailAlreadyExistsError'
import { UniqueConstraintError } from '@shared/errors/UniqueConstraintError'
import { UserAlreadyExistsError } from '@shared/errors/UserAlreadyExistsError'
import { IRegisterUser } from '@users/domain/models/IRegisterUser'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import { hash } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'

@injectable()
export class RegisterUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    status,
    nome_completo,
    usuario,
    senha,
    email,
    perfil,
  }: IRegisterUser): Promise<void> {
    try {
      const user = await this.usersRepository.findByUsername(usuario)
      if (user !== null) {
        throw new UserAlreadyExistsError()
      }
      const password_hash = await hash(senha, 10)
      await this.usersRepository.registerUser({
        status,
        nome_completo,
        usuario,
        senha: password_hash,
        email,
        perfil,
      })
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
          case 'usuario':
            throw new UserAlreadyExistsError()
          case 'email':
            throw new EmailAlreadyExistsError()
          default:
            throw new UniqueConstraintError(fieldName)
        }
      }
      throw err
    }
  }
}
