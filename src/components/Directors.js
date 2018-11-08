import React from "react";
import { directors } from "../data";

const Directors = () => {
  const director = directors.map(directr => {
    return (
      <div key={directr.name}>
        <h3>{directr.name}</h3>
        <ul>
          {directr.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
};

export default Directors;
