import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  response.json({ message: 'Olá pessoal. Tudo configurado e pronto !!' })
})

export { routes }
