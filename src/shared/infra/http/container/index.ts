import { container } from 'tsyringe'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import AuthenticateController from '@users/infra/http/controllers/AuthenticateController'
import { UsersRepository } from '@users/infra/repositories/UsersRepository'
import FindByTokenController from '@users/infra/http/controllers/FindByTokenController'
import UpdateTokenController from '@users/infra/http/controllers/UpdateTokenController'
import { IFixedActivitiesRepository } from 'src/modules/fixed_activities/domain/repositories/IFixedActivitiesRepository'
import { FixedActivitiesRepository } from 'src/modules/fixed_activities/infra/repositories/FixedActivitiesRepository'
import FindAllFixedActivitiesController from 'src/modules/fixed_activities/infra/http/controllers/FindAllFixedActivitiesController'
import FindFixedActivitieByCodigoController from 'src/modules/fixed_activities/infra/http/controllers/FindFixedActivitieByCodigoController'
import RegisterFixedActivitieController from 'src/modules/fixed_activities/infra/http/controllers/RegisterFixedActivitieController'
import UpdateFixedActivitieController from 'src/modules/fixed_activities/infra/http/controllers/UpdateFixedActivitieController'
import DeleteFixedActivitieController from 'src/modules/fixed_activities/infra/http/controllers/DeleteFixedActivitieController'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
container.registerSingleton<IFixedActivitiesRepository>(
  'FixedActivitiesRepository',
  FixedActivitiesRepository,
)

container.registerSingleton('AuthenticateController', AuthenticateController)
container.registerSingleton('FindByTokenController', FindByTokenController)
container.registerSingleton('UpdateTokenController', UpdateTokenController)

container.registerSingleton(
  'FindAllFixedActivitiesController',
  FindAllFixedActivitiesController,
)
container.registerSingleton(
  'FindFixedActivitieByCodigoController',
  FindFixedActivitieByCodigoController,
)
container.registerSingleton(
  'RegisterFixedActivitieController',
  RegisterFixedActivitieController,
)
container.registerSingleton(
  'UpdateFixedActivitieController',
  UpdateFixedActivitieController,
)
container.registerSingleton(
  'DeleteFixedActivitieController',
  DeleteFixedActivitieController,
)
