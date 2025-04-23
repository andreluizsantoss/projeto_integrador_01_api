import { container } from 'tsyringe'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import AuthenticateController from '@users/infra/http/controllers/AuthenticateController'
import { UsersRepository } from '@users/infra/repositories/UsersRepository'
import FindByTokenController from '@users/infra/http/controllers/FindByTokenController'
import UpdateTokenController from '@users/infra/http/controllers/UpdateTokenController'
import { FixedBenefitsRepository } from '@fixedBenefits/infra/repositories/FixedBenefitsRepository'
import { IFixedBenefitsRepository } from '@fixedBenefits/domain/repositories/IFixedBenefitsRepository'
import FindAllFixedBenefitsController from '@fixedBenefits/infra/http/controllers/FindAllFixedBenefitsController'
import FindFixedBenefitByCodigoController from '@fixedBenefits/infra/http/controllers/FindFixedBenefitByCodigoController'
import RegisterFixedBenefitController from '@fixedBenefits/infra/http/controllers/RegisterFixedBenefitController'
import UpdateFixedBenefitController from '@fixedBenefits/infra/http/controllers/UpdateFixedBenefitController'
import DeleteFixedBenefitController from '@fixedBenefits/infra/http/controllers/DeleteFixedBenefitController'
import { IFixedActivitiesRepository } from '@fixedActivities/domain/repositories/IFixedActivitiesRepository'
import DeleteFixedActivitieController from '@fixedActivities/infra/http/controllers/DeleteFixedActivitieController'
import FindAllFixedActivitiesController from '@fixedActivities/infra/http/controllers/FindAllFixedActivitiesController'
import FindFixedActivitieByCodigoController from '@fixedActivities/infra/http/controllers/FindFixedActivitieByCodigoController'
import RegisterFixedActivitieController from '@fixedActivities/infra/http/controllers/RegisterFixedActivitieController'
import UpdateFixedActivitieController from '@fixedActivities/infra/http/controllers/UpdateFixedActivitieController'
import { FixedActivitiesRepository } from '@fixedActivities/infra/repositories/FixedActivitiesRepository'
import { FixedDependenciesRepository } from '@fixedDependencies/infra/repositories/FixedDependenciesRepository'
import { IFixedDependenciesRepository } from '@fixedDependencies/domain/repositories/IFixedDependenciesRepository'
import FindAllFixedDependenciesController from '@fixedDependencies/infra/http/controllers/FindAllFixedDependenciesController'
import FindFixedDependencieByCodigoController from '@fixedDependencies/infra/http/controllers/FindFixedDependencieByCodigoController'
import RegisterFixedDependencieController from '@fixedDependencies/infra/http/controllers/RegisterFixedDependencieController'
import UpdateFixedDependencieController from '@fixedDependencies/infra/http/controllers/UpdateFixedDependencieController'
import DeleteFixedDependencieController from '@fixedDependencies/infra/http/controllers/DeleteFixedDependencieController'

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
container.registerSingleton<IFixedDependenciesRepository>(
  'FixedDependenciesRepository',
  FixedDependenciesRepository,
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

container.registerSingleton(
  'FindAllFixedDependenciesController',
  FindAllFixedDependenciesController,
)
container.registerSingleton(
  'FindFixedDependencieByCodigoController',
  FindFixedDependencieByCodigoController,
)
container.registerSingleton(
  'RegisterFixedDependencieController',
  RegisterFixedDependencieController,
)
container.registerSingleton(
  'UpdateFixedDependencieController',
  UpdateFixedDependencieController,
)
container.registerSingleton(
  'DeleteFixedDependencieController',
  DeleteFixedDependencieController,
)
