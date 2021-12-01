import express from 'express';
const router=express.Router();
import ProjectController from '../Controllers/ProjectController'

router.post('/',ProjectController.create)
router.get('/',ProjectController.gets)
router.get('/:id',ProjectController.get)
router.put('/:id',ProjectController.update)
router.delete('/:id',ProjectController.remove)

router.put('/:id/assign',ProjectController.assignUserToProject)

export default router;