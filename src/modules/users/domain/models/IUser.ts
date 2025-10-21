import { Decimal } from '@prisma/client/runtime/library'

export interface IUser {
  id: number
  nome?: string
  usuario?: string
  senha?: string
  refresh_token?: string
  status?: string
}
