import { Router } from 'express';
import {
  createRating,
  getRatings,
  updateRating,
  deleteRating
} from '../controllers/ratingController';

const router = Router();

router.post('/ratings', createRating);
router.get('/ratings', getRatings);
router.put('/ratings/:id', updateRating);
router.delete('/ratings/:id', deleteRating); 

export default router;
