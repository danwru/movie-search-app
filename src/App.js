import Movie from "./components/Movie";
import Search from "./components/Search";
import SelectCategory from "./components/SelectCategory";
import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_SEARCH_API}&query=${searchTerm}`;

  useEffect(() => {
    const POPULAR_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_POPULAR}&page=1`;
    getMoviesReq(POPULAR_API);
  }, []); // only called on the first render/mount

  // fetch popular movies from API
  const getMoviesReq = async (API_URL) => {
    const response = await fetch(API_URL); // async func paused until request completes then response assigned object
    const jsonData = await response.json(); // extract json object from fetch response
    setMovies(jsonData.results);

    // error handling
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    searchTerm && getMoviesReq(SEARCH_API);
    e.preventDefault();
  };

  const handleSelect = (e) => {
    const API_URL = `https://api.themoviedb.org/3/movie/${e.target.value}?api_key=${process.env.REACT_APP_POPULAR}&language=en-US&page=1`;
    getMoviesReq(API_URL);
  };

  return (
    <>
      <Search
        searchQuery={searchTerm}
        change={handleChange}
        submit={handleSubmit}
      />
      <SelectCategory select={handleSelect} />
      <div className="movies">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
