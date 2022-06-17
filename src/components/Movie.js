import React, { useState } from "react";

const Movie = (props) => {
  const [style, setStyle] = useState("movie-info");
  const handleInfoClick = () => {
    setStyle("movie-info-show");
  };

  const handleHideClick = () => {
    setStyle("movie-info");
  };

  const setRatingColor = (vote) => {
    if (vote >= 7.5) {
      return "green";
    } else if (vote >= 6) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <div className="movie">
      <button onClick={handleInfoClick} className="info-btn">
        <img src="/info-icon.png" alt="" />
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
      <div className="title-div">
        <h3>{props.title}</h3>
        <div className="star-rating">
          <img className="star" src="/star.png" alt="" />
          <span className={`rating ${setRatingColor(props.vote_average)}`}>
            {props.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
