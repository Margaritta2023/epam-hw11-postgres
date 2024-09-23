import pool from '../database/db';

export const createActorsTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS Actors (
      ActorID SERIAL PRIMARY KEY,
      Name VARCHAR(255) NOT NULL,
      Nationality VARCHAR(100),
      DOB DATE
    );
  `;
  await pool.query(query);
};
