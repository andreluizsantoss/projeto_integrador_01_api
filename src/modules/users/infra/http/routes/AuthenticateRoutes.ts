import { Router } from 'express'
import { container } from 'tsyringe'
import AuthenticateController from '../controllers/AuthenticateController'
import FindByTokenController from '../controllers/FindByTokenController'
import { isAuthenticated } from '@shared/middlewares/isAuthenticated'
import { addUserInfoToRequest } from '@users/infra/middlewares/addUserInfoToRequest'
import UpdateTokenController from '../controllers/UpdateTokenController'

const authenticateRouter = Router()
const authenticateController = container.resolve(AuthenticateController)
const findByTokenController = container.resolve(FindByTokenController)
const updateTokenController = container.resolve(UpdateTokenController)

authenticateRouter.post('/session', authenticateController.session)
authenticateRouter.get(
  '/find-token',
  isAuthenticated,
  findByTokenController.show,
)
authenticateRouter.patch(
  '/refresh-token',
  addUserInfoToRequest,
  updateTokenController.update,
)

export default authenticateRouter
