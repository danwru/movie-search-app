import React from "react";

const Genre = () => {
  const genres = [
    { id: 1, text: "Drama" },
    { id: 2, text: "Thriller" },
    { id: 3, text: "Comedy" },
    { id: 4, text: "Adventure" },
    { id: 5, text: "Horror" },
    { id: 6, text: "Sci-Fi" },
  ];
  return (
    <div>
      {genres.map((genre) => (
        <button key={genre.id}>{genre.text}</button>
      ))}
    </div>
  );
};

export default Genre;
