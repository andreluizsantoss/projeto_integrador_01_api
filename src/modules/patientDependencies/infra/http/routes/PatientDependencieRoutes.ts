import { Router } from 'express'
import { container } from 'tsyringe'
import { isAuthenticated } from '@shared/middlewares/isAuthenticated'
import FindAllPatientDependenciesController from '../controllers/FindAllPatientDependenciesController'
import FindPatientDependencieByCodigoController from '../controllers/FindPatientDependencieByCodigoController'
import RegisterPatientDependencieController from '../controllers/RegisterPatientDependencieController'
import UpdatePatientDependencieController from '../controllers/UpdatePatientDependencieController'
import DeletePatientDependencieController from '../controllers/DeletePatientDependencieController'

const patientDependencieRouter = Router()
const findAllPatientDependenciesController = container.resolve(
  FindAllPatientDependenciesController,
)
const findPatientDependencieByCodigoController = container.resolve(
  FindPatientDependencieByCodigoController,
)
const registerPatientDependencieController = container.resolve(
  RegisterPatientDependencieController,
)
const updatePatientDependencieController = container.resolve(
  UpdatePatientDependencieController,
)
const deletePatientDependencieController = container.resolve(
  DeletePatientDependencieController,
)

patientDependencieRouter.get(
  '/',
  isAuthenticated,
  findAllPatientDependenciesController.show,
)
patientDependencieRouter.get(
  '/id',
  isAuthenticated,
  findPatientDependencieByCodigoController.show,
)
patientDependencieRouter.post(
  '/',
  isAuthenticated,
  registerPatientDependencieController.create,
)
patientDependencieRouter.put(
  '/',
  isAuthenticated,
  updatePatientDependencieController.update,
)
patientDependencieRouter.delete(
  '/',
  isAuthenticated,
  deletePatientDependencieController.delete,
)

export default patientDependencieRouter
