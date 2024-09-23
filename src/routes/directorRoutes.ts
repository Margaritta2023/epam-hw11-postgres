import { Router } from 'express';
import {
  createDirector,
  getDirectors,
  updateDirector,
  deleteDirector
} from '../controllers/directorController';

const router = Router();

router.post('/', createDirector); 
router.get('/', getDirectors);    
router.put('/:id', updateDirector); 
router.delete('/:id', deleteDirector); 

export default router;
