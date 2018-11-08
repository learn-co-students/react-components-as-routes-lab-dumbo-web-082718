import React from "react";
import { actors } from "../data";

const Actors = () => {
  const actor = actors.map(actr => (
    <div key={actr.name}>
      {" "}
      <h3>{actr.name}</h3>
      <ul>
        {actr.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Actors Page</h1>
      {actor}
    </div>
  );
};

export default Actors;
