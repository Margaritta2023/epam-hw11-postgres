### API Endpoints

#### Actors
- **Create Actor**
  - **POST** `/actors`
  - Example Request Body:
    ```json
    {
      "name": "Actor Name",
      "nationality": "Nationality",
      "dob": "YYYY-MM-DD"
    }
    ```

- **Get All Actors**
  - **GET** `/actors`
  - Example Response:
    ```json
    [
      {
        "ActorID": 1,
        "Name": "Leonardo DiCaprio",
        "Nationality": "American",
        "DOB": "1974-11-11"
      },
      {
        "ActorID": 2,
        "Name": "Meryl Streep",
        "Nationality": "American",
        "DOB": "1949-06-22"
      }
    ]
    ```

- **Update Actor**
  - **PUT** `/actors/:id`
  - Example Request Body:
    ```json
    {
      "name": "Updated Actor Name",
      "nationality": "Updated Nationality",
      "dob": "YYYY-MM-DD"
    }
    ```

- **Delete Actor**
  - **DELETE** `/actors/:id`
  - Example Response:
    ```json
    {
      "message": "Actor deleted successfully."
    }
    ```

#### Movies
- **Create Movie**
  - **POST** `/movies`
  - Example Request Body:
    ```json
    {
      "title": "Movie Title",
      "releaseYear": 2023,
      "directorId": 1
    }
    ```

- **Get All Movies**
  - **GET** `/movies`
  - Example Response:
    ```json
    [
      {
        "MovieID": 1,
        "Title": "Inception",
        "ReleaseYear": 2010,
        "DirectorID": 1
      }
    ]
    ```

- **Update Movie**
  - **PUT** `/movies/:id`
  - Example Request Body:
    ```json
    {
      "title": "Updated Movie Title",
      "releaseYear": 2024,
      "directorId": 2
    }
    ```

- **Delete Movie**
  - **DELETE** `/movies/:id`
  - Example Response:
    ```json
    {
      "message": "Movie deleted successfully."
    }
    ```

#### Genres
- **Create Genre**
  - **POST** `/genres`
  - Example Request Body:
    ```json
    {
      "genreName": "Genre Name"
    }
    ```

- **Get All Genres**
  - **GET** `/genres`
  - Example Response:
    ```json
    [
      {
        "GenreID": 1,
        "GenreName": "Action"
      }
    ]
    ```

- **Update Genre**
  - **PUT** `/genres/:id`
  - Example Request Body:
    ```json
    {
      "genreName": "Updated Genre Name"
    }
    ```

- **Delete Genre**
  - **DELETE** `/genres/:id`
  - Example Response:
    ```json
    {
      "message": "Genre deleted successfully."
    }
    ```

#### Ratings
- **Create Rating**
  - **POST** `/ratings`
  - Example Request Body:
    ```json
    {
      "movieId": 1,
      "rating": 8.5
    }
    ```

- **Get All Ratings**
  - **GET** `/ratings`
  - Example Response:
    ```json
    [
      {
        "MovieID": 1,
        "Rating": 8.8
      }
    ]
    ```

- **Update Rating**
  - **PUT** `/ratings/:movieId`
  - Example Request Body:
    ```json
    {
      "rating": 9.0
    }
    ```

- **Delete Rating**
  - **DELETE** `/ratings/:movieId`
  - Example Response:
    ```json
    {
      "message": "Rating deleted successfully."
    }
    ```


**Database Diagram**
![Untitled](https://github.com/user-attachments/assets/3a7e8583-5767-4510-bab9-48e3a0a7f079)
