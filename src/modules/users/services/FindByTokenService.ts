import { UserNotFoundError } from '@shared/errors/UserNotFoundError'
import { UserNotPermissionError } from '@shared/errors/UserNotPermissionError'
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

    if (user.status != 'ATIVO') {
      throw new UserNotPermissionError()
    }

    return user
  }
}
