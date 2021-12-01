import express from "express";
import AuthController from "../Controllers/AuthController";

import { errorHandler } from "../Response/ErrorHandling";
import { responseHandle } from "../Response/ResponseHandler";
const router = express.Router();

router.post("/login", AuthController.login, errorHandler, responseHandle);
router.post("/register", AuthController.signUpUser);

export default router;
