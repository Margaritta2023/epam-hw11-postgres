import { Router } from 'express';
import {
  createGenre,
  getGenres,
  updateGenre,
  deleteGenre
} from '../controllers/genreController';

const router = Router();

router.post('/genres', createGenre);
router.get('/genres', getGenres);
router.put('/genres/:id', updateGenre);
router.delete('/genres/:id', deleteGenre);

export default router;
