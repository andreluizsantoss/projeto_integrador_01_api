import { IAuthenticateUser } from '@users/domain/models/IAuthenticateUser'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class AuthenticateService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ username, senha }: IAuthenticateUser): Promise<void> {}
}
