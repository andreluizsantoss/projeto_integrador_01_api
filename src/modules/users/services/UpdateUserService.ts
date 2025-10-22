import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { EmailAlreadyExistsError } from '@shared/errors/EmailAlreadyExistsError'
import { UniqueConstraintError } from '@shared/errors/UniqueConstraintError'
import { UserAlreadyExistsError } from '@shared/errors/UserAlreadyExistsError'
import { UserNotFoundError } from '@shared/errors/UserNotFoundError'
import { IUpdateUser } from '@users/domain/models/IUpdateUser'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import { hash } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    id,
    status,
    nome_completo,
    usuario,
    senha,
    email,
    perfil,
  }: IUpdateUser): Promise<void> {
    const result = await this.usersRepository.findById(id.toString())
    if (!result) {
      throw new UserNotFoundError()
    }

    const user = await this.usersRepository.findByUsername(usuario)
    if (user !== null && user.id !== result.id) {
      throw new UserAlreadyExistsError()
    }

    const conflictingUser = await this.usersRepository.findUserByUserOrEmail(
      result.usuario,
      result.email,
      result.id,
    )

    if (conflictingUser) {
      if (conflictingUser.usuario === result.usuario) {
        throw new UserAlreadyExistsError()
      }
      if (conflictingUser.email === result.email) {
        throw new EmailAlreadyExistsError()
      }
    }

    try {
      const password_hash = await hash(senha, 10)

      await this.usersRepository.updateUser({
        id,
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
