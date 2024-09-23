import { Request, Response } from 'express';
import pool from '../database/db';

export const createDirector = async (req: Request, res: Response) => {
  const { name, nationality, dob } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO Directors (Name, Nationality, DOB) VALUES ($1, $2, $3) RETURNING *`,
      [name, nationality, dob]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error creating director' });
  }
};

export const getDirectors = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM Directors');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving directors' });
  }
};

export const updateDirector = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, nationality, dob } = req.body;
  try {
    const result = await pool.query(
      `UPDATE Directors SET Name = $1, Nationality = $2, DOB = $3 WHERE DirectorID = $4 RETURNING *`,
      [name, nationality, dob, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating director' });
  }
};

export const deleteDirector = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Directors WHERE DirectorID = $1', [id]);
    res.status(200).json({ message: 'Director deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting director' });
  }
};
