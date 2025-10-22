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
  }
}
