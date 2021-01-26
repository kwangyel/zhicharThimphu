import {Router} from 'express';
import residentController from '../controllers/residentController';

const router=Router();

router.post('/create-resident',residentController.createResident)
router.get('/get-resident/:bid',residentController.getResidentBuilding)
router.get('/get-resident-in-attic/:zoneid',residentController.getResidentInAttic)

export default router;
