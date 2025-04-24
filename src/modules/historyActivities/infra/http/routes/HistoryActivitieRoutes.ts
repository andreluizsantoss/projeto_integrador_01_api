import { Router } from 'express'
import { container } from 'tsyringe'
import { isAuthenticated } from '@shared/middlewares/isAuthenticated'
import FindAllHistoryActivitiesController from '../controllers/FindAllHistoryActivitiesController'
import FindHistoryActivitieByCodigoController from '../controllers/FindHistoryActivitieByCodigoController'
import RegisterHistoryActivitieController from '../controllers/RegisterHistoryActivitieController'
import UpdateHistoryActivitieController from '../controllers/UpdateHistoryActivitieController'
import DeleteHistoryActivitieController from '../controllers/DeleteHistoryActivitieController'

const historyActivitieRouter = Router()
const findAllHistoryActivitiesController = container.resolve(
  FindAllHistoryActivitiesController,
)
const findHistoryActivitieByCodigoController = container.resolve(
  FindHistoryActivitieByCodigoController,
)
const registerHistoryActivitieController = container.resolve(
  RegisterHistoryActivitieController,
)
const updateHistoryActivitieController = container.resolve(
  UpdateHistoryActivitieController,
)
const deleteHistoryActivitieController = container.resolve(
  DeleteHistoryActivitieController,
)

historyActivitieRouter.get(
  '/',
  isAuthenticated,
  findAllHistoryActivitiesController.show,
)
historyActivitieRouter.get(
  '/id',
  isAuthenticated,
  findHistoryActivitieByCodigoController.show,
)
historyActivitieRouter.post(
  '/',
  isAuthenticated,
  registerHistoryActivitieController.create,
)
historyActivitieRouter.put(
  '/',
  isAuthenticated,
  updateHistoryActivitieController.update,
)
historyActivitieRouter.delete(
  '/',
  isAuthenticated,
  deleteHistoryActivitieController.delete,
)

export default historyActivitieRouter
