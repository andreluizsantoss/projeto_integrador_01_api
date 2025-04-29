import { Router } from 'express'
import { container } from 'tsyringe'
import RegisterUserController from '../controllers/RegisterUserController'
import UpdateUserController from '../controllers/UpdateUserController'
import { isAuthenticated } from '@shared/middlewares/isAuthenticated'
import FindUserByIdController from '../controllers/FindUserByIdController'

const usersRouter = Router()
const registerUserController = container.resolve(RegisterUserController)
const updateUserController = container.resolve(UpdateUserController)
const findUserByIdController = container.resolve(FindUserByIdController)

usersRouter.post('/', isAuthenticated, registerUserController.register)
usersRouter.put('/', isAuthenticated, updateUserController.update)
usersRouter.get('/id', isAuthenticated, findUserByIdController.show)

export default usersRouter
