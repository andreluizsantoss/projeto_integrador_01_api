import { prisma } from '@shared/infra/http/lib/prisma'
import { IUsersRepository } from '../../domain/repositories/IUsersRepository'
import { IUser } from '../../domain/models/IUser'

export class UsersRepository implements IUsersRepository {
  async findByUsername(username: string) {
    const user = await prisma.usuario.findFirst({
      where: {
        username: username,
        status: 'ATIVO',
      },
    })
    return user
  }

  async autenthicateUser(data: IUser) {
    await prisma.usuario.update({
      where: {
        id: data.id,
      },
      data,
    })
  }

  async updateRefreshToken(data: IUser) {
    await prisma.usuario.update({
      where: {
        id: data.id,
      },
      data: data,
    })
  }

  async findByToken(id: string) {
    const user = await prisma.usuario.findFirst({
      where: {
        id: parseInt(id),
        status: 'ATIVO',
      },
    })
    return user
  }
}
