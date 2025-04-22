import { container } from 'tsyringe'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import AuthenticateController from '@users/infra/http/controllers/AuthenticateController'
import { UsersRepository } from '@users/infra/repositories/UsersRepository'
import FindByTokenController from '@users/infra/http/controllers/FindByTokenController'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton('AuthenticateController', AuthenticateController)
container.registerSingleton('FindByTokenController', FindByTokenController)
