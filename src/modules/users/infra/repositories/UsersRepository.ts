import { prisma } from '@shared/infra/http/lib/prisma'
import { IUsersRepository } from '../../domain/repositories/IUsersRepository'
import { IUser } from '../../domain/models/IUser'
import { IUserDTO } from '@users/domain/models/IUserDTO'
import { IRegisterUser } from '@users/domain/models/IRegisterUser'

export class UsersRepository implements IUsersRepository {
  async findByUsername(username: string) {
    const user = await prisma.usuario.findFirst({
      where: {
        usuario: username,
      },
    })
    return user
  }

  async findById(id: string): Promise<IUserDTO | null> {
    const user = await prisma.usuario.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    return user
  }

  async findByToken(id: string) {
    const user = await prisma.usuario.findFirst({
      where: {
        id: parseInt(id),
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

  async registerUser(user: IRegisterUser): Promise<void> {
    await prisma.usuario.create({
      data: {
        nome: user.nome,
        usuario: user.usuario,
        senha: user.senha,
        status: 'Ativo',
      },
    })
  }
}
