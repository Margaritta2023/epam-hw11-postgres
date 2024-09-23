import { Router } from 'express';
import {
  createMovie,
  getMovies,
  updateMovie,
  deleteMovie
} from '../controllers/movieController';

const router = Router();

router.post('/', createMovie);
router.get('/', getMovies);
router.put('/:id', updateMovie);    
router.delete('/:id', deleteMovie); 

export default router;
