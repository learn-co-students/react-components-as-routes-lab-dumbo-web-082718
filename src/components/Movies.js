import React from "react";
import { movies } from "../data";

const movieArray = movies.map(movie => {
  return (
    <div key={movie.title}>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time}</p>
      <ul>
        Genres:{" "}
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
});

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieArray}
    </div>
  );
};

export default Movies;
