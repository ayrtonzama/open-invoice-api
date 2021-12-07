import express from "express";
import OrganisationController from "../Controllers/OrganisationController";
import { errorHandler } from "../Response/ErrorHandling";
import { responseHandle } from "../Response/ResponseHandler";
import auth from "../Middlewares/authentication";
const router = express.Router();
router.post(
  "/",
  auth.required,
  OrganisationController.create,
  errorHandler,
  responseHandle
);
router.get(
  "/",
  auth.required,
  OrganisationController.get,
  errorHandler,
  responseHandle
);
router.put(
  "/",
  auth.required,
  OrganisationController.update,
  errorHandler,
  responseHandle
);
router.delete(
  "/",
  auth.required,
  OrganisationController.remove,
  errorHandler,
  responseHandle
);

export default router;
