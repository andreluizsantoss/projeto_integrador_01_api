import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import { UsersRepository } from '@users/infra/repositories/UsersRepository'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
