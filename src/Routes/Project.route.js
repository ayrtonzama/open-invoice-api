import express from 'express';
const router=express.Router();
import ProjectController from '../Controllers/ProjectController'
import { errorHandler } from "../Response/ErrorHandling";
import { responseHandle } from "../Response/ResponseHandler";
import auth from "../Middlewares/authentication";

router.post('/',auth.required,ProjectController.create,errorHandler, responseHandle)
router.get('/',auth.required,ProjectController.gets,errorHandler, responseHandle)
router.get('/:id',auth.required,ProjectController.get,errorHandler, responseHandle)
router.put('/:id',auth.required,ProjectController.update,errorHandler, responseHandle)
router.delete('/:id',auth.required,ProjectController.remove,errorHandler, responseHandle)

router.put('/:id/assign',ProjectController.assignUserToProject)

export default router;