import pool from '../database/db';

export const createRatingsTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS Ratings (
      MovieID INT REFERENCES Movies(MovieID),
      Rating DECIMAL(2, 1),
      PRIMARY KEY (MovieID)
    );
  `;
  await pool.query(query);
};
