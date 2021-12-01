import express from 'express';
import AuthController from '../Controllers/AuthController'
const router=express.Router();

router.post("/login",AuthController.login)
router.post("/register",AuthController.signUpUser)

export default router;