import express from 'express';
const router=express.Router();
import AccountController from '../Controllers/AccountController'

router.get('/',AccountController.get)
router.put('/',AccountController.update)
router.delete('/',AccountController.terminate)

export default router;