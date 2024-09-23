import express from 'express';
import actorRoutes from './routes/actorRoutes';
import directorRoutes from './routes/directorRoutes';
import genreRoutes from './routes/genreRoutes';
import movieRoutes from './routes/movieRoutes';
import ratingRoutes from './routes/ratingRoutes';

const app = express();

app.use(express.json());

app.use(actorRoutes);
app.use(directorRoutes);
app.use(genreRoutes);
app.use(movieRoutes);
app.use(ratingRoutes);

export default app;
