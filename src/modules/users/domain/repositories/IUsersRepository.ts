import { IUser } from '../models/IUser'
import { IUserDTO } from '../models/IUserDTO'

export interface IUsersRepository {
  findById(id: string): Promise<IUserDTO | null>
  findByToken(id: string): Promise<IUserDTO | null>
  autenthicateUser(user: IUser): Promise<void>
  updateRefreshToken(user: IUser): Promise<void>
}
