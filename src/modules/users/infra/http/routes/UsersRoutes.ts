import { Router } from 'express'
import { container } from 'tsyringe'
import RegisterUserController from '../controllers/RegisterUserController'
import UpdateUserController from '../controllers/UpdateUserController'
import { isAuthenticated } from '@shared/middlewares/isAuthenticated'

const usersRouter = Router()
const registerUserController = container.resolve(RegisterUserController)
const updateUserController = container.resolve(UpdateUserController)

usersRouter.post('/', isAuthenticated, registerUserController.register)
usersRouter.put('/', isAuthenticated, updateUserController.update)

export default usersRouter
