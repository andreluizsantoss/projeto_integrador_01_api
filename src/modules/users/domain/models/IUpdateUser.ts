import { Decimal } from '@prisma/client/runtime/library'

export interface IUpdateUser {
  id: number
  nome: string
  usuario: string
  senha: string
  status: string
}
