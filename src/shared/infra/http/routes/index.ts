import authenticateRouter from '@users/infra/http/routes/AuthenticateRoutes'
import { Router } from 'express'
import fixedActivitieRouter from 'src/modules/fixed_activities/infra/http/routes/FixedActivitieRoutes'
import fixedBenefitRouter from '@fixedBenefits/infra/http/routes/FixedBenefitRoutes'

const routes = Router()

routes.use('/authenticate', authenticateRouter)
routes.use('/fixed-activitie', fixedActivitieRouter)
routes.use('/fixed-benefit', fixedBenefitRouter)

export { routes }
