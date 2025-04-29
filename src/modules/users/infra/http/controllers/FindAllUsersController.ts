import { FindAllUsersService } from '@users/services/FindAllUsersService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default class FindAllUsersController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(FindAllUsersService)
      const result = await service.execute()
      const sanitizedUsers = result.map(user => ({
        ...user,
        senha: undefined,
        refresh_token: undefined,
      }))
      return response.json(sanitizedUsers)
    } catch (err) {
      throw err
    }
  }
}
