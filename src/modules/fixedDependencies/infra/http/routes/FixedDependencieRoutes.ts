import { Router } from 'express'
import { container } from 'tsyringe'
import { isAuthenticated } from '@shared/middlewares/isAuthenticated'
import FindAllFixedDependenciesController from '../controllers/FindAllFixedDependenciesController'
import FindFixedDependencieByCodigoController from '../controllers/FindFixedDependencieByCodigoController'
import RegisterFixedDependencieController from '../controllers/RegisterFixedDependencieController'
import UpdateFixedDependencieController from '../controllers/UpdateFixedDependencieController'
import DeleteFixedDependencieController from '../controllers/DeleteFixedDependencieController'

const fixedDependencieRouter = Router()
const findAllFixedDependenciesController = container.resolve(
  FindAllFixedDependenciesController,
)
const findFixedDependencieByCodigoController = container.resolve(
  FindFixedDependencieByCodigoController,
)
const registerFixedDependencieController = container.resolve(
  RegisterFixedDependencieController,
)
const updateFixedDependencieController = container.resolve(
  UpdateFixedDependencieController,
)
const deleteFixedDependencieController = container.resolve(
  DeleteFixedDependencieController,
)

fixedDependencieRouter.get(
  '/',
  isAuthenticated,
  findAllFixedDependenciesController.show,
)
fixedDependencieRouter.get(
  '/codigo',
  isAuthenticated,
  findFixedDependencieByCodigoController.show,
)
fixedDependencieRouter.post(
  '/',
  isAuthenticated,
  registerFixedDependencieController.create,
)
fixedDependencieRouter.put(
  '/',
  isAuthenticated,
  updateFixedDependencieController.update,
)
fixedDependencieRouter.delete(
  '/',
  isAuthenticated,
  deleteFixedDependencieController.delete,
)

export default fixedDependencieRouter
