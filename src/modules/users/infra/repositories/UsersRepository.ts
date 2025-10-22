import { prisma } from '@shared/infra/http/lib/prisma'
import { IUsersRepository } from '../../domain/repositories/IUsersRepository'
import { IUser } from '../../domain/models/IUser'
import { IUserDTO } from '@users/domain/models/IUserDTO'
import { IRegisterUser } from '@users/domain/models/IRegisterUser'
import { IUpdateUser } from '@users/domain/models/IUpdateUser'
import { ICreateAccessAndRefreshToken } from '@users/domain/models/ICreateRefreshToken'

export class UsersRepository implements IUsersRepository {
  async findByUsername(username: string) {
    const user = await prisma.usuarios.findFirst({
      where: {
        usuario: username,
      },
    })
    return user
  }

  async findById(id: string): Promise<IUserDTO | null> {
    const user = await prisma.usuarios.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    return user
  }

  async findByToken(id: string) {
    const user = await prisma.usuarios.findFirst({
      where: {
        id: parseInt(id),
      },
    })
    return user
  }

  async autenthicateUser(data: IUser) {
    await prisma.usuarios.update({
      where: {
        id: data.id,
      },
      data,
    })
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    await prisma.usuarios.update({
      where: {
        id: Number(userId),
      },
      data: {
        refresh_token: refreshToken,
      },
    })
  }

  async registerUser(user: IRegisterUser): Promise<void> {
    const now = new Date()
    await prisma.usuarios.create({
      data: {
        status: user.status,
        nome_completo: user.nome_completo,
        usuario: user.usuario,
        senha: user.senha,
        email: user.email,
        perfil: user.perfil,
        data_criacao: now,
      },
    })
  }

  async updateUser(user: IUpdateUser): Promise<void> {
    await prisma.usuarios.update({
      where: {
        id: user.id,
      },
      data: {
        status: user.status,
        nome_completo: user.nome_completo,
        usuario: user.usuario,
        senha: user.senha,
        email: user.email,
        perfil: user.perfil,
      },
    })
  }

  async findAllUsers(): Promise<IUserDTO[]> {
    const users = await prisma.usuarios.findMany({
      orderBy: {
        nome_completo: 'asc',
      },
    })
    return users
  }

  async deleteUser(id: number): Promise<void> {
    await prisma.usuarios.delete({
      where: {
        id: id,
      },
    })
  }
}
