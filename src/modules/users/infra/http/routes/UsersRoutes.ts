import { Router } from 'express'
import { container } from 'tsyringe'
import RegisterUserController from '../controllers/RegisterUserController'

const usersRouter = Router()
const registerUserController = container.resolve(RegisterUserController)

usersRouter.post('/register', registerUserController.register)

export default usersRouter
