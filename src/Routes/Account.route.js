import express from "express";
const router = express.Router();
import AccountController from "../Controllers/AccountController";
import auth from "../Middlewares/authentication";

import { errorHandler } from "../Response/ErrorHandling";
import { responseHandle } from "../Response/ResponseHandler";
router.get(
  "/",
  auth.required,
  AccountController.get,
  errorHandler,
  responseHandle
);
router.put(
  "/",
  auth.required,
  AccountController.update,
  errorHandler,
  responseHandle
);
router.delete(
  "/",
  auth.required,
  AccountController.terminate,
  errorHandler,
  responseHandle
);

export default router;
