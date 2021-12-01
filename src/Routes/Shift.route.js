import express from 'express';
import ShiftController from '../Controllers/ShiftController'
const router=express.Router();


router.post('/',ShiftController.create)
router.get('/',ShiftController.gets)
router.get('/:id',ShiftController.get)
router.put('/:id',ShiftController.update)
router.delete('/:id',ShiftController.remove)


export default router;