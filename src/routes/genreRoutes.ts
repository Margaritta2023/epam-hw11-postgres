import { Router } from 'express';
import {
  createGenre,
  getGenres,
  updateGenre,
  deleteGenre
} from '../controllers/genreController';

const router = Router();

router.post('/', createGenre);
router.get('/', getGenres);
router.put('/:id', updateGenre);
router.delete('/:id', deleteGenre);

export default router;
