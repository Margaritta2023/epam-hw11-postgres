import { Router } from 'express';
import {
  createRating,
  getRatings,
  updateRating,
  deleteRating
} from '../controllers/ratingController';

const router = Router();

router.post('/', createRating);
router.get('/', getRatings);
router.put('/:id', updateRating);
router.delete('/:id', deleteRating); 

export default router;
