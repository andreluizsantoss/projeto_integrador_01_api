import authenticateRouter from '@users/infra/http/routes/AuthenticateRoutes'
import { Router } from 'express'

const routes = Router()

// routes.get('/', (request, response) => {
//   response.json({ message: 'Olá pessoal. Tudo configurado e pronto !!' })
// })

routes.use('/authenticate', authenticateRouter)

export { routes }
