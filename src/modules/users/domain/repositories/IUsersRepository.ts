import { IUser } from '../models/IUser'
import { IUserDTO } from '../models/IUserDTO'

export interface IUsersRepository {
  findByUsername(username: string): Promise<IUserDTO | null>
  findByToken(id: string): Promise<IUserDTO | null>
  autenthicateUser(user: IUser): Promise<void>
  updateRefreshToken(user: IUser): Promise<void>
}
