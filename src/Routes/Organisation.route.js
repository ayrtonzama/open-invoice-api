import express from 'express';
import OrganisationController from '../Controllers/OrganisationController'
const router=express.Router();


router.post('/',OrganisationController.create)
router.get('/',OrganisationController.get)
router.put('/',OrganisationController.update)
router.delete('/',OrganisationController.remove)


export default router;