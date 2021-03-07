import {Router} from 'express';
import structureController from '../controllers/structureController';

const router=Router();

router.get('/get-str/:zoneid',structureController.getStructureJson)
router.get('/get-structure/:sid',structureController.getStructure)
router.post('/create-str',structureController.createBuilding)
router.post('/set-remarks',structureController.setRemarks)
router.get('/markComplete/:bid',structureController.markComplete)
router.get('/markProgress/:id',structureController.markProgress)

export default router;
