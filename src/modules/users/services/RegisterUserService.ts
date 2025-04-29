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

  async execute({ nome, usuario, senha }: IRegisterUser): Promise<void> {
    const user = await this.usersRepository.findByUsername(usuario)
    if (user !== null) {
      throw new UserAlreadyExistsError()
    }

    const password_hash = await hash(senha, 10)

    await this.usersRepository.registerUser({
      nome,
      usuario,
      senha: password_hash,
    })
  }
}
