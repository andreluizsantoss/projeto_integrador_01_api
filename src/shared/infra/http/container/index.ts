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
import { PatientsRepository } from '@patients/infra/repositories/PatientsRepository'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import FindAllPatientsController from '@patients/infra/http/controllers/FindAllPatientsController'
import FindPatientByCodigoController from '@patients/infra/http/controllers/FindPatientByCodigoController'
import RegisterPatientController from '@patients/infra/http/controllers/RegisterPatientController'
import UpdatePatientController from '@patients/infra/http/controllers/UpdatePatientController'
import DeletePatientController from '@patients/infra/http/controllers/DeletePatientController'
import { PatientBenefitsRepository } from '@patientBenefits/infra/repositories/PatientBenefitsRepository'
import { IPatientBenefitsRepository } from '@patientBenefits/domain/repositories/IPatientBenefitsRepository'
import FindAllPatientBenefitsController from '@patientBenefits/infra/http/controllers/FindAllPatientBenefitsController'
import FindPatientBenefitByCodigoController from '@patientBenefits/infra/http/controllers/FindPatientBenefitByCodigoController'
import RegisterPatientBenefitController from '@patientBenefits/infra/http/controllers/RegisterPatientBenefitController'
import UpdatePatientBenefitController from '@patientBenefits/infra/http/controllers/UpdatePatientBenefitController'
import DeletePatientBenefitController from '@patientBenefits/infra/http/controllers/DeletePatientBenefitController'
import { PatientDependenciesRepository } from '@patientDependencies/infra/repositories/PatientDependenciesRepository'
import { IPatientDependenciesRepository } from '@patientDependencies/domain/repositories/IPatientDependenciesRepository'
import FindAllPatientDependenciesController from '@patientDependencies/infra/http/controllers/FindAllPatientDependenciesController'
import FindPatientDependencieByCodigoController from '@patientDependencies/infra/http/controllers/FindPatientDependencieByCodigoController'
import RegisterPatientDependencieController from '@patientDependencies/infra/http/controllers/RegisterPatientDependencieController'
import UpdatePatientDependencieController from '@patientDependencies/infra/http/controllers/UpdatePatientDependencieController'
import DeletePatientDependencieController from '@patientDependencies/infra/http/controllers/DeletePatientDependencieController'
import { IHistoryActivitiesRepository } from '@historyActivities/domain/repositories/IHistoryActivitiesRepository'
import { HistoryActivitiesRepository } from '@historyActivities/infra/repositories/HistoryActivitiesRepository'
import DeleteHistoryActivitieController from '@historyActivities/infra/http/controllers/DeleteHistoryActivitieController'
import UpdateHistoryActivitieController from '@historyActivities/infra/http/controllers/UpdateHistoryActivitieController'
import RegisterHistoryActivitieController from '@historyActivities/infra/http/controllers/RegisterHistoryActivitieController'
import FindHistoryActivitieByCodigoController from '@historyActivities/infra/http/controllers/FindHistoryActivitieByCodigoController'
import FindAllHistoryActivitiesController from '@historyActivities/infra/http/controllers/FindAllHistoryActivitiesController'
import RegisterUserController from '@users/infra/http/controllers/RegisterUserController'
import UpdateUserController from '@users/infra/http/controllers/UpdateUserController'

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
container.registerSingleton<IPatientsRepository>(
  'PatientsRepository',
  PatientsRepository,
)
container.registerSingleton<IPatientBenefitsRepository>(
  'PatientBenefitsRepository',
  PatientBenefitsRepository,
)
container.registerSingleton<IPatientDependenciesRepository>(
  'PatientDependenciesRepository',
  PatientDependenciesRepository,
)
container.registerSingleton<IHistoryActivitiesRepository>(
  'HistoryActivitiesRepository',
  HistoryActivitiesRepository,
)

container.registerSingleton('AuthenticateController', AuthenticateController)
container.registerSingleton('FindByTokenController', FindByTokenController)
container.registerSingleton('UpdateTokenController', UpdateTokenController)

container.registerSingleton('RegisterUserController', RegisterUserController)
container.registerSingleton('UpdateUserController', UpdateUserController)

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

container.registerSingleton(
  'FindAllPatientsController',
  FindAllPatientsController,
)
container.registerSingleton(
  'FindPatientByCodigoController',
  FindPatientByCodigoController,
)
container.registerSingleton(
  'RegisterPatientController',
  RegisterPatientController,
)
container.registerSingleton('UpdatePatientController', UpdatePatientController)
container.registerSingleton('DeletePatientController', DeletePatientController)

container.registerSingleton(
  'FindAllPatientBenefitsController',
  FindAllPatientBenefitsController,
)
container.registerSingleton(
  'FindPatientBenefitByCodigoController',
  FindPatientBenefitByCodigoController,
)
container.registerSingleton(
  'RegisterPatientBenefitController',
  RegisterPatientBenefitController,
)
container.registerSingleton(
  'UpdatePatientBenefitController',
  UpdatePatientBenefitController,
)
container.registerSingleton(
  'DeletePatientBenefitController',
  DeletePatientBenefitController,
)

container.registerSingleton(
  'FindAllPatientDependenciesController',
  FindAllPatientDependenciesController,
)
container.registerSingleton(
  'FindPatientDependencieByCodigoController',
  FindPatientDependencieByCodigoController,
)
container.registerSingleton(
  'RegisterPatientDependencieController',
  RegisterPatientDependencieController,
)
container.registerSingleton(
  'UpdatePatientDependencieController',
  UpdatePatientDependencieController,
)
container.registerSingleton(
  'DeletePatientDependencieController',
  DeletePatientDependencieController,
)

container.registerSingleton(
  'FindAllHistoryActivitiesController',
  FindAllHistoryActivitiesController,
)
container.registerSingleton(
  'FindHistoryActivitieByCodigoController',
  FindHistoryActivitieByCodigoController,
)
container.registerSingleton(
  'RegisterHistoryActivitieController',
  RegisterHistoryActivitieController,
)
container.registerSingleton(
  'UpdateHistoryActivitieController',
  UpdateHistoryActivitieController,
)
container.registerSingleton(
  'DeleteHistoryActivitieController',
  DeleteHistoryActivitieController,
)
