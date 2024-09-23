import pool from '../database/db';

export const createGenresTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS Genres (
      GenreID SERIAL PRIMARY KEY,
      GenreName VARCHAR(100) NOT NULL
    );
  `;
  await pool.query(query);
};
