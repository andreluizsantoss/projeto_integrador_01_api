import { Decimal } from '@prisma/client/runtime/library'

export interface IUserDTO {
  id: number
  nome?: string
  usuario?: string
  senha?: string
  refresh_token?: string
  status?: string
}
