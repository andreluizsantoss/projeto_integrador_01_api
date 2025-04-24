import { Router } from 'express'
import { container } from 'tsyringe'
import { isAuthenticated } from '@shared/middlewares/isAuthenticated'
import FindAllPatientBenefitsController from '../controllers/FindAllPatientBenefitsController'
import FindPatientBenefitByCodigoController from '../controllers/FindPatientBenefitByCodigoController'
import RegisterPatientBenefitController from '../controllers/RegisterPatientBenefitController'
import UpdatePatientBenefitController from '../controllers/UpdatePatientBenefitController'
import DeletePatientBenefitController from '../controllers/DeletePatientBenefitController'

const patientBenefitRouter = Router()
const findAllPatientBenefitsController = container.resolve(
  FindAllPatientBenefitsController,
)
const findPatientBenefitByCodigoController = container.resolve(
  FindPatientBenefitByCodigoController,
)
const registerPatientBenefitController = container.resolve(
  RegisterPatientBenefitController,
)
const updatePatientBenefitController = container.resolve(
  UpdatePatientBenefitController,
)
const deletePatientBenefitController = container.resolve(
  DeletePatientBenefitController,
)

patientBenefitRouter.get(
  '/',
  isAuthenticated,
  findAllPatientBenefitsController.show,
)
patientBenefitRouter.get(
  '/id',
  isAuthenticated,
  findPatientBenefitByCodigoController.show,
)
patientBenefitRouter.post(
  '/',
  isAuthenticated,
  registerPatientBenefitController.create,
)
patientBenefitRouter.put(
  '/',
  isAuthenticated,
  updatePatientBenefitController.update,
)
patientBenefitRouter.delete(
  '/',
  isAuthenticated,
  deletePatientBenefitController.delete,
)

export default patientBenefitRouter
