import { Router } from 'express';
import {
  createDirector,
  getDirectors,
  updateDirector,
  deleteDirector
} from '../controllers/directorController';

const router = Router();

router.post('/directors', createDirector); 
router.get('/directors', getDirectors);    
router.put('/directors/:id', updateDirector); 
router.delete('/directors/:id', deleteDirector); 

export default router;
