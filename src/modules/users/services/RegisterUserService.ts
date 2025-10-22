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
  }
}
