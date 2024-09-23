import { Router } from 'express';
import {
  createMovie,
  getMovies,
  updateMovie,
  deleteMovie
} from '../controllers/movieController';

const router = Router();

router.post('/movies', createMovie);
router.get('/movies', getMovies);
router.put('/movies/:id', updateMovie);    
router.delete('/movies/:id', deleteMovie); 

export default router;
