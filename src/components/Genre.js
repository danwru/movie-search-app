import React, { useState, useEffect } from "react";

const Genre = (props) => {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    const GENRE_LIST_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIES_API}&language=en-US`;
    getGenreList(GENRE_LIST_API);
  }, []);

  // fetch movie genres and id from API
  const getGenreList = async (API_URL) => {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    setGenreList(jsonData.genres);
    console.log(jsonData.genres);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
  };

  const handleGenre = (e) => {
    const GENRE_API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API}&with_genres=${e.target.value}`;
    props.updateMovies(GENRE_API);
  };

  return (
    <div className="dropdown">
      <button className="link">Browse by Genre</button>
      <div className="dropdown-menu">
        {genreList.length > 0 &&
          genreList.map((genre) => (
            <button
              key={genre.id}
              value={genre.id}
              className="links"
              onClick={handleGenre}
            >
              {genre.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Genre;
