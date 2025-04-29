import { UserNotFoundError } from '@shared/errors/UserNotFoundError'
import { IDeleteUser } from '@users/domain/models/IDeleteUser'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class DeleteUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ id }: IDeleteUser): Promise<void> {
    const result = await this.usersRepository.findById(id)

    if (!result) {
      throw new UserNotFoundError()
    }

    await this.usersRepository.deleteUser(Number(id))
  }
}
