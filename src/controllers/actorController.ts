import { Request, Response } from 'express';
import pool from '../database/db';

export const createActor = async (req: Request, res: Response) => {
  const { name, nationality, dob } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO Actors (Name, Nationality, DOB) VALUES ($1, $2, $3) RETURNING *`,
      [name, nationality, dob]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error creating actor' });
  }
};

export const getActors = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM Actors');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving actors' });
  }
};

export const updateActor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, nationality, dob } = req.body;
  try {
    const result = await pool.query(
      `UPDATE Actors SET Name = $1, Nationality = $2, DOB = $3 WHERE ActorID = $4 RETURNING *`,
      [name, nationality, dob, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating actor' });
  }
};

export const deleteActor = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Actors WHERE ActorID = $1', [id]);
    res.status(200).json({ message: 'Actor deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting actor' });
  }
};
