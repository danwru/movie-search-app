import React, { useState } from "react";
import infoIcon from "../assets/info-icon.png";
import starIcon from "../assets/star.png";
import stockImage from "../assets/stock-img.jpg";

const Movie = (props) => {
  const [isSaved, setIsSaved] = useState(false);
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

  const handleSaveClick = (e) => {
    if (!isSaved) {
      props.handleStar(e);
      setIsSaved(true);
    } else {
      props.removeSave(e);
      setIsSaved(false);
    }
  };

  return (
    <div className="movie">
      <button onClick={handleInfoClick} className="info-btn">
        <img src={infoIcon} alt="" />
      </button>
      <button
        className={isSaved ? "remove-movie" : "save-movie"}
        onClick={handleSaveClick}
        value={props.id}
      >
        {isSaved ? "x" : "+"}
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
          props.poster_path
            ? "https://image.tmdb.org/t/p/original" + props.poster_path
            : { stockImage }
        }
        alt={props.title}
      />
      <div className="title-div">
        <h3>{props.title}</h3>
        <div className="star-rating">
          <img className="star" src={starIcon} alt="" />
          <span className={`rating ${setRatingColor(props.vote_average)}`}>
            {props.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
