import { Router } from 'express'
import { container } from 'tsyringe'
import RegisterUserController from '../controllers/RegisterUserController'
import UpdateUserController from '../controllers/UpdateUserController'
import { isAuthenticated } from '@shared/middlewares/isAuthenticated'
import FindUserByIdController from '../controllers/FindUserByIdController'
import FindAllUsersController from '../controllers/FindAllUsersController'
import DeleteUserController from '../controllers/DeleteUserController'

const usersRouter = Router()
const registerUserController = container.resolve(RegisterUserController)
const updateUserController = container.resolve(UpdateUserController)
const findUserByIdController = container.resolve(FindUserByIdController)
const findAllUsersController = container.resolve(FindAllUsersController)
const deleteUserController = container.resolve(DeleteUserController)

usersRouter.post('/', isAuthenticated, registerUserController.register)
usersRouter.put('/', isAuthenticated, updateUserController.update)
usersRouter.get('/id', isAuthenticated, findUserByIdController.show)
usersRouter.get('/', isAuthenticated, findAllUsersController.show)
usersRouter.delete('/', isAuthenticated, deleteUserController.delete)

export default usersRouter
