import express from 'express'
import AuthRoute from './Auth.route'
import AccountRoute from './Account.route'
import OrganisationRoute from './Organisation.route'
import ProjectRoute from './Project.route'
import ShiftRoute from './Shift.route'
const router= express.Router();

router.use("/auth",AuthRoute)
router.use("/accounts",AccountRoute)
router.use('/organisations',OrganisationRoute)
router.use("/projects",ProjectRoute)
router.use('/shift',ShiftRoute)

export default router;