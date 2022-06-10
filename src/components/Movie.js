import React from "react";

const Movie = (props) => {
  return (
    <div className="movie">
      <h3>{props.title}</h3>
      <p className="movie-overview">Overview: {props.overview}</p>
      <img
        id="test"
        src={"https://image.tmdb.org/t/p/w500" + props.poster_path}
        alt={props.title}
      />
    </div>
  );
};

export default Movie;
