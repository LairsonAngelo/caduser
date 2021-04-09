import {Router} from 'express';
const router = Router();
import ClientsController from '../app/controller/ClientsController';


router.get('/', ClientsController.index);

export default router;