import { Router } from 'express';
import { createActor, getActors, updateActor, deleteActor } from '../controllers/actorController';

const router = Router();

router.post('/actors', createActor);
router.get('/actors', getActors);
router.put('/actors/:id', updateActor);
router.delete('/actors/:id', deleteActor);

export default router;
