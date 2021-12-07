import express from "express";
import AuthController from "../Controllers/AuthController";
import auth from "../Middlewares/authentication";
import { RoleChecks } from "../Middlewares/RoleCheck";

import { errorHandler } from "../Response/ErrorHandling";
import { responseHandle } from "../Response/ResponseHandler";
const router = express.Router();

router.post("/login", AuthController.login, errorHandler, responseHandle);
router.post(
  "/register",
  auth.required,
  (req, res, next) => RoleChecks(req.payload.data.role, ["ADM"], next),
  AuthController.signUpUser,
  errorHandler,
  responseHandle
);

export default router;
