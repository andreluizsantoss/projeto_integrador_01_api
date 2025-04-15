import { Decimal } from '@prisma/client/runtime/library'

export interface IUser {
  codigo: number
  username?: string
  senha?: string
  refresh_token?: string
  status?: string
}
