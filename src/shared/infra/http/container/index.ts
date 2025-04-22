import { container } from 'tsyringe'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import AuthenticateController from '@users/infra/http/controllers/AuthenticateController'
import { UsersRepository } from '@users/infra/repositories/UsersRepository'
import FindByTokenController from '@users/infra/http/controllers/FindByTokenController'
import UpdateTokenController from '@users/infra/http/controllers/UpdateTokenController'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton('AuthenticateController', AuthenticateController)
container.registerSingleton('FindByTokenController', FindByTokenController)
container.registerSingleton('UpdateTokenController', UpdateTokenController)
