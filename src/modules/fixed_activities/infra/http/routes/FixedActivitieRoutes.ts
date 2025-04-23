import { Router } from 'express'
import { container } from 'tsyringe'
import FindAllFixedActivitiesController from '../controllers/FindAllFixedActivitiesController'
import FindFixedActivitieByCodigoController from '../controllers/FindFixedActivitieByCodigoController'
import { isAuthenticated } from '@shared/middlewares/isAuthenticated'
import RegisterFixedActivitieController from '../controllers/RegisterFixedActivitieController'
import UpdateFixedActivitieController from '../controllers/UpdateFixedActivitieController'
import DeleteFixedActivitieController from '../controllers/DeleteFixedActivitieController'

const fixedActivitieRouter = Router()
const findAllFixedActivitiesController = container.resolve(
  FindAllFixedActivitiesController,
)
const findFixedActivitieByCodigoController = container.resolve(
  FindFixedActivitieByCodigoController,
)
const registerFixedActivitieController = container.resolve(
  RegisterFixedActivitieController,
)
const updateFixedActivitieController = container.resolve(
  UpdateFixedActivitieController,
)
const deleteFixedActivitieController = container.resolve(
  DeleteFixedActivitieController,
)

fixedActivitieRouter.get(
  '/',
  isAuthenticated,
  findAllFixedActivitiesController.show,
)
fixedActivitieRouter.get(
  '/codigo',
  isAuthenticated,
  findFixedActivitieByCodigoController.show,
)
fixedActivitieRouter.post(
  '/',
  isAuthenticated,
  registerFixedActivitieController.create,
)
fixedActivitieRouter.put(
  '/',
  isAuthenticated,
  updateFixedActivitieController.update,
)
fixedActivitieRouter.delete(
  '/',
  isAuthenticated,
  deleteFixedActivitieController.delete,
)

export default fixedActivitieRouter
