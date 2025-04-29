import { UserNotFoundError } from '@shared/errors/UserNotFoundError'
import { IShowUserById } from '@users/domain/models/IShowUserById'
import { IUserDTO } from '@users/domain/models/IUserDTO'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindUserByIdService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ id }: IShowUserById): Promise<IUserDTO | null> {
    const user = await this.usersRepository.findById(id)
    if (!user) {
      throw new UserNotFoundError()
    }
    return user
  }
}
