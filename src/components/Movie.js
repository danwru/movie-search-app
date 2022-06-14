import React, { useState } from "react";

const Movie = (props) => {
  const [style, setStyle] = useState("movie-info");
  const handleInfoClick = () => {
    setStyle("movie-info-show");
  };

  const handleHideClick = () => {
    setStyle("movie-info");
  };

  return (
    <div className="movie">
      <button onClick={handleInfoClick} className="info-btn">
        i
      </button>
      <div className={style}>
        <button onClick={handleHideClick} className="hide-info-btn">
          Hide
        </button>
        <p>{props.overview}</p>
        <p>Release Year: {props.release_date.substr(0, 4)}</p>
      </div>
      <img
        src={
          props.poster_path &&
          "https://image.tmdb.org/t/p/original" + props.poster_path
        }
        alt={props.title}
      />
      <div className="title-sec">
        <h3>{props.title}</h3>
        <p className="rating">{props.vote_average}</p>
      </div>
    </div>
  );
};

export default Movie;
