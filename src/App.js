import Movie from "./components/Movie";
import Search from "./components/Search";
import SelectCategory from "./components/SelectCategory";
import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // fetch popular movies from API
    const getPopularMovies = async () => {
      const POPULAR_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_POPULAR}&page=1`;
      const response = await fetch(POPULAR_API); // async func paused until request completes then response assigned object
      const jsonData = await response.json(); // extract json object from fetch response
      setMovies(jsonData.results);

      // error handling
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
    };

    getPopularMovies();
  }, []); // only called on the first render/mount

  const searchMovie = async () => {
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_SEARCH_API}&query=${searchTerm}`;
    const response = await fetch(SEARCH_API);
    const jsonData = await response.json();
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
    searchTerm && searchMovie();
    e.preventDefault();
  };

  return (
    <>
      <Search
        searchQuery={searchTerm}
        change={handleChange}
        submit={handleSubmit}
      />
      <SelectCategory />
      <div className="movies">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
