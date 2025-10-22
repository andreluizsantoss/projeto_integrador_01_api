import { ICreateAccessAndRefreshToken } from '../models/ICreateRefreshToken'
import { IRegisterUser } from '../models/IRegisterUser'
import { IUpdateUser } from '../models/IUpdateUser'
import { IUser } from '../models/IUser'
import { IUserDTO } from '../models/IUserDTO'

export interface IUsersRepository {
  findByUsername(username: string): Promise<IUserDTO | null>
  findById(id: string): Promise<IUserDTO | null>
  findByToken(id: string): Promise<IUserDTO | null>
  autenthicateUser(user: IUser): Promise<void>
  updateRefreshToken(userId: string, refreshToken: string): Promise<void>
  registerUser(user: IRegisterUser): Promise<void>
  updateUser(user: IUpdateUser): Promise<void>
  findAllUsers(): Promise<IUserDTO[]>
  deleteUser(id: number): Promise<void>
  findUserByUserOrEmail(
    user: string,
    email: string,
    excludeId: number,
  ): Promise<IUserDTO | null>
}
