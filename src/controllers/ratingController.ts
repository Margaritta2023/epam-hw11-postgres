import { Request, Response } from 'express';
import pool from '../database/db';

export const createRating = async (req: Request, res: Response) => {
  const { movieID, rating } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO Ratings (MovieID, Rating) VALUES ($1, $2) RETURNING *`,
      [movieID, rating]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error creating rating' });
  }
};

export const getRatings = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM Ratings');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving ratings' });
  }
};

export const updateRating = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { rating } = req.body;
  try {
    const result = await pool.query(
      `UPDATE Ratings SET Rating = $1 WHERE MovieID = $2 RETURNING *`,
      [rating, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating rating' });
  }
};

export const deleteRating = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Ratings WHERE MovieID = $1', [id]);
    res.status(200).json({ message: 'Rating deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting rating' });
  }
};
