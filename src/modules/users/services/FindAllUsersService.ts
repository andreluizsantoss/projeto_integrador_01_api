import { IUserDTO } from '@users/domain/models/IUserDTO'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<IUserDTO[]> {
    const result = await this.usersRepository.findAllUsers()
    return result
  }
}
