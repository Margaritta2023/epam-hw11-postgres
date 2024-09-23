import pool from '../database/db';

export const createMoviesTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS Movies (
      MovieID SERIAL PRIMARY KEY,
      Title VARCHAR(255) NOT NULL,
      ReleaseYear INT NOT NULL,
      DirectorID INT REFERENCES Directors(DirectorID)
    );
  `;
  await pool.query(query);
};

export const createMovieGenresTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS MovieGenres (
      MovieID INT REFERENCES Movies(MovieID),
      GenreID INT REFERENCES Genres(GenreID),
      PRIMARY KEY (MovieID, GenreID)
    );
  `;
  await pool.query(query);
};
