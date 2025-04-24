import { Router } from 'express'
import { container } from 'tsyringe'
import { isAuthenticated } from '@shared/middlewares/isAuthenticated'
import FindAllPatientsController from '../controllers/FindAllPatientsController'
import FindPatientByCodigoController from '../controllers/FindPatientByCodigoController'
import RegisterPatientController from '../controllers/RegisterPatientController'
import UpdatePatientController from '../controllers/UpdatePatientController'
import DeletePatientController from '../controllers/DeletePatientController'

const patientRouter = Router()
const findAllPatientsController = container.resolve(FindAllPatientsController)
const findPatientByCodigoController = container.resolve(
  FindPatientByCodigoController,
)
const registerPatientController = container.resolve(RegisterPatientController)
const updatePatientController = container.resolve(UpdatePatientController)
const deletePatientController = container.resolve(DeletePatientController)

patientRouter.get('/', isAuthenticated, findAllPatientsController.show)
patientRouter.get('/id', isAuthenticated, findPatientByCodigoController.show)
patientRouter.post('/', isAuthenticated, registerPatientController.create)
patientRouter.put('/', isAuthenticated, updatePatientController.update)
patientRouter.delete('/', isAuthenticated, deletePatientController.delete)

export default patientRouter
