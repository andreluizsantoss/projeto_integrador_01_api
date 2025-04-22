import { Decimal } from '@prisma/client/runtime/library'

export interface IUserDTO {
  id: number
  nome?: string
  username?: string
  senha?: string
  refresh_token?: string
  status?: string
}
