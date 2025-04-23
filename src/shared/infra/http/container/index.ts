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
import { FixedBenefitsRepository } from '@fixedBenefits/infra/repositories/FixedBenefitsRepository'
import { IFixedBenefitsRepository } from '@fixedBenefits/domain/repositories/IFixedBenefitsRepository'
import FindAllFixedBenefitsController from '@fixedBenefits/infra/http/controllers/FindAllFixedBenefitsController'
import FindFixedBenefitByCodigoController from '@fixedBenefits/infra/http/controllers/FindFixedBenefitByCodigoController'
import RegisterFixedBenefitController from '@fixedBenefits/infra/http/controllers/RegisterFixedBenefitController'
import UpdateFixedBenefitController from '@fixedBenefits/infra/http/controllers/UpdateFixedBenefitController'
import DeleteFixedBenefitController from '@fixedBenefits/infra/http/controllers/DeleteFixedBenefitController'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
container.registerSingleton<IFixedActivitiesRepository>(
  'FixedActivitiesRepository',
  FixedActivitiesRepository,
)
container.registerSingleton<IFixedBenefitsRepository>(
  'FixedBenefitsRepository',
  FixedBenefitsRepository,
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

container.registerSingleton(
  'FindAllFixedBenefitsController',
  FindAllFixedBenefitsController,
)
container.registerSingleton(
  'FindFixedBenefitByCodigoController',
  FindFixedBenefitByCodigoController,
)
container.registerSingleton(
  'RegisterFixedBenefitController',
  RegisterFixedBenefitController,
)
container.registerSingleton(
  'UpdateFixedBenefitController',
  UpdateFixedBenefitController,
)
container.registerSingleton(
  'DeleteFixedBenefitController',
  DeleteFixedBenefitController,
)
