import { Router } from 'express'
import { container } from 'tsyringe'
import AuthenticateController from '../controllers/AuthenticateController'

const authenticateRouter = Router()
const authenticateController = container.resolve(AuthenticateController)

authenticateRouter.post('/session', authenticateController.session)

export default authenticateRouter
