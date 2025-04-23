import { Router } from 'express'
import { container } from 'tsyringe'
import { isAuthenticated } from '@shared/middlewares/isAuthenticated'
import DeleteFixedBenefitController from '../controllers/DeleteFixedBenefitController'
import FindAllFixedBenefitsController from '../controllers/FindAllFixedBenefitsController'
import FindFixedBenefitByCodigoController from '../controllers/FindFixedBenefitByCodigoController'
import RegisterFixedBenefitController from '../controllers/RegisterFixedBenefitController'
import UpdateFixedBenefitController from '../controllers/UpdateFixedBenefitController'

const fixedBenefitRouter = Router()
const findAllFixedBenefitsController = container.resolve(
  FindAllFixedBenefitsController,
)
const findFixedBenefitByCodigoController = container.resolve(
  FindFixedBenefitByCodigoController,
)
const registerFixedBenefitController = container.resolve(
  RegisterFixedBenefitController,
)
const updateFixedBenefitController = container.resolve(
  UpdateFixedBenefitController,
)
const deleteFixedBenefitController = container.resolve(
  DeleteFixedBenefitController,
)

fixedBenefitRouter.get(
  '/',
  isAuthenticated,
  findAllFixedBenefitsController.show,
)
fixedBenefitRouter.get(
  '/codigo',
  isAuthenticated,
  findFixedBenefitByCodigoController.show,
)
fixedBenefitRouter.post(
  '/',
  isAuthenticated,
  registerFixedBenefitController.create,
)
fixedBenefitRouter.put(
  '/',
  isAuthenticated,
  updateFixedBenefitController.update,
)
fixedBenefitRouter.delete(
  '/',
  isAuthenticated,
  deleteFixedBenefitController.delete,
)

export default fixedBenefitRouter
