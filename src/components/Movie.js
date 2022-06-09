import React from "react";

const Movie = ({ title, rating, desc }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>Rating: {rating}</p>
    </>
  );
};

export default Movie;
