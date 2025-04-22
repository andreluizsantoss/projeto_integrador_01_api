import { Router } from 'express'
import { container } from 'tsyringe'
import AuthenticateController from '../controllers/AuthenticateController'
import FindByTokenController from '../controllers/FindByTokenController'
import { isAuthenticated } from '@shared/middlewares/isAuthenticated'

const authenticateRouter = Router()
const authenticateController = container.resolve(AuthenticateController)
const findByTokenController = container.resolve(FindByTokenController)

authenticateRouter.post('/session', authenticateController.session)
authenticateRouter.get(
  '/find-token',
  isAuthenticated,
  findByTokenController.show,
)

export default authenticateRouter
