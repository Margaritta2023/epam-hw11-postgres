import { Request, Response } from 'express';
import pool from '../database/db';

export const createMovie = async (req: Request, res: Response) => {
  const { title, releaseYear, directorID } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO Movies (Title, ReleaseYear, DirectorID) VALUES ($1, $2, $3) RETURNING *`,
      [title, releaseYear, directorID]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error creating movie' });
  }
};

export const getMovies = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM Movies');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving movies' });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, releaseYear, directorID } = req.body;
  try {
    const result = await pool.query(
      `UPDATE Movies SET Title = $1, ReleaseYear = $2, DirectorID = $3 WHERE MovieID = $4 RETURNING *`,
      [title, releaseYear, directorID, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating movie' });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Movies WHERE MovieID = $1', [id]);
    res.status(200).json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting movie' });
  }
};
