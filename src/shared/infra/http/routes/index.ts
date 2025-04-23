import authenticateRouter from '@users/infra/http/routes/AuthenticateRoutes'
import { Router } from 'express'
import fixedBenefitRouter from '@fixedBenefits/infra/http/routes/FixedBenefitRoutes'
import fixedActivitieRouter from '@fixedActivities/infra/http/routes/FixedActivitieRoutes'
import fixedDependencieRouter from '@fixedDependencies/infra/http/routes/FixedDependencieRoutes'

const routes = Router()

routes.use('/authenticate', authenticateRouter)
routes.use('/fixed-activitie', fixedActivitieRouter)
routes.use('/fixed-benefit', fixedBenefitRouter)
routes.use('/fixed-dependencie', fixedDependencieRouter)

export { routes }
