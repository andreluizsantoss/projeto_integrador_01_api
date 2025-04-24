import authenticateRouter from '@users/infra/http/routes/AuthenticateRoutes'
import { Router } from 'express'
import fixedBenefitRouter from '@fixedBenefits/infra/http/routes/FixedBenefitRoutes'
import fixedActivitieRouter from '@fixedActivities/infra/http/routes/FixedActivitieRoutes'
import fixedDependencieRouter from '@fixedDependencies/infra/http/routes/FixedDependencieRoutes'
import patientRouter from '@patients/infra/http/routes/PatientRoutes'
import patientBenefitRouter from '@patientBenefits/infra/http/routes/PatientBenefitRoutes'

const routes = Router()

routes.use('/authenticate', authenticateRouter)
routes.use('/fixed-activitie', fixedActivitieRouter)
routes.use('/fixed-benefit', fixedBenefitRouter)
routes.use('/fixed-dependencie', fixedDependencieRouter)
routes.use('/patient', patientRouter)
routes.use('/patient-benefit', patientBenefitRouter)

export { routes }
