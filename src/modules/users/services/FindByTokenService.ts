import { UserNotFoundError } from '@shared/errors/UserNotFoundError'
import { UserNotLoginError } from '@shared/errors/UserNotLoginError'
import { IShowUserByToken } from '@users/domain/models/IShowUserByToken'
import { IUserDTO } from '@users/domain/models/IUserDTO'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindByTokenService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ id }: IShowUserByToken): Promise<IUserDTO | null> {
    const user = await this.usersRepository.findByToken(id)
    if (!user) {
      throw new UserNotFoundError()
    }
    if (user.login === 'NÃO') {
      throw new UserNotLoginError()
    }
    return user
  }
}
