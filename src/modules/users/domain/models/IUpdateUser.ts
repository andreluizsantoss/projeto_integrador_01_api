import { cadastro_status, usuario_perfil } from '@prisma/client'

export interface IUpdateUser {
  id: number
  status: cadastro_status
  nome_completo: string
  usuario: string
  senha: string
  email: string
  perfil: usuario_perfil
}
