import authenticateRouter from '@users/infra/http/routes/AuthenticateRoutes'
import { Router } from 'express'
import fixedActivitieRouter from 'src/modules/fixed_activities/infra/http/routes/FixedActivitieRoutes'

const routes = Router()

routes.use('/authenticate', authenticateRouter)
routes.use('/fixed-activitie', fixedActivitieRouter)

export { routes }
