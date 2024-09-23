import { Request, Response } from 'express';
import pool from '../database/db';

export const createGenre = async (req: Request, res: Response) => {
  const { genreName } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO Genres (GenreName) VALUES ($1) RETURNING *`,
      [genreName]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error creating genre' });
  }
};

export const getGenres = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM Genres');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving genres' });
  }
};

export const updateGenre = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { genreName } = req.body;
  try {
    const result = await pool.query(
      `UPDATE Genres SET GenreName = $1 WHERE GenreID = $2 RETURNING *`,
      [genreName, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating genre' });
  }
};

export const deleteGenre = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Genres WHERE GenreID = $1', [id]);
    res.status(200).json({ message: 'Genre deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting genre' });
  }
};
