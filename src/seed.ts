import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
interface DatabaseError extends Error {
  code?: string; 
}

const createDatabase = async (dbName: string) => {
  const client = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    port: Number(process.env.DB_PORT),
  });

  try {
    await client.query(`CREATE DATABASE "${dbName}";`);
    console.log(`Database ${dbName} created successfully!`);
  } catch (error) {
    const dbError = error as DatabaseError; 
    if (dbError.code === '42P04') {
      console.log(`Database ${dbName} already exists.`);
    } else {
      console.error('Error creating database:', dbError.message);
    }
  } finally {
    await client.end();
  }
};

const seedData = async () => {
  const dbName = 'movies_db'; // Use the new database name
  // Create the database
  await createDatabase(dbName);

  // Delay to ensure the database is fully recognized
  await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds

  // Create a new pool to connect to the new database
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: dbName,
    password: process.env.DB_PASS,
    port: Number(process.env.DB_PORT),
  });

  try {
    // Test the connection to the database
    await pool.connect();
    console.log(`Connected to database ${dbName}`);

    // Create Tables with Unique Constraints
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Directors (
        DirectorID SERIAL PRIMARY KEY,
        Name VARCHAR(100) UNIQUE,
        Nationality VARCHAR(100),
        DOB DATE
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS Actors (
        ActorID SERIAL PRIMARY KEY,
        Name VARCHAR(100) UNIQUE,
        Nationality VARCHAR(100),
        DOB DATE
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS Genres (
        GenreID SERIAL PRIMARY KEY,
        GenreName VARCHAR(100) UNIQUE
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS Movies (
        MovieID SERIAL PRIMARY KEY,
        Title VARCHAR(200) UNIQUE,
        ReleaseYear INT,
        DirectorID INT REFERENCES Directors(DirectorID)
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS Ratings (
        MovieID INT PRIMARY KEY REFERENCES Movies(MovieID),
        Rating DECIMAL(2, 1)
      );
    `);

    console.log('Tables created successfully!');

    // Insert Directors
    await pool.query(`
      INSERT INTO Directors (Name, Nationality, DOB) VALUES
      ('Christopher Nolan', 'British-American', '1970-07-30'),
      ('Steven Spielberg', 'American', '1946-12-18'),
      ('Martin Scorsese', 'American', '1942-11-17'),
      ('Quentin Tarantino', 'American', '1963-03-27'),
      ('Alfred Hitchcock', 'British', '1899-08-13')
      ON CONFLICT (Name) DO NOTHING;
    `);

    // Insert Actors
    await pool.query(`
      INSERT INTO Actors (Name, Nationality, DOB) VALUES
      ('Leonardo DiCaprio', 'American', '1974-11-11'),
      ('Meryl Streep', 'American', '1949-06-22'),
      ('Robert De Niro', 'American', '1943-08-17'),
      ('Brad Pitt', 'American', '1963-12-18'),
      ('Natalie Portman', 'Israeli-American', '1981-06-09')
      ON CONFLICT (Name) DO NOTHING;
    `);

    // Insert Genres
    await pool.query(`
      INSERT INTO Genres (GenreName) VALUES
      ('Action'),
      ('Drama'),
      ('Comedy'),
      ('Thriller'),
      ('Science Fiction')
      ON CONFLICT (GenreName) DO NOTHING;
    `);

    // Insert Movies
    await pool.query(`
      INSERT INTO Movies (Title, ReleaseYear, DirectorID) VALUES
      ('Inception', 2010, 1),
      ('Schindler\'s List', 1993, 2),
      ('Goodfellas', 1990, 3),
      ('Pulp Fiction', 1994, 4),
      ('Vertigo', 1958, 5)
      ON CONFLICT (Title) DO NOTHING;
    `);

    // Insert Ratings
    await pool.query(`
      INSERT INTO Ratings (MovieID, Rating) VALUES
      (1, 8.8),
      (2, 8.6),
      (3, 7.8),
      (4, 8.5),
      (5, 9.0)
      ON CONFLICT (MovieID) DO NOTHING;
    `);

    console.log('Data seeded successfully!');
  } catch (error) {
    const dbError = error as DatabaseError; // Type assertion
    console.error('Error seeding data:', dbError.message);
  } finally {
    await pool.end(); // Close the database connection
  }
};

seedData();
